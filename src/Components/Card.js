import React from 'react';
import HighlightOfImages from '../Data/HighlightOfImages';

function Card(props) {

    const [isFollowed, setIsFollowed] = React.useState(false)
    const [Image, setImage] = React.useState(props.data.image)

    function changeState() {
        setIsFollowed(prevState => !prevState)
    }

    function changeImage() {
        const country = props.data.country
        const imageArray = HighlightOfImages[country]
        // change image contained in the imageArray
        const random_number = Math.floor(Math.random() * imageArray.length)
        setImage(imageArray[random_number].url)
    }

    return(
   
        <div className="relative w-3/12 p-2 explore-art-image-responsive">
            <div onClick={changeState} className="absolute rounded-lg right-16 top-5 bg-white p-2 hover:cursor-pointer hover:bg-gray-300 explore-follow-button">{isFollowed ? "Following" : "Follow +"}</div>
            <img onMouseOver={changeImage} src={Image} className="card-height-responsive h-72 w-10/12 object-cover rounded-xl" alt="art"/>
            <div className="flex mt-1">
                <img src="https://i.pinimg.com/564x/5c/f3/e3/5cf3e335d084aed3da48a26e4babd957.jpg" className="ml-2 mt-1 h-5" alt="rate" />
                <span className="ml-1 mt-1 text-md">{props.data.rating}</span>
                <span className="ml-1 mt-1 mx-1 text-md text-gray-700 hover:underline hover:cursor-pointer">({props.data.rates})</span>
                <span className="inline mt-1 mr-1"> ● </span>
                <span className="mt-1 text-md text-gray-700 hover:underline hover:cursor-pointer">{props.data.country}</span>
            </div>
            <div className="flex w-8/12">
                <span className="mt-1 mx-2 text-md tracking-tighter">{props.data.quote}</span>
            </div>
            <div className="flex mb-20">
                <span className="mt-1 mx-2 text-md font-bold tracking-tighter">From {props.data.pricing}</span>
                <span className="mt-1 text-md tracking-tighter">/ art</span>
            </div>
        </div>
        
    );
}

export default Card;