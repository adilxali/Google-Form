<script setup>
import { ref } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BasicSelect from "@/components/BasicSelect.vue";
defineProps(["formData", "formValues", "currentLanguage"]);
defineEmits(['submit'])



</script>
<template>
  <div class="mx-auto max-w-7xl w-full grid">
    
    <form @submit.prevent="$emit('submit')" class="max-w-7xl mx-auto" :style="{backgroundColor:formData.data.form_background_color}">
      <div v-for="item in formData.data.attributes" :key="item.id" class="pb-4">
        <div v-if="item.type === 'select'">
          <BasicSelect
            :label-color="formData.data.attribute_label_color"
            :label="item.name[currentLanguage]"
            :field="item.options"
            v-model="formValues[item.code]"
            :required="item.is_required"
          />
        </div>

        <div v-else>
          <BaseInput
            :label-color="formData.data.attribute_label_color"
            :label="item.name[currentLanguage]"
            :type="item.type"
            :placeholder="item.placeholder[currentLanguage]"
            v-model.trim="formValues[item.code]"
            :required="item.is_required"
          />
        </div>
      </div>

      <button type="submit" class="p-2 m-2 rounded" :style="{backgroundColor:formData.data.form_submit_button_color}">{{formData.data.submit_button_label}}</button>
    </form>
  </div>
  
</template>
<style scoped></style>
