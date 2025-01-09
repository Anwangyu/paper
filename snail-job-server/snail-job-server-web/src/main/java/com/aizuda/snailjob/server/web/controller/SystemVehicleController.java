package com.aizuda.snailjob.server.web.controller;

import com.aizuda.snailjob.server.common.result.ResultView;
import com.aizuda.snailjob.server.web.service.SystemVehicleService;
import com.aizuda.snailjob.template.datasource.persistence.po.SystemVehicle;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SystemVehicleController {

    private final SystemVehicleService systemVehicleService;

    @GetMapping("/vehicle/info")
    public List<SystemVehicle> getVehicleInfo(
            @RequestParam(required = false) String keyword) {
        return systemVehicleService.getVehicleInfo(keyword);
    }

    @DeleteMapping("/vehicle/{id}")
    public ResultView deleteVehicle(@PathVariable Long id) {
        return systemVehicleService.deleteVehicle(id);
    }

    @PostMapping("/vehicle")
    public ResultView addVehicle(@RequestBody SystemVehicle vehicle) {
        return systemVehicleService.addVehicle(vehicle);
    }

    @PutMapping("/vehicle/{id}")
    public ResultView updateVehicle(@PathVariable Long id, @RequestBody SystemVehicle vehicle) {
        vehicle.setId(id);
        return systemVehicleService.updateVehicle(vehicle);
    }




}
