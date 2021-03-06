import React from 'react';
import { Link } from "react-router-dom";

function TopArtists(props) {
    const [isFollowed, setIsFollowed] = React.useState(false)

    function changeState() {
        setIsFollowed(prevState => !prevState)
    }
    return (
        <div className="relative mt-10 bg-black p-3 rounded-md w-3/12 mx-auto top-artist-cards">
            <div className="w-full h-32 bg-white mx-auto p-8 rounded-md mb-16">
                <img src={props.data.image} className="mx-auto object-cover rounded-full w-40 h-40" alt="artist display"/>
            </div>
            <h3 className="text-center text-2xl tracking-tighter text-white">{props.data.name}</h3>
            <h3 className="text-center text-md text-green-400">{props.data.status}</h3>
            <h2 className="text-center text-md mb-2 text-white"><i className="hover:cursor-pointer text-white">{props.data.artworks} artworks</i></h2>
            <div className="mt-4 mx-auto w-9/12 bg-transparent h-20">
                <div className="bg-transparent text-lg float-left w-6/12">
                    <p className="tracking-wide text-white text-center">Followers</p>
                    <p className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{props.data.followers}</p>
                </div>
                <div className="bg-transparent text-lg float-right w-6/12">
                    <p className="tracking-wide text-white text-center">Followings</p>
                    <p className="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{props.data.followings}</p>
                </div>
            </div>
            <div className="mt-2 w-full text-center mx-auto bg-transparent">
                <Link to="/theirProfile" state={{image: props.data.image, id: props.data.id, name: props.data.name, country: props.data.country, status: props.data.status, followers: props.data.followers, followings: props.data.followings, artworks: props.data.artworks, isFollowing: isFollowed}} className="h-full p-2 px-5 rounded-lg bg-white hover:cursor-pointer hover:bg-gray-300">Visit Profile</Link>
            </div>
            <div onClick={changeState} className="mt-4 w-4/12 text-center mx-auto rounded-lg bg-white text-black p-2 hover:cursor-pointer hover:bg-gray-300">{isFollowed ? "Following" : "Follow +"}</div>
        </div>
    )
}

export default TopArtists;