import React, { useEffect, useRef, useState } from "react";
import "./checkSelect.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moneyData } from "../../../../data/moneyData";
import { years } from "../../../../data/years";
export const CheckSelectNumber = ({up1,selectYears,dataId,onYearChange}) => {
    const [rotateIcon, setRotateIcon] = useState(false);
    const [optionVisible, setOptionVisible] = useState(false);
    const [codeNumber, setCodeNumber] = useState(selectYears);
    const selectRef = useRef(null);
    useEffect(() => {
        setOptionVisible(false);
        setRotateIcon(false);
    }, [codeNumber, localStorage.setItem("Number", codeNumber)]);
    const changeIcon = (e) => {
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
    const handleOptionClick = (years) => {
        setCodeNumber(years);
        onYearChange(dataId, years); // Appeler la fonction de rappel avec l'ID et les années sélectionnées
        setRotateIcon(!rotateIcon);
        setOptionVisible(false);
        const select = selectRef.current;
        select.style.borderBottomRightRadius = "5px";
        select.style.borderBottomLeftRadius = "5px";
    };


    console.log(codeNumber)
  
    return (
        <>
            <div className="select-trie-name-number" ref={selectRef} onClick={changeIcon} data-id={dataId}>


                <span className="select-trie-name-span-number">{codeNumber}</span>

                <FontAwesomeIcon icon={up1} className="down-icon-money" style={{ transform: rotateIcon && "rotate(180deg)" }} />
            </div>
             {optionVisible && (
                <div className="option-number">
                    {
                        years.map((number, idx) => {
                            return (
                                <span key={idx} onClick={() => handleOptionClick(number)}>
                                    {number}
                                </span>
                            )
                        })
                    }

                </div>
            )} 
        </>
    )
}