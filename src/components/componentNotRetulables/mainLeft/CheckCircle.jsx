import user from "../../../assets/icons/user.png";
import localisation from "../../../assets/icons/localisation.png";
import job from "../../../assets/icons/job.png";
import diplome from "../../../assets/icons/diplome.png";
import bag from "../../../assets/icons/bag.png";
import reglages from "../../../assets/icons/reglages.png";
import like from "../../../assets/icons/like.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faBagShopping,
  faGraduationCap,
  faUser,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
export const CheckCircle = ({ stepEtape }) => {
  return (
    <div className="check_circle">
      <div
        className={
          stepEtape === 1
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 1 ? (
          <div className="circle-img-transition circle-img">
            <FontAwesomeIcon icon={faUser} className="check_circle_img" />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
      <div
        className={
          stepEtape === 2
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 2 ? (
          <div className="circle-img-transition circle-img">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 1 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className="check_circle_img"
            />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="localisation" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
      <div
        className={
          stepEtape === 3
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 3 ? (
          <div className="circle-img-transition circle-img">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : stepEtape === 2 ? (
          <div className="circle-img-transition circle-img1">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : stepEtape === 1 ? (
          <div className="circle-img-transition circle-img1">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="localisation" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
      <div
        className={
          stepEtape === 4
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 4 ? (
          <div className="circle-img-transition circle-img">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 3 ? (
          <div className="circle-img-transition circle-img1">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : stepEtape === 2 ? (
          <div className="circle-img-transition circle-img1">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : stepEtape === 1 ? (
          <div className="circle-img-transition circle-img1">
            <img src={job} alt="job" className="check_circle_img" />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="localisation" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
      <div
        className={
          stepEtape === 5
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 5 ? (
          <div className="circle-img-transition circle-img">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 4 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 3 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 2 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="check_circle_img"
            />
          </div>
        ) : stepEtape === 1 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="check_circle_img"
            />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="localisation" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
      <div
        className={
          stepEtape === 6
            ? "check_circle_img_span"
            : "check_circle_img_span_hidden"
        }
      >
        {stepEtape === 6 ? (
          <div className="circle-img-transition circle-img">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : stepEtape === 5 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : stepEtape === 4 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : stepEtape === 3 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : stepEtape === 2 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : stepEtape === 1 ? (
          <div className="circle-img-transition circle-img1">
            <FontAwesomeIcon icon={faLink} className="check_circle_img" />
          </div>
        ) : (
          <div className="circle-img-transition circle-img-validate">
            <img src={like} alt="localisation" className="check_circle_img" />
          </div>
        )}
        <span className="check_circle_span"></span>
      </div>
    </div>
  );
};
