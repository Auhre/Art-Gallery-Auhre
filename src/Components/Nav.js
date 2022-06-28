import { Link,  Outlet } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";
function Nav() {
    const profileId = useContext(UserContext)
    return(
    <header>
        <nav className="w-full bg-black h-16 p-3 flex">
            <img 
                src="https://i.pinimg.com/564x/ed/68/cc/ed68ccbc10ed9bcf5b0530eca62b9f4e.jpg"
                alt="logo"
                className="rounded-md bg-transparent h-10"
            />
            <h2 className="mt-2 text-gray-300 mx-2 bg-transparent w-8/12 tracking-tighter">Auhre <p className="inline font-bold text-red-200 ml-1">Art Gallery</p></h2>
            <div className="w-full justify-end flex p-2">
                <Link to="/home" className="text-white mx-2">Home</Link>
                <h2 className="text-white">|</h2> 
                <Link to={`/profile/:${profileId}`} className="text-white mx-2">Profile</Link>
            </div>
        </nav>
        <Outlet />
    </header>
    );
}

export default Nav;