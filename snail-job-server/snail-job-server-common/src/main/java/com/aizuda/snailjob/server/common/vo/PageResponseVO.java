package com.aizuda.snailjob.server.common.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PageResponseVO<T> {
    private long total;
    private long pages;
    private List<T> records;


}
