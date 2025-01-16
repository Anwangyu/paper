package src.main.java.com.aizuda.snailjob.template.datasource.handler;

import com.baomidou.mybatisplus.core.MybatisConfiguration;
import org.apache.ibatis.mapping.MappedStatement;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.JobSummaryMapper;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.JobTaskMapper;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.RetrySummaryMapper;
import src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.ServerNodeMapper;

import java.util.HashSet;
import java.util.Set;


public class SnailJobMybatisConfiguration extends MybatisConfiguration {

    /**
     * 重复的ID不需要告警 配置列表
     * 此设计为了多数据源不同数据库包下面加载的xml有重复的mybatis id 会告警报错问题
     */
    static final Set<String> DUPLICATE_IDS = new HashSet<>();

    private static final String BATCH_INSERT_ID = "insertBatch";

    static {
        DUPLICATE_IDS.add(ServerNodeMapper.class.getName() + "." + BATCH_INSERT_ID);
        DUPLICATE_IDS.add(JobTaskMapper.class.getName() + "." + BATCH_INSERT_ID);
        DUPLICATE_IDS.add(JobSummaryMapper.class.getName() + "." + BATCH_INSERT_ID);
        DUPLICATE_IDS.add(RetrySummaryMapper.class.getName() + "." + BATCH_INSERT_ID);
//        DUPLICATE_IDS.add(RetryTaskLogMessageMapper.class.getName() + "." + BATCH_INSERT_ID);
        DUPLICATE_IDS.add(src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.RetryTaskMapper.class.getName() + "." + BATCH_INSERT_ID);
        DUPLICATE_IDS.add(src.main.java.com.aizuda.snailjob.template.datasource.persistence.mapper.JobLogMessageMapper.class.getName() + "." + BATCH_INSERT_ID);
    }

    @Override
    public void addMappedStatement(MappedStatement ms) {
        if (mappedStatements.containsKey(ms.getId())) {
            if (!DUPLICATE_IDS.contains(ms.getId())) {
                super.addMappedStatement(ms);
            }
        } else {
            super.addMappedStatement(ms);
        }
    }
}