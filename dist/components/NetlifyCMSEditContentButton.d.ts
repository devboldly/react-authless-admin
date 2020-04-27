import * as React from 'react';
interface EditContentButtonProps {
    collection: string;
    entry: string;
    alwaysVisible?: boolean;
    adminRootPath?: string;
    buttonComponent?: any;
    buttonProps?: any;
    buttonChildren?: React.ReactNode;
}
export declare function NetlifyCMSButton(props: EditContentButtonProps): JSX.Element;
export declare namespace NetlifyCMSButton {
    var defaultProps: {
        alwaysVisible: boolean;
        adminRootPath: string;
        buttonComponent: (props: any) => JSX.Element;
        buttonProps: {
            title: string;
        };
        buttonChildren: JSX.Element;
    };
}
export {};
