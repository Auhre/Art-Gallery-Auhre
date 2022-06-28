import { useLocation, useNavigate } from "react-router-dom";
function Bought() {
    const location = useLocation()
    const navigate = useNavigate()
    const { image, title, price } = location.state

    function setHome() {
        navigate("../home")
    }

    return(
        <div className="bg-gradient-to-t from-black to-white">
            <div className="w-10/12 h-screen mx-auto bg-gradient-to-t from-black to-white p-8">
                <div className="w-full h-full p-8 bg-gray-50 rounded-2xl flex">
                    <div className="w-1/2 bg-red-900">
                        <h1 className="mt-10 w-full w-10/12 mx-auto font-bold text-5xl tracking-wide">Thank You for Purchasing!</h1>
                        <div className="w-10/12 mx-auto mt-20 rounded-md bg-green-200 p-2">
                            <p className="text-xl tracking-wide">The Card with # 
                                <span className="font-bold"> 'cardNumber'</span> has been deducted with
                                <span className="font-bold"> ${price}</span> on account of
                                <span className="font-bold"> 'cardName'</span> and item is now directed at
                                <span className="font-bold"> 'fullAddress'</span> in name of reciever
                                <span className="font-bold">'fullName'</span> provided by the contact number given 
                                <span className="font-bold">'contactNumber'</span>
                            </p>
                        </div>
                        <div className="w-10/12 mx-auto mt-48">
                            <button onClick={setHome} className="w-3/12 p-2 bg-yellow-300 rounded-md">Go to Home</button>
                        </div>
                    </div>
                    <div className="w-1/2 bg-yellow-300">
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