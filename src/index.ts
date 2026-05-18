/**
 * @amlplugins/cerebras-completions
 *
 * Thin namespaced re-export of the native @cerebras/cerebras_cloud_sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cerebras Text Completions — legacy completion endpoint for raw prompt continuations on Wafer-Scale Engines.
 */

import * as _sdk from "@cerebras/cerebras_cloud_sdk";
export * from "@cerebras/cerebras_cloud_sdk";
export { _sdk as sdk };
export default _sdk;
