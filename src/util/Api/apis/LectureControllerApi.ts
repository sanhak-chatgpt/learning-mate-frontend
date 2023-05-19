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
import type { LectureDtoRateHelpfulness, LectureDtoRequest, LectureDtoResponse } from '../models';
import {
  LectureDtoRateHelpfulnessFromJSON,
  LectureDtoRateHelpfulnessToJSON,
  LectureDtoRequestFromJSON,
  LectureDtoRequestToJSON,
  LectureDtoResponseFromJSON,
  LectureDtoResponseToJSON,
} from '../models';

export interface CreateLectureRequest {
  lectureDtoRequest: LectureDtoRequest;
}

export interface GetLectureRequest {
  id: number;
}

export interface RateHelpfulnessRequest {
  id: number;
  lectureDtoRateHelpfulness: LectureDtoRateHelpfulness;
}

/**
 *
 */
export class LectureControllerApi extends runtime.BaseAPI {
  /**
   */
  async createLectureRaw(
    requestParameters: CreateLectureRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LectureDtoResponse>> {
    if (
      requestParameters.lectureDtoRequest === null ||
      requestParameters.lectureDtoRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'lectureDtoRequest',
        'Required parameter requestParameters.lectureDtoRequest was null or undefined when calling createLecture.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/v1/lecture`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: LectureDtoRequestToJSON(requestParameters.lectureDtoRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LectureDtoResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async createLecture(
    requestParameters: CreateLectureRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LectureDtoResponse> {
    const response = await this.createLectureRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getLectureRaw(
    requestParameters: GetLectureRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LectureDtoResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getLecture.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/lecture/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LectureDtoResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async getLecture(
    requestParameters: GetLectureRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LectureDtoResponse> {
    const response = await this.getLectureRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async rateHelpfulnessRaw(
    requestParameters: RateHelpfulnessRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling rateHelpfulness.'
      );
    }

    if (
      requestParameters.lectureDtoRateHelpfulness === null ||
      requestParameters.lectureDtoRateHelpfulness === undefined
    ) {
      throw new runtime.RequiredError(
        'lectureDtoRateHelpfulness',
        'Required parameter requestParameters.lectureDtoRateHelpfulness was null or undefined when calling rateHelpfulness.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/v1/lecture/{id}/rate-helpfulness`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: LectureDtoRateHelpfulnessToJSON(requestParameters.lectureDtoRateHelpfulness),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async rateHelpfulness(
    requestParameters: RateHelpfulnessRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.rateHelpfulnessRaw(requestParameters, initOverrides);
  }
}
