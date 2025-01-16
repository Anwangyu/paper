package src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.Workflow;

import java.util.List;

/**
 * <p>
 * 工作流 Mapper 接口
 * </p>
 *
 * @author xiaowoniu
 * @since 2023-12-12
 * @since : 2.6.0
 */
@Mapper
public interface WorkflowMapper extends BaseMapper<Workflow> {

    int updateBatchNextTriggerAtById(@Param("list") List<Workflow> list);
}
