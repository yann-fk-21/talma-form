import "./buttonNext.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
export const ButtonPrewiew = ({ update }) => {
  return (
    <div className="parent_preview_step" onClick={update}>
      <FontAwesomeIcon icon={faChevronLeft} className="preview" />
      <span className="preview_step">Previous</span>
    </div>
  );
};
