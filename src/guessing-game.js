class GuessingGame {
    constructor(){};

    setRange(min, max){
        this.minrange = min;
        this.maxrange = max;
    }

    guess(){
        return Math.round((this.minrange + this.maxrange) / 2);
    }

    lower(){
        this.maxrange = this.guess();
    }

    greater(){
        this.minrange = this.guess();
    }
}

module.exports = GuessingGame;
