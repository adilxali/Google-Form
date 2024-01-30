<script setup>
defineProps(['label', 'modelValue', 'field', 'labelColor'])
defineEmits(['update:modelValue'])
</script>
<template>
    <div>
        <label class="block mb-2 text-sm font-medium" :style="{color: labelColor}">
            {{ label }}
        </label>
        <select 
        :value="modelValue" 
        @change="$emit('update:modelValue',$event.target.value)" 
        v-bind="$attrs"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5">
            <option v-for="option in field" :key="option.id" :value="option.id">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

