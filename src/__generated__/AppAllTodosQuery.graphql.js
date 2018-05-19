/**
 * @flow
 * @relayHash 3f591e7bf58386c1c1620500629242b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppAllTodosQueryVariables = {||};
export type AppAllTodosQueryResponse = {|
  +allTodos: ?$ReadOnlyArray<?{|
    +id: string,
    +version: ?number,
    +items: ?$ReadOnlyArray<?{|
      +_id: ?string,
      +desc: ?string,
    |}>,
  |}>
|};
*/


/*
query AppAllTodosQuery {
  allTodos {
    id
    version
    items {
      _id: id
      desc
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allTodos",
    "storageKey": null,
    "args": null,
    "concreteType": "Todo",
    "plural": true,
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
            "alias": null,
            "name": "desc",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppAllTodosQuery",
  "id": null,
  "text": "query AppAllTodosQuery {\n  allTodos {\n    id\n    version\n    items {\n      _id: id\n      desc\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppAllTodosQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AppAllTodosQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a1ff2f5bd8b511a3bdc919ca155b11d';
module.exports = node;
