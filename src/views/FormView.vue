<script setup>
import BaseInput from "@/components/BaseInput.vue";
import BasicSelect from "@/components/BasicSelect.vue";
defineProps(["formData", "formValues", "currentLanguage"]);
defineEmits(['submit'])



</script>
<template>
  <div class="mx-auto  w-full p-5 rounded-lg">
    
    <form @submit.prevent="$emit('submit')" class="max-w-2xl p-5 mx-auto rounded" >
      <div v-for="item in formData.data.attributes" :key="item.id" class="pb-4">
        <div v-if="item.type === 'select'">
          <BasicSelect
            :label-color="formData.data.attribute_label_color"
            :label="item.name[currentLanguage]"
            :field="item.options"
            v-model="formValues[item.code]"
            :required="item.is_required"
            :style="{backgroundColor:formData.data.form_background_color}"
            class="p-3 rounded-lg"
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
            :style="{backgroundColor:formData.data.form_background_color}"
            class="p-3 rounded-lg"
          />
        </div>
      </div>

    <div class="p-3 rounded-lg"  :style="{backgroundColor:formData.data.form_background_color}">
      <button type="submit" class="p-2 m-2 rounded" :style="{backgroundColor:formData.data.form_submit_button_color}">{{formData.data.submit_button_label}}</button>
    </div>
    </form>
  </div>
  
</template>
<style scoped></style>
