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
var useNetlifyCMSAdminEnabled_1 = require("../hooks/useNetlifyCMSAdminEnabled");
function AdminToggle(props) {
    var _a = useNetlifyCMSAdminEnabled_1.useNetlifyCMSAdminEnabled(), isAdminEnabled = _a[0], setEditContentButtonEnabled = _a[1];
    var handleButtonClick = function (event) {
        setEditContentButtonEnabled(!isAdminEnabled);
        try {
            props.buttonProps.onClick && props.buttonProps.onClick(event);
        }
        catch (e) {
            console.error(e);
        }
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    };
    var Button = props.buttonComponent;
    return (React.createElement(Button, __assign({}, props.buttonProps, { onClick: handleButtonClick }), isAdminEnabled ? props.enabledButtonChildren : props.disabledButtonChildren));
}
exports.AdminToggle = AdminToggle;
AdminToggle.defaultProps = {
    buttonComponent: function (props) { return React.createElement("button", __assign({}, props), props.children); },
    buttonProps: { title: 'Toggle Edit Content Button' },
    enabledButtonChildren: React.createElement(React.Fragment, null, "Disable Edit Content Button"),
    disabledButtonChildren: React.createElement(React.Fragment, null, "Enable Edit Content Button"),
};
