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
function NetlifyCMSButton(props) {
    var isAdminEnabled = useNetlifyCMSAdminEnabled_1.useNetlifyCMSAdminEnabled()[0];
    // Build the link to the content, linking as deep as we can given the props provided
    var href = props.adminRootPath + "/#/collections/";
    if (props.collection) {
        href += props.collection + "/entries/";
        if (props.entry) {
            href += "" + props.entry;
        }
    }
    var Button = props.buttonComponent;
    return (React.createElement(React.Fragment, null, (props.alwaysVisible || isAdminEnabled) && (React.createElement("a", { href: href, target: "_blank", rel: "noopener noreferrer" },
        React.createElement(Button, __assign({}, props.buttonProps), props.buttonChildren)))));
}
exports.NetlifyCMSButton = NetlifyCMSButton;
NetlifyCMSButton.defaultProps = {
    alwaysVisible: false,
    adminRootPath: '/admin',
    buttonComponent: function (props) { return React.createElement("button", __assign({}, props), props.children); },
    buttonProps: { title: 'Edit Content' },
    buttonChildren: (React.createElement(React.Fragment, null,
        React.createElement("span", { role: "img", "aria-label": "pencil" }, "\u270F\uFE0F"),
        ' ',
        "Edit Content")),
};
