import { assertOperationSuccess } from "@gadgetinc/api-client-core";
import {
  fieldSelectionToQueryCompilerFields,
  variableOptionsToVariables
} from "./utils.js";
import { Call, compile, compileWithVariableValues, Var } from "tiny-graphql-query-compiler";
function gelly(strings) {
  if (strings.length != 1)
    throw new Error(`Gelly query string must be a fixed string. Use query variables to parameterize the query.`);
  return strings[0];
}
const computedViewOperation = (operation, defaultSelection, variables, selection, namespace) => {
  let fields = {
    [operation]: Call(
      variables ? variableOptionsToVariables(variables) : {},
      fieldSelectionToQueryCompilerFields(selection ?? defaultSelection, true)
    )
  };
  if (namespace) {
    fields = namespacify(namespace, fields);
  }
  return variables ? compileWithVariableValues({ type: "query", name: operation, fields }) : { query: compile({ type: "query", name: operation, fields }), variables: {} };
};
const computedViewRunner = async (connection, operation, defaultSelection, variableValues, selection, namespace) => {
  const { query, variables } = computedViewOperation(operation, defaultSelection, variableValues, selection, namespace);
  const response = await connection.currentClient.query(query, variables);
  const dataPath = namespaceDataPath([operation], namespace);
  return assertOperationSuccess(response, dataPath);
};
const inlineComputedViewOperation = (query, gqlFieldName, variables, namespace) => {
  const operation = gqlFieldName;
  const vars = {
    query: Var({ type: "String", value: query, required: true })
  };
  if (variables)
    vars["variables"] = Var({ type: "JSONObject", value: variables });
  let fields = {
    [operation]: Call(variableOptionsToVariables(vars))
  };
  if (namespace)
    fields = namespacify(namespace, fields);
  return compileWithVariableValues({ type: "query", name: operation, fields });
};
const inlineComputedViewRunner = async (connection, gqlFieldName, viewQuery, variables, namespace) => {
  const { query, variables: vars } = inlineComputedViewOperation(viewQuery, gqlFieldName, variables, namespace);
  const response = await connection.currentClient.query(query, vars);
  const dataPath = namespaceDataPath([gqlFieldName], namespace);
  return assertOperationSuccess(response, dataPath);
};
function namespacify(namespace, fields) {
  if (!namespace)
    return fields;
  if (!Array.isArray(namespace)) {
    namespace = [namespace];
  }
  if (namespace) {
    for (let i = namespace.length - 1; i >= 0; i--) {
      fields = {
        [namespace[i]]: fields
      };
    }
  }
  return fields;
}
const namespaceDataPath = (dataPath, namespace) => {
  if (namespace) {
    dataPath.unshift(...Array.isArray(namespace) ? namespace : [namespace]);
  }
  return dataPath;
};
export {
  computedViewOperation,
  computedViewRunner,
  gelly,
  inlineComputedViewOperation,
  inlineComputedViewRunner
};
//# sourceMappingURL=computedViews.js.map
