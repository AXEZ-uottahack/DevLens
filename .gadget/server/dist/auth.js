"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    generateCode: function() {
        return generateCode;
    },
    hashCode: function() {
        return hashCode;
    },
    preValidation: function() {
        return preValidation;
    }
});
const _nodecrypto = /*#__PURE__*/ _interop_require_default(require("node:crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const generateCode = (numBytes)=>{
    return _nodecrypto.default.randomBytes(numBytes ?? 64).toString("hex");
};
const hashCode = (code)=>{
    return _nodecrypto.default.createHash("sha256").update(code).digest("hex");
};
const getSessionFromRequest = (request)=>{
    if ("applicationSession" in request) {
        return request.applicationSession;
    }
    throw new Error("The request is not a Gadget server request");
};
/**
 * Safely compares a password reset code and hash
 * @param {string} [code] - The password reset code
 * @param {string} [hash] - The hashed password reset code
 * @returns {boolean} - Whether the code is valid or not
 */ /**
 * Utility function to wrap route handlers with protection from unauthenticated requests.
 *
 * @param handler The route handler to protect
 * @param {ProtectedRouteOptions} options Options for the protected route
 * @returns handler function that is wrapped with route protection
 *
 * @example
 * ```ts
 * // routes/GET-protected-route.js
 * const { preValidation } = require("@gadgetinc/auth");
 *
 * module.exports = async ({ request, reply }) => {
 *  await reply.send("this is a protected route");
 * }
 *
 * module.options = {
 *  preValidation,
 * }
 * ```
 */ const preValidation = async (request, reply)=>{
    let authenticated = false;
    const applicationSession = getSessionFromRequest(request);
    authenticated = !!applicationSession.get("user");
    if (!authenticated) {
        if (request.gadgetAuth?.redirectToSignIn) {
            await reply.redirect(request.gadgetAuth.signInPath);
        } else {
            await reply.status(403).send();
        }
    }
};
