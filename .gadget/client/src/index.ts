/**
* This is the Gadget API client library for:
*
*       _            _                
*    __| | _____   _| | ___ _ __  ___ 
*   / _` |/ _ \ \ / / |/ _ \ '_ \/ __|
*  | (_| |  __/\ V /| |  __/ | | \__ \
*   \__,_|\___| \_/ |_|\___|_| |_|___/
*                                     
*
* Built for environment "Development" at version 6
* API docs: https://docs.gadget.dev/api/devlens
* Edit this app here: https://devlens.gadget.app/edit
*/
export {
  BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord,
  GadgetRecordList, GadgetValidationError, InvalidRecordError, ChangeTracking
} from "@gadgetinc/api-client-core";

export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";

export { gelly } from "./computedViews.js"
export * from "./Client.js";
export * from "./types.js";

declare global {
  interface Window {
    gadgetConfig: {
      apiKeys: {
        shopify: string;
      };
      environment: string;
      env: Record<string, any>;
      authentication?: {
        signInPath: string;
        redirectOnSuccessfulSignInPath: string;
      }
    };
  }
}
