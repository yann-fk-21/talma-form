import React, { useEffect, useRef, useState } from "react";
import "./checkSelect.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moneyData } from "../../../../data/moneyData";
export const CheckSelect = ({up1})=>{
    const [rotateIcon, setRotateIcon] = useState(false);
    const [optionVisible, setOptionVisible] = useState(false);
    const [codeMoney, setCodeMoney] = useState("FCFA");
    const selectRef = useRef(null);
    useEffect(() => {
        setOptionVisible(false);
        setRotateIcon(false);
    }, [codeMoney,localStorage.setItem("money",codeMoney)]);
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
            select.style.borderBottomRightRadius = "0px"
            select.style.borderBottomLeftRadius = "0px"
            setOptionVisible(true);
        }
    };
    const handleOptionClick = (codeMoney) => {
        const select = selectRef.current
        setCodeMoney(codeMoney);
        setRotateIcon(!rotateIcon);
        setOptionVisible(false);
        select.style.borderBottomRightRadius = "5px"
        select.style.borderBottomLeftRadius = "5px"
    };
    console.log(codeMoney)
    return(
        <>
        <div className="select-trie-name-money" ref={selectRef} onClick={changeIcon}>
                                    <span className="select-trie-name-span-money">{codeMoney}</span>
                            
                                    <FontAwesomeIcon icon={up1} className="down-icon-money" style={{ transform: rotateIcon && "rotate(180deg)" }}/>
                            </div>
                             {optionVisible && (
                                <div className="option-money">
                                    {
                                        moneyData.map((money,index) => {
                                            return (
                                                <span key={index} onClick={() => handleOptionClick(money)} >
                                                    {money}
                                                </span>
                                            )
                                        })
                                    }


                                </div>
                            )} 
                            </>
    )
}