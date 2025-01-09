//package com.aizuda.snailjob.server.web.service.impl;
//
//import cn.hutool.core.collection.CollUtil;
//import cn.hutool.core.lang.Assert;
//import cn.hutool.core.util.ObjUtil;
//import cn.hutool.core.util.StrUtil;
//import com.aizuda.snailjob.common.core.enums.RetryStatusEnum;
//import com.aizuda.snailjob.common.core.util.JsonUtil;
//import com.aizuda.snailjob.common.log.constant.LogFieldConstants;
//import com.aizuda.snailjob.server.common.exception.SnailJobServerException;
//import com.aizuda.snailjob.server.web.model.base.PageResult;
//import com.aizuda.snailjob.server.web.model.request.RetryTaskLogMessageQueryVO;
//import com.aizuda.snailjob.server.web.model.request.RetryTaskLogQueryVO;
//import com.aizuda.snailjob.server.web.model.request.UserSessionVO;
//import com.aizuda.snailjob.server.web.model.response.RetryTaskLogMessageResponseVO;
//import com.aizuda.snailjob.server.web.model.response.RetryTaskLogResponseVO;
//import com.aizuda.snailjob.server.web.service.RetryTaskLogService;
//import com.aizuda.snailjob.server.web.service.convert.RetryTaskLogResponseVOConverter;
//import com.aizuda.snailjob.server.web.util.UserSessionUtils;
//import com.aizuda.snailjob.template.datasource.persistence.mapper.RetryTaskLogMapper;
//import com.aizuda.snailjob.template.datasource.persistence.mapper.RetryTaskLogMessageMapper;
//import com.aizuda.snailjob.template.datasource.persistence.po.RetryTaskLog;
//import com.aizuda.snailjob.template.datasource.persistence.po.RetryTaskLogMessage;
//import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
//import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
//import com.google.common.collect.Lists;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.*;
//import java.util.stream.Collectors;
//
//import static com.aizuda.snailjob.common.core.enums.RetryStatusEnum.ALLOW_DELETE_STATUS;
//
///**
// * @author: opensnail
// * @date : 2022-02-28 09:10
// */
//@Service
//@RequiredArgsConstructor
//public class RetryTaskLogServiceImpl implements RetryTaskLogService {
//
//    private final RetryTaskLogMapper retryTaskLogMapper;
//    private final RetryTaskLogMessageMapper retryTaskLogMessageMapper;
//
//
//
//
//
//
//
//
//}
