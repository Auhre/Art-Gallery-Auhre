import TopArtists from "./TopArtists";
import TopArtistsData from "../Data/TopArtistsData";

function TopArtSection() {
    const artistData = TopArtistsData.map(data => {
        return <TopArtists 
            key={data.id}
            data={data}
        />
    })
    return (
        <div className="flex-col mt-10 mb-10">
            <div className="w-3/12 mx-auto p-4 top-artist-label-responsive">
                <p className="font-bold tracking-widest text-center text-5xl">Top Artists</p>
            </div>
            <div className="flex w-full mx-auto to-column-responsive">
                {artistData}
            </div>
        </div>
    )
}
export default TopArtSection;