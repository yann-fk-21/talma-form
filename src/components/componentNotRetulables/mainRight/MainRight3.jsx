import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faSearch,
  faCircleCheck,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./mainRight1.css";
import "./mainRight3.css";
import { useInputState } from "../../../customHooks/useInputState";
import { useSearchElement } from "../../../customHooks/useSearchElement";
import { professions } from "../../../data/profession";
import { CheckSelectNumber } from "../../repeatableComponents/atomes/allSelect/CheckSelectNumber";
import { years } from "../../../data/years";
import { ButtonPrewiew } from "../../repeatableComponents/atomes/button/ButtonPreview";
export const MainRight3 = ({ onSubmit, update }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const [searchResults, searchElementUser] = useSearchElement(professions);
  const [select, setSelect] = useState(false);
  const [selectSkills, setSelectSkills] = useState(false);
  const [selectFixedSkills, setSelectFixedSkills] = useState(false);
  const [selectFixed, setSelectFixed] = useState(false);
  const [etat, setEtat] = useState(false);

  const [professionSkills, setProfessionSkills] = useState({
    profession: "",
    chips: [],
  });
  const [skills, setSkills] = useState({
    name: "",
    nameTchecks: JSON.parse(localStorage.getItem("skills")) || [],
  });

  const {
    iconColor: iconColorProfession,
    inputBorderColor: inputBorderColorProfession,
    handleFocus: handleFocusProfession,
    handleBlur: handleBlurProfession,
  } = useInputState(false, errors.profession);
  const {
    iconColor: iconColorSkills,
    inputBorderColor: inputBorderColorSkills,
    handleFocus: handleFocusSkills,
    handleBlur: handleBlurSkills,
  } = useInputState(false, errors.skills);

  /*****debut profession** */
  const handleChildClickProfession = (value) => {
    const updatedProfession = { ...professionSkills };

    if (!updatedProfession.chips) {
      updatedProfession.chips = [];
    }

    const professionExists = updatedProfession.chips.some(
      (element) => element.name.toLowerCase() === value.toLowerCase()
    );

    if (!professionExists) {
      const professionYears = {
        name: value,
        years: "0-2ans",
      };
      updatedProfession.chips.push(professionYears);
      localStorage.setItem(
        "professionSkills",
        JSON.stringify(updatedProfession.chips)
      );
      setProfessionSkills(updatedProfession);
      setSelect(false);
      setSelectFixed(true);
    } else {
      alert("La profession existe déjà");
    }
  };
  const handleYearChange = (index, years) => {
    const updatedProfession = { ...professionSkills };
    updatedProfession.chips[index].years = years;
    localStorage.setItem(
      "professionSkills",
      JSON.stringify(updatedProfession.chips)
    );
    setProfessionSkills(updatedProfession);
  };
  /******fin profession */
  /*****skills */
  const handleChildClickSkills = (value) => {
    const updatedSkills = { ...skills };

    if (!updatedSkills.nameTchecks) {
      updatedSkills.nameTchecks = [];
    }

    const professionExists = updatedSkills.nameTchecks.some(
      (element) => element.name.toLowerCase() === value.toLowerCase()
    );

    if (!professionExists) {
      const valueSkills = {
        name: value,
        radios: [false, false, false, false, false],
      };
      updatedSkills.nameTchecks.push(valueSkills);
      localStorage.setItem("skills", JSON.stringify(updatedSkills.nameTchecks));
      setSkills(updatedSkills);
      setSelectSkills(false);
      setSelectFixedSkills(true);
    } else {
      alert("competence deja choisie");
    }
  };
  const handleRadioChange = (skillIndex, radioIndex) => (e) => {
    const isChecked = e.target.checked;
    const updatedSkills = { ...skills };
    const skillToUpdate = updatedSkills.nameTchecks[skillIndex];
    skillToUpdate.radios[radioIndex] = isChecked;
    updatedSkills.nameTchecks[skillIndex] = skillToUpdate;
    localStorage.setItem("skills", JSON.stringify(updatedSkills.nameTchecks));
    setSkills(updatedSkills);
  };
  /*****fin skills */
  const handleClickOutside = (event) => {
    if (!event.target.closest(".option")) {
      setSelect(false);
      setSelectFixed(true);
      // setSelectSkills(false);
      // setSelectFixedSkills(true);
    }
  };

  return (
    <div className="main_right" onClick={handleClickOutside}>
      <HeaderMainRight step="step 3/6" h2="Profession and skills" />
      <form className="form_information" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="phone">Profession</label>
            <input
              type="text"
              placeholder="profession"
              name="profession"
              style={{ borderColor: inputBorderColorProfession }}
              {...register("profession", {
                required: "Veuillez votre profession",
              })}
              onChange={(e) => {
                searchElementUser(e.target.value);
                setSelectFixed(false);
                setSelect(true);

                register("profession").onChange(e); // Access onChange from register
              }}
              onFocus={handleFocusProfession}
              onBlur={handleBlurProfession}
            />
            <FontAwesomeIcon
              icon={faBagShopping}
              className="img_user"
              style={{ color: iconColorProfession }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search"
              style={{ color: iconColorProfession }}
            />
            {errors.profession && (
              <span className="error">{errors.profession.message}</span>
            )}
            {select && (
              <div className="option">
                {searchResults.map((infosUsers, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() =>
                        handleChildClickProfession(infosUsers.name)
                      }
                    >
                      {infosUsers.name}
                    </span>
                  );
                })}
              </div>
            )}
            {selectFixed &&
              localStorage.getItem("professionSkills") &&
              JSON.parse(localStorage.getItem("professionSkills")).length >=
                1 && (
                <div className="professions_skills">
                  {professionSkills.chips.map((infoTek, index) => {
                    return (
                      <div key={index} className="parent_input_checkSelect">
                        <div id="information_professions_name">
                          {infoTek.name}
                        </div>
                        <CheckSelectNumber
                          up1={faCaretDown}
                          selectYears={infoTek.years}
                          dataId={index}
                          onYearChange={handleYearChange}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
          <div className="space-signup">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              placeholder="Enter your skills"
              name="skills"
              style={{ borderColor: inputBorderColorSkills }}
              {...register("skills", { required: "Veuillez vos skills" })}
              onChange={(e) => {
                searchElementUser(e.target.value);
                setSelectSkills(true);
                setSelectFixedSkills(false);
                register("skills").onChange(e); // Access onChange from register
              }}
              onFocus={handleFocusSkills}
              onBlur={handleBlurSkills}
            />
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="img_user"
              style={{ color: iconColorSkills }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search"
              style={{ color: iconColorSkills }}
            />
            {errors.skills && (
              <span className="error">{errors.skills.message}</span>
            )}
            {selectSkills && (
              <div className="option">
                {searchResults.map((infosUsers, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => handleChildClickSkills(infosUsers.skills)}
                    >
                      {infosUsers.skills}
                    </span>
                  );
                })}
              </div>
            )}
            {selectFixedSkills &&
              localStorage.getItem("skills") &&
              JSON.parse(localStorage.getItem("skills")).length >= 1 && (
                <div className="professions_skills_radio">
                  {skills.nameTchecks.map((infoTek, index) => {
                    return (
                      <div key={index} className="skills_radio">
                        <div id="information_professions_skills">
                          {infoTek.name}
                        </div>
                        <div className="parent_radio">
                          {infoTek.radios?.map((isChecked, radioIndex) => {
                            return (
                              <input
                                key={radioIndex}
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleRadioChange(index, radioIndex)}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
        <div className="btn_container">
          <ButtonPrewiew update={update} />
          <ButtonNext next="Next step" />
        </div>
      </form>
    </div>
  );
};
