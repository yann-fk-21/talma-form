
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./select.css"
export const Select = ({ nameGender, gender, up,dataSelectGender,checkGenre,checkDefault}) => {
    const [optionVisible, setOptionVisible] = useState(false);
    const [optionName, setOptionName] = useState(checkDefault);
    const [rotateIcon, setRotateIcon] = useState(false);
    const selectRef = useRef(null);
    useEffect(() => {
        setOptionVisible(false);
        setRotateIcon(false);
    }, [optionName,localStorage.setItem(checkGenre,optionName)]);
    const changeIcon = () => {
        const select = selectRef.current
        setRotateIcon(!rotateIcon);
        if (rotateIcon) {
            // Deuxième clic : masquer les options
              select.style.borderBottomRightRadius = "5px"
               select.style.borderBottomLeftRadius = "5px"
                setOptionVisible(false);
        } else {
            // Premier clic : afficher les options
           // console.log(selectRef.current.classList.toggle("bottomRaduisNone"))
             select.style.borderBottomRightRadius = "0px"
             select.style.borderBottomLeftRadius = "0px"
            setOptionVisible(true);
        }
    };
    const handleChildClick = (value) => {
        const select = selectRef.current
        setOptionName(value);
        setOptionVisible(false);
        setRotateIcon(!rotateIcon);
         select.style.borderBottomRightRadius = "5px"
         select.style.borderBottomLeftRadius = "5px"
    };
    return (
        <div className="space-signup">
            <label>{nameGender}</label>
            <div className={`select-trie-name ${rotateIcon ? 'focused' : ''}`} onClick={changeIcon} ref={selectRef}>
                <span className="select-trie-name-span">{optionName}</span>
                <FontAwesomeIcon icon={gender} className="sexe"/>
                <FontAwesomeIcon icon={up} className="down-icon" style={{transform: rotateIcon && "rotate(180deg)" }}/>
            </div>
            {optionVisible && (
                <div className="option">
                    {
                        dataSelectGender.map((changeGender,index)=>{
                            return(
                                <span key={index} onClick={() => handleChildClick(changeGender)}>
                                {changeGender}
                            </span>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}


