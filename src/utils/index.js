import { EMAIL_REGEX, PHONE_REGEX } from '~/constants';
import _ from 'lodash';

const listName = ["Review score", "Good", "Very Good", "Fabulous", "Superb", "Exceptional"];

export const checkConfirmPassword = (p, cp) => p === cp;

export const validateTypeInput = input => {
    if (EMAIL_REGEX.test(input))
        return "email";
    else if (PHONE_REGEX.test(input))
        return "phone"
    return "invalid";
}

export const checkInputEmpty = inputs => {
    for (let i = 0; i < inputs.length; i++) {
        if (_.isEmpty(inputs[i]))
            return false;
    }
    return true;
}

export const checkObjEmpty = obj => _.isEmpty(obj);

export const isRoleExist = (arr, e) => arr?.some(a => a.name === e);

export const mapToNameFromScore = score => {
    if (score < 7.5) {
        return listName[0];
    } else if (score < 8) {
        return listName[1];
    } else if (score < 8.5) {
        return listName[2];
    } else if (score < 9) {
        return listName[3];
    } else if (score < 9.5) {
        return listName[4];
    } else if (score <= 10) {
        return listName[5];
    } else {
        return listName[0];
    }
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date) {
    // Define options for the toLocaleDateString method
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    };

    // Use toLocaleDateString with the defined options
    return date.toLocaleDateString('en-US', options);
}