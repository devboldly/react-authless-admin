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
exports.AdminOnly = void 0;
var React = __importStar(require("react"));
var useAdmin_1 = require("../hooks/useAdmin");
/**
 * See documentation: [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly)
 *
 * A component wrapper that hides children unless switched on site-wide by [useAdmin](https://justinmahar.github.io/react-authless-admin/useAdmin).
 *
 * This is for static sites that want to show components to admins ([nonsensitive only](https://justinmahar.github.io/react-authless-admin/AdminOnly#security-note)) but do not have user authentication to determine who is an admin or not.
 *
 * Anything wrapped in `AdminOnly` will be hidden unless admin is switched on.
 *
 * Things you hide should be:
 * - Useless to general users, even if they had access to it (which they do)
 * - Convenient for admins, such as direct links to edit content or other admin tools requiring a login
 *
 * > The content hidden should be useless to general users and convenient for admins.
 *
 * See [NonAdminOnly](https://justinmahar.github.io/react-authless-admin/NonAdminOnly) to hide components when admin is switched on.
 */
function AdminOnly(props) {
    var isAdminEnabled = useAdmin_1.useAdmin(props.localStorageKeyName)[0];
    return React.createElement(React.Fragment, null, (isAdminEnabled || !!props.alwaysVisible) && props.children);
}
exports.AdminOnly = AdminOnly;
