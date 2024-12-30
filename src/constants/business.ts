import { transformRecordToOption } from '@/utils/common';

export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
  '1': 'page.manage.common.status.enable',
  '2': 'page.manage.common.status.disable'
};

export const enableStatusOptions = transformRecordToOption(enableStatusRecord);

export const userGenderRecord: Record<Api.SystemManage.UserGender, App.I18n.I18nKey> = {
  '1': 'page.manage.user.gender.male',
  '2': 'page.manage.user.gender.female'
};

export const userGenderOptions = transformRecordToOption(userGenderRecord);

export const menuTypeRecord: Record<Api.SystemManage.MenuType, App.I18n.I18nKey> = {
  '1': 'page.manage.menu.type.directory',
  '2': 'page.manage.menu.type.menu'
};

export const menuTypeOptions = transformRecordToOption(menuTypeRecord);

export const menuIconTypeRecord: Record<Api.SystemManage.IconType, App.I18n.I18nKey> = {
  '1': 'page.manage.menu.iconType.iconify',
  '2': 'page.manage.menu.iconType.local'
};

export const menuIconTypeOptions = transformRecordToOption(menuIconTypeRecord);

export const vehicleTypeRecord: Record<Api.SystemManage.VehicleType, App.I18n.I18nKey> = {
  Suv: 'page.manage.vehicle.type.Suv',
  Mpv: 'page.manage.vehicle.type.Mpv',
  Sedan: 'page.manage.vehicle.type.Sedan',
  Coupe: 'page.manage.vehicle.type.Coupe',
  Supercar: 'page.manage.vehicle.type.Supercar',
  Jeep: 'page.manage.vehicle.type.Jeep',
  Minivan: 'page.manage.vehicle.type.Minivan',
  StationWagon: 'page.manage.vehicle.type.StationWagon',
  Truck: 'page.manage.vehicle.type.Truck',
  Bus: 'page.manage.vehicle.type.Bus',
  Hybrid: 'page.manage.vehicle.type.Hybrid',
  EV: 'page.manage.vehicle.type.EV',
  Pickup: 'page.manage.vehicle.type.Pickup'
};
export const vehicleTypeOptions = transformRecordToOption(vehicleTypeRecord);
