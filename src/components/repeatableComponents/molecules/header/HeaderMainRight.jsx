import "./headerMainRight.css"
export const HeaderMainRight = ({step,h2}) => {
    return (
        <div className="step_information_personal">
            <span className="step">{step}</span>
            <span>{h2}</span>
        </div>
    )
}