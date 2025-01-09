package com.aizuda.snailjob.server.common.code;

public class ErrorCode {

    /**
     * success
     */
    public static final int OK = 200;
    public static final int CREATED = 201;

    /**
     * Bad Request
     */
    public static final  int BAD_REQUEST = 400;
    public static final  int AUTHENTICATION_FAILED = 401;
    public static final  int PASSWORD_ERROR = 402;
    public static final  int FORBIDDEN= 403;
    public static final  int HTTP_NOT_FOUND = 404;
    public static final  int METHOD_NOT_ALLOWED = 405;
    public static final  int UNSUPPORTED_MEDIA  = 415;
    public static final  int NOT_ACCEPTABLE = 406;
    /*
     * 5xx Server Error
     * */
    public static final  int INTERNAL_ERROR = 500;
    public static final  int BAD_GATEWAY = 502;
    public static final  int SERVICE_UNAVAILABLE = 503;
    public static final  int TIME_OUT = 504;


    /*
     * Business related error codes
     * */

    /** Validation Failed  */
    public static final int VALIDATION_FAILED = 1001;

    /** Database Error  */
    public static final int DATABASE_ERROR = 1002;

    /** Resource Not Found  */
    public static final int RESOURCE_NOT_FOUND = 1003;
    /** Permission Denied  */
    public static final int PERMISSION_DENIED = 1004;
    /** Data Already Exists  */
    public static final int DATA_ALREADY_EXISTS = 1005;

    /** Operation Failed  */
    public static final int OPERATION_FAILED = 1006;

    /** Authentication Required  */
    public static final int AUTHENTICATION_REQUIRED = 1007;

    /** Authorization Failed  */
    public static final int AUTHORIZATION_FAILED = 1008;

    /** Invalid Input  */
    public static final int INVALID_INPUT = 1009;

    /** Resource Locked  */
    public static final int RESOURCE_LOCKED = 1010;

    /** File Upload Failed  */
    public static final int FILE_UPLOAD_FAILED = 1011;

    /** Timeout - 请求超时 */
    public static final int TIMEOUT = 1012;

    /** Business Exception  */
    public static final int BUSINESS_EXCEPTION = 1013;

    /** Unsupported Operation  */
    public static final int UNSUPPORTED_OPERATION = 1014;

    /** Data Not Found  */
    public static final int DATA_NOT_FOUND = 1015;
    /** Data Save Exception */
    public static final int DATA_SAVE_EXCEPTION = 1016;


}