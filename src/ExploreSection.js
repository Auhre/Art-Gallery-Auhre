import Card from './Card'
import cardData from './CardData'

function ExploreSection() {
    const cards = cardData.map(data => {
        return <Card 
            data={data}
        />
    })
    return(
        <div class=" h-96 mx-20 mt-6 mb-4 flex">
            {cards}
        </div>
    );
}

export default CardSection;