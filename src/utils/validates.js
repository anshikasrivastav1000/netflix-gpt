 export const checkValidData = (email,password) =>{

    const isEmailValid = /^[a-fA-F0-9-]+@/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
if(!isEmailValid) return "email is not valid";
if(isPasswordValid) return "password is not valid";

return null;
}