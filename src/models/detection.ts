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


import { DetectionQuality } from './detection-quality';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface Detection
 */
export interface Detection {
    /**
     * 
     * @type {ImageData}
     * @memberof Detection
     */
    'crop'?: ImageData;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Detection
     */
    'attributes'?: { [key: string]: object; };
    /**
     * Absolute coordinates (x,y) of five points of each detected face: left eye, right eye, nose, left point of lips, right point of lips.
     * @type {Array<Array<number>>}
     * @memberof Detection
     */
    'landmarks': Array<Array<number>>;
    /**
     * 
     * @type {DetectionQuality}
     * @memberof Detection
     */
    'quality'?: DetectionQuality;
    /**
     * Rectangular area of the detected face. First element - X-axis coordinate. Second element - Y-axis coordinate. (X, Y) - left top point. Third element - rectangular width. Fourth element - rectangular height.
     * @type {Array<number>}
     * @memberof Detection
     */
    'roi': Array<number>;
    /**
     * Base64 of the cropped portrait.
     * @type {string}
     * @memberof Detection
     */
    'thumbnail'?: string;
}

