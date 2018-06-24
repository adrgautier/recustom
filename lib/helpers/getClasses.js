"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (mapper, props, state) {
    var stateClasses = mapper;
    if (typeof mapper === "function") {
        if (mapper.length === 2 && state === null) {
            console.warn("state classes mapper expect a state but got null, you may have forgot to bind state");
            stateClasses = mapper(props, {});
        }
        else {
            stateClasses = mapper(props, state);
        }
    }
    return stateClasses;
});
//# sourceMappingURL=getClasses.js.map