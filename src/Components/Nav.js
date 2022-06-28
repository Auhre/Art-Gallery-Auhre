import { Link,  Outlet } from "react-router-dom";

function Nav() {
    return(
    <header>
        <nav class="w-full bg-black h-16 p-3 flex">
            <img 
                src="https://i.pinimg.com/564x/ed/68/cc/ed68ccbc10ed9bcf5b0530eca62b9f4e.jpg"
                alt="logo"
                class="rounded-md bg-transparent h-10"
            />
            <h2 class="mt-2 text-gray-300 mx-2 bg-transparent w-4/12 tracking-tighter">Auhre <h2 class="inline font-bold text-red-200 ml-1">Art Gallery</h2></h2>
            <div class="w-full justify-end flex p-2">
                <Link to="/" end class="text-white mx-2">Home</Link>
                <h2 class="text-white">|</h2> 
                <Link to="/profile" end class="text-white mx-2">Profile</Link>
            </div>
        </nav>
        <Outlet />
    </header>
    );
}

export default Nav;