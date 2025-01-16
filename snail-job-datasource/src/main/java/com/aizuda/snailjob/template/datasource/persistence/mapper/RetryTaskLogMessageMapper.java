package src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper;

import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.RetryTaskLogMessage;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 重试日志异常信息记录表 Mapper 接口
 * </p>
 *


 */
@Mapper
public interface RetryTaskLogMessageMapper extends BaseMapper<RetryTaskLogMessage> {

    int insertBatch(@Param("list") List<RetryTaskLogMessage> list);

    int updateBatch(@Param("list") List<RetryTaskLogMessage> list);

}
