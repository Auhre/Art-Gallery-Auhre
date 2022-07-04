import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import axios from "axios";

function UploadArtModal({prop, length}) {
    const minRows = 4
    const [image, setImage] = React.useState("https://i.pinimg.com/736x/e2/6d/87/e26d873ee68fbcd9dc1c40d8b0c6b3b4.jpg")
    const [rows, setRows] = React.useState(minRows)
    const [value, setValue] = React.useState("")
    const profileId = useContext(UserContext)
    const [artData, setArtData] = React.useState({
        title: "",
        price: "",
        userId: profileId,
        image: "",
        id: ""
    })
    const url ='http://localhost:8080/artworks'
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    
    //updates text area row length
    React.useEffect(() => {
        const rowlen = value.split("\n");
    
        if (rowlen.length > minRows) {
          setRows(rowlen.length);
        }
        
      }, [value]);

    function closeModal(){
        prop(false)
    }
    function handleChange(event) {
        setValue(event.target.value)
        setArtData(prevData => {
            return{
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
       
    }
    function handleSubmit(event){
        event.preventDefault()
        artData.id = length
        axios.post(url, artData, axiosConfig).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
        closeModal()
    }
    //change Display Picture event and updates state Data
    async function changeDP(event){
        setImage(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        //converts img to base64 to prevent lost of image data upon page refresh or reload
        const imgBase64 = await base64Converter(event.target.files[0])
        setArtData(prevData => {
            return{
                ...prevData,
                [event.target.name]: imgBase64
            }
        })

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

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-4/12 h-96 mx-auto my-32 shadow-2xl bg-white rounded-xl modal-responsive">
                <div className="flex">
                    <h2 className="w-11/12 h-auto p-3 mx-3 text-start font-bold text-xl">Art Info</h2>
                    <button onClick={closeModal} className="w-1/12 h-4 rounded-xl text-xl">x</button>
                </div>
                <div className="w-10/12 h-4/5 mx-auto flex">
                    <div className="w-6/12">
                        <img src={image} className="mt-3 object-cover w-full h-64 mx-auto rounded-xl" alt="art"/>  
                        <input type="file" name="image" onChange={changeDP} className="mx-auto w-full mt-2" required/>   
                    </div>
                    <div className="w-6/12">
                        <div className="mx-auto w-10/12 custom-height mt-6">
                            <textarea 
                                placeholder="Art Title" 
                                name="title"
                                className="mt-5 mx-auto w-full h-10 p-2 hide-scroll-bar rounded-md bg-gray-200" rows={rows} 
                                onChange={handleChange} 
                                required/>
                            <input 
                                placeholder="Price" 
                                name="price" 
                                className="mt-3 rounded-md p-2 h-7 w-4/12 bg-gray-200" 
                                onChange={handleChange}
                                required/> USD
                            <button className="p-2 w-10/12 h-auto mt-24 float-right bg-yellow-300 hover:bg-yellow-400 rounded-md">Confirm Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default UploadArtModal;
