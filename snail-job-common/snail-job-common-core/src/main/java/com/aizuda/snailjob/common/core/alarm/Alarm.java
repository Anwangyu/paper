package com.aizuda.snailjob.common.core.alarm;

import java.util.List;


public interface Alarm<T> {

    Integer getAlarmType();

    boolean asyncSendMessage(T t);

    boolean syncSendMessage(T t);

    boolean asyncSendMessage(List<T> ts);
}
