/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageSource } from './image-source';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface MatchImage
 */
export interface MatchImage {
    /**
     * The image index number. Can be given; if not given, the index numbers are set automatically starting from 0. All index numbers must be whole and unique—not repeated.
     * @type {number}
     * @memberof MatchImage
     */
    'index'?: number;
    /**
     * 
     * @type {ImageSource}
     * @memberof MatchImage
     */
    'type'?: ImageSource;
    /**
     * 
     * @type {ImageData}
     * @memberof MatchImage
     */
    'data': ImageData;
    /**
     * Whether to detect all faces in the image. If set to false, only the most central face is detected.
     * @type {boolean}
     * @memberof MatchImage
     */
    'detectAll'?: boolean;
}

