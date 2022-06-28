import ProfileArtworks from "./ProfileArtworks";
import ProfileArtworksData from "../Data/ProfileArtworksData";
import { useLocation } from "react-router-dom";

function ProfileArtworksSection() {
    const location = useLocation();
    const { id, artworks } = location.state;
    const arts = ProfileArtworksData[id].map(data => {
        return <ProfileArtworks 
                    key={data.art_id} 
                    data={data}
                />
    })
    return(
        <>
            <h2 className="mt-6 mx-36 font-bold text-xl text-center"><i className="text-2xl mr-1">{artworks}</i> Artworks </h2>
            <div className="mt-6 mx-auto w-10/12 h-auto flex overflow-x-scroll hide-scroll-bar cards overflow-responsive">
                {arts}
            </div>
        </>
    );
}
export default ProfileArtworksSection;