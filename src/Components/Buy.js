function Buy() {
    return(
        <div class="w-full h-full flex">
            <div class="w-4/12 h-full bg-yellow-200 p-4">
                <img src="https://i.pinimg.com/564x/38/9c/9b/389c9be77f21bf60e78806e3bf9b7677.jpg" class="w-8/12 h-auto mx-auto rounded-md" />
                <p class="w-full text-center font-bold mt-1 tracking-wide text-2xl">Ashe of the North</p>
                <p class="w-full text-center font-bold tracking-tight text-xl">$39</p>
                <p class="w-full text-center font-medium tracking-tighter text-sm mt-1"><i>jejeRunemon</i></p>
                <div class="w-10/12 mx-auto mt-6 h-24">
                    <h1 class="text-sm">Inclusion</h1>
                    <p class="text-sm">A clear software copy of the art</p>
                    <p class="text-sm">A printed material over a metalic frame with a signature</p>
                </div>
            </div>
            <div class="bg-green-200 w-4/12 h-full p-10">
                <h3 class="mx-4 text-2xl font-bold mt-4 mb-6 tracking-wider">Personal Information</h3>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">First Name</p>
                    <input type="text" name="firstName" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Middle Name</p>
                    <input type="text" name="middleName" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Last Name</p>
                    <input type="text" name="lastName" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Email Address</p>
                    <input type="text" name="emailAddress" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>

                <h3 class="mx-4 text-2xl font-bold mt-16 mb-6 tracking-wider">Credit Card | Visa</h3>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Card Number</p>
                    <input type="text" name="cardNumber" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Card Name</p>
                    <input type="text" name="cardName" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Expiration Date</p>
                    <input type="text" name="expirationDate" class="w-3/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">CVC</p>
                    <input type="text" name="cvc" class="w-2/12 h-7 px-6 tracking-tighter rounded-md" required/>
                </div>
            
            </div>

            <div class="bg-blue-400 w-4/12 h-full p-10">
            <h3 class="mx-4 text-2xl font-bold mt-4 mb-6 tracking-wider">Shipping Address</h3>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Country</p>
                    <input type="text" name="country" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Province</p>
                    <input type="text" name="province" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">City</p>
                    <input type="text" name="city" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Town</p>
                    <input type="text" name="town" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Street</p>
                    <input type="text" name="street" class="w-7/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
                <div class="mx-4 w-full mt-2">
                    <p class="tracking-tighter font-bold">Zip Code</p>
                    <input type="text" name="zipCode" class="w-2/12 h-7 p-2 tracking-tighter rounded-md" required/>
                </div>
            </div>
        </div>
    )
}
export default Buy;