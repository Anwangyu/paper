package com.aizuda.snailjob.common.log.dto;

import java.io.Serializable;


public class TaskLogFieldDTO implements Serializable {

    private String name;
    private String value;

    /**
     * Non arg constructor for Serializable.
     */
    @SuppressWarnings("unused")
    public TaskLogFieldDTO() {

    }

    public TaskLogFieldDTO(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }
}
