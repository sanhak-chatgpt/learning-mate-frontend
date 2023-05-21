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
  UserDtoMe,
} from '../models';
import {
    UserDtoMeFromJSON,
    UserDtoMeToJSON,
} from '../models';

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async issueTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDtoMe>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/token/issue`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoMeFromJSON(jsonValue));
    }

    /**
     */
    async issueToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDtoMe> {
        const response = await this.issueTokenRaw(initOverrides);
        return await response.value();
    }

}
