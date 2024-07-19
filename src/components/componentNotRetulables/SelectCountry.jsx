import { useEffect, useRef, useState } from "react";
import { countriesCodes } from "../../data/countriesCodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";

export const SelectCountry = () => {
    const [rotateIcon, setRotateIcon] = useState(false);
    const selectRef = useRef(null);
    const [optionVisible, setOptionVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        codepays: "CMR",
        countryName: "Cameroon",
        drapeau: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
        callingCode: "+237"
    });
    const [code, setCode] = useState(selectedCountry.callingCode)
    /***logique countries name** */
    useEffect(() => {
        setOptionVisible(false);
        setRotateIcon(false);
    }, [selectedCountry, localStorage.setItem("code", code), localStorage.setItem("country", selectedCountry.countryName)]);
    const changeIcon = () => {
        const select = selectRef.current
        setRotateIcon(!rotateIcon);
        if (rotateIcon) {
            select.style.borderBottomRightRadius = "5px"
            select.style.borderBottomLeftRadius = "5px"
            setOptionVisible(false);
        } else {
            select.style.borderBottomRightRadius = "0px"
            select.style.borderBottomLeftRadius = "0px"
            setOptionVisible(true);
        }
    };
    const handleOptionClick = (country) => {
        const select = selectRef.current
        setSelectedCountry(country);
        setRotateIcon(!rotateIcon);
        setOptionVisible(false);
        setCode(country.callingCode)
        select.style.borderBottomRightRadius = "5px"
        select.style.borderBottomLeftRadius = "5px"
    };
    console.log(selectedCountry)
    /****fin countries name */
    return (
        <div className="space-signup">
            <label>Country</label>
            <div className="select-trie-name-country" onClick={changeIcon} ref={selectRef}>
                <div className="parent_country_img">
                    <img src={selectedCountry.drapeau} alt={selectedCountry.countryName} className="img_drapeau" />
                    <span className="select-trie-name-span-country">{selectedCountry.countryName}</span>

                </div>
                <FontAwesomeIcon icon={faCaretDown} className="down-icon-country" style={{ transform: rotateIcon && "rotate(180deg)" }} />
            </div>
            {optionVisible && (
                <div className="option-country  option_control_height">
                    {
                        countriesCodes.map((country) => {
                            return (
                                <span key={country.codepays} onClick={() => handleOptionClick(country)}>
                                    <img src={country.drapeau} alt={country.countryName} className="img_drapeau" />
                                    {country.countryName}
                                </span>
                            )
                        })
                    }


                </div>
            )}
        </div>
    )
}