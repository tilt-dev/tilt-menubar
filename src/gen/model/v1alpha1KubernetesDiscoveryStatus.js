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
exports.V1alpha1KubernetesDiscoveryStatus = void 0;
/**
* KubernetesDiscoveryStatus defines the observed state of KubernetesDiscovery
*/
var V1alpha1KubernetesDiscoveryStatus = /** @class */ (function () {
    function V1alpha1KubernetesDiscoveryStatus() {
    }
    V1alpha1KubernetesDiscoveryStatus.getAttributeTypeMap = function () {
        return V1alpha1KubernetesDiscoveryStatus.attributeTypeMap;
    };
    V1alpha1KubernetesDiscoveryStatus.discriminator = undefined;
    V1alpha1KubernetesDiscoveryStatus.attributeTypeMap = [
        {
            "name": "monitorStartTime",
            "baseName": "monitorStartTime",
            "type": "Date"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "Array<V1alpha1Pod>"
        }
    ];
    return V1alpha1KubernetesDiscoveryStatus;
}());
exports.V1alpha1KubernetesDiscoveryStatus = V1alpha1KubernetesDiscoveryStatus;