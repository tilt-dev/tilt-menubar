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
exports.V1alpha1SessionStatus = void 0;
/**
* SessionStatus defines the observed state of Session
*/
var V1alpha1SessionStatus = /** @class */ (function () {
    function V1alpha1SessionStatus() {
    }
    V1alpha1SessionStatus.getAttributeTypeMap = function () {
        return V1alpha1SessionStatus.attributeTypeMap;
    };
    V1alpha1SessionStatus.discriminator = undefined;
    V1alpha1SessionStatus.attributeTypeMap = [
        {
            "name": "done",
            "baseName": "done",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "pid",
            "baseName": "pid",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<V1alpha1Target>"
        }
    ];
    return V1alpha1SessionStatus;
}());
exports.V1alpha1SessionStatus = V1alpha1SessionStatus;