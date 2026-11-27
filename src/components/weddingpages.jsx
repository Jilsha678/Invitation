import Rushda from "./rushda";
import Althaf from "./althaf";
import ScratchReveal from "./scratchreveal";
import EventDetails from "./eventdetails";
import Thank from './thank'
import { useState,useEffect} from "react";

function WeddingPage(){
    const [currentPage,setCurrentPage]=useState(1)
    const [fade, setFade] = useState(true);
    useEffect(() => {
    if (currentPage === 1 || currentPage===2) {
        const timer = setTimeout(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentPage(currentPage+1);
                setFade(true);
            }, 1000);

        }, 6000);

        return () => clearTimeout(timer);
    }
}, [currentPage]);
   return (
    <div  >
        {currentPage === 1
    ? <Rushda fade={fade} />
    : currentPage === 2
        ? <Althaf fade={fade} />
        : (<>
        <ScratchReveal />
        <EventDetails/>
        <Thank/>
        </>)
}
    </div>
);
    
}
export default WeddingPage