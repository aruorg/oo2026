import { Calculator } from "../03_calculator";

let calcobj:Calculator;

//THIS RUNS BEFORE EVERY TEST TO CLEAN THE DATA
beforeEach(()=>{
    calcobj=new Calculator();
});

test("empty panel", ()=>{
    expect(calcobj.getPanelContent()).toBe("");
});

test("simple input", ()=>{
    calcobj.pressButton("7");
    expect(calcobj.getPanelContent()).toBe("7");
});

test("multiple input", ()=>{
    calcobj.pressButton("7");
    calcobj.pressButton("8");
    expect(calcobj.getPanelContent()).toBe("78");
});

test("clear input", ()=>{
    calcobj.pressButton("7");
    calcobj.pressButton("8");
    calcobj.pressButton("C");
    expect(calcobj.getPanelContent()).toBe("0");
});

