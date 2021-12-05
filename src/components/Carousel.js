import { useState } from "react/cjs/react.development"

function Carousel(props) {

    const [allPics, updatePics] = useState(props.imgs)
    
    let currentPic = allPics[0]

    function handlePrev(){

    }

    function handleNext(){

    }





    return (
        <div>
            <img src={currentPic}/>
            <button onClick={handlePrev}> Prev </button>
            <button onClick={handleNext}> Next </button>
        </div>
    )
}

export default Carousel