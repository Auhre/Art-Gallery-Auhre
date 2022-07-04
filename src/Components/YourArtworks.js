import UploadArtModal from "./UploadArtModal"
import MyArtworks from "./MyArtworks";
import UserContext from "./UserContext";
import { useContext } from "react";
import React from "react"
import axios from "axios"

function YourArtworks() {
    const [modalShow, setModalShow] = React.useState(false)
    const [artworksData, setArkworksData] = React.useState([])
    const boundArt = []
    const url='http://localhost:8080/artworks'
    const profileId = useContext(UserContext)
    localStorage.setItem("profileId", profileId)
    

    React.useEffect(() => {
        axios.get(url).then(res => {
            setArkworksData(res.data)
        })
    });
    
  
    // renders child componets in userId on arts matched the logged in userId
    const artworks = artworksData.map(arts => {
        const userId = localStorage.getItem("profileId")
            if (arts.userId === userId) {
                boundArt.push(arts)
                return <MyArtworks 
                key={arts.id}
                data={arts}/>
            }
            return ''
        })

    function openArtModal() {
        setModalShow(true)
    } 
    return (
        <div className="mt-6 w-10/12 mx-auto">
            <button onClick={openArtModal} className="p-2 text-sm bg-yellow-300 rounded-md hover:bg-yellow-400">Upload Art</button>
            {modalShow && 
                    (
                        <>
                        <div className="art-modal-focus rounded-md">
                            <UploadArtModal prop={setModalShow} length={artworksData.length}/> 
                        </div>
                        </>
                    )}
            <h2 className="mt-6 mx-36 font-bold text-xl text-center"><i className="text-2xl mr-1">{boundArt.length}</i> Artworks </h2>
            <div className="mt-6 w-full h-auto flex overflow-x-scroll hide-scroll-bar cards overflow-responsive">
                {artworks} 
            </div>
        </div>
    )
}
export default YourArtworks