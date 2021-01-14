import Big from 'big.js';

const operate = (numberOne , numeberTwo, operation) => {

    let first = new Big (numberOne);
    let second = new Big (numeberTwo);
    let result

    if (operation == '-'){
       result = first.minus(second);
       return result
    }

    if (operation == '÷'){
        result = first.div(second);
        return result
     }

     if (operation == '+'){
        result = first.plus(second);
        return result
     }

     if (operation == 'X'){
        result = first.times(second);
        return result
     }

     if (operation == '='){
        result = first.Div(second);
        return result
     }
     
     return result

}