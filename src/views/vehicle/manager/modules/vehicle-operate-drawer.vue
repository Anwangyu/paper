<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { fetchGetAllRoles } from '@/service/api';
import { $t } from '@/locales';
import { enableStatusOptions, vehicleTypeOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';

defineOptions({ name: 'VehicleOperateDrawer' });

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.SystemManage.Vehicle | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule } = useFormRules();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: $t('page.vehicleManager.addVehicle'),
    edit: $t('page.vehicleManager.editVehicle')
  };
  return titles[props.operateType];
});

type Model = Pick<
  Api.SystemManage.Vehicle,
  | 'vehicleName'
  | 'vehicleParts'
  | 'vehicleDriver'
  | 'vehicleStates'
  | 'vehicleDispatchInfo'
  | 'vehiclePersonCharge'
  | 'vehicleType'
>;

const model = ref(createDefaultModel());

function createDefaultModel(): Model {
  return {
    vehicleName: '',
    vehicleParts: '',
    vehicleDriver: '',
    vehicleStates: null,
    vehicleDispatchInfo: '',
    vehiclePersonCharge: '',
    vehicleType: ''
  };
}

type RuleKey = Extract<keyof Model, 'vehicleName' | 'vehicleStates'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  vehicleName: defaultRequiredRule,
  vehicleStates: defaultRequiredRule
};

/** the enabled role options */
const roleOptions = ref<CommonType.Option<string>[]>([]);

async function getRoleOptions() {
  const { error, data } = await fetchGetAllRoles();

  if (!error) {
    const options = data.map(item => ({
      label: item.roleName,
      value: item.roleCode
    }));

    roleOptions.value = options;
  }
}

function handleInitModel() {
  model.value = createDefaultModel();

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model.value, props.rowData);
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  window.$message?.success($t('common.updateSuccess'));
  closeDrawer();
  emit('submitted');
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
    getRoleOptions();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model" :rules="rules" label-position="top">
        <NFormItem :label="$t('page.vehicleManager.vehicleName')" prop="vehicleName">
          <NInput v-model="model.vehicleName" :placeholder="$t('page.vehicleManager.form.vehicleName')" />
        </NFormItem>

        <NFormItem :label="$t('page.vehicleManager.vehicleParts')" prop="vehicleParts">
          <NInput v-model="model.vehicleParts" :placeholder="$t('page.vehicleManager.form.vehicleParts')" />
        </NFormItem>

        <NFormItem :label="$t('page.vehicleManager.vehicleDriver')" prop="vehicleDriver">
          <NInput v-model="model.vehicleDriver" :placeholder="$t('page.vehicleManager.form.vehicleDriver')" />
        </NFormItem>

        <NFormItem :label="$t('page.vehicleManager.vehicleDispatchInfo')" prop="vehicleDispatchInfo">
          <NInput v-model="model.vehicleDispatchInfo"
            :placeholder="$t('page.vehicleManager.form.vehicleDispatchInfo')" />
        </NFormItem>
        <NFormItem :label="$t('page.vehicleManager.vehicleStates')" prop="status">
          <NRadioGroup v-model="model.vehicleStates">
            <NRadio v-for="item in enableStatusOptions" :key="item.value" :value="item.value" :label="$t(item.label)" />
          </NRadioGroup>
        </NFormItem>

        <NFormItem :label="$t('page.vehicleManager.vehiclePersonCharge')" prop="vehiclePersonCharge">
          <NInput v-model="model.vehiclePersonCharge"
            :placeholder="$t('page.vehicleManager.form.vehiclePersonCharge')" />
        </NFormItem>

        <NFormItem :label="$t('page.vehicleManager.vehicleType')" path="vehicleType">
          <NSelect v-model:value="model.vehicleType" :options="translateOptions(vehicleTypeOptions)"
            :placeholder="$t('page.vehicleManager.form.vehicleType')" />
        </NFormItem>

      </NForm>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped></style>
