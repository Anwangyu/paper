package src.main.java.com.aizuda.snailjob.template.datasource.access;

public interface Access<T> {

    boolean supports(String operationType);
}
