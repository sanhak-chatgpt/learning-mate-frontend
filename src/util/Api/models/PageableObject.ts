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
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
} from './SortObject';

/**
 * 
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    offset?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageableObject
     */
    sort?: SortObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    unpaged?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    paged?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    pageSize?: number;
}

/**
 * Check if a given object implements the PageableObject interface.
 */
export function instanceOfPageableObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageableObjectFromJSON(json: any): PageableObject {
    return PageableObjectFromJSONTyped(json, false);
}

export function PageableObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageableObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'unpaged': !exists(json, 'unpaged') ? undefined : json['unpaged'],
        'paged': !exists(json, 'paged') ? undefined : json['paged'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
    };
}

export function PageableObjectToJSON(value?: PageableObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'sort': SortObjectToJSON(value.sort),
        'unpaged': value.unpaged,
        'paged': value.paged,
        'pageNumber': value.pageNumber,
        'pageSize': value.pageSize,
    };
}

