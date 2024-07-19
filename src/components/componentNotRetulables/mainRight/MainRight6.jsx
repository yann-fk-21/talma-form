import { useForm } from "react-hook-form";
import { HeaderMainRight } from "../../repeatableComponents/molecules/header/HeaderMainRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPencilAlt,
  faEnvelope,
  faCaretDown,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { useInputState } from "../../../customHooks/useInputState";
import { useState } from "react";
import { ButtonNext } from "../../repeatableComponents/atomes/button/ButtonNext";
import { ButtonPrewiew } from "../../repeatableComponents/atomes/button/ButtonPreview";

export const MainRight6 = ({ onSubmit, update }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const [data, setData] = useState(false);
  /***change state color  */
  const {
    iconColor: iconColorPortfolioName,
    inputBorderColor: inputBorderColorPortfolioName,
    handleFocus: handleFocusPortfolioName,
    handleBlur: handleBlurPortfolioName,
  } = useInputState(false, errors.portfolioName);
  const {
    iconColor: iconColorGithubName,
    inputBorderColor: inputBorderColorGithubName,
    handleFocus: handleFocusGithubName,
    handleBlur: handleBlurGithubName,
  } = useInputState(false, errors.githubName);
  const {
    iconColor: iconColorTwitterName,
    inputBorderColor: inputBorderColorTwitterName,
    handleFocus: handleFocusTwitterName,
    handleBlur: handleBlurTwitterName,
  } = useInputState(false, errors.twitterName);
  const {
    iconColor: iconColorLinkedinName,
    inputBorderColor: inputBorderColorLinkedinName,
    handleFocus: handleFocusLinkedinName,
    handleBlur: handleBlurLinkedinName,
  } = useInputState(false, errors.linkedinName);
  const {
    iconColor: iconColorFacebookName,
    inputBorderColor: inputBorderColorFacebookName,
    handleFocus: handleFocusFacebookName,
    handleBlur: handleBlurFacebookName,
  } = useInputState(false, errors.facebookName);

  /****fin de change state color */
  return (
    <div className="main_right">
      <HeaderMainRight step="Step 6/6" h2="Social media links" />
      <form className="form_information" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="">Portfolio</label>
            <input
              type="text"
              placeholder="Enter your portfolio link"
              style={{ borderColor: inputBorderColorPortfolioName }}
              name="portfolioName"
              {...register(
                "portfolioName",
                {
                  required: "Veuillez entrer votre portfolio",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusPortfolioName}
              onBlur={handleBlurPortfolioName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorPortfolioName }}
            />
            {errors.portfolioName && (
              <span className="error">{errors.portfolioName.message}</span>
            )}
          </div>
          <div className="space-signup">
            <label htmlFor="">Github / Gitlab / Bictbucket</label>
            <input
              type="text"
              placeholder="Enter your github link"
              style={{ borderColor: inputBorderColorGithubName }}
              name="githubName"
              {...register(
                "githubName",
                {
                  required: "Veuillez entrer votre compte github",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusGithubName}
              onBlur={handleBlurGithubName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorGithubName }}
            />
            {errors.githubName && (
              <span className="error">{errors.githubName.message}</span>
            )}
          </div>
        </div>
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="">Twitter</label>
            <input
              type="text"
              placeholder="Enter your twitter link"
              style={{ borderColor: inputBorderColorTwitterName }}
              name="twitterName"
              {...register(
                "twitterName",
                {
                  required: "Veuillez entrer votre compte twitter",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusTwitterName}
              onBlur={handleBlurTwitterName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorTwitterName }}
            />
            {errors.twitterName && (
              <span className="error">{errors.twitterName.message}</span>
            )}
          </div>
          <div className="space-signup">
            <label htmlFor="">Linkedin</label>
            <input
              type="text"
              placeholder="Enter your linkedin link"
              style={{ borderColor: inputBorderColorLinkedinName }}
              name="linkedinName"
              {...register(
                "linkedinName",
                {
                  required: "Veuillez entrer votre compte linkedin",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusLinkedinName}
              onBlur={handleBlurLinkedinName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorLinkedinName }}
            />
            {errors.linkedinName && (
              <span className="error">{errors.linkedinName.message}</span>
            )}
          </div>
        </div>
        <div className="form_information_signup">
          <div className="space-signup">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              placeholder="Enter your facebook link"
              style={{ borderColor: inputBorderColorFacebookName }}
              name="facebookName"
              {...register(
                "facebookName",
                {
                  required: "Veuillez entrer votre compte facebook",
                  minLength: {
                    value: 3,
                  },
                },
                { onChange: (e) => setData(e.target.value) }
              )}
              onFocus={handleFocusFacebookName}
              onBlur={handleBlurFacebookName}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="img_user"
              style={{ color: iconColorFacebookName }}
            />
            {errors.facebookName && (
              <span className="error">{errors.facebookName.message}</span>
            )}
          </div>
        </div>
        <div className="btn_container">
          <ButtonPrewiew update={update} />
          <ButtonNext next="Send" />
        </div>
      </form>
    </div>
  );
};
