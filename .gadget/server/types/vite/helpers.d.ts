import fs from "fs/promises";
import path from "path";
import { BuildDirectory } from "../remix/constants";
import type { GadgetPluginOptions } from "./types";
import { getInternalFrontendConfig } from "./utils";
export declare enum FrontendType {
    ReactRouterFramework = "react-router-framework",
    Remix = "remix",
    Vite = "vite"
}
export declare const frontendTypeIndicatorFilePath: string;
declare const maybeGetPluginByName: (name: string, plugin: any) => any;
export declare const isRemixOrReactRouterFrameworkType: (type: FrontendType) => type is FrontendType.Remix | FrontendType.ReactRouterFramework;
export declare const getFrontendTypeByPluginsUsed: (config: Record<string, any>) => FrontendType;
export declare const doesViteConfigHasGadgetPlugin: (config: Record<string, any>) => boolean;
export declare const getViteConfig: (config: any, { command, mode, isSsrBuild }: {
    command: "serve" | "build";
    mode: "development" | "production";
    isSsrBuild?: boolean;
}, options: {
    plugin?: GadgetPluginOptions;
    params: {
        assetsBucketDomain: string;
        applicationId: string;
        productionEnvironmentId: string;
        developmentEnvironmentVariables: Record<string, string>;
        productionEnvironmentVariables: Record<string, string>;
    };
}) => Promise<void>;
interface HtmlTagDescriptor {
    tag: string;
    attrs: Record<string, string | boolean>;
    injectTo?: "head" | "body" | "head-prepend" | "body-prepend";
    children?: string;
}
export declare const getHtmlTags: (options: {
    hasAppBridgeV4: boolean;
    hasBigCommerceConnection: boolean;
    assetsDomain: string;
    hasShopifyConnection: boolean;
}, devMode: boolean) => HtmlTagDescriptor[];
/** Given a list of environment variables, set up the defines for Vite to replace process.env.FOO with these valuies */ export declare const buildDefinesMap: (env: Record<string, string | undefined>, mode: "development" | "production") => Record<string, string>;
export declare const VITE_PUBLIC_ENV_PREFIXES: string[];
