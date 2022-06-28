import { Link } from "react-router-dom";
function LoginOrSignup() {
    return(
        <div className="w-screen h-screen p-12 bg-black">
            <div className="h-full w-4/12 rounded-lg shadow-xl mx-auto bg-gradient-to-l from-black to-white p-3">
            <div className="w-full mt-28">
                <img 
                    src="https://i.pinimg.com/564x/ed/68/cc/ed68ccbc10ed9bcf5b0530eca62b9f4e.jpg"
                    alt="logo"
                    className="rounded-full bg-transparent w-auto h-14 mx-auto"
                />
                <header className="text-center w-full text-3xl font-bold tracking-tighter">Auhre Art Gallery</header>
            </div>
            <div class="flex flex-col items-center justify-center mt-16">
                <Link to="/logIn" className="bg-black text-white text-center w-5/12 h-auto p-2 mt-6 float-right rounded-3xl">Log In</Link>
                <Link to="/signUp" className="bg-black text-white text-center w-5/12 h-auto p-2 mt-6 float-right rounded-3xl">Sign Up</Link>
            </div>
            </div>
        </div>
    )
}
export default LoginOrSignup;