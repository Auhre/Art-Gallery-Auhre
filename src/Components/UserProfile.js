import UserContext from "./UserContext";
import React from "react";
import MyProfileHeader from "./MyProfileHeader";
import YourArtworks from "./YourArtworks";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";
function UserProfile() {
    let navigate = useNavigate();
    const profileId = useContext(UserContext)
    localStorage.setItem("profileId", profileId)
    const [profileData, setProfileData] = React.useState({}) 
    const [loadData, setLoadData] = React.useState([]) 
    const url='http://localhost:8080/accounts'

    // goes to login or signup page if no profile ID found
    if (profileId === null) {
        navigate('../')
    }

    //sets and load profile upon finding profile ID existence in the server
    React.useEffect(() => {
        axios.get(url).then(res => {
            setLoadData(res.data)
            loadData.map(user => {
                const userId = localStorage.getItem("profileId")
                    if (user.id === userId) {
                        setProfileData(user)
                    }
                    return "yes"
                })
        })
    }, [loadData]);
    
    
    // clear local storage and sets to log in or sign up page
    function signOut() {
        localStorage.clear()
        navigate('../')
    }

    return (
        <>
        <Nav/>
        <MyProfileHeader prop={profileData} />
        <div className="w-10/12 mx-auto">
            <button className="float-right text-xs font-semibold px-2 py-1 hover:text-red-900" onClick={signOut}>Sign Out</button>
        </div>
        <YourArtworks />
        </>
    )
}

export default UserProfile;