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
import type { MajorDtoResponse } from './MajorDtoResponse';
import {
    MajorDtoResponseFromJSON,
    MajorDtoResponseFromJSONTyped,
    MajorDtoResponseToJSON,
} from './MajorDtoResponse';
import type { PageableObject } from './PageableObject';
import {
    PageableObjectFromJSON,
    PageableObjectFromJSONTyped,
    PageableObjectToJSON,
} from './PageableObject';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
} from './SortObject';

/**
 * 
 * @export
 * @interface PageMajorDtoResponse
 */
export interface PageMajorDtoResponse {
    /**
     * 
     * @type {number}
     * @memberof PageMajorDtoResponse
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMajorDtoResponse
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageMajorDtoResponse
     */
    size?: number;
    /**
     * 
     * @type {Array<MajorDtoResponse>}
     * @memberof PageMajorDtoResponse
     */
    content?: Array<MajorDtoResponse>;
    /**
     * 
     * @type {number}
     * @memberof PageMajorDtoResponse
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageMajorDtoResponse
     */
    sort?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageMajorDtoResponse
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageMajorDtoResponse
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageMajorDtoResponse
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageMajorDtoResponse
     */
    last?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageMajorDtoResponse
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageMajorDtoResponse interface.
 */
export function instanceOfPageMajorDtoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageMajorDtoResponseFromJSON(json: any): PageMajorDtoResponse {
    return PageMajorDtoResponseFromJSONTyped(json, false);
}

export function PageMajorDtoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageMajorDtoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(MajorDtoResponseFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageMajorDtoResponseToJSON(value?: PageMajorDtoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalPages': value.totalPages,
        'totalElements': value.totalElements,
        'size': value.size,
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(MajorDtoResponseToJSON)),
        'number': value.number,
        'sort': SortObjectToJSON(value.sort),
        'numberOfElements': value.numberOfElements,
        'pageable': PageableObjectToJSON(value.pageable),
        'first': value.first,
        'last': value.last,
        'empty': value.empty,
    };
}

