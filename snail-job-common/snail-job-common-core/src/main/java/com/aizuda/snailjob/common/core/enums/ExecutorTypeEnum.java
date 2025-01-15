package com.aizuda.snailjob.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 执行器类型枚举
 *

 */
@AllArgsConstructor
@Getter
public enum ExecutorTypeEnum {

    JAVA(1),
    PYTHON(2),
    ;

    private final int type;

}
