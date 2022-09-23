/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 4.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DetectionFace
 */
export interface DetectionFace {
    /**
     * Faces index used to identify faces in scope of one photo.
     * @type {number}
     * @memberof DetectionFace
     */
    'faceIndex'?: number;
    /**
     * Absolute coordinates (x,y) of five points of each detected face: left eye, right eye, nose, left point of lips, right point of lips.
     * @type {Array<Array<number>>}
     * @memberof DetectionFace
     */
    'landmarks'?: Array<Array<number>>;
    /**
     * Rectangular area of the detected face. First element - X-axis coordinate. Second element - Y-axis coordinate. (X, Y) - left top point. Third element - rectangular width. Fourth element - rectangular height.
     * @type {Array<number>}
     * @memberof DetectionFace
     */
    'roi'?: Array<number>;
    /**
     * Base64 of the cropped portrait.
     * @type {string}
     * @memberof DetectionFace
     */
    'thumbnail'?: string;
}

