function TopArt(props) {
    return (
        <div className="w-10/12 h-90 mx-auto mb-8 p-2"> 
            <div className="flex to-column-responsive">
                <img src={props.data.image} className="top-art-image-responsive object-cover rounded-xl w-2/12 h-80" alt="art"/>
                <div className="ml-6 mt-8">
                    <h2 className="text-lg tracking-widest">{props.data.country}</h2>
                    <div className="flex to-column-responsive">
                        <h2 className="text-4xl font-bold tracking-wider">{props.data.artname}</h2>
                        <div className="mt-3">
                            <h2 className="text-xl font-small text-gray-500 tracking-wider ml-4 top-art-title-responsive">({props.data.title})</h2>
                        </div>
                    </div>
                    <h2 className="text-md mt-6 font-medium tracking-tighter">{props.data.artist}</h2>
                    <h2 className="text-md mt-2 font-medium text-justify mr-36 description-responsive">{props.data.description}</h2>
                </div>
            </div>
        </div>
    );
}

export default TopArt;