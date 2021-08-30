// import {Utils} from "./Utils";

export class MathLib
{
    public static sum(number1:number, number2:number)
    {
        /*if(!Utils.checkIfNumber(number1) || !Utils.checkIfNumber(number2))
        {
            throw new Error("At least one argument is not a number !");
        }*/

        return number1+number2;
    }

    public static substract(number1:number, number2:number)
    {
        /*if(!Utils.checkIfNumber(number1) || !Utils.checkIfNumber(number2))
        {
            throw new Error("At least one argument is not a number !");
        }*/

        return number1-number2;
    }

    public static multiply(number1:number, number2: number)
    {
        /*if(!Utils.checkIfNumber(number1) || !Utils.checkIfNumber(number2))
        {
            throw new Error("At least one argument is not a number !");
        }*/

        return number1*number2;
    }

    public static divide(number1:number, number2: number)
    {
        /*if(!Utils.checkIfNumber(number1) || !Utils.checkIfNumber(number2))
        {
            throw new Error("At least one argument is not a number !");
        }*/

        if(number2 === 0)
        {
            throw new Error("Can't divide by zero !");
        }

        return number1/number2;
    }
}
