import {Utils} from "../../src/Utils";

describe('Utils tests', () => {
    it("should return a boolean telling if all arguments are number", () => {
        expect(Utils.checkIfNumber(2)).toBe(true);
        expect(Utils.checkIfNumber(-2)).toBe(true);
        expect(Utils.checkIfNumber("blabla")).toBe(false);
        expect(Utils.checkIfNumber(true)).toBe(false);
        expect(Utils.checkIfNumber(-4.5)).toBe(true);
    });
})