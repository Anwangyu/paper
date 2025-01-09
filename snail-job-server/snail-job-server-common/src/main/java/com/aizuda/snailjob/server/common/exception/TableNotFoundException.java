package com.aizuda.snailjob.server.common.exception;


import com.aizuda.snailjob.server.common.code.ErrorCode;

public class TableNotFoundException extends BsException{
    public TableNotFoundException(String tableId) {
        super(ErrorCode.RESOURCE_NOT_FOUND, "Table with ID " + tableId + " not found");
    }
}
