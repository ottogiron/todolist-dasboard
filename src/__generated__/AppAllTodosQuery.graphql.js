/**
 * @flow
 * @relayHash 27ae0033ab6f39d62c96c0bdb2c1eaae
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
      +title: ?string,
      +completed: ?boolean,
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
      title: desc
      completed
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppAllTodosQuery",
  "id": null,
  "text": "query AppAllTodosQuery {\n  allTodos {\n    id\n    version\n    items {\n      _id: id\n      title: desc\n      completed\n    }\n  }\n}\n",
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
(node/*: any*/).hash = '82c7c6736c5acc5eb827f07cbc971024';
module.exports = node;
