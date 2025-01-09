//package com.aizuda.snailjob.server.common.util.gson;
//
//import com.google.gson.FieldNamingStrategy;
//import org.apache.commons.lang3.StringUtils;
//
//import java.lang.reflect.Field;
//
//public enum JsonFieldNamingPolicy implements FieldNamingStrategy {
//    GsonProperty() {
//        @Override
//        public String translateName(Field f) {
//            com.aizuda.snailjob.server.common.util.gson.GsonProperty annotation = f.getAnnotation(com.aizuda.snailjob.server.common.util.gson.GsonProperty.class);
//            if (annotation != null && StringUtils.isNotBlank(annotation.value())) {
//                return annotation.value();
//            }
//            return f.getName();
//        }
//    }
//}
