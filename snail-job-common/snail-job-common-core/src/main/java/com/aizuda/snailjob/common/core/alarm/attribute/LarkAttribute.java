package com.aizuda.snailjob.common.core.alarm.attribute;

import lombok.Data;

import java.util.List;

/**
 * 飞书
 *

 */
@Data
public class LarkAttribute {

    private String webhookUrl;

    private List<String> ats;

}
