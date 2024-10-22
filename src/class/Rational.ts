/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    numerator: number;
    denominator: number;
    constructor(numerator: number, denominator: number) {
        this.denominator = denominator;
        this.numerator = numerator;
    }
    public getnumerator() {
        return this.numerator;
    }
    public getdenominator() {
        return this.denominator;
    }
    public toString() {
        return `${this.numerator}/${this.denominator}`;
    }

    gcd(a: number, b: number): number {
        while (b != 0) {
            let temp: number = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    public normalize(): Rational {
        let gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }
    public isWhole(): boolean {
        return this.numerator % this.denominator == 0;
    }
    public isDecimal(): boolean {
        return !this.isWhole();
    }
    public equals(r: Rational): boolean {
        return this.normalize().numerator == r.numerator && this.normalize().denominator == r.denominator;
    }
    public static _parseRational(numer:String[], denomina:String[]):Rational{
        let num = numer.join('');
        let denom = denomina.join('');
        return new Rational(parseInt(num),parseInt(denom));
    }
    public static parseRational(str:String):Rational{
        let parts = str.split('/');
        let num = parseInt(parts[0]);
        let denom = parseInt(parts[1]);
        return new Rational(num,denom);
    }

}