import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
function Bought() {
    const location = useLocation()
    const navigate = useNavigate()
    const { image, title, price, id } = location.state
    const [buyHistory, setBuyHistory] = React.useState([])
    const url='http://localhost:8080/buy'
    const [boughtData, setBoughtData] = React.useState({})

    React.useEffect(() => {
        //load data from api to find and get matching buy id upon iteration checking
        axios.get(url).then(
            res => {
                setBuyHistory(res.data)
                buyHistory.find(buy => {
                    if(buy.buyId === id.toString()) {
                        setBoughtData(buy)
                    }
                    return ''
                })
            })
    });

    function setHome() {
        navigate("../home")
    }

    return(
        <div className="bg-gradient-to-t from-black to-white">
            <div className="w-10/12 h-screen mx-auto bg-gradient-to-t from-black to-white p-8 adjust-container">
                <div className="w-full h-full p-8 bg-gray-50 rounded-2xl flex to-column-responsive adjust-container">
                    <div className="w-1/2 bg-stone-100 rounded-xl adjust-subcontainer">
                        <h1 className="mt-10 w-10/12 mx-auto font-bold text-5xl tracking-wide">Thank You for Purchasing!</h1>
                        <div className="w-10/12 mx-auto mt-20 rounded-md p-2">
                            <p className="text-xl tracking-wide">The Card with 
                                <span className="font-bold"> # {boughtData.cardNumber} </span> has been deducted with
                                <span className="font-bold"> ${price}</span> on account of
                                <span className="font-bold"> {boughtData.cardName}</span> and item is now directed at
                                <span className="font-bold"> {boughtData.lotNumber}, {boughtData.street}, {boughtData.town}, {boughtData.city}, {boughtData.province}, {boughtData.country}
                                </span> in name of receiver
                                <span className="font-bold"> {boughtData.firstName} {boughtData.middleName} {boughtData.lastName}</span> provided by the contact number given 
                                <span className="font-bold"> {boughtData.contactNumber}</span>
                            </p>
                        </div>
                        <div className="w-10/12 mx-auto mt-40 home-button-responsive">
                            <button onClick={setHome} className="w-3/12 p-2 bg-yellow-300 rounded-md mb-2 top-display-responsive">Go to Home</button>
                        </div>
                    </div>
                    <div className="w-1/2 adjust-subcontainer">
                        <img src={image} className="mt-10 mb-2 w-7/12 custom-height mx-auto rounded-xl shadow-3xl" alt="bought"/>
                        <div className="w-7/12 mx-auto">
                            <h2 className="text-center text-3xl font-bold tracking-wider">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bought;