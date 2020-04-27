import * as React from 'react';
import { useAdmin } from '../hooks/useAdmin';

export interface AdminToggleProps {
  /** The children used for the toggle component when admin is enabled. Defaults to the string `'Disable Admin'` */
  enabledChildren?: React.ReactNode;
  /** The children used for the toggle component when admin is disabled. Defaults to the string `'Enable Admin'` */
  disabledChildren?: React.ReactNode;
  /** Component used for the toggle. Defaults to an HTML `button`. Provide your own component if you'd like. */
  component?: any;
  /** Optional props for the component. */
  componentProps?: any;
  /** When admin is toggled, a boolean value is set to local storage. That value is then used site-wide by the other components in this library. Optionally provide the local storage key name here. Defaults to `'react-authless-admin'` */
  localStorageKeyName?: string;
}

/**
 * See documentation: https://devboldly.github.io/react-authless-admin/AdminToggle
 *
 * The AdminToggle component allows you to enable or disable admin-only components on a static site that lacks user authentication. Uses the [useAdmin hook](https://devboldly.github.io/react-authless-admin/useAdmin).
 *
 * Using this, components such as an edit content button (that takes you to an admin page elsewhere) can be hidden from all non-admin users.
 *
 * This is accomplished via a [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) value. This means switching admin on will persist between browser sessions unless the user clears their history.
 *
 * This component renders as a button, but can be customized however you like using the `component` prop.
 */
export function AdminToggle(props: AdminToggleProps): JSX.Element {
  const [isAdmin, setIsAdmin] = useAdmin(props.localStorageKeyName);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setIsAdmin(!isAdmin);
    try {
      props.componentProps.onClick && props.componentProps.onClick(event);
    } catch (e) {
      console.error(e);
    }
  };

  const Button = props.component;
  return (
    <Button {...props.componentProps} onClick={handleButtonClick}>
      {isAdmin ? props.enabledChildren : props.disabledChildren}
    </Button>
  );
}

AdminToggle.defaultProps = {
  component: (props: any) => <button {...props}>{props.children}</button>,
  enabledChildren: <>Disable Admin</>,
  disabledChildren: <>Enable Admin</>,
};
