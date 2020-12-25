/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core/TextField';
export declare enum InputTypes {
    password = "password",
    email = "email",
    text = "text"
}
declare type CustomInputProps = {
    error?: boolean;
    inputProps?: any;
    name?: string;
    label?: string;
};
declare type InputProps = TextFieldProps & CustomInputProps;
declare const Input: {
    (props: InputProps): JSX.Element;
    defaultProps: {
        error: boolean;
    };
};
export default Input;
