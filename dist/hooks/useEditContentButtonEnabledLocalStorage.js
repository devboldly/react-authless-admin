"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_use_local_storage_1 = require("@devboldly/react-use-local-storage");
function useNetlifyCMSAdminEnabled() {
    var _a = react_use_local_storage_1.useLocalStorageBoolean('useNetlifyCMSAdminEnabled.isAdminEnabled', false), isAdminEnabled = _a[0], setEditContentButtonEnabled = _a[1];
    return [isAdminEnabled !== null && isAdminEnabled, setEditContentButtonEnabled];
}
exports.useNetlifyCMSAdminEnabled = useNetlifyCMSAdminEnabled;
