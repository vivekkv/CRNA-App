export function createConstant(moduleName, actionName) {

    return "TLNT_" + moduleName + "_" + actionName;
}

export default createConstant;