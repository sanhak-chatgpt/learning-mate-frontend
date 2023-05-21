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
 * @interface SubjectDtoResponse
 */
export interface SubjectDtoResponse {
  /**
   *
   * @type {number}
   * @memberof SubjectDtoResponse
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof SubjectDtoResponse
   */
  subjectName: string;
  /**
   *
   * @type {string}
   * @memberof SubjectDtoResponse
   */
  description: string;
}

/**
 * Check if a given object implements the SubjectDtoResponse interface.
 */
export function instanceOfSubjectDtoResponse(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'id' in value;
  isInstance = isInstance && 'subjectName' in value;
  isInstance = isInstance && 'description' in value;

  return isInstance;
}

export function SubjectDtoResponseFromJSON(json: any): SubjectDtoResponse {
  return SubjectDtoResponseFromJSONTyped(json, false);
}

export function SubjectDtoResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SubjectDtoResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    subjectName: json['subjectName'],
    description: json['description'],
  };
}

export function SubjectDtoResponseToJSON(value?: SubjectDtoResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    subjectName: value.subjectName,
    description: value.description,
  };
}