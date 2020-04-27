"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var useAdmin_1 = require("../hooks/useAdmin");
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
function AdminToggle(props) {
    var _a = useAdmin_1.useAdmin(props.localStorageKeyName), isAdmin = _a[0], setIsAdmin = _a[1];
    var handleButtonClick = function (event) {
        setIsAdmin(!isAdmin);
        try {
            props.componentProps.onClick && props.componentProps.onClick(event);
        }
        catch (e) {
            console.error(e);
        }
    };
    var Button = props.component;
    return (React.createElement(Button, __assign({}, props.componentProps, { onClick: handleButtonClick }), isAdmin ? props.enabledChildren : props.disabledChildren));
}
exports.AdminToggle = AdminToggle;
AdminToggle.defaultProps = {
    component: function (props) { return React.createElement("button", __assign({}, props), props.children); },
    enabledChildren: React.createElement(React.Fragment, null, "Disable Admin"),
    disabledChildren: React.createElement(React.Fragment, null, "Enable Admin"),
};
