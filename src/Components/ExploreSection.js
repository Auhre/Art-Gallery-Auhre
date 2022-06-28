import Card from './Card'
import cardData from '../Data/CardData'

function ExploreSection() {
    const cards = cardData.map(data => {
        return <Card 
                    key={data.id}
                    data={data}
                />
    })
    return(
        <>
            <h3 className="font-bold mx-24 mt-4 text-2xl art-header-responsive">Explore albums</h3>
            <div className=" h-96 mx-20 mt-2 mb-4 flex to-column-explore-responsive overflow-explore-responsive hide-scroll-bar">
                {cards}
            </div>
        </>
    );
}

export default ExploreSection;