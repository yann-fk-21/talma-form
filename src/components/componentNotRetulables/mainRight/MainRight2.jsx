import { useDataContext } from "../../../customHooks/useDataContext";
import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMoneyBill,
  faCaretDown,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { parsePhoneNumber } from "awesome-phonenumber";
import "./mainRight2.css";
import "./mainRight1.css";
import { useEffect, useRef, useState } from "react";
import { countriesCodes } from "../../../data/countriesCodes";
import { useForm } from "react-hook-form";
import { CheckSelect } from "../../repeatableComponents/atomes/allSelect/CkeckSelect";
import { useInputState } from "../../../customHooks/useInputState";
import { useSearchElement } from "../../../customHooks/useSearchElement";
import { dataCity } from "../../../data/dataCity";
import { ButtonPrewiew } from "../../repeatableComponents/atomes/button/ButtonPreview";
export const MainRight2 = ({ onSubmit, update }) => {
  const [rotateIcon, setRotateIcon] = useState(false);
  const selectRef = useRef(null);
  const selectRefCity = useRef(null);
  const [optionVisible, setOptionVisible] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [searchResults, searchElementUser] = useSearchElement(dataCity);
  const [select, setSelect] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    codepays: "CMR",
    countryName: "Cameroon",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
    callingCode: "+237",
  });
  const [code, setCode] = useState(selectedCountry.callingCode);
  const [check, setCheck] = useState(false);
  const [newCity, setNewCity] = useState("");
  const { data1, setData1 } = useDataContext();
  const checkRef = useRef(null);
  const checkColor = useRef(null);
  /****change state color */
  const {
    iconColor: iconColorCity,
    inputBorderColor: inputBorderColorCity,
    handleFocus: handleFocusCity,
    handleBlur: handleBlurCity,
  } = useInputState(false, errors.city);
  const {
    iconColor: iconColorMoney,
    inputBorderColor: inputBorderColorMoney,
    handleFocus: handleFocusMoney,
    handleBlur: handleBlurMoney,
  } = useInputState(false, errors.money);
  const {
    iconColor: iconColorPhone,
    inputBorderColor: inputBorderColorPhone,
    handleFocus: handleFocusPhone,
    handleBlur: handleBlurPhone,
  } = useInputState(false, errors.phone);
  /****fin  change state color*/
  useEffect(() => {}, [check, localStorage.setItem("check", check)]);
  /***logique du swicth */
  const handleCkeckPosition = () => {
    const checkPosition = checkRef.current;
    const checkColorRef = checkColor.current;
    setCheck(!check);

    if (check) {
      checkPosition.style.transition = "background 0.7s ease";
      checkPosition.style.background = "rgba(0, 0, 0, 0.08)";
      checkColorRef.style.transition = "color 0.7s ease";
      checkColorRef.style.color = "white";
      checkColorRef.style.transition = "transform 0.3s ease";
      checkColorRef.style.transform = "translateX(-1px)";
      checkColorRef.style.background = "white";
      setCheck(false);
    } else {
      checkPosition.style.transition = "background 0.7s ease";
      checkPosition.style.background = "#592E83";
      checkColorRef.style.transition = "color 0.3s ease, transform 0.3s ease";
      checkColorRef.style.color = "black";
      checkColorRef.style.transform = "translateX(20px)";
      checkColorRef.style.background = "white";
      setCheck(true);
    }
  };
  /****fin de la logique du switch */
  /***logique countries name** */
  useEffect(() => {
    setOptionVisible(false);
    setRotateIcon(false);
  }, [
    selectedCountry,
    localStorage.setItem("code", code),
    localStorage.setItem("country", selectedCountry.countryName),
  ]);
  const changeIcon = () => {
    const select = selectRef.current;
    setRotateIcon(!rotateIcon);
    if (rotateIcon) {
      select.style.borderBottomRightRadius = "5px";
      select.style.borderBottomLeftRadius = "5px";
      setOptionVisible(false);
    } else {
      select.style.borderBottomRightRadius = "0px";
      select.style.borderBottomLeftRadius = "0px";
      setOptionVisible(true);
    }
  };
  const handleOptionClick = (country) => {
    const select = selectRef.current;
    setSelectedCountry(country);
    setRotateIcon(!rotateIcon);
    setOptionVisible(false);
    setCode(country.callingCode);
    select.style.borderBottomRightRadius = "5px";
    select.style.borderBottomLeftRadius = "5px";
  };
  const handleChildClickCity = (cityValue) => {
    setSelect(false);
    setNewCity(cityValue);
    setValue("city", cityValue);
  };
  /****fin countries name */

  return (
    <>
      <div className="main_right">
        <HeaderMainRight step="step 2/6" h2="Location and availability" />
        <form className="form_information" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_information_signup">
            <div className="space-signup">
              <label>Country</label>
              <div
                className="select-trie-name-country"
                onClick={changeIcon}
                ref={selectRef}
              >
                <div className="parent_country_img">
                  <img
                    src={selectedCountry.drapeau}
                    alt={selectedCountry.countryName}
                    className="img_drapeau"
                  />
                  <span className="select-trie-name-span-country">
                    {selectedCountry.countryName}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="down-icon-country"
                  style={{ transform: rotateIcon && "rotate(180deg)" }}
                />
              </div>
              {optionVisible && (
                <div className="option-country  option_control_height">
                  {countriesCodes.map((country) => {
                    return (
                      <span
                        key={country.codepays}
                        onClick={() => handleOptionClick(country)}
                      >
                        <img
                          src={country.drapeau}
                          alt={country.countryName}
                          className="img_drapeau"
                        />
                        {country.countryName}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="space-signup">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                placeholder="6xx xxx xxx"
                className="input_placeholder"
                ref={selectRefCity}
                defaultValue={data1.phone}
                style={{ borderColor: inputBorderColorPhone }}
                name="phone"
                {...register("phone", {
                  required: "Veuillez saisir votre numéro de téléphone",
                  validate: (value) => {
                    const phoneNumber = code + value;
                    const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
                    if (parsedPhoneNumber.valid === false) {
                      return "Format de numéro de téléphone invalide";
                    }
                  },
                })}
                onFocus={handleFocusPhone}
                onBlur={handleBlurPhone}
              />
              <span className="input_code">{code}</span>
              <FontAwesomeIcon
                icon={faPhone}
                className="img_user"
                style={{ color: iconColorPhone }}
              />
              {errors.phone && (
                <span className="error">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="form_information_signup">
            <div className="space-signup">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                defaultValue={newCity}
                style={{ borderColor: inputBorderColorCity }}
                {...register("city", {
                  required: "Veuillez entrer votre ville",
                })}
                onChange={(e) => {
                  searchElementUser(e.target.value);
                  setSelect(true);
                  register("city").onChange(e); // Access onChange from register
                }}
                onFocus={handleFocusCity}
                onBlur={handleBlurCity}
              />
              <FontAwesomeIcon
                icon={faCity}
                className="img_user"
                style={{ color: iconColorCity }}
              />
              {errors.city && (
                <span className="error">{errors.city.message}</span>
              )}
              {select && (
                <div className="option">
                  {searchResults.map((infosUsers, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleChildClickCity(infosUsers.city)}
                      >
                        {infosUsers.city}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="space-signup">
              <label htmlFor="money">Daily average rate</label>
              <input
                type="text"
                className="check_money_"
                placeholder="0"
                defaultValue={data1.money}
                style={{ borderColor: inputBorderColorMoney }}
                name="money"
                {...register("money", {
                  required: "Veuillez entrer une somme en chiffre",
                })}
                onFocus={handleFocusMoney}
                onBlur={handleBlurMoney}
              />
              <CheckSelect up1={faCaretDown} />
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="img_user"
                style={{ color: iconColorMoney }}
              />
              {errors.money && (
                <span className="error">{errors.money.message}</span>
              )}
            </div>
          </div>
          <div className="form_information_signup">
            <div className="space-signup"></div>
            <div className="convertion">
              <span>Convert in Euro</span>
              <span>=0.000€</span>
            </div>
          </div>
          <div className="form_information_signup">
            <div className="check_position">
              <div className="parent_circle_position" ref={checkRef}>
                <span
                  className="child_circle_position"
                  onClick={handleCkeckPosition}
                  ref={checkColor}
                ></span>
              </div>
              <div className="condition">
                <span className="condition_1">
                  I can be mobile if necessary for job
                </span>
                <span className="condition_2">
                  Lorem ipsum dollar sit amet consecteur
                </span>
              </div>
            </div>
          </div>
          <div className="btn_container">
            <ButtonPrewiew update={update} />
            <ButtonNext next="Next step" />
          </div>
        </form>
      </div>
    </>
  );
};
