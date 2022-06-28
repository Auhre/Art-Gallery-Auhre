import React from 'react';
import { useLocation } from "react-router-dom";

function TheirProfileHeader() {
    const location = useLocation();
    const { image, name, country, status, followers, followings, isFollowing } = location.state;
    const [isFollowed, setIsFollowed] = React.useState(isFollowing)

    function changeState() {
        setIsFollowed(prevState => !prevState)
    }
    return (
        <div class="relative mt-10 p-8 bg-gray-800 rounded-md w-10/12 mx-auto">
            <div class="w-10/12 h-32 bg-white mx-auto p-8 rounded-md mb-16">
                <img src={image} class="mx-auto object-cover rounded-full w-40 h-40" alt="artist display image"/>
            </div>
            <h3 class="text-center text-2xl tracking-tighter text-white">{name}</h3>
            <h3 class="text-center text-md tracking-tighter text-gray-200"><i>{country}</i></h3>
            <h3 class="text-center text-md text-green-400">{status}</h3>
            <div class="mt-6 mx-auto w-3/12 bg-transparent h-16">
                <div class="bg-transparent text-xl float-left w-5/12">
                    <p class="tracking-wide text-white text-center">Followers</p>
                    <p class="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{followers}</p>
                </div>
                <div class="bg-transparent text-xl float-right w-5/12">
                    <p class="tracking-wide text-white text-center">Followings</p>
                    <p class="text-center tracking-wide font-semibold hover:cursor-pointer text-white">{followings}</p>
                </div>
            </div>
            <div onClick={changeState} class="mt-6 w-2/12 text-center text-xl font-semibold mx-auto rounded-lg bg-white text-black p-3 hover:cursor-pointer hover:bg-gray-300">{isFollowed ? "Following" : "Follow +"}</div>
        </div>
    );
}

export default TheirProfileHeader;