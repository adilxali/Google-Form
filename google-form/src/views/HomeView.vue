<script setup>
import { ref,watch } from "vue";
import FormView from './FormView.vue';
import BasicSelect from "@/components/BasicSelect.vue";
import PopupDialog from "@/components/PopupDialog.vue";
import form from "@/formData.json"
const formData = ref(form);
const formValues = ref({});
const savedData = ref(JSON.parse(localStorage.getItem("formValues"))  || []);
const currentLanguage = ref("en");
const languages = [
  { id: "en", name: "English" },
  { id: "hi", name: "Hindi" },
  { id: "gj", name: "Gujarati" },
  { id: "ka", name: "Kanhad" },
  { id: "mt", name: "Marathi" },
  { id: "tm", name: "Tamil" },
  { id: "tl", name: "Telgu" },
];

const isFormSubmitted = ref(false);
const handleSubmit = (event) => {
  isFormSubmitted.value = true;
  localStorage.setItem("formValues", JSON.stringify(formValues.value));
  formValues.value = {};
  
};
const closeModel = () => {
  isFormSubmitted.value = false;
};


</script>

<template>
  <PopupDialog :saved-data="savedData" v-if="isFormSubmitted" @close="closeModel" :alert-type="formData.data.submit_success_action" :message="formData.data.submit_success_content"/>
  <main v-if="!isFormSubmitted"  class="relative mx-auto w-full flex-col items-center justify-center `bg-${formData.data.background_color}` pb-5" :style="{backgroundColor:formData.data.background_color}" :class="isFormSubmitted ? '' : 'overflow-hidden'">

   <div class="p-5 max-w-sm">
    <BasicSelect
    label="Select Language"
    :field="languages"
    v-model="currentLanguage"
  />
   </div>
    <div class="mx-auto flex justify-center w-full p-5">
      <h1 class="text-4xl leading-1 text-center">{{formData.data.form_name}}</h1>
    </div>
    <div class="pb-7 w-full">
      <FormView @submit="handleSubmit" :form-data="formData" :form-values="formValues" :currentLanguage="currentLanguage"/>
    </div>
  
  </main>
</template>
