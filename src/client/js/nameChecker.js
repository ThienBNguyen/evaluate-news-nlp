function checkForName(userInput) {

    var regex = '/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g';
    var newUrl = new RegExp(regex, 'i');
    return newUrl.test(userInput);


    // let res = userInput.match(
    //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    // );
    // if (res == null) return false;
    // else return true;
}

export { checkForName }
