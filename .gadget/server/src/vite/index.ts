import { getHtmlTags, getViteConfig } from "./helpers";
import { GadgetPluginOptions } from "./types";

/**
 * Vite plugin that is used to configure the Vite build process for the Gadget application.
 */
export const gadget = (options?: GadgetPluginOptions) => {
  
  
  return {
    name: "gadget-vite-plugin",
    config: async (config: any, env: any) => {
      
        return await getViteConfig(config, env, {
          plugin: options,
          params: {
            assetsBucketDomain: "app-assets.gadget.dev",
            applicationId: "198164",
            productionEnvironmentId: "397755",
            developmentEnvironmentVariables: {"GADGET_APP":"devlens","GADGET_ENV":"development","GADGET_PUBLIC_APP_SLUG":"devlens","GADGET_PUBLIC_APP_ENV":"development"},
            productionEnvironmentVariables: {"GADGET_APP":"devlens","GADGET_ENV":"production","GADGET_PUBLIC_APP_SLUG":"devlens","GADGET_PUBLIC_APP_ENV":"production"},
          },
        });
      
    },
    transformIndexHtml: {
      order: "pre",
      handler: (html: string, { server }: any) => {
        
        const tags = getHtmlTags({
          hasAppBridgeV4: false,
          hasBigCommerceConnection: false,
          assetsDomain: "assets.gadget.dev",
          hasShopifyConnection: false,
        }, !!server);

        return tags;
        
      }
    }
  } as any;
}
