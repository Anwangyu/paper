package com.aizuda.snailjob.server.web.model.request;

import com.aizuda.snailjob.server.common.dto.CallbackConfig;
import com.aizuda.snailjob.server.common.dto.DecisionConfig;
import com.aizuda.snailjob.server.common.dto.JobTaskConfig;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.util.List;
import java.util.Set;

/**
 * @author xiaowoniu
 * @date 2023-12-12 21:53:17
 * @since 2.6.0
 */
@Data
public class WorkflowRequestVO {

    private Long id;

    @NotBlank(message = "组名称不能为空")
    @Pattern(regexp = "^[A-Za-z0-9_-]{1,64}$", message = "仅支持长度为1~64字符且类型为数字、字母、下划线和短横线")
    private String groupName;

    private String workflowName;

    private Integer triggerType;

    private String triggerInterval;

    private Integer executorTimeout;

    private Integer blockStrategy;

    /**
     * 工作流上下文
     */
    private String wfContext;

    /**
     * 0、关闭、1、开启
     */
    private Integer workflowStatus;

    /**
     * 描述
     */
    private String description;

    /**
     * DAG节点配置
     */
    private NodeConfig nodeConfig;

    @Data
    public static class NodeConfig {

        /**
         * 1、任务节点 2、条件节点
         */
        private Integer nodeType;

        /**
         * 节点信息
         */
        private List<NodeInfo> conditionNodes;

        /**
         * 子节点
         */
        private NodeConfig childNode;

    }

    @Data
    public static class NodeInfo {

        /**
         * 节点名称
         */
        private String nodeName;

        /**
         * 工作流状态  0、关闭、1、开启
         */
        private Integer workflowNodeStatus;

        /**
         * 优先级
         */
        private Integer priorityLevel;

        /**
         * 子节点
         */
        private NodeConfig childNode;

        /**
         * 1、跳过 2、阻塞
         */
        private Integer failStrategy;

        /**
         * 任务节点配置
         */
        private JobTaskConfig jobTask;

        /**
         * 决策节点配置
         */
        private DecisionConfig decision;

        /**
         * 回调配置
         */
        private CallbackConfig callback;
    }

    /**
     * 通知告警场景配置id列表
     */
    private Set<Long> notifyIds;
}
