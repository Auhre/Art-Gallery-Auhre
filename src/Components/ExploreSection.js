import Card from './Card'
import cardData from '../Data/CardData'

function ExploreSection() {
    const cards = cardData.map(data => {
        return <Card 
            data={data}
        />
    })
    return(
        <>
            <h3 class="font-bold mx-24 mt-4 text-2xl">Explore albums</h3>
            <div class=" h-96 mx-20 mt-2 mb-4 flex">
                {cards}
            </div>
        </>
    );
}

export default ExploreSection;