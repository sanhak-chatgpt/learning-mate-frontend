/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GeneratePresignedUrlDtoResponse
 */
export interface GeneratePresignedUrlDtoResponse {
    /**
     * 
     * @type {string}
     * @memberof GeneratePresignedUrlDtoResponse
     */
    uploadPresignedUrl: string;
}

/**
 * Check if a given object implements the GeneratePresignedUrlDtoResponse interface.
 */
export function instanceOfGeneratePresignedUrlDtoResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uploadPresignedUrl" in value;

    return isInstance;
}

export function GeneratePresignedUrlDtoResponseFromJSON(json: any): GeneratePresignedUrlDtoResponse {
    return GeneratePresignedUrlDtoResponseFromJSONTyped(json, false);
}

export function GeneratePresignedUrlDtoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratePresignedUrlDtoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uploadPresignedUrl': json['uploadPresignedUrl'],
    };
}

export function GeneratePresignedUrlDtoResponseToJSON(value?: GeneratePresignedUrlDtoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uploadPresignedUrl': value.uploadPresignedUrl,
    };
}

