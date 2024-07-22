// ************************************************** //
// UTILS
// ************************************************** //
export const hasCapitalizedLetter = (value: string) => {
  return /[A-Z]/.test(value);
};

export const hasNumber = (value: string) => {
  return /[0-9]/.test(value);
};

export const hasSpecialCharacter = (value: string) => {
  return /[!@#$%^&*(),.?":{}|<>]/.test(value);
};

// ************************************************** //
// RULES
// ************************************************** //
export const nameValidation = {
  maxLength: 50,
  required: {
    value: true,
    message: "Il campo è obbligatorio",
  },
};

export const surnameValidation = {
  maxLength: 50,
  required: {
    value: true,
    message: "Il campo è obbligatorio",
  },
};

export const emailValidation = {
  maxLength: 100,
  required: {
    value: true,
    message: "Il campo è obbligatorio",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Indirizzo email non valido",
  },
};

export const phoneValidation = {
  required: {
    value: true,
    message: "Il campo è obbligatorio",
  },
  pattern: {
    value: /^\+(?:3[0-9]{1,2}|[1-9][0-9]?)(?: ?\d){9,12}$/,
    message: "Numero di telefono non valido",
  },
};

export const passwordValidation = {
  maxLength: 100,
  minLength: {
    value: 8,
    message: "Inserire una password con almeno 8 caratteri",
  },
  required: "Il campo è obbligatorio",
  validate: (value: string) => {
    if (!hasCapitalizedLetter(value)) {
      return "La password deve contenere una lettera maiuscola";
    } else if (!hasNumber(value)) {
      return "La password deve contenere un numero";
    } else if (!hasSpecialCharacter(value)) {
      return "La password deve contenere un carattere speciale";
    }
    return true;
  },
};
