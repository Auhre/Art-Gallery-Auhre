import Home from './Home';
import UserProfile from './UserProfile'
import VisitTheirProfile from './VisitTheirProfile';
import Buy from './Buy';
import SignUp from './SignUp';
import Login from './Login';
import LoginOrSignup from './LoginOrSignup';
import Bought from './Bought';
import UserContext from './UserContext';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import React from 'react';



function App() {
    const [userId, setUserId] = React.useState(null)
    //save to local storage the user id if it is not null
    if (userId !== null) {
        localStorage.setItem("uID", userId)
    }
    React.useEffect(() => {
        document.title = "Auhre Art Gallery"
    })
    return(
        <div>
        <UserContext.Provider value={localStorage.getItem("uID")}>
        <Router>
        <Routes>
            <Route path="/" element={<LoginOrSignup />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<Login profileId={setUserId}/>} />
            <Route path="/home" element={<Home />} />
            <Route path={`/profile/:${userId}`} element={<UserProfile />} />
            <Route path="/theirProfile" element={<VisitTheirProfile />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/bought" element={<Bought />} />
        </Routes>
        </Router>
        </UserContext.Provider>
        </div>
    )
}
export default App;
