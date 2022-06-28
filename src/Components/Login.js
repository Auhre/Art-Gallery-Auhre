import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login({profileId}) {
    const [loadData, setLoadData] = React.useState([])
    const [logStatus, setLogStatus] = React.useState('')
    let navigate = useNavigate();
    const [loginData, setLoginData] = React.useState({
        username: "",
        password: "",
        id: ""
    })
    const url='http://localhost:8080/accounts'

    //load data upon component mound and update
    React.useEffect(() => {
        axios.get(url).then(res => {
            setLoadData(res.data)
        })
    }, [loadData]);
    //change the state data upon user typing
    function handleChange(event) {
        setLoginData(prevData => {
            return{
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // find if account exist then logged in if password matched
        let accountFound = loadData.some(user => {
            if (user.username === loginData.username) {
                loginData.id = user.id
                if (user.password !== loginData.password) {
                    setLogStatus('Password Incorrect')
                }
                else {
                    console.log('logging in')
                    setLogStatus('')
                    navigate("../home")
                    profileId(loginData.id)
                    console.log(loginData.id)
                }
            }
            else {
                setLogStatus('Username Doesnt Exist')
            }
           
        return (user.username === loginData.username)
        })
        console.log(accountFound)
        console.log(loginData)

    }

    return (
        <form onSubmit={handleSubmit}>
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
                    <p className="text-xs text-center h-2 text-sm mb-2 text-red-900 font-bold mt-28">{logStatus}</p>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            required />
                        <input 
                            onChange={handleChange}
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            required />
                        <button type="submit" className="bg-black text-white w-5/12 h-auto p-2 mt-6 rounded-md top-display-responsive">Log In</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Login;