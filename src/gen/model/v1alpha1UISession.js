"use strict";
/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.20.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1UISession = void 0;
/**
* UISession represents global status data for rendering the web UI.  Treat this as a legacy data structure that\'s more intended to make transition easier rather than a robust long-term API.  Per-resource status data should be stored in UIResource.
*/
var V1alpha1UISession = /** @class */ (function () {
    function V1alpha1UISession() {
    }
    V1alpha1UISession.getAttributeTypeMap = function () {
        return V1alpha1UISession.attributeTypeMap;
    };
    V1alpha1UISession.discriminator = undefined;
    V1alpha1UISession.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "object"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1UISessionStatus"
        }
    ];
    return V1alpha1UISession;
}());
exports.V1alpha1UISession = V1alpha1UISession;