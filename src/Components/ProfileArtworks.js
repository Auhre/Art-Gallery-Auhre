import React from 'react';
import StarRating from './StarRating';
import { Link } from "react-router-dom";

function ProfileArtworks(props){
    const [isHover, setIsHover] = React.useState(false)
    //functions to reveal and release button upon mouse interaction
    function revealButton() {
        setIsHover(prevState => !prevState)
    }
    function releaseButton() {
        setIsHover(prevState => !prevState)
    }
    return(
            <div className="relative w-2/12 p-2 flex-none h-auto cards">
                {isHover ? <Link to="/buy" state={{image: props.data.image, title: props.data.title, price: props.data.price}} onMouseEnter={revealButton} onMouseLeave={releaseButton} className="absolute rounded-lg right-10 top-5 bg-white p-2 px-4 hover:cursor-pointer hover:bg-gray-300">
                    Buy</Link> : ""}
                <img onMouseEnter={revealButton} onMouseLeave={releaseButton} src={props.data.image} className="mx-auto h-72 w-10/12 object-cover rounded-xl" alt="artwork"/>
                <div className="mx-10 mt-1">
                    <StarRating />
                </div>
                <div className="w-10/12 mx-auto h-auto flex">
                    <span className="mx-2 text-md tracking-tighter">{props.data.title}</span>
                </div>
                <div className="relative w-10/12 mx-auto h-6">
                    <span className="mx-2 text-md font-bold tracking-tighter">${props.data.price}</span>
                </div>
            </div>
    )
}
export default ProfileArtworks;