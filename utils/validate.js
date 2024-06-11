export const validateForm = (email,password)=>{
    const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPpasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailVaild) return "Email Id Not Valid"
    if(!isPpasswordValid) return "Password is not Valid"

    return null;

}