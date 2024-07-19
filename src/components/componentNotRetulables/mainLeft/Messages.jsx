import { useEffect, useRef } from "react"


export const Messages = ({divPreview,stepEtape})=>{ 
        
    return(
        <>
          {stepEtape === 2?( <div className="messages move_down">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):stepEtape === 3?(<div className="messages move_down2">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):stepEtape === 4?(<div className="messages move_down3">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):stepEtape === 5?(<div className="messages move_down4">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):stepEtape === 6?(<div className="messages move_down5">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):divPreview  ?(<div className="messages move_up">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>):(<div className="messages">
                 <span>Lorem ipsum dolor Conseteur, lorem</span>
         </div>)} 
         
        </>   
    )
}