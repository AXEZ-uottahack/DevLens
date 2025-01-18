import { type FieldSelection, type GadgetConnection, type VariablesOptions } from "@gadgetinc/api-client-core";
import { type AllFieldsSelected, type AvailableSelection, type DefaultSelection, type Select } from "./utils.js";
export declare function gelly(strings: TemplateStringsArray): string;
export type ComputedViewFunctionWithoutVariables<Result> = <Available extends AvailableSelection<Result> & FieldSelection, Options extends {
    select?: Available | null;
}, Defaults extends AllFieldsSelected<Available>>(options?: Options) => Promise<Select<Result, DefaultSelection<Available, Options, Defaults>>>;
export interface ComputedViewWithoutVariables<Result> extends ComputedViewFunctionWithoutVariables<Result> {
    type: "computedView";
    operationName: string;
    namespace: string | string[] | null;
    defaultSelection: FieldSelection;
    selection?: FieldSelection;
    selectionType: AvailableSelection<Result>;
    resultType: Result;
}
export type ComputedViewFunctionWithVariables<Variables, Result> = <Available extends AvailableSelection<Result> & FieldSelection, Options extends {
    select?: Available | null;
}, Defaults extends AllFieldsSelected<Available>>(variables: Variables, options?: Options) => Promise<Select<Result, DefaultSelection<Available, Options, Defaults>>>;
export interface ComputedViewWithVariables<Variables, Result> extends ComputedViewFunctionWithVariables<Variables, Result> {
    type: "computedView";
    operationName: string;
    namespace: string | string[] | null;
    variables: VariablesOptions;
    variablesType: Variables;
    defaultSelection: FieldSelection;
    selection?: FieldSelection;
    selectionType: AvailableSelection<Result>;
    resultType: Result;
}
export declare const computedViewOperation: (operation: string, defaultSelection: FieldSelection, variables?: VariablesOptions, selection?: FieldSelection, namespace?: string | string[] | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const computedViewRunner: (connection: GadgetConnection, operation: string, defaultSelection: FieldSelection, variableValues?: VariablesOptions, selection?: FieldSelection, namespace?: string | string[] | null) => Promise<any>;
export declare const inlineComputedViewOperation: (query: string, gqlFieldName: string, variables?: Record<string, any>, namespace?: string | string[] | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const inlineComputedViewRunner: (connection: GadgetConnection, gqlFieldName: string, viewQuery: string, variables?: Record<string, any>, namespace?: string | string[] | null) => Promise<unknown>;
