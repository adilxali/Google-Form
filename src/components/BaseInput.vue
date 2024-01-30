<script setup>
defineProps(['label', 'modelValue', 'type', 'placeholder', 'labelColor'])
defineEmits(['update:modelValue'])
</script>
<template>
    <div>
        <label  class="block mb-2 text-sm font-medium" :style="{color:labelColor}">
            {{ label }}
        </label>
        <input 
        :type="type"
        :placeholder="placeholder" 
        :value="modelValue" 
        @input="$emit('update:modelValue',$event.target.value)" 
        v-bind="$attrs" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
    </div>
</template>
<style scoped>

</style>