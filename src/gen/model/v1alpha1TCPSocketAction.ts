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

import { RequestFile } from '../api';

/**
* TCPSocketAction describes an action based on opening a socket
*/
export class V1alpha1TCPSocketAction {
    /**
    * Optional: Host name to connect to, defaults to the pod IP.
    */
    'host'?: string;
    /**
    * Number or name of the port to access on the container. Number must be in the range 1 to 65535.
    */
    'port': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1TCPSocketAction.attributeTypeMap;
    }
}
