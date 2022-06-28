import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Buy() {
    const location = useLocation()
    const navigate = useNavigate()
    const { image, title,  price} = location.state
    const [buyButton, setBuyButton] = React.useState(true)
    const [buyHistory, setBuyHistory] = React.useState([])
    const [formData, setFormData] = React.useState({
        firstName: "",
        middleName: "",
        lastName: "",
        emailAddress: "",
        contactNumber: "",
        cardNumber: "",
        cardName: "",
        expirationDate: "",
        cvc: "",
        country: "",
        province: "",
        city: "",
        town: "",
        street: "",
        lotNumber: "",
        zipCode: "",
        userId: "",
        buyId: ""
    })
    const url='http://localhost:8080/buy'

    //header to pass on axios post
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

    React.useEffect(() => {
        axios.get(url).then(
            res => {
                setBuyHistory(res.data)
            })
    });

    function prevPage() {
        navigate(-1)
    }
    function transactionHandler() {
        setBuyButton(!buyButton)
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        formData.buyId = buyHistory.length+1
        formData.userId = localStorage.getItem("profileId")
        //pass state to the link
        navigate("../bought", { state: {image: image, title: title, price: price, id: formData.buyId } })
        //post to the api
        axios.post(url, formData, axiosConfig).then(res=>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
       
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="w-full h-full flex to-column-responsive">
                <div className="w-4/12 section-buy-responsive h-max p-4 bg-gradient-to-b from-black to-white">
                    <img src={image} className="mt-12 w-8/12 custom-height mx-auto rounded-3xl" alt="art" />
                    <p className="w-8/12 flex-none mx-auto h-auto text-gray-800 text-center font-semibold mt-2 tracking-tight text-3xl">{title} </p>
                    <div className="w-full text-center mt-1">
                        <i className="font-bold tracking-tighter text-2xl mb-14 text-red-600">${price}</i>
                    </div>
                </div>
                <div className="w-4/12 h-max p-10 mt-auto mb-auto section-buy-responsive">
                    <div className="flex">
                        <h3 className="mx-4 text-2xl font-bold mt-4 mb-6 tracking-wider">Personal Information</h3>
                        <img src="https://i.pinimg.com/564x/5a/1a/1e/5a1a1ed3d7240ceacfd8114b2271b539.jpg" className="h-auto w-2/12 rounded-full" alt="personal information icon"/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.firstName} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                        onChange={handleChange}
                            type="text" 
                            name="middleName" 
                            placeholder="Middle Name" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.middleName}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.lastName}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="email" 
                            name="emailAddress" 
                            placeholder="Email Address" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.emailAddress} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="contactNumber" 
                            placeholder="Contact Number" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.contactNumber}
                        required/>
                    </div>
                    <div className="flex mt-28">
                        <h3 className="mx-4 text-2xl font-bold mt-4 mb-6 tracking-wider">Credit Card | Visa</h3>
                        <img src="https://i.pinimg.com/564x/c6/95/3b/c6953bdaf65947622b2ea63733197a07.jpg" className="h-auto w-2/12 rounded-md" alt="creadit card icon"/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="cardNumber" 
                            placeholder="000-0000-000" 
                            className="w-7/12 h-7 p-2 text-sm text-smtracking-tighter rounded-md bg-gray-200"
                            value={formData.cardNumber} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="cardName" 
                            placeholder="Card Name" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.cardName}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="month" 
                            name="expirationDate" 
                            placeholder="mm/yyyy" 
                            className="w-4/12 h-7 p-2 text-center text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.expirationDate}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2 mb-30">
                        <input 
                            onChange={handleChange}
                            type="password" 
                            name="cvc" 
                            placeholder="cvc" 
                            className="w-1/12 h-7 p-2 text-center text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.cvc}
                        required/>
                    </div>
                </div>
                <div className="w-4/12 h-max p-10 mt-auto mb-auto section-buy-responsive">
                    <div className="flex">
                        <h3 className="mx-4 text-2xl font-bold mt-4 mb-6 tracking-wider">Shipping Address</h3>
                        <img src="https://i.pinimg.com/564x/0c/2a/03/0c2a030c2d2188b0a67a54249ae6b79c.jpg" className="h-auto w-2/12 rounded-md" alt="shipping icon"/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="country" 
                            placeholder="Country" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.country} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="province" 
                            placeholder="Province"  
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.province}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="city" 
                            placeholder="City"  
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.city}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input
                            onChange={handleChange}
                            type="text" 
                            name="town" 
                            placeholder="Town" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.town} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="street" 
                            placeholder="Street" 
                            className="w-7/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.street} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="lotNumber" 
                            placeholder="Lot Number" 
                            className="w-7/12 h-7 p-2 text-sm text-sm tracking-tighter rounded-md bg-gray-200"
                            value={formData.lotNumber} 
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-2">
                        <input
                            onChange={handleChange} 
                            type="text" 
                            name="zipCode" 
                            placeholder="Zip Code"  
                            className="w-2/12 h-7 p-2 text-sm tracking-tighter rounded-md bg-gray-200" 
                            value={formData.zipCode}
                        required/>
                    </div>
                    <div className="mx-4 w-full mt-6 mb-auto">
                        <label>
                            <input onClick={transactionHandler} type="checkbox" className="mx-1 check-box"/>
                            I confirm that all the information are true and correct
                        </label>
                    </div>
                    <div className="w-11/12 mx-auto mt-8 h-24 bg-gray-100 rounded-md py-4 px-8">
                        <h1 className="text-md font-bold">Inclusion</h1>
                        <p className="mx-4 text-xs">A clear software copy of the art</p>
                        <p className="mx-4 text-xs">A printed material over a metalic frame with a signature</p>
                    </div>
                    <div className="h-11 w-full mt-8">
                        <div className="w-5/12 h-full float-right flex mx-2">
                            <button type="button" onClick={prevPage} className="w-auto bg-yellow-300 px-6 rounded-md mr-1">Cancel</button>
                            <button type="submit" 
                                    className={buyButton ? "w-auto bg-yellow-100 px-6 rounded-md mr-1 my-auto p-2.5" : "w-auto bg-yellow-300 px-6 rounded-md mr-1 my-auto p-2.5"} 
                                    disabled={buyButton}>Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Buy;