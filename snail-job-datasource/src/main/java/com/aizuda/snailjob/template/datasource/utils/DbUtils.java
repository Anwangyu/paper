package src.main.java.com.aizuda.snailjob.template.datasource.utils;

import com.aizuda.snailjob.common.core.context.SnailSpringContext;
import org.springframework.core.env.Environment;
import src.main.java.com.aizuda.snailjob.template.datasource.enums.DbTypeEnum;

/**
 * 数据库工具

 */
public class DbUtils {

    public static DbTypeEnum getDbType() {
        Environment environment = SnailSpringContext.getBean(Environment.class);
        String url = environment.getProperty("spring.datasource.url");
        return DbTypeEnum.modeOf(url);
    }

    public static boolean isOracle() {
        return DbTypeEnum.ORACLE.equals(getDbType());
    }

    public static boolean notOracle() {
        return !DbTypeEnum.ORACLE.equals(getDbType());
    }
}
