import Modal from "./Modal";
import React from "react";
function MyProfileHeader({prop}) {
    
    const [openModalFollowings, setOpenModalFollowings] = React.useState(false)
    const [openModalFollowers, setOpenModalFollowers] = React.useState(false)
    localStorage.setItem("profilePicture", prop.image)
    // functions to open modals
    function viewModalFollowings() {
        setOpenModalFollowings(true)
    }
    function viewModalFollowers() {
        setOpenModalFollowers(true)
    }

    return (
        <div className="mt-10 p-10 bg-black rounded-md w-10/12 mx-auto">
            <div className="w-10/12 h-32 bg-white mx-auto p-8 rounded-md mb-16">
                <img src={localStorage.getItem("profilePicture")} className="mx-auto object-cover rounded-full w-40 h-40" alt="artist display"/>
            </div>
            <h3 className="text-center text-2xl tracking-tighter text-white">{prop.username}</h3>
            <h3 className="text-center text-md tracking-tighter text-gray-200"><i>{prop.country}</i></h3>
            <div className="mt-8 mx-auto w-3/12 bg-transparent h-16 text-col-responsive">
                <div className="bg-transparent text-xl float-left w-5/12">
                    <p className="tracking-wide text-white text-center">Followers</p>
                    <p onClick={viewModalFollowers} className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{prop.followers}</p>
                    {openModalFollowers && 
                    (
                        <>
                        <div className="modal-focus rounded-md">
                            <Modal prop={setOpenModalFollowers} limit={parseInt(prop.followers)} title="Followers"/> 
                        </div>
                        </>
                    )} 
                </div>
                <div className="bg-transparent text-xl float-right w-5/12">
                    <p className="tracking-wide text-white text-center">Followings</p>
                    <p onClick={viewModalFollowings} className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{prop.followings}</p>
                    {openModalFollowings && 
                    (
                        <>
                        <div className="modal-focus rounded-md">
                            <Modal prop={setOpenModalFollowings} limit={parseInt(prop.followings)} title="Followings"/> 
                        </div>
                        </>
                    )} 
                </div>
            </div>
        </div>
    )
}
export default MyProfileHeader;