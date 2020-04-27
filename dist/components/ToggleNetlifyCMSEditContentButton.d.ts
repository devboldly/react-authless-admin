import * as React from 'react';
interface AdminToggleProps {
    buttonComponent?: any;
    buttonProps?: any;
    enabledButtonChildren?: React.ReactNode;
    disabledButtonChildren?: React.ReactNode;
}
export declare function AdminToggle(props: AdminToggleProps): JSX.Element;
export declare namespace AdminToggle {
    var defaultProps: {
        buttonComponent: (props: any) => JSX.Element;
        buttonProps: {
            title: string;
        };
        enabledButtonChildren: JSX.Element;
        disabledButtonChildren: JSX.Element;
    };
}
export {};
