import React from 'react';
import TextArea from "./TextArea";

function HelpUs() {
    const [thankNotice, setThankNotice] = React.useState(false)
    const [emoji, setEmoji] = React.useState("https://i.pinimg.com/564x/58/3f/6f/583f6f25c84f629431faa9fe4aed51db.jpg")

    function appreciateMessage() {
        setThankNotice(true)
        setEmoji("https://i.pinimg.com/564x/45/c1/ae/45c1ae62e42f3404baa67921c08192f3.jpg")
    }
    return (
        <div class="mt-80 mb-2">
            <div class="flex">
            <h3 class="ml-96 mb-4 font-bold text-3xl tracking-tigther">{thankNotice ? "Thank You!" : "Please help us improve by leaving a comment"}</h3>
            <img src={emoji} class="mx-2 mt-2 w-6 h-6"/>
            </div>
            <div class="flex mx-auto relative w-full bg h-56 mb-1 rounded-xl p-2">
                <TextArea minRows={10} />
                <button onClick={appreciateMessage} class="bottom-12 right-96 absolute rounded-md h-9 bg-gray-300 w-1/12 hover:bg-black hover:text-white">Send</button>
            </div>
        </div>
    );
}


export default HelpUs;