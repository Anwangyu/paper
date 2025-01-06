import { request } from '../request';


export function fetchGetVehicleList(params?: Api.VehicleManager.VehicleSearchParams) {
  return request<Api.VehicleManager.VehicleList>({
    url: '/vehicle/page/list',
    method: 'get',
    params
  });
}

export function fetchAddVehicle(data: Api.VehicleManager.Vehicle) {
  return request<boolean>({
    url: '/vehicle',
    method: 'post',
    data
  });
}

export function fetchEditVehicle(data: Api.VehicleManager.Vehicle) {
  return request<boolean>({
    url: '/vehicle',
    method: 'put',
    data
  });
}

export function fetchDelVehicle(id: number) {
  return request<boolean>({
    url: `/vehicle/${id}`,
    method: 'delete'
  });
}

export function fetchBatchDelteVehicle(data: string[]) {
  return request<boolean>({
    url: `/vehicle/ids`,
    method: 'delete',
    data
  });
}

