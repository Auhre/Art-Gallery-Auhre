import React from "react";
function StarRating() {
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    return (
        <div>
          {[...Array(5)].map((star, index) => {
             index += 1;
             return (
             <button type="rating-button" key={index} class={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
                    <span class="mx-1">&#9733;</span>
             </button>
            );
            })}
        </div>
    )
}
export default StarRating;