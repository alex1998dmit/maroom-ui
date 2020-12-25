import * as React from 'react';
export declare enum ButtonSizes {
    sm = "small",
    lg = "large"
}
export declare enum ButtonThemes {
    brandPrimary = "brandPrimary",
    gray400 = "gray400",
    redLight = "redLight"
}
declare type ButtonProps = {
    size?: ButtonSizes;
    theme: string;
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
};
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        disabled: boolean;
        fullWidth: boolean;
        theme: string;
    };
};
export default Button;
