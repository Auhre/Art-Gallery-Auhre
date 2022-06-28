import React from 'react';

function MyArtworks(props){
    
    return(
            <div className="relative w-2/12 p-2 flex-none h-auto cards">
                <img src={props.data.image} className="mx-auto h-72 w-10/12 object-cover rounded-xl" alt="artwork"/>
                <div className="mx-10 mt-1">
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
export default MyArtworks;