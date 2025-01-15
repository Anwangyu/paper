package com.aizuda.snailjob.common.core.alarm.attribute;

import lombok.Data;

import java.util.List;


@Data
public class DingDingAttribute {

    private String webhookUrl;

    private List<String> ats;

}
