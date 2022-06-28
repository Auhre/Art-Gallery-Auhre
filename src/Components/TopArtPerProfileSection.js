import TopArtPerProfile from "./TopArtPerProfile";
import TopArtsPerUserData from "../Data/TopArtsPerUserData";
import React from "react";
import { useLocation } from "react-router-dom";

function TopArtPerProfileSection() {
    const location = useLocation()
    // recieves id from state passed using useLocation
    const { id } = location.state
    const userTopArts = TopArtsPerUserData[id].map (data => {
        return <TopArtPerProfile 
            key={data.art_id}
            data={data} 
        /> 
    })
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
      });

    return(
        <div className="mt-16">
            <h3 className="font-bold mx-24 mt-4 text-2xl mb-6 art-header-responsive">Best Arts</h3>
            {userTopArts}
        </div>
    )
}
export default TopArtPerProfileSection;