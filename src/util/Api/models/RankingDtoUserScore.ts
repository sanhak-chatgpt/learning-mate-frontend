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
 * @interface RankingDtoUserScore
 */
export interface RankingDtoUserScore {
    /**
     * 
     * @type {number}
     * @memberof RankingDtoUserScore
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof RankingDtoUserScore
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof RankingDtoUserScore
     */
    rank: number;
}

/**
 * Check if a given object implements the RankingDtoUserScore interface.
 */
export function instanceOfRankingDtoUserScore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "rank" in value;

    return isInstance;
}

export function RankingDtoUserScoreFromJSON(json: any): RankingDtoUserScore {
    return RankingDtoUserScoreFromJSONTyped(json, false);
}

export function RankingDtoUserScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RankingDtoUserScore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'score': json['score'],
        'rank': json['rank'],
    };
}

export function RankingDtoUserScoreToJSON(value?: RankingDtoUserScore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'score': value.score,
        'rank': value.rank,
    };
}

