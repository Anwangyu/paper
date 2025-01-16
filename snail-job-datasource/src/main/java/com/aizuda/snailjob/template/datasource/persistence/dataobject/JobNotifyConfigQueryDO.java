package src.main.java.com.aizuda.snailjob.template.datasource.persistence.dataobject;

import lombok.Data;

import java.util.List;


@Data
public class JobNotifyConfigQueryDO {

    private List<String> groupNames;

    private Long jobId;
    /**
     * 命名空间id
     */
    private String namespaceId;

}
