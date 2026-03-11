test('test 1', ()=>{
    expect(3+2).toBe(5);
});

import { isPositive }  from "../01_positiveNo";

test("positivity", () => {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(-3)).toBe(false);
    expect(isPositive(0)).toBe(false);
});