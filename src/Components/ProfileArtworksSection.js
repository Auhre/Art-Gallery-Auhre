import ProfileArtworks from "./ProfileArtworks";
import ProfileArtworksData from "../Data/ProfileArtworksData";
import { useLocation } from "react-router-dom";

function ProfileArtworksSection() {
    const location = useLocation();
    const { id, artworks } = location.state;
    const arts = ProfileArtworksData[id].map(data => {
        return <ProfileArtworks data={data}/>
    })
    return(
        <>
        <h2 class="mt-6 mx-36 font-bold text-xl"><i class="text-2xl mr-1">{artworks}</i> Artworks </h2>
        <div class="mt-2 mx-auto w-10/12 h-auto flex overflow-x-scroll hide-scroll-bar">
            {arts}
        </div>
        </>
    );
}
export default ProfileArtworksSection;