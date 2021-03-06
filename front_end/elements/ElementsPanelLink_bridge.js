// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* WARNING: do not modify this file by hand!
* it was automatically generated by the bridge generator
* if you made changes to the source code and need to update this file, run:
*  npm run generate-bridge-file front_end/elements/ElementsPanelLink.ts
*/

import './ElementsPanelLink.js';
/**
* @typedef {{
* onElementRevealIconClick:function(!Event=):void,
* onElementRevealIconMouseEnter:function(!Event=):void,
* onElementRevealIconMouseLeave:function(!Event=):void,
* }}
*/
// @ts-ignore we export this for Closure not TS
export let ElementsPanelLinkData;
// eslint-disable-next-line no-unused-vars
export class ElementsPanelLinkClosureInterface extends HTMLElement {
  /**
  * @param {!ElementsPanelLinkData} data
  */
  set data(data) {
  }
}
/**
* @return {!ElementsPanelLinkClosureInterface}
*/
export function createElementsPanelLink() {
  return /** @type {!ElementsPanelLinkClosureInterface} */ (document.createElement('devtools-elements-panel-link'));
}
