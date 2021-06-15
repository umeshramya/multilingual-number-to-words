type string_array_10 = [string, string, string, string, string, string, string, string, string, string]
type string_array_4 = [string, string, string, string]
type string_array_6 = [string, string, string, string, string, string]

interface LAN{
        single_digits: string_array_10;
        teens: string_array_10;
        double_digits: string_array_10;
        crore_lakhs: string_array_4;
        million_billions: string_array_6;
        and_currency: string_array_4
}

// interface LAN{
//     single_digits: string[10];
//     teens: string[10];
//     double_digits: string[10];
//     crore_lakhs: string[4];
//     million_billions: string[6];
//     and_currency: string[4]
// }



export {LAN}