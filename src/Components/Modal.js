import React from "react";

function Modal({prop, limit, title}) {
    // populate dummy followers based on aurguments
    let arr = Array.apply(null, {length: limit}).map(Number.call, Number);

    // alters the state prop 
    function closeModal(){
        prop(false)
    }

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
      }); 

    return(
    <div className="w-4/12 h-96 mx-auto my-32 shadow-2xl bg-white rounded-xl modal-responsive">
        <div className="flex">
            <div className="w-11/12 h-auto p-3 mx-3 text-start font-bold text-xl">{title}</div>
            <button onClick={closeModal} className="w-1/12 h-4 rounded-xl">x</button>
        </div>
        <div className="w-10/12 mx-auto h-72 overflow-y-scroll hide-scroll-bar p-2">
            {arr.map(item => {
                return (
                <div className="flex h-10 p-2 rounded-md mb-2 bg-gray-100">
                    <img src="https://i.pinimg.com/564x/2c/bc/5e/2cbc5e4cdd1ada819bcad0ac9ada655d.jpg" className="w-6 h-6 rounded-full" alt="dummy profile"/>
                    <div className="ml-2 flex-none justify-center h-12 w-full text-sm">{title} #{item+1}</div>
                </div>
                ) 
            })}
        </div>
    </div>
    )
}
export default Modal;