interface CalculatingFunction{
    calculate(eur:number):number;

    inputUnit(): string;

    outputUnit(): string;
}

class EurToUsd implements CalculatingFunction{
    calculate(eur: number): number {
         if(eur < 0) throw new Error("negatiivset arvu ei saa sisestada");
        return eur*1.1643;
    }
    inputUnit(): string {
        return "EUR";
    }
    outputUnit(): string {
        return "USD";
    }
}
class UsdToEur implements CalculatingFunction{
    calculate(dollars: number): number {
         if(dollars < 0) throw new Error("negatiivset arvu ei saa sisestada");
        return dollars*0.8609;
    }
    inputUnit(): string {
        return "USD";
    }
    outputUnit(): string {
        return "EUR";
    }
}
class EurToGbp implements CalculatingFunction{
    calculate(eur: number): number {
         if(eur < 0) throw new Error("negatiivset arvu ei saa sisestada");
        return eur*0.8655;
    }
    inputUnit(): string {
        return "EUR";
    }
    outputUnit(): string {
        return "GBP";
    }
}
class GbpToEur implements CalculatingFunction{
    calculate(pounds: number): number {
        if(pounds < 0) throw new Error("negatiivset arvu ei saa sisestada");
        return pounds*1.1555;
    }
    inputUnit(): string {
        return "GBP";
    }
    outputUnit(): string {
        return "EUR";
    }
}