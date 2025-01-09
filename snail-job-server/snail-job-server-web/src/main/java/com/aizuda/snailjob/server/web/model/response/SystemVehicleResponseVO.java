package com.aizuda.snailjob.server.web.model.response;

import lombok.Data;

@Data
public class SystemVehicleResponseVO {
    private Long id;

    private String vehicleName;

    private String parts;

    private String driver;

    private String dispatchInfo;

    private String states;

    private String personCharge;



}
