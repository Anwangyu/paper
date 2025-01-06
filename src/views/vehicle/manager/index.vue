<script setup lang="tsx">
import { NButton, NCard, NDataTable, NPopconfirm, NTag } from 'naive-ui';
import { fetchGetVehicleList } from '@/service/api';
import { $t } from '@/locales';
import { enableStatusRecord, vehicleTypeRecord } from '@/constants/business';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { useAppStore } from '@/store/modules/app';
import VehicleOperateDrawer from './modules/vehicle-operate-drawer.vue';
import VehicleSearch from './modules/vehicle-search.vue';

const appStore = useAppStore();

const {
  columns,
  columnChecks,
  data,
  getData,
  getDataByPage,
  loading,
  mobilePagination,
  searchParams,
  resetSearchParams
} = useTable({
  apiFn: fetchGetVehicleList,
  showTotal: true,
  apiParams: {
    page: 1,
    size: 10,
    vehicleStates: undefined,
    vehicleParts: undefined,
    vehicleName: undefined,
    vehicleDriver: undefined,
    vehicleType: undefined,
    vehicleDispatchInfo: undefined,
    vehiclePersonCharge: undefined
  },
  columns: () => [
    { type: 'selection', width: 48 },
    { key: 'index', title: $t('common.index'), width: 64 },
    { key: 'vehicleName', title: $t('page.vehicleManager.vehicleName'), minWidth: 100 },
    {
      key: 'vehicleType',
      title: $t('page.vehicleManager.vehicleType'),
      width: 100,
      render: row => {
        if (row.vehicleType === undefined) {
          return '';
        }

        const tagMap: Record<Api.VehicleManager.VehicleType, NaiveUI.ThemeColor> = {
          Suv: 'primary',
          Mpv: 'success',
          Sedan: 'warning',
          Coupe: 'error',
          Supercar: 'info',
          Jeep: 'primary',
          Minivan: 'success',
          StationWagon: 'warning',
          Truck: 'error',
          Bus: 'info',
          Hybrid: 'success',
          EV: 'primary',
          Pickup: 'warning'
        };
        const type = row.vehicleType as Api.VehicleManager.VehicleType;
        const label = $t(vehicleTypeRecord[type] || 'common.unknown');
        const color = tagMap[type] || 'info';

        return <NTag type={color}>{label}</NTag>;
      }
    },
    { key: 'vehicleParts', title: $t('page.vehicleManager.vehicleParts'), minWidth: 100 },
    { key: 'vehicleDriver', title: $t('page.vehicleManager.vehicleDriver'), width: 120 },
    { key: 'vehicleDispatchInfo', title: $t('page.vehicleManager.vehicleDispatchInfo'), minWidth: 200 },
    {
      key: 'status',
      title: $t('page.vehicleManager.vehicleStates'),
      align: 'center',
      width: 100,
      render: (row: { status: Api.Common.EnableStatus }) => {
        if (row.status === null || row.status === undefined) {
          return null;
        }

        const tagMap: Record<Api.Common.EnableStatus, NaiveUI.ThemeColor> = {
          1: 'success',
          2: 'warning',
        };

        const label = $t(enableStatusRecord[row.status]);
        return <NTag type={tagMap[row.status]}>{label}</NTag>;
      }

    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => edit(row.id)}>
            {$t('common.edit')}
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
            {{
              default: () => $t('common.confirmDelete'),
              trigger: () => (
                <NButton type="error" ghost size="small">
                  {$t('common.delete')}
                </NButton>
              )
            }}
          </NPopconfirm>
        </div>
      )
    }
  ]
});

const { drawerVisible, operateType, editingData, handleAdd, handleEdit, checkedRowKeys, onBatchDeleted, onDeleted } =
  useTableOperate(data, getData);

async function handleBatchDelete() {
  console.log(checkedRowKeys.value);
  onBatchDeleted();
}

function handleDelete(id: string | undefined) {
  if (!id) return;
  onDeleted();
}

function edit(id: string | undefined) {
  if (!id) return;
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <VehicleSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />

    <NCard :title="$t('page.vehicleManager.title')" :bordered="false" size="small"
      class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation v-model:columns="columnChecks" :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading" @add="handleAdd" @delete="handleBatchDelete" @refresh="getData" />
      </template>

      <NDataTable v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" size="small"
        :flex-height="!appStore.isMobile" :scroll-x="962" :loading="loading" remote :row-key="row => row.id"
        :pagination="mobilePagination" class="sm:h-full" />
      <VehicleOperateDrawer v-model:visible="drawerVisible" :operate-type="operateType" :row-data="editingData"
        @submitted="getDataByPage" />
    </NCard>
  </div>
</template>

<style scoped></style>
