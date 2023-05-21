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
 * @interface SortObject
 */
export interface SortObject {
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    sorted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    unsorted?: boolean;
}

/**
 * Check if a given object implements the SortObject interface.
 */
export function instanceOfSortObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SortObjectFromJSON(json: any): SortObject {
    return SortObjectFromJSONTyped(json, false);
}

export function SortObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
        'sorted': !exists(json, 'sorted') ? undefined : json['sorted'],
        'unsorted': !exists(json, 'unsorted') ? undefined : json['unsorted'],
    };
}

export function SortObjectToJSON(value?: SortObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empty': value.empty,
        'sorted': value.sorted,
        'unsorted': value.unsorted,
    };
}

