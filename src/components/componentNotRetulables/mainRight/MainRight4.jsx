import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faVenus,
  faLevelUp,
  faAreaChart,
  faPieChart,
  faSchool,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useInputState } from "../../../customHooks/useInputState";
import remove from "../../../assets/icons/remove.png";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "./mainRight4.css";
import { useSearchElement } from "../../../customHooks/useSearchElement";
import { professions } from "../../../data/profession.js";
import { ButtonPrewiew } from "../../repeatableComponents/atomes/button/ButtonPreview.jsx";
export const MainRight4 = ({ onSubmit, update }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm();
  const [formations, setFormations] = useState([
    { id: 1, domain: "", level: "", establishment: "", year: "" },
  ]);
  const [searchResults, searchElementUser] = useSearchElement(professions);
  const [currentDomain, setCurrentDomain] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentEstablishment, setCurrentEstablishment] = useState(null);

  useEffect(() => {
    console.log(formations);
  }, [formations, localStorage.setItem("formations", formations)]);

  const {
    iconColor: iconColorDomain,
    inputBorderColor: inputBorderColorDomain,
    handleFocus: handleFocusDomain,
    handleBlur: handleBlurDomain,
  } = useInputState(false, errors.domain);
  const {
    iconColor: iconColorLevel,
    inputBorderColor: inputBorderColorLevel,
    handleFocus: handleFocusLevel,
    handleBlur: handleBlurLevel,
  } = useInputState(false, errors.level);
  const {
    iconColor: iconColorEstablishment,
    inputBorderColor: inputBorderColorEstablishment,
    handleFocus: handleFocusEstablishment,
    handleBlur: handleBlurEstablishment,
  } = useInputState(false, errors.establishment);
  const {
    iconColor: iconColorYear,
    inputBorderColor: inputBorderColorYear,
    handleFocus: handleFocusYear,
    handleBlur: handleBlurYear,
  } = useInputState(false, errors.year);
  const handleAddFormation = () => {
    setFormations([
      ...formations,
      {
        id: formations.length + 1,
        domain: "",
        level: "",
        establishment: "",
        year: "",
      },
    ]);
  };

  const handleRemoveFormation = (id) => {
    setFormations(formations.filter((formation) => formation.id !== id));
  };

  const handleChildClickDomain = (value, formation) => {
    const updatedFormations = [...formations];
    const updatedFormation = updatedFormations.find(
      (f) => f.id === formation.id
    );
    updatedFormation.domain = value;
    setFormations(updatedFormations);
    setValue(`domain-${formation.id}`, value);
    setCurrentDomain(null);
  };
  const handleChildClickLevel = (value, formation) => {
    const updatedFormations = [...formations];
    const updatedFormation = updatedFormations.find(
      (f) => f.id === formation.id
    );
    updatedFormation.level = value;
    setFormations(updatedFormations);
    setValue(`level-${formation.id}`, value);
    setCurrentLevel(null);
  };
  const handleChildClickEstablishment = (value, formation) => {
    const updatedFormations = [...formations];
    const updatedFormation = updatedFormations.find(
      (f) => f.id === formation.id
    );
    updatedFormation.level = value;
    setFormations(updatedFormations);
    setValue(`establishment-${formation.id}`, value);
    setCurrentEstablishment(null);
  };

  return (
    <div className="main_right">
      <HeaderMainRight step="step 4/6" h2="Educational Background" />
      <form
        className="form_information form_information_height"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formations.map((formation) => {
          return (
            <div key={formation.id} className="parent_formation">
              <div className="control_select_formation">
                <div className="form_information_signup">
                  <div className="space-signup">
                    <label htmlFor={`domain-${formation.id}`}>Domain</label>
                    <input
                      type="text"
                      id={`domain-${formation.id}`}
                      placeholder="Genie Logiciel"
                      name={`domain-${formation.id}`}
                      defaultValue={formation.domain}
                      {...register(`domain-${formation.id}`, {
                        required: `Veuillez entrer votre profession ${formation.id}`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formations];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.domain = e.target.value;
                        searchElementUser(e.target.value);
                        setCurrentDomain(`domain-${formation.id}`);
                        setFormations(updatedFormations);
                        register(`domain-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorDomain }}
                      onFocus={handleFocusDomain}
                      onBlur={handleBlurDomain}
                    />
                    <FontAwesomeIcon
                      icon={faAreaChart}
                      className="img_user"
                      style={{ color: iconColorDomain }}
                    />
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="down-icon-formation"
                      style={{ color: iconColorDomain }}
                    />
                    {errors[`domain-${formation.id}`] && (
                      <span className="error">
                        {errors[`domain-${formation.id}`].message}
                      </span>
                    )}
                    {currentDomain === `domain-${formation.id}` &&
                      searchResults && (
                        <div className="option">
                          {searchResults.map((infosUsers, index) => {
                            return (
                              <span
                                key={index}
                                onClick={() =>
                                  handleChildClickDomain(
                                    infosUsers.name,
                                    formation
                                  )
                                }
                              >
                                {infosUsers.name}
                              </span>
                            );
                          })}
                        </div>
                      )}
                  </div>
                  <div className="space-signup">
                    <label htmlFor={`level-${formation.id}`}>Level</label>
                    <input
                      type="text"
                      id={`level-${formation.id}`}
                      placeholder="BAC +3"
                      name={`level-${formation.id}`}
                      defaultValue={formation.level}
                      {...register(`level-${formation.id}`, {
                        required: `Veuillez entrer votre niveau ${formation.id}`,
                      })}
                      style={{ borderColor: inputBorderColorLevel }}
                      onChange={(e) => {
                        const updatedFormations = [...formations];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.level = e.target.value;
                        searchElementUser(e.target.value);
                        setCurrentLevel(`level-${formation.id}`);
                        setFormations(updatedFormations);
                        register("level").onChange(e); // Access onChange from register
                      }}
                      onFocus={handleFocusLevel}
                      onBlur={handleBlurLevel}
                    />
                    <FontAwesomeIcon
                      icon={faLevelUp}
                      className="img_user"
                      style={{ color: iconColorLevel }}
                    />
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="down-icon-formation"
                      style={{ color: iconColorLevel }}
                    />
                    {errors[`level-${formation.id}`] && (
                      <span className="error">
                        {errors[`level-${formation.id}`].message}
                      </span>
                    )}
                    {currentLevel === `level-${formation.id}` &&
                      searchResults && (
                        <div className="option">
                          {searchResults.map((infosUsers, index) => {
                            return (
                              <span
                                key={index}
                                onClick={() =>
                                  handleChildClickLevel(
                                    infosUsers.level,
                                    formation
                                  )
                                }
                              >
                                {infosUsers.level}
                              </span>
                            );
                          })}
                        </div>
                      )}
                  </div>
                </div>
                <div className="form_information_signup">
                  <div className="space-signup">
                    <label htmlFor={`establishment-${formation.id}`}>
                      Establishment
                    </label>
                    <input
                      type="text"
                      id={`establishment-${formation.id}`}
                      placeholder="ISTAG"
                      name={`establishment-${formation.id}`}
                      defaultValue={formation.establishment}
                      {...register(`establishment-${formation.id}`, {
                        required: `Veuillez entrer votre etablissement ${formation.id}`,
                      })}
                      style={{ borderColor: inputBorderColorEstablishment }}
                      onChange={(e) => {
                        const updatedFormations = [...formations];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.establishment = e.target.value;
                        searchElementUser(e.target.value);
                        setCurrentEstablishment(
                          `establishment-${formation.id}`
                        );
                        setFormations(updatedFormations);
                        register("establishment").onChange(e); // Access onChange from register
                      }}
                      onFocus={handleFocusEstablishment}
                      onBlur={handleBlurEstablishment}
                    />
                    <FontAwesomeIcon
                      icon={faSchool}
                      className="img_user"
                      style={{ color: iconColorEstablishment }}
                    />
                    {errors[`establishment-${formation.id}`] && (
                      <span className="error">
                        {errors[`establishment-${formation.id}`].message}
                      </span>
                    )}
                    {currentEstablishment === `establishment-${formation.id}` &&
                      searchResults && (
                        <div className="option">
                          {searchResults.map((infosUsers, index) => {
                            return (
                              <span
                                key={index}
                                onClick={() =>
                                  handleChildClickEstablishment(
                                    infosUsers.establishment,
                                    formation
                                  )
                                }
                              >
                                {infosUsers.establishment}
                              </span>
                            );
                          })}
                        </div>
                      )}
                  </div>
                  <div className="space-signup">
                    <label htmlFor={`year-${formation.id}`}>Year</label>
                    <input
                      type="date"
                      placeholder="01/01/1975"
                      style={{
                        borderColor: inputBorderColorYear,
                        cursor: "pointer",
                      }}
                      id={`year-${formation.id}`}
                      name={`year-${formation.id}`}
                      defaultValue={formation.year}
                      {...register(`year-${formation.id}`, {
                        min: {
                          value: "1975-01-01",
                          message:
                            "La date doit être supérieure ou égale à 1975",
                        },
                        max: {
                          value: "2024-12-31",
                          message:
                            "La date doit être inférieure ou égale à 2024",
                        },
                        validate: (value) => {
                          const selectedDate = new Date(value);
                          const currentDate = new Date();

                          if (selectedDate > currentDate) {
                            return "La date ne peut pas être dans le futur";
                          }

                          return true;
                        },
                        required: `Veuillez entrer votre annee de naissance ${formation.id}`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formations];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.year = e.target.value;
                        setFormations(updatedFormations);
                        register("year").onChange(e); // Access onChange from register
                      }}
                      onFocus={handleFocusYear}
                      onBlur={handleBlurYear}
                    />
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="img_user"
                      style={{ color: iconColorYear }}
                    />
                    {errors[`year-${formation.id}`] && (
                      <span className="error">
                        {errors[`year-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="add_remove">
                {formation.id !== 1 && (
                  <div className="remove_formation">
                    <img
                      src={remove}
                      className="remove"
                      alt="remove_formation"
                      onClick={() => handleRemoveFormation(formation.id)}
                    />
                    <span className="remove-button">Remove</span>
                  </div>
                )}
                <span className="element_none">0</span>
                <span onClick={handleAddFormation} className="add">
                  {" "}
                  + Add a formation
                </span>
              </div>
            </div>
          );
        })}
        <div className="btn_container">
          <ButtonPrewiew update={update} />
          <ButtonNext next="Next step" />
        </div>
      </form>
    </div>
  );
};
