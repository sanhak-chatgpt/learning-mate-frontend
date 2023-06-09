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
 * @interface TopicDtoResponse
 */
export interface TopicDtoResponse {
    /**
     * 
     * @type {number}
     * @memberof TopicDtoResponse
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TopicDtoResponse
     */
    topicName: string;
    /**
     * 
     * @type {string}
     * @memberof TopicDtoResponse
     */
    description: string;
}

/**
 * Check if a given object implements the TopicDtoResponse interface.
 */
export function instanceOfTopicDtoResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "topicName" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function TopicDtoResponseFromJSON(json: any): TopicDtoResponse {
    return TopicDtoResponseFromJSONTyped(json, false);
}

export function TopicDtoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopicDtoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'topicName': json['topicName'],
        'description': json['description'],
    };
}

export function TopicDtoResponseToJSON(value?: TopicDtoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'topicName': value.topicName,
        'description': value.description,
    };
}

