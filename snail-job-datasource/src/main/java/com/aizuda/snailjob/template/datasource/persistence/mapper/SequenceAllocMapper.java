package src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper;

import src.main.java.com.aizuda.snailjob.template.datasource.persistence.po.SequenceAlloc;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 号段模式序号ID分配表 Mapper 接口
 * </p>
 *
 */
@Mapper
public interface SequenceAllocMapper extends BaseMapper<SequenceAlloc> {

}
