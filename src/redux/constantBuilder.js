export function createConstant(moduleName, actionName) {

    return "TLNT_APP_" + moduleName + "_" + actionName;
}

export default createConstant;