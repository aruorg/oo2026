import { IDCode } from "../02_IDNumber";

test("Gender", ()=>{
    expect(new IDCode("60510228890").gender()).toBe("F");
});