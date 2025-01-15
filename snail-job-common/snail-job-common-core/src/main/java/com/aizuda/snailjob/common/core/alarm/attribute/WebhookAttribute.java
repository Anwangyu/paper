package com.aizuda.snailjob.common.core.alarm.attribute;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;


@Data
@Slf4j
public class WebhookAttribute {

    /**
     * webhook
     */
    private String webhookUrl;

    /**
     * 请求类型
     */
    private Integer contentType;

    /**
     * 秘钥
     */
    private String secret;

}
