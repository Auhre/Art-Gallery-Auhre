function ProfileArtworks(props){
    return(
            <div class="relative w-2/12 p-2 h-auto">
            <div class="absolute rounded-lg right-10 top-5 bg-white p-2 px-4 hover:cursor-pointer hover:bg-gray-300">Buy</div>
            <img src={props.data.image} class="mx-auto h-72 w-10/12 object-cover rounded-xl" alt="art photo"/>
            <div class="mt-2 w-10/12 mx-auto h-auto flex">
            <span class="mx-2 text-md tracking-tighter">{props.data.title}</span>
            </div>
            <div class="relative w-10/12 mx-auto h-6">
            <span class="mx-2 text-md font-bold tracking-tighter">{props.data.price}</span>
            </div>
            </div>
    )
}
export default ProfileArtworks;