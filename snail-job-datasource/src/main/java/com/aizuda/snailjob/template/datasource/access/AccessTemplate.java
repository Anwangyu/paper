package src.main.java.com.aizuda.snailjob.template.datasource.access;


import org.springframework.stereotype.Component;
import src.main.java.com.aizuda.snailjob.template.datasource.access.config.GroupConfigAccess;
import src.main.java.com.aizuda.snailjob.template.datasource.access.config.NotifyConfigAccess;
import src.main.java.com.aizuda.snailjob.template.datasource.access.config.SceneConfigAccess;
import src.main.java.com.aizuda.snailjob.template.datasource.access.task.RetryTaskAccess;
import src.main.java.com.aizuda.snailjob.template.datasource.enums.OperationTypeEnum;
import src.main.java.com.aizuda.snailjob.template.datasource.exception.SnailJobDatasourceException;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.GroupConfig;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.NotifyConfig;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.RetrySceneConfig;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.RetryTask;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 数据处理模板类
 *
 */
@Component
public class AccessTemplate {
    protected Map<String, Access> REGISTER_ACCESS = new HashMap<>();

    public AccessTemplate(List<Access> accesses) {

        for (Access access : accesses) {
            for (final OperationTypeEnum typeEnum : OperationTypeEnum.values()) {
                if (access.supports(typeEnum.name())) {
                    REGISTER_ACCESS.put(typeEnum.name(), access);
                    break;
                }
            }
        }
    }

    /**
     * 获取重试任务操作类
     *
     * @return {@link RetryTaskAccess} 重试任务操作类
     */
    public TaskAccess<RetryTask> getRetryTaskAccess() {
        return (TaskAccess<RetryTask>) Optional.ofNullable(REGISTER_ACCESS.get(OperationTypeEnum.RETRY_TASK.name()))
                .orElseThrow(() -> new SnailJobDatasourceException("not supports operation type"));
    }



    /**
     * 获取场景配置操作类
     *
     * @return {@link SceneConfigAccess} 获取场景配置操作类
     */
    public ConfigAccess<RetrySceneConfig> getSceneConfigAccess() {
        return (ConfigAccess<RetrySceneConfig>) Optional.ofNullable(REGISTER_ACCESS.get(OperationTypeEnum.SCENE.name()))
                .orElseThrow(() -> new SnailJobDatasourceException("not supports operation type"));

    }

    /**
     * 获取组配置操作类
     *
     * @return {@link GroupConfigAccess} 获取组配置操作类
     */
    public ConfigAccess<GroupConfig> getGroupConfigAccess() {
        return (ConfigAccess<GroupConfig>) Optional.ofNullable(REGISTER_ACCESS.get(OperationTypeEnum.GROUP.name()))
                .orElseThrow(() -> new SnailJobDatasourceException("not supports operation type"));

    }

    /**
     * 获取通知配置操作类
     *
     * @return {@link NotifyConfigAccess} 获取通知配置操作类
     */
    public ConfigAccess<NotifyConfig> getNotifyConfigAccess() {
        return (ConfigAccess<NotifyConfig>) Optional.ofNullable(REGISTER_ACCESS.get(OperationTypeEnum.NOTIFY.name()))
                .orElseThrow(() -> new SnailJobDatasourceException("not supports operation type"));

    }

}
