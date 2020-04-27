function checkForName(userInput) {
    if (!checkForName(userInput)) {
        alert("Not a valid url");
        var regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        var newUrl = new RegExp(regex, 'i');
        return newUrl.test(userInput);
    }




    // let res = userInput.match(
    //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    // );
    // if (res == null) return false;
    // else return true;
}

export { checkForName }
