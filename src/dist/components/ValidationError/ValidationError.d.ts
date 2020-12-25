import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    open: boolean;
};
declare const ValidationError: {
    (props: Props): JSX.Element;
    defaultProps: {
        open: boolean;
    };
};
export default ValidationError;
