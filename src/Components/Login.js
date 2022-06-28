function Login() {
    return (
        <form>
        <div className="w-screen h-screen p-12 bg-black">
            <div className="h-full w-4/12 rounded-lg shadow-xl mx-auto bg-gradient-to-l from-black to-white p-3">
            <div className="w-full">
                <img 
                    src="https://i.pinimg.com/564x/ed/68/cc/ed68ccbc10ed9bcf5b0530eca62b9f4e.jpg"
                    alt="logo"
                    className="rounded-full bg-transparent w-auto h-14 mx-auto"
                />
                <header className="text-center w-full text-3xl font-bold tracking-tighter">Auhre Art Gallery</header>
            </div>
                <header className="text-center w-full text-xl font-semibold tracking-tight mb-2"><i>Log In</i></header>
                <p className="text-xs text-center h-2 text-sm mb-2 text-red-900 font-bold mt-28">Username dont exist || Wrong Password</p>
                
                <div className="flex flex-col items-center justify-center mt-2">
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
                    <button type="submit" className="bg-black text-white w-5/12 h-auto p-2 mt-6 rounded-md">Log In</button>
                </div>
            </div>
        </div>
        </form>
    )
}
export default Login;