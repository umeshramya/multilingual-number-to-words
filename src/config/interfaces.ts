type string_array_10 = [string, string, string, string, string, string, string, string, string, string]
type string_array_4 = [string, string, string, string]
type string_array_6 = [string, string, string, string, string, string]

type NumberToWordStyle = "LakhsAndCrore" | "MillionAndBillion"
type DecimalStyle = "Currency" | "Scientific"



interface LAN{
        single_digits: string_array_10;
        teens: string_array_10;
        double_digits: string_array_10;
        crore_lakhs: string_array_4;
        million_billions: string_array_6;
        and_currency: string_array_4
}

interface WORD{
        getWord(_number:Number):string;
}







export {LAN, WORD}
export type {NumberToWordStyle, DecimalStyle}