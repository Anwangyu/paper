package com.aizuda.snailjob.server.common.result;

import com.aizuda.snailjob.server.common.code.ErrorCode;
import com.aizuda.snailjob.server.common.context.Context;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.View;

import java.util.LinkedHashMap;
import java.util.Map;

@Slf4j
public class ResultView implements View {

    public static final int DEFAULT_OK = 200;
    public static final int DEFAULT_FAILED = -1;

    private Object data;
    private int code = DEFAULT_OK; // 默认成功
    private String msg;

    public ResultView() {}

    public ResultView(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public ResultView(Object data) {
        this.data = data;
    }

    public static ResultView failed(int code, String msg) {
        return new ResultView(code, msg);
    }

    public static ResultView success(Object data) {
        return new ResultView(data);
    }

    public static ResultView success(String message, Object data) {
        ResultView resultView = new ResultView(data);
        resultView.msg = message;
        return resultView;
    }

    @Override
    public void render(Map<String, ?> map, HttpServletRequest request, HttpServletResponse response) throws Exception {
        // 如果 Context 为空，初始化 Context
        initContextIfNecessary(request);

        // 构建响应体
        Map<String, Object> returnMap = new LinkedHashMap<>();
        returnMap.put("code", code);
        if (data != null) {
            returnMap.put("data", data);
        }
        returnMap.put("msg", msg);
        returnMap.put("requestId", Context.get().getTraceId());
        returnMap.put("costTime", (System.currentTimeMillis() - Context.get().getStartTime()) + "ms");

        // 设置响应体
        Context.get().setRespBody(returnMap);
        sendResponse(response, returnMap);
    }

    private void initContextIfNecessary(HttpServletRequest request) {
        if (Context.get() == null) {
            String traceId = request.getHeader("traceId");
            traceId = (traceId != null) ? traceId : "TRACE_" + System.currentTimeMillis();
            Context.init(traceId);
        }
    }

    private void sendResponse(HttpServletResponse response, Map<String, Object> returnMap) throws Exception {
        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(new ObjectMapper().writeValueAsString(returnMap));
    }

    private void sendErrorResponse(HttpServletResponse response, String errorMessage) throws Exception {
        Map<String, Object> errorResponse = new LinkedHashMap<>();
        errorResponse.put("code", ErrorCode.INTERNAL_ERROR);
        errorResponse.put("msg", errorMessage);
        errorResponse.put("requestId", "N/A");
        errorResponse.put("costTime", "0ms");

        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(new ObjectMapper().writeValueAsString(errorResponse));
    }
}
