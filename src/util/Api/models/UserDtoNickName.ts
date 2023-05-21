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
 * @interface UserDtoNickName
 */
export interface UserDtoNickName {
    /**
     * 
     * @type {string}
     * @memberof UserDtoNickName
     */
    name: string;
}

/**
 * Check if a given object implements the UserDtoNickName interface.
 */
export function instanceOfUserDtoNickName(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function UserDtoNickNameFromJSON(json: any): UserDtoNickName {
    return UserDtoNickNameFromJSONTyped(json, false);
}

export function UserDtoNickNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDtoNickName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function UserDtoNickNameToJSON(value?: UserDtoNickName | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
