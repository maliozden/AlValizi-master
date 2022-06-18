class UI{

    changeResult(result){
        
        const outputElement = document.getElementById("outputResult");
        
        outputElement.value = result;
        
    }

    changeElements(element1,element2){
        const outputFirst = document.getElementById("outputFirst");
        const outputSecond = document.getElementById("outputSecond");
        const amount = document.getElementById("amount");

        outputFirst.innerText =element1;
        outputSecond.innerText = element2;
        amount.value = null;
    }
}