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
import type { RankingDtoUserScore } from './RankingDtoUserScore';
import {
    RankingDtoUserScoreFromJSON,
    RankingDtoUserScoreFromJSONTyped,
    RankingDtoUserScoreToJSON,
} from './RankingDtoUserScore';

/**
 * 
 * @export
 * @interface LectureRankingDtoResponse
 */
export interface LectureRankingDtoResponse {
    /**
     * 
     * @type {RankingDtoUserScore}
     * @memberof LectureRankingDtoResponse
     */
    ranking?: RankingDtoUserScore;
    /**
     * 
     * @type {string}
     * @memberof LectureRankingDtoResponse
     */
    message: string;
}

/**
 * Check if a given object implements the LectureRankingDtoResponse interface.
 */
export function instanceOfLectureRankingDtoResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function LectureRankingDtoResponseFromJSON(json: any): LectureRankingDtoResponse {
    return LectureRankingDtoResponseFromJSONTyped(json, false);
}

export function LectureRankingDtoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LectureRankingDtoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ranking': !exists(json, 'ranking') ? undefined : RankingDtoUserScoreFromJSON(json['ranking']),
        'message': json['message'],
    };
}

export function LectureRankingDtoResponseToJSON(value?: LectureRankingDtoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ranking': RankingDtoUserScoreToJSON(value.ranking),
        'message': value.message,
    };
}

