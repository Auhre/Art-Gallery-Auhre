import ProfileArtworks from "./ProfileArtworks";
import ProfileArtworksData from "./ProfileArtworksData";
import { useLocation } from "react-router-dom";

function ProfileArtworksSection() {
    const location = useLocation();
    const { id } = location.state;
    const arts = ProfileArtworksData[id].map(data => {
        return <ProfileArtworks data={data}/>
    })
    return(
        <>
        <h2 class="mt-6 mx-36 font-bold text-2xl">Artworks</h2>
        <div class="mt-2 mx-20 w-10/12 h-auto flex">
            {arts}
        </div>
        </>
    );
}
export default ProfileArtworksSection;