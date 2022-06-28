import TopArtPerProfile from "./TopArtPerProfile";
import TopArtsPerUserData from "../Data/TopArtsPerUserData";
import { useLocation } from "react-router-dom";

function TopArtPerProfileSection() {
    const location = useLocation();
    const { id } = location.state;
    const userTopArts = TopArtsPerUserData[id].map (data => {
        return <TopArtPerProfile 
            data={data} 
        /> 
    })
    return(
        <div class="mt-16">
            <h3 class="font-bold mx-24 mt-4 text-2xl mb-6 art-header-responsive">Top Arts</h3>
            {userTopArts}
        </div>
    )
}
export default TopArtPerProfileSection;