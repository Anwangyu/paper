package com.aizuda.snailjob.common.core.alarm;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


public class SnailJobAlarmFactory {

    private static final Map<Integer, Alarm> alarmMap = new ConcurrentHashMap<>();

    public static void register(Alarm alarm) {
        alarmMap.put(alarm.getAlarmType(), alarm);
    }

    public static Alarm getAlarmType(Integer alarmType) {
        return alarmMap.get(alarmType);
    }
}
