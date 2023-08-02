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



/**
 * Set to resize the original image.
 * @export
 * @interface ResizeOptions
 */
export interface ResizeOptions {
    /**
     * Resized image width, px.
     * @type {number}
     * @memberof ResizeOptions
     */
    'width'?: number;
    /**
     * Resized image height, px.
     * @type {number}
     * @memberof ResizeOptions
     */
    'height'?: number;
    /**
     * Resized image quality, percent.
     * @type {number}
     * @memberof ResizeOptions
     */
    'quality'?: number;
}
