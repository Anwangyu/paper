package com.aizuda.snailjob.common.core.alarm.attribute;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.util.List;


@Data
@Slf4j
public class EmailAttribute {

    private List<String> tos;

}
