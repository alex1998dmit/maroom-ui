import * as React from 'react';
export declare enum HeadingSizes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5"
}
export declare enum HeadingWeights {
    bold = 600,
    normal = 500,
    medium = 400
}
declare type Props1 = {
    color?: string;
    children?: React.ReactNode;
    size?: HeadingSizes;
    weight?: HeadingWeights;
    textAlign?: string;
};
declare const Heading: {
    (props: Props1): JSX.Element;
    defaultProps: {
        size: HeadingSizes;
        color: string;
    };
};
export default Heading;
