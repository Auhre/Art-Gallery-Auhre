import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [image, setImage] = React.useState("https://i.pinimg.com/564x/9b/a7/04/9ba70492657a0b228e18755dd183cf99.jpg")
    const [passwordMatch, setPasswordMatch] = React.useState(true)
    const [loadData, setLoadData] = React.useState([])
    const [idCount, setIdCount] = React.useState(loadData.length+1)
    const [usernameExist, setUsernameExist] = React.useState(false)
    const [signData, setSignData] = React.useState({
        username: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        followers: "0",
        followings: "0",
        id: "",
        image: ""
    })
    let navigate = useNavigate();
    const url='http://localhost:8080/accounts'
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
    
    React.useEffect(() => {
        axios.get(url).then(res => {
            setLoadData(res.data)
        })
    }, [loadData]);

    function handleChange(event) {
       
        setIdCount(loadData.length+1)
        setSignData(prevData => {
            return{
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
        
    }
    function handleSubmit(event) {
        
        event.preventDefault()
        console.log(signData)
        
        // check if username already exist in server
        let isAvailable = loadData.some(user => user.username === signData.username)
        console.log(isAvailable)
        setUsernameExist(isAvailable)

        // check if password do not match the confirm password
        if(signData.password !== signData.confirmPassword){
            setPasswordMatch(false)
        }
        else {
            if (isAvailable === false) {
                setPasswordMatch(true)
                if (loadData === "[]"){
                    signData.id = 1   //if no data in server initialize ID to 1
                }
                else {
                    setIdCount(prevState => prevState+1)
                    signData.id = idCount
                }
                axios.post(url, signData, axiosConfig).then(
                    res => {
                        console.log(res)
                    }).catch(
                    err => {
                        console.log(err)
                    })
                navigate("../logIn")   
            }
        }
    }

    async function changeDP(event){
        setImage(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        //converts img to base64 to prevent lost of image data upon page refresh or reload
        const imgBase64 = await base64Converter(event.target.files[0])
        setSignData(prevData => {
            return{
                ...prevData,
                [event.target.name]: imgBase64
            }
        })
    }

    function base64Converter(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    
    return(
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
                    <header className="text-center w-full text-xl font-semibold tracking-tight mb-2"><i>Sign Up</i></header>
                    <p className="text-xs text-center h-2 text-sm mb-2 text-red-900 font-bold">{usernameExist? "Username Already Exist" : ""}</p>
                    <p className="text-center h-2 text-xs text-red-900 font-bold">{passwordMatch ? "" : "Password Doesn't Match!"}</p>
                    <div className="flex flex-col items-center justify-center mt-3">
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
                        <input 
                            onChange={handleChange}
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirmPassword"
                            className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            required />
                        <input 
                            onChange={handleChange}
                            type="country" 
                            placeholder="Country" 
                            name="country"
                            className="mt-2 w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            required />
                        <div className="flex items-center mt-2 text-sm space-x-10"> 
                            <input  onChange={handleChange} type="radio" name="gender" value="Male"/> Male
                            <input  onChange={handleChange} type="radio" name="gender" value="Female"/> Female
                        </div>
                        <img src={image} className="mt-4 mb-1 object-cover rounded-full w-40 h-40" alt="dp" />
                        <div className="flex flex-col items-center justify-center p-2">
                            <input type="file" name="image" onChange={changeDP} className="mx-auto w-9/12" required/>
                        </div>
                    </div>
                    <button type="submit" className="bg-black text-white w-5/12 h-auto p-2 mt-6 float-right rounded-md signup-button-responsive">Create Account</button>
                </div>
            </div>
        </form>
    )
}
export default SignUp;