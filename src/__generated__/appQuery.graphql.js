/**
 * @flow
 * @relayHash 47641587facaaedb7e9d0efe9fe6c9f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoApp_todo$ref = any;
export type appQueryVariables = {|
  id?: ?string
|};
export type appQueryResponse = {|
  +todo: ?{|
    +$fragmentRefs: TodoApp_todo$ref
  |}
|};
*/


/*
query appQuery(
  $id: String
) {
  todo(id: $id) {
    ...TodoApp_todo
    id
  }
}

fragment TodoApp_todo on Todo {
  id
  version
  items {
    _id: id
    title: desc
    completed
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery(\n  $id: String\n) {\n  todo(id: $id) {\n    ...TodoApp_todo\n    id\n  }\n}\n\nfragment TodoApp_todo on Todo {\n  id\n  version\n  items {\n    _id: id\n    title: desc\n    completed\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": v1,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_todo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": v1,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "version",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "Item",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "_id",
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "title",
                "name": "desc",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "completed",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2cee1ebc510ac490cd2667bdcbe28267';
module.exports = node;
