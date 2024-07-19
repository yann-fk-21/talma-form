import { parsePhoneNumber } from 'awesome-phonenumber'

export const validatePhoneNumber = ({value})=>{
  const parsedPhoneNumber = parsePhoneNumber(value);
  if (parsedPhoneNumber.valid === false) {
      return 'Format de numéro de téléphone invalide';
  }
  console.log(parsedPhoneNumber)
}