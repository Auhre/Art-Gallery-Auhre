function TopArtPerProfile(props) {
    return(
        <div class="w-10/12 h-90 mx-auto mb-8 p-2"> 
        <div class="flex to-column-responsive">
            <img src={props.data.image} class="top-art-image-responsive object-cover rounded-xl w-2/12 h-80" alt="artwork image"/>
            <div class="ml-6 mt-8">
                <div class="flex to-column-responsive">
                    <h2 class="text-4xl font-bold tracking-wider">{props.data.artname}</h2>
                    <div class="mt-3">
                        <h2 class="text-xl font-small text-gray-500 tracking-wider ml-4 top-art-title-responsive">({props.data.title})</h2>
                    </div>
                </div>
                <h2 class="text-md mt-6 font-medium tracking-wide">{props.data.date}</h2>
                <h2 class="text-md mt-2 font-medium text-justify mr-36 description-responsive">{props.data.description}</h2>
            </div>
        </div>
        </div>
    )
}
export default TopArtPerProfile;