import TopArtists from "./TopArtists";
import TopArtistsData from "../Data/TopArtistsData";

function TopArtSection() {
    const artistData = TopArtistsData.map(data => {
        return <TopArtists 
            data={data}
        />
    })
    return (
        <div class="flex-col mt-10 mb-10">
            <div class="w-3/12 mx-auto p-4"><p class="font-bold tracking-widest text-center text-5xl">Top Artists</p></div>
            <div class="flex w-full mx-auto">
                {artistData}
            </div>
        </div>
    )
}
export default TopArtSection;