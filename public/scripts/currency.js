class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency= firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";

        this.amount = null;
    }

    async exchange(){
        let response = await fetch(this.url + this.firstCurrency);
        let data = await response.json();

        return data;
    }

    
    changeAmount(newAmount){
        this.amount = newAmount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

    


}