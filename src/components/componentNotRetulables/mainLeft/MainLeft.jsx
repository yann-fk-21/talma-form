import { CheckCircle } from "./CheckCircle"
import { CheckIcons } from "./CheckIcons"
import { Messages } from "./Messages"
import "./mainLeft.css"
export const MainLeft = ({stepEtape,preview})=>{
    return(
        <div className="main_left">
            <div className="message_check_circle">
                <Messages  stepEtape={stepEtape}  divPreview={preview}/>
                <CheckCircle  stepEtape={stepEtape}/>
            </div>
            <div>
                <CheckIcons stepEtape={stepEtape}/>
            </div>
        </div>
    )
}