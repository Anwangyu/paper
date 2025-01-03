import { request } from '../request';




export function fetchGetVehicleList(params?: Api.SystemManage.VehicleSearchParams) {
  return request<Api.SystemManage.VehicleList>({
    url: '/systemManage/getVehicleList',
    method: 'get',
    params
  });
}
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>({
    url: '/systemManage/getAllRoles',
    method: 'get'
  });
}
