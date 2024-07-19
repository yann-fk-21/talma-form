import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import remove from "../../../assets/icons/remove.png";
import gras from "../../../assets/icons/gras.png";
import italique from "../../../assets/icons/italique.png";
import link from "../../../assets/icons/link.png";
import underline from "../../../assets/icons/underline.png";
import list from "../../../assets/icons/list.png";
import police from "../../../assets/icons/police.png";
import {
  faCaretDown,
  faCalendarCheck,
  faSection,
  faAreaChart,
  faSearchMinus,
  faLocation,
  faPaintbrush,
  faHammer,
  faVenus,
  faKeyboard,
  faMagnet,
  faBackward,
  faLink,
  faLinkSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./mainRight4.css";
import "./mainRight5.css";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useInputState } from "../../../customHooks/useInputState";
import { professions } from "../../../data/profession";
import { useSearchElement } from "../../../customHooks/useSearchElement";
import { ButtonPrewiew } from "../../repeatableComponents/atomes/button/ButtonPreview";
export const MainRight5 = ({ onSubmit, update }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
  } = useForm();
  const [formationsProfessions, setFormationsProfessions] = useState([
    {
      id: 1,
      entreprise: "",
      position: "",
      date: "",
      location: "",
      sector: "",
      technologie: [],
      task: "",
    },
  ]);
  const [currentEntreprise, setCurrentEntreprise] = useState(null);
  const [currentTechnologie, setCurrentTechnologie] = useState(null);
  const [contenair, setContenair] = useState([]);
  const [searchResults, searchElementUser] = useSearchElement(professions);
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState("");
  /***a servir a la vue 5 */
  useEffect(() => {
    console.log(formationsProfessions);
  }, [
    formationsProfessions,
    localStorage.setItem("professions", formationsProfessions),
  ]);

  const inputRefs = useRef({});
  const textAreaRefs = useRef({});
  /***debut state color,border */
  const {
    iconColor: iconColorEntreprise,
    inputBorderColor: inputBorderColorEntreprise,
    handleFocus: handleFocusEntreprise,
    handleBlur: handleBlurEntreprise,
  } = useInputState(false, errors.entreprise);
  const {
    iconColor: iconColorPosition,
    inputBorderColor: inputBorderColorPosition,
    handleFocus: handleFocusPosition,
    handleBlur: handleBlurPosition,
  } = useInputState(false, errors.position);
  const {
    iconColor: iconColorDate,
    inputBorderColor: inputBorderColorDate,
    handleFocus: handleFocusDate,
    handleBlur: handleBlurDate,
  } = useInputState(false, errors.date);
  const {
    iconColor: iconColorLocation,
    inputBorderColor: inputBorderColorLocation,
    handleFocus: handleFocusLocation,
    handleBlur: handleBlurLocation,
  } = useInputState(false, errors.location);
  const {
    iconColor: iconColorTechnologies,
    inputBorderColor: inputBorderColorTechnologies,
    handleFocus: handleFocusTechnologies,
    handleBlur: handleBlurTechnologies,
  } = useInputState(false, errors.technologie);
  const {
    iconColor: iconColorTask,
    inputBorderColor: inputBorderColorTask,
    handleFocus: handleFocusTask,
    handleBlur: handleBlurTask,
  } = useInputState(false, errors.task);
  /**fin state color,border */
  const {
    iconColor: iconColorSector,
    inputBorderColor: inputBorderColorSector,
    handleFocus: handleFocusSector,
    handleBlur: handleBlurSector,
  } = useInputState(false, errors.sector);

  const grasText = () => {
    document.execCommand("bold", false, null);
  };

  const underlineText = () => {
    document.execCommand("underline", false, null);
  };
  const italiqueText = () => {
    document.execCommand("italic", false, null);
  };
  const linkText = () => {
    document.execCommand("createLink", false, null);
  };
  const listText = () => {
    document.execCommand("insertOrderedList", false, null);
  };
  const policeText = (color) => {
    document.execCommand("forColor", false, null);
  };

  const handleAddProfession = () => {
    setFormationsProfessions([
      ...formationsProfessions,
      {
        id: formationsProfessions.length + 1,
        entreprise: "",
        position: "",
        date: "",
        location: "",
        sector: "",
        technologies: [],
        task: "",
      },
    ]);
  };
  const handleRemoveProfession = (id) => {
    const professions = formationsProfessions.filter(
      (elementRemove) => elementRemove.id !== id
    );
    setFormationsProfessions(professions);
  };
  const handleChildClickTechnologie = (value, formation) => {
    const updatedFormations = [...formationsProfessions];
    const updatedFormation = updatedFormations.find(
      (f) => f.id === formation.id
    );
    if (!updatedFormation.chips) {
      updatedFormation.chips = [];
    }
    if (!updatedFormation.chips.includes(value)) {
      updatedFormation.chips.push(value);
    }
    setFormationsProfessions(updatedFormations);
    setCurrentTechnologie("");
    localStorage.setItem(
      `techno-${formation.id}`,
      JSON.stringify(updatedFormation.chips)
    );
    setValue(`technologie-${formation.id}`, "");
  };
  const handleClickOutside = (event) => {
    if (!event.target.closest(".input_technologie")) {
      setCurrentTechnologie(false);
    }
  };

  const handleContentChange = (id) => {
    const updatedContent = textAreaRefs.current[id].innerHTML;
    setContent(updatedContent);

    const updatedFormations = [...formationsProfessions];
    const updatedFormation = updatedFormations.find((f) => f.id === id);
    updatedFormation.task = updatedContent;
    setFormationsProfessions(updatedFormations);

    setValue(`task-${id}`, updatedContent, { shouldValidate: true });
    trigger(`task-${id}`);
  };

  useEffect(() => {
    formationsProfessions.forEach((formation) => {
      register(`task-${formation.id}`, {
        required: "Veuillez entrer vos differentes taches",
      });
    });
  }, [register, formationsProfessions]);
  return (
    <div className="main_right" onClick={handleClickOutside}>
      <HeaderMainRight step="step 5/6" h2="Professionel experience" />
      <form
        className="form_information form_information_height"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formationsProfessions.map((formation) => {
          return (
            <div key={formation.id} className="parent_formation">
              <div className="control_select_formation">
                <div className="form_information_signup">
                  <div className="space-signup">
                    <label htmlFor="">Compagny name</label>
                    <input
                      type="text"
                      placeholder="Enter your compagny"
                      name={`entreprise-${formation.id}`}
                      defaultValue={formation.entreprise}
                      {...register(`entreprise-${formation.id}`, {
                        required: `Veuillez entrer votre entreprise`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.entreprise = e.target.value;
                        //   searchElementUser(e.target.value)
                        //   setCurrentEntreprise(`entreprise-${formation.id}`);
                        setFormationsProfessions(updatedFormations);
                        register(`entreprise-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorEntreprise }}
                      onFocus={handleFocusEntreprise}
                      onBlur={handleBlurEntreprise}
                    />
                    <FontAwesomeIcon
                      icon={faAreaChart}
                      className="img_user"
                      style={{ color: iconColorEntreprise }}
                    />
                    {errors[`entreprise-${formation.id}`] && (
                      <span className="error">
                        {errors[`entreprise-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                  <div className="space-signup">
                    <label htmlFor="">Position held</label>
                    <input
                      type="text"
                      placeholder="Enter the position held"
                      name={`position-${formation.id}`}
                      defaultValue={formation.position}
                      {...register(`position-${formation.id}`, {
                        required: `Veuillez entrer votre position`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.position = e.target.value;
                        //   searchElementUser(e.target.value)
                        //   setCurrentPosition(`position-${formation.id}`);
                        setFormationsProfessions(updatedFormations);
                        register(`position-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorPosition }}
                      onFocus={handleFocusPosition}
                      onBlur={handleBlurPosition}
                    />
                    <FontAwesomeIcon
                      icon={faSearchMinus}
                      className="img_user"
                      style={{ color: iconColorPosition }}
                    />
                    {errors[`position-${formation.id}`] && (
                      <span className="error">
                        {errors[`position-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form_information_signup">
                  <div className="space-signup">
                    <label htmlFor="">Date</label>
                    <input
                      type="date"
                      name={`date-${formation.id}`}
                      {...register(`date-${formation.id}`, {
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
                        required: `Veuillez entrer votre annee de naissance`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.year = e.target.value;
                        setFormationsProfessions(updatedFormations);
                        register("year").onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorDate }}
                      defaultValue={formation.date}
                      onFocus={handleFocusDate}
                      onBlur={handleBlurDate}
                    />
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className="img_user"
                      style={{ color: iconColorDate }}
                    />
                    {errors[`date-${formation.id}`] && (
                      <span className="error">
                        {errors[`date-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                  <div className="space-signup">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder="Town,Country"
                      name={`location-${formation.id}`}
                      defaultValue={formation.location}
                      {...register(`location-${formation.id}`, {
                        required: `Veuillez entrer votre location`,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.location = e.target.value;
                        setFormationsProfessions(updatedFormations);
                        register(`location-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorLocation }}
                      onFocus={handleFocusLocation}
                      onBlur={handleBlurLocation}
                    />
                    <FontAwesomeIcon
                      icon={faLocation}
                      style={{ color: iconColorLocation }}
                      className="img_user"
                    />
                    {errors[`location-${formation.id}`] && (
                      <span className="error">
                        {errors[`location-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form_information_signup">
                  <div className="space-signup">
                    <label htmlFor="">Sector</label>
                    <input
                      type="text"
                      placeholder="Enter the activity sector"
                      name={`sector-${formation.id}`}
                      defaultValue={formation.sector}
                      {...register(`sector-${formation.id}`, {
                        required: `Veuillez entrer votre secteur `,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.sector = e.target.value;
                        setFormationsProfessions(updatedFormations);
                        register(`sector-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorSector }}
                      onFocus={handleFocusSector}
                      onBlur={handleBlurSector}
                    />
                    <FontAwesomeIcon
                      icon={faSection}
                      className="img_user"
                      style={{ color: iconColorSector }}
                    />
                    {errors[`sector-${formation.id}`] && (
                      <span className="error">
                        {errors[`sector-${formation.id}`].message}
                      </span>
                    )}
                  </div>
                  <div className="space-signup">
                    {formation.chips && (
                      <div className="parent_info_teck">
                        {formation.chips?.map((infoTek, index) => {
                          return (
                            <span key={index} className="child_info_teck">
                              {infoTek}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    <label htmlFor="technologie">Technologies</label>
                    <input
                      type="text"
                      placeholder="Enter the technologies use"
                      defaultValue={inputValue}
                      className="input_technologie"
                      name={`technologie-${formation.id}`}
                      {...register(`technologie-${formation.id}`, {
                        required: `Veuillez entrer vos technologies `,
                      })}
                      onChange={(e) => {
                        const updatedFormations = [...formationsProfessions];
                        const updatedFormation = updatedFormations.find(
                          (f) => f.id === formation.id
                        );
                        updatedFormation.technologie = e.target.value;
                        searchElementUser(e.target.value);
                        setCurrentTechnologie(`technologie-${formation.id}`);
                        setFormationsProfessions(updatedFormations);
                        register(`technologie-${formation.id}`).onChange(e); // Access onChange from register
                      }}
                      style={{ borderColor: inputBorderColorTechnologies }}
                      onFocus={handleFocusTechnologies}
                      onBlur={handleBlurTechnologies}
                    />
                    {errors[`technologie-${formation.id}`] && (
                      <span className="error">
                        {errors[`technologie-${formation.id}`].message}
                      </span>
                    )}
                    {currentTechnologie === `technologie-${formation.id}` &&
                      searchResults && (
                        <div className="option">
                          {searchResults.map((infosUsers, index) => {
                            return (
                              <span
                                key={index}
                                onClick={() =>
                                  handleChildClickTechnologie(
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
                <div className="form_information_profession">
                  <span className="bio">Task</span>
                  <div
                    className="form_information_signup_description_profession"
                    style={{ borderColor: inputBorderColorTask }}
                    onFocus={handleFocusTask}
                    onBlur={handleBlurTask}
                  >
                    <div className="form_information_signup_description_profession-top">
                      <img
                        src={gras}
                        alt=""
                        className="img_profession"
                        onClick={grasText}
                      />
                      <img
                        src={underline}
                        alt=""
                        className="img_profession underline"
                        onClick={underlineText}
                      />
                      <img
                        src={italique}
                        alt=""
                        className="img_profession italique"
                        onClick={italiqueText}
                      />
                      <img
                        src={police}
                        alt=""
                        className="img_profession police"
                      />
                      <img
                        src={link}
                        alt=""
                        className="img_profession link"
                        onClick={linkText}
                      />
                      <img
                        src={list}
                        alt=""
                        className="img_profession list"
                        onClick={listText}
                      />
                    </div>
                    <div
                      contentEditable
                      name={`task-${formation.id}`}
                      defaultValue={formation.task}
                      placeholder="Add text here"
                      className="textarea"
                      {...register(`task-${formation.id}`, {
                        required: `Veuillez entrer votre differentes taches`,
                      })}
                      ref={(el) => (textAreaRefs.current[formation.id] = el)}
                      onInput={() => handleContentChange(formation.id)}
                      dangerouslySetInnerHTML={{ __html: formation.task }}
                    ></div>

                    <div className="form_information_signup_description_profession-bottom">
                      <span>characters:{formation.task.length}</span>
                    </div>
                  </div>
                  {errors[`task-${formation.id}`] && (
                    <span className="c">
                      {errors[`task-${formation.id}`].message}
                    </span>
                  )}
                </div>
              </div>
              <div className="add_remove">
                {formation.id !== 1 && (
                  <div className="remove_formation">
                    <img
                      src={remove}
                      className="remove"
                      alt="remove_formation"
                      onClick={handleRemoveProfession}
                    />
                    <span className="remove-button">Remove</span>
                  </div>
                )}
                <span className="element_none">0</span>
                <span
                  className="add"
                  onClick={() => handleAddProfession(formation.id)}
                >
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
