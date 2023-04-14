/*
password_validate = (password) => {
    var re = {
        capital: /(?=.*[A-Z])/,
        length: /(?=.{7,40}$)/,
        specialChar: /[ -\/:-@\[-\`{-~]/,
        digit: /(?=.*[0-9])/,
    };
    return (
        re.capital.test(password) &&
        re.length.test(password) &&
        re.specialChar.test(password) &&
        re.digit.test(password)
    );
};


/(?=.*[A-Z])/ - will check at least one capital char
/(?=.{7,40}$)/ - will check the char length between 7 to 40
/[ -/:-@[-`{-~]/ - will check at least one symbol
/(?=.*[0-9])/ - will check at least one number



*/