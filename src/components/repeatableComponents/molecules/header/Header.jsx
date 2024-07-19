import "./header.css"
import Logo from "../../../../assets/logos/Logo.png"
export const Header= ()=>{
    return(
        <div className="title">
            <div className="title_left">
                <span className="title_left_first">Waitlist registration for <span className="title_talma">Talma</span> Platform</span>
                <span className="title_left_second">Join our community of experts by filling in this form.</span>
            </div>
            <div className="logo-text">
                <img src={Logo} alt="talma" className="logo_talma"/>
                <span className="talma-text">Talma</span>
            </div>
            
        </div>
    )
}