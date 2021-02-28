"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonAdminOnly = void 0;
var React = __importStar(require("react"));
var useAdmin_1 = require("../hooks/useAdmin");
/**
 * See documentation: [NonAdminOnly](https://justinmahar.github.io/react-authless-admin/NonAdminOnly)
 *
 * A component wrapper that shows children to non-admins unless switched off site-wide by the [useAdmin hook](https://justinmahar.github.io/react-authless-admin/useAdmin).
 *
 * This is for static sites that want to show components for non-admins (and hide for admins) but do not have user authentication.
 *
 * Anything wrapped in `NonAdminOnly` will be hidden when admin is switched on.
 *
 * See [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly) to hide components when admin is switched off.
 */
function NonAdminOnly(props) {
    var isAdminEnabled = useAdmin_1.useAdmin(props.localStorageKeyName)[0];
    return React.createElement(React.Fragment, null, (!isAdminEnabled || !!props.alwaysVisible) && props.children);
}
exports.NonAdminOnly = NonAdminOnly;
