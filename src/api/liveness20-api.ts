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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TransactionInfo } from '../models';
/**
 * Liveness20Api - axios parameter creator
 * @export
 */
export const Liveness20ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {number} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLivenessTransactionInfo: async (transactionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getLivenessTransactionInfo', 'transactionId', transactionId)
            const localVarPath = `/api/v2/liveness`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (transactionId !== undefined) {
                localVarQueryParameter['transactionId'] = transactionId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * Liveness20Api - functional programming interface
 * @export
 */
export const Liveness20ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = Liveness20ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {number} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLivenessTransactionInfo(transactionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLivenessTransactionInfo(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * Liveness20Api - factory interface
 * @export
 */
export const Liveness20ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = Liveness20ApiFp(configuration)
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {number} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLivenessTransactionInfo(transactionId: number, options?: any): AxiosPromise<TransactionInfo> {
            return localVarFp.getLivenessTransactionInfo(transactionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Liveness20Api - object-oriented interface
 * @export
 * @class Liveness20Api
 * @extends {BaseAPI}
 */
export class Liveness20Api extends BaseAPI {
    /**
     * 
     * @summary Liveness assessment
     * @param {number} transactionId ID of the current liveness transaction.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Liveness20Api
     */
    public getLivenessTransactionInfo(transactionId: number, options?: AxiosRequestConfig) {
        return Liveness20ApiFp(this.configuration).getLivenessTransactionInfo(transactionId, options).then((request) => request(this.axios, this.basePath));
    }
}
