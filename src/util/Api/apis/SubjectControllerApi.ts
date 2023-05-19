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

import * as runtime from '../runtime';
import type { PageSubjectDtoResponse } from '../models';
import { PageSubjectDtoResponseFromJSON, PageSubjectDtoResponseToJSON } from '../models';

export interface GetAllSubjectRequest {
  majorId: number;
  page?: number;
  size?: number;
}

/**
 *
 */
export class SubjectControllerApi extends runtime.BaseAPI {
  /**
   */
  async getAllSubjectRaw(
    requestParameters: GetAllSubjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PageSubjectDtoResponse>> {
    if (requestParameters.majorId === null || requestParameters.majorId === undefined) {
      throw new runtime.RequiredError(
        'majorId',
        'Required parameter requestParameters.majorId was null or undefined when calling getAllSubject.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.majorId !== undefined) {
      queryParameters['majorId'] = requestParameters.majorId;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters['size'] = requestParameters.size;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/subject`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageSubjectDtoResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async getAllSubject(
    requestParameters: GetAllSubjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PageSubjectDtoResponse> {
    const response = await this.getAllSubjectRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
