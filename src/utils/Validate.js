export const isValidData = (email,password,confirmPassword,name) => {
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(name===null||(name !== null && name.trim() === "")) return "Name cannot be empty.";
    if(!emailValid) return "Invalid email format.";
    if(!passwordValid) return "Password must be at least 8 characters long and include both letters and numbers.";
    if(password !== confirmPassword) return "Passwords do not match.";
    return null;
}