import React from 'react';
import Modal from "./Modal";
import { useLocation } from "react-router-dom";

function TheirProfileHeader() {
    const location = useLocation();
    const { image, name, country, status, followers, followings, isFollowing } = location.state;
    const [isFollowed, setIsFollowed] = React.useState(isFollowing)
    const [openModalFollowings, setOpenModalFollowings] = React.useState(false)
    const [openModalFollowers, setOpenModalFollowers] = React.useState(false)
    // functions to show modal
    function viewModalFollowings() {
        setOpenModalFollowings(true)
    }

    function viewModalFollowers() {
        setOpenModalFollowers(true)
    }

    function changeState() {
        setIsFollowed(prevState => !prevState)
    }
    return (
        <div className="relative mt-10 p-10 bg-black rounded-md w-10/12 mx-auto">
            <div className="w-10/12 h-32 bg-white mx-auto p-8 rounded-md mb-16">
                <img src={image} className="mx-auto object-cover rounded-full w-40 h-40" alt="artist display"/>
            </div>
            <h3 className="text-center text-2xl tracking-tighter text-white">{name}</h3>
            <h3 className="text-center text-md tracking-tighter text-gray-200"><i>{country}</i></h3>
            <h3 className="text-center text-md text-green-400">{status}</h3>
            <div className="mt-8 mx-auto w-3/12 bg-transparent h-16 text-col-responsive">
                <div className="bg-transparent text-xl float-left w-5/12">
                    <p className="tracking-wide text-white text-center">Followers</p>
                    <p onClick={viewModalFollowers} className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{followers}</p>
                    {openModalFollowers && 
                    (
                        <>
                        <div className="modal-focus rounded-md">
                            <Modal prop={setOpenModalFollowers} limit={parseInt(followers)} title="Followers"/> 
                        </div>
                        </>
                    )} 
                </div>
                <div className="bg-transparent text-xl float-right w-5/12">
                    <p className="tracking-wide text-white text-center">Followings</p>
                    <p onClick={viewModalFollowings} className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{followings}</p>
                    {openModalFollowings && 
                    (
                        <>
                        <div className="modal-focus rounded-md">
                            <Modal prop={setOpenModalFollowings} limit={parseInt(followings)} title="Followings"/> 
                        </div>
                        </>
                    )} 
                </div>
            </div>
            <div onClick={changeState} className="mt-6 w-2/12 text-center text-xl font-semibold mx-auto rounded-lg bg-white text-black p-3 hover:cursor-pointer hover:bg-gray-300 profile-follow-button-responsive">{isFollowed ? "Following" : "Follow +"}</div>
        </div>
    );
}

export default TheirProfileHeader;