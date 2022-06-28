import Nav from "./Nav";
import TheirProfileHeader from "./TheirProfileHeader";
import ProfileArtworksSection from "./ProfileArtworksSection";
import TopArtPerProfileSection from "./TopArtPerProfileSection";

function VisitTheirProfile(){
    return(
        <>
            <Nav />
            <TheirProfileHeader />
            <ProfileArtworksSection />
            <TopArtPerProfileSection />
        </>
    );
}

export default VisitTheirProfile;

