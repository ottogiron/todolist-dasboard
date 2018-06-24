/**
 * @flow
 * @relayHash 7dc46d8ebda3fa28e274a7a20c21b94a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoApp_todoList$ref = any;
export type appQueryVariables = {|
  id?: ?string
|};
export type appQueryResponse = {|
  +todoList: ?{|
    +$fragmentRefs: TodoApp_todoList$ref
  |}
|};
*/


/*
query appQuery(
  $id: String
) {
  todoList(id: $id) {
    ...TodoApp_todoList
    id
  }
}

fragment TodoApp_todoList on TodoList {
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
  "text": "query appQuery(\n  $id: String\n) {\n  todoList(id: $id) {\n    ...TodoApp_todoList\n    id\n  }\n}\n\nfragment TodoApp_todoList on TodoList {\n  id\n  version\n  items {\n    _id: id\n    title: desc\n    completed\n  }\n}\n",
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
        "name": "todoList",
        "storageKey": null,
        "args": v1,
        "concreteType": "TodoList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_todoList",
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
        "name": "todoList",
        "storageKey": null,
        "args": v1,
        "concreteType": "TodoList",
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
(node/*: any*/).hash = '68f87dfe1b70c45c758d94e963022856';
module.exports = node;
