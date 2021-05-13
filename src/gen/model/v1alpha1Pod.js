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
exports.V1alpha1Pod = void 0;
/**
* Pod is a collection of containers that can run on a host.  The Tilt API representation mirrors the Kubernetes API very closely. Irrelevant data is not included, and some fields might be simplified.  There might also be Tilt-specific status fields.
*/
var V1alpha1Pod = /** @class */ (function () {
    function V1alpha1Pod() {
    }
    V1alpha1Pod.getAttributeTypeMap = function () {
        return V1alpha1Pod.attributeTypeMap;
    };
    V1alpha1Pod.discriminator = undefined;
    V1alpha1Pod.attributeTypeMap = [
        {
            "name": "ancestorUID",
            "baseName": "ancestorUID",
            "type": "string"
        },
        {
            "name": "baselineRestartCount",
            "baseName": "baselineRestartCount",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1PodCondition>"
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<V1alpha1Container>"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "deleting",
            "baseName": "deleting",
            "type": "boolean"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "initContainers",
            "baseName": "initContainers",
            "type": "Array<V1alpha1Container>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "podTemplateSpecHash",
            "baseName": "podTemplateSpecHash",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "updateStartedAt",
            "baseName": "updateStartedAt",
            "type": "Date"
        }
    ];
    return V1alpha1Pod;
}());
exports.V1alpha1Pod = V1alpha1Pod;