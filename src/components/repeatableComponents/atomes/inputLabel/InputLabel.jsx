import { useState } from "react";
import "./inputLabel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDataContext } from "../../../../customHooks/useDataContext";
export const InputLabel = ({ icon, firstName, placeholder, name, type, register, validationRules, errors }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValidInput, setHasValidInput] = useState(false);
    const { data, setData } = useDataContext();
    let iconColor, inputBorderColor;
    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
        setHasValidInput(!errors[name]);
    }

    if (errors[name]) {
        iconColor = '#CC212D';
        inputBorderColor = 'gray';
    } else if (isFocused) {
        iconColor = '#B593D7';
        inputBorderColor = '#B593D7';
    } else {
        if (hasValidInput) {
            iconColor = 'black';
            inputBorderColor = 'gray';
        } else {
            iconColor = 'gray';
            inputBorderColor = 'gray';
        }
    }
    const handleInputChange = (name, value) => {

        register.onChange(setData((prevData) => ({
            ...prevData,
            [name]: value,
        })));;
    };
    return (
        <div className="space-signup">
            <label htmlFor={name}>{firstName}</label>
            <input type={type} placeholder={placeholder} name={name} defaultValue={data[name]} style={{ borderColor: inputBorderColor }} onFocus={handleFocus} onBlur={handleBlur} className="input"  {...register(`${name}`, { validationRules }, { onChange: e => setData(e.target.value) })} />
            <FontAwesomeIcon icon={icon} className="img_user" style={{ color: iconColor }} />
            {!isFocused && errors[name] && <span className="error">{errors[name].message}</span>}
        </div>
    )
}

