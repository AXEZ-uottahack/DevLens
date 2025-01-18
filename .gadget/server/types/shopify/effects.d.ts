import { GadgetRecord } from "@gadgetinc/api-client-core";
import { FieldType, LINK_PARAM, getActionContextFromLocalStorage, getCurrentContext, internalModelManagerForModel, maybeGetActionContextFromLocalStorage } from "../effects";
import { InvalidActionInputError, MisconfiguredActionError, PermissionDeniedError } from "../errors";
import { Globals } from "../globals";
import { AppTenancyKey } from "../tenancy";
import type { AnyParams, FieldMetadata, ModelDescriptor } from "../types";
import { assert } from "../utils";
import { invalidPlanNames } from "./constants";
export declare const ShopifyShopState: {
    readonly Installed: {
        readonly created: string;
    };
    readonly Uninstalled: {
        readonly created: string;
    };
};
export declare const ShopifySyncState: {
    readonly Created: string;
    readonly Running: string;
    readonly Completed: string;
    readonly Errored: string;
};
export declare const ShopifyBulkOperationState: {
    readonly Created: string;
    readonly Completed: string;
    readonly Canceled: string;
    readonly Failed: string;
    readonly Expired: string;
};
export declare const ShopifySellingPlanGroupProductVariantState: {
    readonly Started: string;
    readonly Created: string;
    readonly Deleted: string;
};
export declare const ShopifySellingPlanGroupProductState: {
    readonly Started: string;
    readonly Created: string;
    readonly Deleted: string;
};
/**
 * The following is used to power shopifySync model.
 * Learn more about syncing visit our docs: https://docs.gadget.dev/guides/plugins/shopify/syncing-shopify-data#syncing
 */ export declare async function shopifySync(params: AnyParams, record: GadgetRecord<any>): Promise<void>;
export declare async function abortSync(params: AnyParams, record: GadgetRecord<any>): Promise<void>;
/**
 * Applicable for multi-tenant Shopify apps(public apps), or Shopify Customer Extension apps
 * Enforces that the given record is only accessible by the current shop or customer
 *
 * For new records: sets the the current session's `shopId` to the record. If the tenant is a customer then will set the current sessions' customerId to the record.
 * For existing records: Verifies the record objects `shopId` and/or `customerId` matches the one from the current session.
 *
 * *
 * @param params - incoming data validated against the current `shopId`
 * @param record - record used to validate or set the `shopId` on
 * @param {Object} options - Additional options for cross-shop or cross-customer validation
 * @param {string} options.shopBelongsToField - Specifies which related model is used for cross-shop validation.
 * @param {string} options.customerBelongsToField - Specifies which related model is used for cross-customer validation.
 * @param {boolean} options.enforceCustomerTenancy - Whether or not to enforce customer tenacy. Defaults to true.
 */ export declare async function preventCrossShopDataAccess(params: AnyParams, record: GadgetRecord<any>, options?: {
    shopBelongsToField?: string;
    customerBelongsToField?: string;
    enforceCustomerTenancy?: boolean;
}): Promise<void>;
declare const validateBelongsToLink: (input: any, record: any, params: AnyParams, tenantId: string, model: ModelDescriptor, relatedModelKey: string, tenantBelongsToField: string | undefined, tenantType: TenantType) => any;
declare const setBelongsToLink: (input: any, record: any, params: AnyParams, model: ModelDescriptor, relatedField: FieldMetadata, tenantId: string) => any;
/**
 * Syncs Shopify models across all models
 *
 * @param params - list of Shopify app credentials to sync data from
 * @param syncSince - starting point for data sync (default: all time)
 * @param models - list of model names to sync data from
 * @param force - enforces syncswithout checking if they're up to date
 * @param startReason - a string reason stored on the created 'shopifySync' records
 */ export declare async function globalShopifySync(params: {
    apiKeys: string[];
    syncSince: string | Date;
    models: string[];
    force?: boolean;
    startReason?: string;
}): Promise<void>;
declare const enum TenantType {
    Shop = "shop",
    Customer = "customer"
}
declare const shopifyModelKey: (modelName: string) => string;
/**
 * Updates the state of a `bulkOperation` record from Shopify when the operation completes.
 *
 * @param record - the `bulkOperation` record updated
 */ export declare async function finishBulkOperation(record: GadgetRecord<any>): Promise<void>;
declare const ShopifyShopKey: string;
declare const ShopifyCustomerKey: string;
declare const ShopifyBulkOperationGIDForId: (id: string) => any;
