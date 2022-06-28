import React from "react";
function SignUp() {
    const [image, setImage] = React.useState("https://i.pinimg.com/564x/9b/a7/04/9ba70492657a0b228e18755dd183cf99.jpg")

    function changeDP(event){
        setImage(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
    }
    
    return(
        <div className="w-screen h-screen bg-red-900 p-12">
            <div className="h-full w-4/12 rounded-lg shadow-md mx-auto bg-yellow-300 p-3">
            <div className="w-full">
                <img 
                    src="https://i.pinimg.com/564x/ed/68/cc/ed68ccbc10ed9bcf5b0530eca62b9f4e.jpg"
                    alt="logo"
                    className="rounded-full bg-transparent w-auto h-14 mx-auto"
                />
                <header className="text-center w-full text-3xl font-bold tracking-tighter">Auhre Art Gallery</header>
            </div>
                <header className="text-center w-full text-xl font-semibold tracking-tight"><i>Sign Up</i></header>
                <div className="flex flex-col items-center justify-center mt-5">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username"
                        className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                        required />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                        required />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        name="confirmPassword"
                        className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                        required />
                    <input 
                        type="country" 
                        placeholder="Country" 
                        name="country"
                        className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                        required />
                    <div className="flex items-center mt-2 text-sm space-x-10"> 
                        <input type="radio" name="gender" /> Male
                        <input type="radio" name="gender" /> Female
                    </div>
                    <img src={image} className="mt-3 mb-1 object-cover rounded-full w-40 h-40" alt="display picture" />
                    <div className="flex flex-col items-center justify-center p-2">
                        <input type="file" name="photo" onChange={changeDP} className="mx-auto w-9/12" />
                    </div>
                </div>
                <button className="bg-red-900 w-5/12 h-auto p-2 mt-1 float-right rounded-md">Create Account</button>
            </div>
        </div>
    )
}
export default SignUp;