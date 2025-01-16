package src.main.java.com.aizuda.snailjob.template.datasource.persistence.dataobject;

import lombok.Data;

import java.util.List;


@Data
public class WorkflowBatchQueryDO {

    private List<String> groupNames;
    private Integer taskBatchStatus;
    private String workflowName;
    private Long workflowId;
    /**
     * 命名空间id
     */
    private String namespaceId;

}
