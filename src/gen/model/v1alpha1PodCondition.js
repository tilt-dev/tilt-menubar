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
exports.V1alpha1PodCondition = void 0;
/**
* PodCondition is a lifecycle condition for a Pod.
*/
var V1alpha1PodCondition = /** @class */ (function () {
    function V1alpha1PodCondition() {
    }
    V1alpha1PodCondition.getAttributeTypeMap = function () {
        return V1alpha1PodCondition.attributeTypeMap;
    };
    V1alpha1PodCondition.discriminator = undefined;
    V1alpha1PodCondition.attributeTypeMap = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return V1alpha1PodCondition;
}());
exports.V1alpha1PodCondition = V1alpha1PodCondition;