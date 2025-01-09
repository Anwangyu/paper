package com.aizuda.snailjob.server.web.service;

import com.aizuda.snailjob.server.common.result.ResultView;
import com.aizuda.snailjob.template.datasource.persistence.po.SystemVehicle;

import java.util.List;

public interface SystemVehicleService {

    List<SystemVehicle> getVehicleInfo(String keyword);

    ResultView deleteVehicle(Long id);

    ResultView addVehicle(SystemVehicle vehicle);

    ResultView updateVehicle(SystemVehicle vehicle);
}
