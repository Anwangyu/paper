package com.aizuda.snailjob.server.web.service.impl;

import com.aizuda.snailjob.server.common.result.ResultView;
import com.aizuda.snailjob.server.web.service.SystemVehicleService;
import com.aizuda.snailjob.template.datasource.mapper.SystemVehicleMapper;
import com.aizuda.snailjob.template.datasource.persistence.po.SystemVehicle;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SystemVehicleServiceImpl implements SystemVehicleService {

    private final SystemVehicleMapper systemVehicleMapper;


    @Override
    public List<SystemVehicle> getVehicleInfo(String keyword) {
        QueryWrapper<SystemVehicle> queryWrapper = new QueryWrapper<>();
        if (keyword != null && !keyword.trim().isEmpty()) {
            queryWrapper.lambda().like(SystemVehicle::getVehicleName, keyword);
        }
        return systemVehicleMapper.selectList(queryWrapper);
    }

    @Override
    public ResultView deleteVehicle(Long id) {

        return (systemVehicleMapper.deleteById(id) > 0)
                ? ResultView.success("success",true)
                : ResultView.failed(400, "failed");

    }

    @Override
    public ResultView addVehicle(SystemVehicle vehicle) {

        return (systemVehicleMapper.insert(vehicle) > 0)
                ? ResultView.success("success",true)
                : ResultView.failed(400, "failed");
    }

    @Override
    public ResultView updateVehicle(SystemVehicle vehicle) {

        return ((systemVehicleMapper.updateById(vehicle)) >0)
                ? ResultView.success(true)
                : ResultView.failed(400, "failed");
    }

}
