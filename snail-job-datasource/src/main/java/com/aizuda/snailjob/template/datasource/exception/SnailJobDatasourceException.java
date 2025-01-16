package src.main.java.com.aizuda.snailjob.template.datasource.exception;

import com.aizuda.snailjob.common.core.exception.BaseSnailJobException;

/**
 * 数据源模块异常类

 */
public class SnailJobDatasourceException extends BaseSnailJobException {

    public SnailJobDatasourceException(String message) {
        super(message);
    }

    public SnailJobDatasourceException(String message, Object... arguments) {
        super(message, arguments);
    }
}
