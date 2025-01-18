/**
* This is the Gadget server side types library for:
*
*       _            _                
*    __| | _____   _| | ___ _ __  ___ 
*   / _` |/ _ \ \ / / |/ _ \ '_ \/ __|
*  | (_| |  __/\ V /| |  __/ | | \__ \
*   \__,_|\___| \_/ |_|\___|_| |_|___/
*                                     
*
* Built for environment `Development` at version 6
* Framework version: ^1.3.0
* Edit this app here: https://devlens.gadget.dev/edit
*/ import type { Client } from "@gadget-client/devlens";
import { Logger } from "./AmbientContext";
export { InvalidRecordError } from '@gadgetinc/api-client-core';
export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
import { AppConnections } from "./AppConnections";
export * from "./auth";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
export * from "./effects";
export * from "./utils";
import type { RouteContext } from "./routes";
export * from "./ActionContextTypes";
export { preventCrossShopDataAccess, ShopifyBulkOperationState, ShopifySellingPlanGroupProductState, ShopifySellingPlanGroupProductVariantState, ShopifyShopState, ShopifySyncState, abortSync, finishBulkOperation, globalShopifySync, shopifySync } from "./shopify";
/**
 * @internal
 */ import { Globals, actionContextLocalStorage } from "./globals";
/**
* A map of connection name to instantiated connection objects for the app.
*/ declare let connections: AppConnections;
/**
 * An instance of the Gadget logger
 */ declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */ declare let api: Client;
/**
* This is used internally to set the connections.
* @internal
*/ export declare const setConnections: (appConnections: AppConnections) => any;
/**
 * This is used internally to set the rootLogger.
 * @internal
 */ export declare const setLogger: (rootLogger: Logger) => any;
/**
 * This is used internally to set the client Instance
 * @internal
 */ export declare const setApiClient: (client: Client) => any;
export { api, logger, connections };
/**
 * @internal
 */ export { Globals, actionContextLocalStorage };
