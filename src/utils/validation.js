function isValidUser(UserData){
    if(!UserData){
        return false
    }

    if(!UserData.username || typeof UserData.username !== 'string'){
        return false;
    }

    if(!UserData.email || typeof UserData.email !== 'string' || !isValidEmail(UserData.email)){
       return false;
    } 

    return true;
}




function isValidEmail(email){
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


module.exports = {
    isValidUser,
};