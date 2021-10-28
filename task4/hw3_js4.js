String.prototype.removeSpecialCharacters = function() {  
        const regEx = /[@#%^&!?0-9]/g;
        console.log(this.replace(regEx, ''));
        return this.replace(regEx, '');
};


'abc?'.removeSpecialCharacters();
'HE!!LL??O12345##@%'.removeSpecialCharacters();