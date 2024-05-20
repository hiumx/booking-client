import { EMAIL_REGEX, PHONE_REGEX } from '~/constants';
import _ from 'lodash';

export const checkConfirmPassword = (p, cp) => p === cp;

export const validateTypeInput = input => {
    if (EMAIL_REGEX.test(input)) 
        return "email";
    else if(PHONE_REGEX.test(input)) 
        return "phone"
    return "invalid";
}

export const checkInputEmpty = inputs => {
    for (let i = 0; i < inputs.length; i++) {
        if(_.isEmpty(inputs[i]))
            return false;
    }
    return true;
}