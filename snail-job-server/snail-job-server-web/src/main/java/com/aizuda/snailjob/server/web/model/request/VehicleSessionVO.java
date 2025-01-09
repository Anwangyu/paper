package com.aizuda.snailjob.server.web.model.request;

import lombok.Data;

@Data
public final class VehicleSessionVO {
    private Long id;

    private String vehicleName;

    private String parts;

    private String driver;

    private String dispatchInfo;

    private String states;

    private String personCharge;

}
