<script setup lang="ts">
import { computed } from 'vue';
import { $t } from '@/locales';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { enableStatusOptions, vehicleTypeOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';

defineOptions({ name: 'VehicleSearch' });

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const { formRef, validate, restoreValidation } = useNaiveForm();

const model = defineModel<Api.SystemManage.VehicleSearchParams>('model', { required: true });

type RuleKey = Extract<keyof Api.SystemManage.VehicleSearchParams, 'userEmail' | 'userPhone'>;

const rules = computed<Record<RuleKey, App.Global.FormRule>>(() => {
  const { patternRules } = useFormRules(); // inside computed to make locale reactive

  return {
    userEmail: patternRules.email,
    userPhone: patternRules.phone
  };
});

async function reset() {
  await restoreValidation();
  emit('reset');
}

async function search() {
  await validate();
  emit('search');
}
</script>

<template>
  <ElCard class="card-wrapper">
    <ElCollapse>
      <ElCollapseItem :title="$t('common.search')" name="vehicle-search">
        <ElForm ref="formRef" :model="model" :rules="rules" label-position="right" :label-width="80">
          <ElRow :gutter="24">
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem :label="$t('page.vehicleManager.vehicleName')" prop="vehicleName">
                <ElInput v-model="model.vehicleName" :placeholder="$t('page.vehicleManager.form.vehicleName')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12" :label="$t('page.vehicleManager.vehicleType')">
              <ElFormItem :label="$t('page.vehicleManager.vehicleType')" prop="vehicleType">
                <ElSelect
                  v-model="model.vehicleType"
                  clearable
                  :placeholder="$t('page.vehicleManager.form.vehicleType')"
                >
                  <ElOption
                    v-for="(item, idx) in translateOptions(vehicleTypeOptions)"
                    :key="idx"
                    :label="item.label"
                    :value="item.value"
                  ></ElOption>
                </ElSelect>
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem :label="$t('page.vehicleManager.vehicleName')" prop="vehicleName">
                <ElInput v-model="model.vehicleName" :placeholder="$t('page.vehicleManager.form.vehicleName')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem :label="$t('page.vehicleManager.vehicleParts')" prop="vehicleParts">
                <ElInput v-model="model.vehicleParts" :placeholder="$t('page.vehicleManager.form.vehicleParts')" />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem :label="$t('page.vehicleManager.vehiclePersonCharge')" prop="vehiclePersonCharge">
                <ElInput
                  v-model="model.vehiclePersonCharge"
                  :placeholder="$t('page.vehicleManager.form.vehiclePersonCharge')"
                />
              </ElFormItem>
            </ElCol>
            <ElCol :lg="6" :md="8" :sm="12">
              <ElFormItem :label="$t('page.vehicleManager.vehicleStates')" prop="vehicleStates">
                <ElSelect
                  v-model="model.vehicleStates"
                  clearable
                  :placeholder="$t('page.vehicleManager.form.vehicleStates')"
                >
                  <ElOption
                    v-for="{ label, value } in translateOptions(enableStatusOptions)"
                    :key="value"
                    :label="label"
                    :value="value"
                  ></ElOption>
                </ElSelect>
              </ElFormItem>
            </ElCol>
            <ElCol :lg="12" :md="24" :sm="24">
              <ElSpace class="w-full justify-end" alignment="end">
                <ElButton @click="reset">
                  <template #icon>
                    <icon-ic-round-refresh class="text-icon" />
                  </template>
                  {{ $t('common.reset') }}
                </ElButton>
                <ElButton type="primary" plain @click="search">
                  <template #icon>
                    <icon-ic-round-search class="text-icon" />
                  </template>
                  {{ $t('common.search') }}
                </ElButton>
              </ElSpace>
            </ElCol>
          </ElRow>
        </ElForm>
      </ElCollapseItem>
    </ElCollapse>
  </ElCard>
</template>

<style scoped></style>
