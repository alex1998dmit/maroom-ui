import * as React from 'react';
export declare enum TextSizes {
    textSm = "text_small",
    textMd = "text_md",
    textLg = "text_lg"
}
export declare enum TextWeights {
    bold = 600,
    normal = 500,
    medium = 400
}
declare type Props = {
    color?: string;
    children: React.ReactNode;
    size?: TextSizes;
    weight?: TextWeights;
    textAlign?: string;
};
declare const Text: {
    (props: Props): JSX.Element;
    defaultProps: {
        size: TextSizes;
        color: string;
    };
};
export default Text;
