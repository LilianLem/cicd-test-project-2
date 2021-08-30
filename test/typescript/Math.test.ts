import {MathLib} from "../../src/MathLib";

describe('MathLib tests', () => {
    it("should return correct mathematic value when using sum function", () => {
        expect(MathLib.sum(4,6)).toBe(10);
        expect(MathLib.sum(6,4)).toBe(10);
        expect(MathLib.sum(-6,-4)).toBe(-10);
        expect(MathLib.sum(-6,4)).toBe(-2);
        expect(MathLib.sum(6,-4)).toBe(2);
        //expect(() => {MathLib.sum("blabla",6)}).toThrowError("At least one argument is not a number !");
    });

    it("should return correct mathematic value when using substract function", () => {
        expect(MathLib.substract(4,6)).toBe(-2);
        expect(MathLib.substract(6,4)).toBe(2);
        expect(MathLib.substract(-6,-4)).toBe(-2);
        expect(MathLib.substract(-6,4)).toBe(-10);
        expect(MathLib.substract(6,-4)).toBe(10);
        //expect(() => {MathLib.substract(6, "blabla")}).toThrowError("At least one argument is not a number !");
    })

    it("should return correct mathematic value when using multiply function", () => {
        expect(MathLib.multiply(4,6)).toBe(24);
        expect(MathLib.multiply(6,4)).toBe(24);
        expect(MathLib.multiply(-6,-4)).toBe(24);
        expect(MathLib.multiply(-6,4)).toBe(-24);
        expect(MathLib.multiply(6,-4)).toBe(-24);
        //expect(() => {MathLib.multiply(6, "blabla")}).toThrowError("At least one argument is not a number !");
    })

    it("should return correct mathematic value when using divide function", () => {
        expect(MathLib.divide(4,8)).toBe(0.5);
        expect(MathLib.divide(8,4)).toBe(2);
        expect(MathLib.divide(-8,-4)).toBe(2);
        expect(MathLib.divide(-8,4)).toBe(-2);
        expect(MathLib.divide(8,-4)).toBe(-2);
        expect(() => {MathLib.divide(8,0)}).toThrowError("Can't divide by zero !");
        //expect(() => {MathLib.divide("blabla", 6)}).toThrowError("At least one argument is not a number !");
    })

    it("should return correct mathematic value when combining functions", () => {
        expect(MathLib.sum(MathLib.multiply(2,4),8)).toBe(16);
        expect(MathLib.divide(MathLib.sum(20,15),2)).toBe(17.5);
        expect(MathLib.multiply(3,MathLib.substract(20,10))).toBe(30);
        expect(MathLib.substract(30,MathLib.divide(25,5))).toBe(25);
        //expect(() => {MathLib.substract(6, MathLib.divide("blabla", 6))}).toThrowError("At least one argument is not a number !");
    })
})