package com.aizuda.snailjob.server.common.util;


import com.aizuda.snailjob.server.common.exception.BsException;

public class AssertUtil {

    public static void notNull(Object object, Integer errorCode, String message) {
        if (object == null) {
            throw new BsException(errorCode, message);
        }
    }

    public static void isTrue(boolean expression, Integer errorCode, String message) {
        if (!expression) {
            throw new BsException(errorCode, message);
        }
    }

}
