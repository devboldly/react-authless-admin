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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
/**
 * See documentation: [NetlifyCMSButton](https://devboldly.github.io/react-authless-admin/NetlifyCMSButton)
 *
 * A button that takes you to a specific entry or collection in [Netlify CMS](https://www.netlifycms.org/).
 *
 * The button should be given the `collection` name and `entry` name for the Netlify CMS admin page you'd like the button to visit. You can also give it an `href` to manually specify the destination.
 *
 * For static sites that use Netlify CMS but do not have user authentication, place the button inside an [AdminOnly](https://devboldly.github.io/react-authless-admin/AdminOnly) and use the [useAdmin hook](https://devboldly.github.io/react-authless-admin/useAdmin) to make it visible for admins.
 */
function NetlifyCMSButton(props) {
    var href = props.href;
    // If not manually specified with href, build the link to the content,
    // linking as deep as we can given the props provided
    if (typeof href === 'undefined') {
        href = props.adminRootPath + "/#/collections/";
        if (props.collection) {
            href += encodeURIComponent(props.collection) + "/entries/";
            if (props.entry) {
                href += "" + encodeURIComponent(props.entry);
            }
        }
    }
    var linkProps = props.openInNewWindow ? { target: '_blank', rel: 'noopener noreferrer' } : undefined;
    var Button = props.component;
    return (React.createElement("a", __assign({ href: href }, linkProps),
        React.createElement(Button, __assign({}, props.componentProps), props.children)));
}
exports.NetlifyCMSButton = NetlifyCMSButton;
NetlifyCMSButton.defaultProps = {
    alwaysVisible: false,
    adminRootPath: '/admin',
    component: function (_a) {
        var children = _a.children, rest = __rest(_a, ["children"]);
        return React.createElement("button", __assign({}, rest), children);
    },
    componentProps: { title: 'Edit' },
    children: 'Edit',
};
