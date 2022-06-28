import TopArt from './TopArt'
import topData from '../Data/TopData'

function TopArtSection() {
    const topArtData = topData.map(data => {
        return <TopArt 
        data={data}/>
    })
    return (
        <div class="mt-16">
            <h3 class="font-bold mx-24 mt-4 text-2xl mb-6">Top Arts</h3>
            {topArtData}
        </div>
    );
}

export default TopArtSection;