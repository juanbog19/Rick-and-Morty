
export default function validation(input) {
    // input = { email:--, password: ---}
    
    const error = {};
    // error= { email: ERROR }

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]"); 

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email válido!";
    }
    if(!input.email) {
        error.email = "Debe ingresar un nombre!";
    }
    if(input.email.length > 35) {
        error.email = "No mayor a 35 caracteres!"
    }
    if(!regexPassword.test(input.password)) {
        error.password = "Al menos un número!";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Entre 6 y 10 caracteres!"
    }
    return error;
}

// export function ValidationEmail(email) {

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const maxLength = 35;

//     if (emailRegex.trim() === '') { // valida que el email no esta vacio
//         return 'El email no puede estar vacio';
//     }

//     if(email.length > maxLength) { //validar que el email no supere la longitud maxima permitida
//         return `El email no puede tener mas de ${maxLength} caracteres`;
//     }

//     if(!emailRegex.test(email)) { // validar que el email cumpla con el formato
//         return 'El email debe ser valido';
//     }

//     return null; // si todas las validaciones pasan, devolver null indicado que no hay errores
// }


// export function ValidatePassword(password) {
//     const numberRegex = /\d/;
//     const minLength = 6;
//     const maxLength = 10;


//     if(!numberRegex.test(password)) { //validar que la constraseña tenga al menos un numero utilizando REGEX
//         return 'La constraseña debe contener al menos un numero.';
//     }

//     if(password.length < minLength || password.length > maxLength) { //validar la longitud de la contraseña
//         return `La contraseña debe tener entre ${minLength} y ${maxLength} caracteres.`;
//     }

//     return null; // si todas las validaciones pasan, devolver null indicando que no hay errores
// }