"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "gadget", {
    enumerable: true,
    get: function() {
        return gadget;
    }
});
const _helpers = require("./helpers");
/**
 * Vite plugin that is used to configure the Vite build process for the Gadget application.
 */ const gadget = (options)=>{
    return {
        name: "gadget-vite-plugin",
        config: async (config, env)=>{
            return await (0, _helpers.getViteConfig)(config, env, {
                plugin: options,
                params: {
                    assetsBucketDomain: "app-assets.gadget.dev",
                    applicationId: "198164",
                    productionEnvironmentId: "397755",
                    developmentEnvironmentVariables: {
                        "GADGET_APP": "devlens",
                        "GADGET_ENV": "development",
                        "GADGET_PUBLIC_APP_SLUG": "devlens",
                        "GADGET_PUBLIC_APP_ENV": "development"
                    },
                    productionEnvironmentVariables: {
                        "GADGET_APP": "devlens",
                        "GADGET_ENV": "production",
                        "GADGET_PUBLIC_APP_SLUG": "devlens",
                        "GADGET_PUBLIC_APP_ENV": "production"
                    }
                }
            });
        },
        transformIndexHtml: {
            order: "pre",
            handler: (html, { server })=>{
                const tags = (0, _helpers.getHtmlTags)({
                    hasAppBridgeV4: false,
                    hasBigCommerceConnection: false,
                    assetsDomain: "assets.gadget.dev",
                    hasShopifyConnection: false
                }, !!server);
                return tags;
            }
        }
    };
};
