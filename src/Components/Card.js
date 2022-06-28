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
        const random_number = Math.floor(Math.random() * imageArray.length)
        setImage(imageArray[random_number].url)
    }

    return(
        <div class="relative w-3/12 p-2">
            <div onClick={changeState} class="absolute rounded-lg right-16 top-5 bg-white p-2 hover:cursor-pointer hover:bg-gray-300">{isFollowed ? "Following" : "Follow +"}</div>
            <img onMouseOver={changeImage} src={Image} class="h-72 w-10/12 object-cover rounded-xl" alt="art photo"/>
            <div class="flex mt-1">
                <img src="https://i.pinimg.com/564x/5c/f3/e3/5cf3e335d084aed3da48a26e4babd957.jpg" class="ml-2 mt-1 h-5" alt="rate" />
                <span class="ml-1 mt-1 text-md">{props.data.rating}</span>
                <span class="ml-1 mt-1 mx-1 text-md text-gray-700 hover:underline hover:cursor-pointer">({props.data.rates})</span>
                <span class="inline mt-1 mr-1"> ● </span>
                <span class="mt-1 text-md text-gray-700 hover:underline hover:cursor-pointer">{props.data.country}</span>
            </div>
            <div class="flex w-8/12">
                <span class="mt-1 mx-2 text-md tracking-tighter">{props.data.quote}</span>
            </div>
            <div class="flex mb-20">
                <span class="mt-1 mx-2 text-md font-bold tracking-tighter">From {props.data.pricing}</span>
                <span class="mt-1 text-md tracking-tighter">/ art</span>
            </div>
        </div>
    );
}

export default Card;