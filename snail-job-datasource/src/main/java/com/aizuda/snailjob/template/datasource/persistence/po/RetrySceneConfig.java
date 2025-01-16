package src.main.java.com.aizuda.snailjob.template.datasource.persistence.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * 场景配置
 *


 */
@Data
@TableName("sj_retry_scene_config")
public class RetrySceneConfig extends CreateUpdateDt {

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String namespaceId;


    private String groupName;

    private String sceneName;

    private Integer sceneStatus;

    private Integer maxRetryCount;

    private Integer backOff;

    private String triggerInterval;

    private String description;

    private Long deadlineRequest;

    private Integer routeKey;

    private Integer executorTimeout;

    /**
     * 通知告警场景配置id列表
     */
    private String notifyIds;
}
