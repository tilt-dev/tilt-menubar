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
* Information about the running tilt binary.
*/
export class V1alpha1TiltBuild {
    /**
    * The Git digest of the commit this binary was built at.
    */
    'commitSHA': string;
    /**
    * A human-readable string representing when the binary was built.
    */
    'date': string;
    /**
    * Indicates whether this is a development build (true) or an official release (false).
    */
    'dev': boolean;
    /**
    * A semantic version string.
    */
    'version': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commitSHA",
            "baseName": "commitSHA",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "dev",
            "baseName": "dev",
            "type": "boolean"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1TiltBuild.attributeTypeMap;
    }
}
