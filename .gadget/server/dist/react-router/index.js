"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reactRouterConfigOptions", {
    enumerable: true,
    get: function() {
        return reactRouterConfigOptions;
    }
});
const _constants = require("./constants");
/**
 * Parameters for running a React Router app in Gadget.
 */ const reactRouterConfigOptions = {
    buildDirectory: _constants.BuildDirectory,
    appDirectory: _constants.AppDirectory
};
