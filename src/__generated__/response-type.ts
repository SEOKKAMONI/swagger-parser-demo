/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type StatusCode = 200 | 201 | 500 | 503 | 400 | 401 | 403 | 404 | 405 | 409 | 422;
/**
 * 응답결과 데이터
 */
export type Data =
  | unknown[]
  | {
      [k: string]: unknown;
    }
  | null;
/**
 * 에러발생시 메시지
 */
export type Error = MessageModel | ErrorModel | null;
export type NoName = string;
export type NoName1 = string;
export type NoName2 = string;
export type NoName3 = string;
export type NoName4 = string;

export interface BaseResponse {
  /**
   * 상태코드
   */
  status: StatusCode;
  data?: Data;
  error?: Error;
  /**
   * 클라이언트 출력용 메시지
   */
  message?: MessageModel | null;
  [k: string]: unknown;
}
export interface MessageModel {
  kr: NoName;
  en: NoName1;
  jp: NoName2;
  [k: string]: unknown;
}
export interface ErrorModel {
  message: NoName3;
  detail: NoName4;
  [k: string]: unknown;
}
