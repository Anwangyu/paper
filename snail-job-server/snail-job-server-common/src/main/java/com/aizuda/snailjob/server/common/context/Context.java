package com.aizuda.snailjob.server.common.context;

import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.google.common.collect.ImmutableMap;
import lombok.Data;

@Data
public class Context {
    private static ThreadLocal<Context> threadLocal = new ThreadLocal<>();
    private String userUuid;
    private long startTime;
    private String traceId;
    private String reqBody;
    private String clientIp;
    private String clientType;
    private String versionCode;
    private ImmutableMap<String, String> headerMap;
    private String respMsg;
    private Object respBody;

    public static Context get() {
        return threadLocal.get();
    }

    public static void init(String traceId) {
        Context context = new Context();

        context.startTime = System.currentTimeMillis();
        context.traceId = traceId;

        threadLocal.set(context);
    }

    public void unload() {
        threadLocal.remove();
    }

    public void setApiParam() {
        if (headerMap == null || headerMap.isEmpty()) {
            return;
        }
        if (!StringUtils.isEmpty(headerMap.get("user".toLowerCase()))) {
            this.userUuid = headerMap.get("user".toLowerCase());
        }

        if (!StringUtils.isEmpty(headerMap.get("clientType".toLowerCase()))) {
            this.clientType = headerMap.get("clientType".toLowerCase());
        }

        if (!StringUtils.isEmpty(headerMap.get("versionCode".toLowerCase()))) {
            this.versionCode = headerMap.get("versionCode".toLowerCase());
        }
    }
}
