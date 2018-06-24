/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoApp_todoList$ref: FragmentReference;
export type TodoApp_todoList = {|
  +id: string,
  +version: ?number,
  +items: ?$ReadOnlyArray<?{|
    +_id: ?number,
    +title: ?string,
    +completed: ?boolean,
  |}>,
  +$refType: TodoApp_todoList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TodoApp_todoList",
  "type": "TodoList",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = 'e919f150b4bb948e795b49be50b0ebc1';
module.exports = node;
