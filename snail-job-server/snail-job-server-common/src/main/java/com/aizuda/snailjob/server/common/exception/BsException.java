package com.aizuda.snailjob.server.common.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BsException extends RuntimeException {
    private Integer code;
    private String msg;

    public BsException(int code) {
        this.code = code;
    }

    public BsException(int code, String msg) {
        super(msg);
        this.code = code;
        this.msg = msg;
    }


}
