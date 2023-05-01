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
import type {
  PageMajorDtoResponse,
} from '../models';
import {
    PageMajorDtoResponseFromJSON,
    PageMajorDtoResponseToJSON,
} from '../models';

export interface GetAllMajorsRequest {
    page?: number;
    size?: number;
}

/**
 * 
 */
export class MajorControllerApi extends runtime.BaseAPI {

    /**
     */
    async getAllMajorsRaw(requestParameters: GetAllMajorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageMajorDtoResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/major`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageMajorDtoResponseFromJSON(jsonValue));
    }

    /**
     */
    async getAllMajors(requestParameters: GetAllMajorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageMajorDtoResponse> {
        const response = await this.getAllMajorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
