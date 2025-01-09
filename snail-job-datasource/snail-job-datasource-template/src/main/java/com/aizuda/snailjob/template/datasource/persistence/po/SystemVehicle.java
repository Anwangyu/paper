package com.aizuda.snailjob.template.datasource.persistence.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("system_vehicle")
public class SystemVehicle extends CreateDt {

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String vehicleName;

    private String parts;

    private String driver;

    private String dispatchInfo;

    private String states;

    private String personCharge;

    private String type;


}
