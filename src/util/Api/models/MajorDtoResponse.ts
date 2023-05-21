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
 * @interface MajorDtoResponse
 */
export interface MajorDtoResponse {
  /**
   *
   * @type {number}
   * @memberof MajorDtoResponse
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MajorDtoResponse
   */
  majorName: string;
  /**
   *
   * @type {string}
   * @memberof MajorDtoResponse
   */
  description: string;
}

/**
 * Check if a given object implements the MajorDtoResponse interface.
 */
export function instanceOfMajorDtoResponse(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'id' in value;
  isInstance = isInstance && 'majorName' in value;
  isInstance = isInstance && 'description' in value;

  return isInstance;
}

export function MajorDtoResponseFromJSON(json: any): MajorDtoResponse {
  return MajorDtoResponseFromJSONTyped(json, false);
}

export function MajorDtoResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MajorDtoResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    majorName: json['majorName'],
    description: json['description'],
  };
}

export function MajorDtoResponseToJSON(value?: MajorDtoResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    majorName: value.majorName,
    description: value.description,
  };
}