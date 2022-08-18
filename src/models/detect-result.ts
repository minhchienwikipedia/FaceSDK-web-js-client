/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API
 *
 * The version of the OpenAPI document: 3.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Detection } from './detection';

/**
 * 
 * @export
 * @interface DetectResult
 */
export interface DetectResult {
    /**
     * 
     * @type {Array<Detection>}
     * @memberof DetectResult
     */
    'detections': Array<Detection>;
    /**
     * Internal.
     * @type {number}
     * @memberof DetectResult
     */
    'detectorType'?: number;
    /**
     * Internal.
     * @type {number}
     * @memberof DetectResult
     */
    'landmarksType'?: number;
}

