const assert = require("assert");

var membershipApplcation = (args) => {

    assert.ok(args.first && args.last, "need a name!");
    
    this.first = args.first;
    
    this.emailIsValid = () => {

    };

    this.heightIsValid = () => {

    };


    this.ageIsValid = () => {

    };


    this.weightIsValid = () => {

    };


    this.isValid = () => {
        return this.emailIsValid() &&
            this.heightIsValid() &&
            this.ageIsValid() &&
            this.weightIsValid();
    };

};