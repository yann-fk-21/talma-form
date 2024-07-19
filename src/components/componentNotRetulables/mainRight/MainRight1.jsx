import "./mainRight1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { InputLabel } from "../../componentsReutilisables/molecules/inputLabel/InputLabel" a revenir pour factoriser
import { Select } from "../../repeatableComponents/atomes/select/Select";
import {
  faHome,
  faUser,
  faPencilAlt,
  faEnvelope,
  faCaretDown,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { useState } from "react";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { useDataContext } from "../../../customHooks/useDataContext";
import { dataSelectGender } from "../../../data/dataSelectGender";
import { useInputState } from "../../../customHooks/useInputState";
export const MainRight1 = ({ onSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValidInput, setHasValidInput] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const { data, setData } = useDataContext();

  const handleSubmitForm = (data) => {
    // Mettre à jour les données dans le contexte
    setData(data);
    onSubmit(data);
  };
  /*****fin */
  /***change state color  */
  const {
    iconColor: iconColorFirstName,
    inputBorderColor: inputBorderColorFirstName,
    handleFocus: handleFocusFirstName,
    handleBlur: handleBlurFirstName,
  } = useInputState(false, errors.firstName);
  const {
    iconColor: iconColorLastName,
    inputBorderColor: inputBorderColorLastName,
    handleFocus: handleFocusLastName,
    handleBlur: handleBlurLastName,
  } = useInputState(false, errors.lastName);
  const {
    iconColor: iconColorEmailName,
    inputBorderColor: inputBorderColorEmailName,
    handleFocus: handleFocusEmailName,
    handleBlur: handleBlurEmailName,
  } = useInputState(false, errors.email);
  const {
    iconColor: iconColor,
    inputBorderColor: inputBorderColor,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
  } = useInputState(false, errors.bio);
  /****fin de change state color */

  return (
    <div className="main_right">
      <HeaderMainRight step="Step 1/6" h2="Personal informations" />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="form_information"
      >
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="veuillez entrer votre prenom"
              style={{ borderColor: inputBorderColorFirstName }}
              defaultValue={data.firstName}
              name="firstName"
              {...register(
                "firstName",
                {
                  required: "Veuillez entrer votre prenom",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusFirstName}
              onBlur={handleBlurFirstName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorFirstName }}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>
          <div className="space-signup">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="veuillez entrer votre nom"
              style={{ borderColor: inputBorderColorLastName }}
              defaultValue={data.lastName}
              {...register(
                "lastName",
                {
                  required: "Veuillez entrer votre nom",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusLastName}
              onBlur={handleBlurLastName}
            />
            <FontAwesomeIcon
              icon={faHome}
              className="img_user"
              style={{ color: iconColorLastName }}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="veuillez entrer votre email"
              style={{ borderColor: inputBorderColorEmailName }}
              defaultValue={data.email}
              {...register(
                "email",
                {
                  required: "Veuillez entrer votre adresse e-mail",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Mauvaise syntaxe d'email",
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusEmailName}
              onBlur={handleBlurEmailName}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="img_user"
              style={{ color: iconColorEmailName }}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <Select
            checkDefault="Male"
            dataSelectGender={dataSelectGender}
            checkGenre="gender"
            nameGender="sexe"
            gender={faVenus}
            up={faCaretDown}
          />
        </div>
        <div className="form_information_signup_description">
          <span className="bio">Bio</span>
          <div
            className="form_information_signup_description_bio"
            style={{ borderColor: inputBorderColor }}
          >
            <textarea
              type="text"
              className="textarea_mainRight1"
              placeholder="Tell us something about you"
              defaultValue={data.bio}
              name="bio"
              {...register(
                "bio",
                {
                  required: "Veuillez entrer votre biographie",
                  minLength: {},
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="write"
              style={{ color: iconColor }}
            />
            {errors.bio && <span className="error">{errors.bio.message}</span>}
          </div>
        </div>
        <div className=".btn_container_mainright_1">
          <ButtonNext next="Next step" />
        </div>
      </form>
    </div>
  );
};
