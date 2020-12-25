interface Color {
    main: string;
    contrastText?: string;
}
interface ColorsInterface {
    [value: string]: Color;
}
export declare enum Colors {
    brandPrimary = "brandPrimary",
    gray400 = "gray400",
    gray300 = "gray300",
    gray200 = "gray200",
    customBlack = "customBlack",
    medium = "medium",
    redLight = "redLight",
    customRed = "customRed"
}
declare const colors: ColorsInterface;
export default colors;
