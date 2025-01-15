package com.aizuda.snailjob.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 状态值

 */
@AllArgsConstructor
@Getter
public enum StatusEnum {

    NO(0),
    YES(1);

    private final Integer status;

}
