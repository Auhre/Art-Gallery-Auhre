import TopArt from './TopArt'
import TopData from '../Data/TopData'

function TopArtSection() {
    const topArtData = TopData.map(data => {
        return <TopArt 
                    key={data.art_id}
                    data={data}/>
    })
    return (
        <div className="mt-16">
            <h3 className="font-bold mx-24 mt-4 text-2xl mb-6 art-header-responsive">Top Arts</h3>
            {topArtData}
        </div>
    );
}

export default TopArtSection;