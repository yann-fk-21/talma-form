export const ChildCheckCircle=({user})=>{
    return(
        <div  className="check_circle_img_span">
                <div>
                    <img src={user} alt="" className="check_circle_img"/>
                </div>
                <span className="check_circle_span"></span>
            </div>
    )
}
//className={`${childCheckBackground ? 'circle-img' : 'circle-img1'}`}