import { BuildDirectory, AppDirectory } from "./constants";
/**
 * Parameters for running a Remix app in Gadget.
 */ export declare const remixViteOptions: {
    readonly buildDirectory: typeof BuildDirectory;
    readonly appDirectory: typeof AppDirectory;
    readonly future: {
        readonly "unstable_optimizeDeps": boolean;
    };
};
