export const CheckIcons = ({ stepEtape }) => {
    return (
        <div className="check_icons">
            <div className="check_icons_span">
                <span className="check_icons_tirets"></span>
                {stepEtape === 1 ? <span className="circle-img-transition check_icons_circle"></span> : <span className="circle-img-transition circle-img-validate-icons"></span>}
            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets_1"></span>
                {stepEtape === 2 ? (<span className="circle-img-transition check_icons_circle"></span>) : stepEtape === 1 ? (<span className="circle-img-transition check_icons_circle_1"></span>) : (<span className="circle-img-transition circle-img-validate-icons"></span>)}
            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets_1"></span>
                {stepEtape === 3 ? (<span className="circle-img-transition check_icons_circle"></span>):stepEtape === 2 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 1 ? (<span className="circle-img-transition check_icons_circle_1"></span>):(<span className="circle-img-transition circle-img-validate-icons"></span>)}
            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets_1"></span>
                {stepEtape === 4 ? (<span className="circle-img-transition check_icons_circle"></span>):stepEtape === 3 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 2 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 1 ? (<span className="circle-img-transition check_icons_circle_1"></span>):(<span className="circle-img-transition circle-img-validate-icons"></span>)}

            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets_1"></span>
                {stepEtape === 5 ? (<span className="circle-img-transition check_icons_circle"></span>):stepEtape === 4 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 3 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 2 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 1 ? (<span className="circle-img-transition check_icons_circle_1"></span>):(<span className="circle-img-transition circle-img-validate-icons"></span>)}
            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets_1"></span>
                {stepEtape === 6 ? (<span className="circle-img-transition check_icons_circle"></span>):stepEtape === 5 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 4 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 3 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 2 ? (<span className="circle-img-transition check_icons_circle_1"></span>):stepEtape === 1 ? (<span className="circle-img-transition check_icons_circle_1"></span>):(<span className="circle-img-transition circle-img-validate-icons"></span>)}
            </div>
            <div className="check_icons_span">
                <span className="check_icons_tirets"></span>
            </div>


        </div>
    )
}