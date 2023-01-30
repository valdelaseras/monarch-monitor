<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <div class="flex flex-column">
      <div v-for="option in options" :key="option.label" tabindex="0">
        <label :for="option.value">
          <input
            type="radio"
            :name="legend"
            :value="option.value"
            :id="option.value"
            :checked="option.value === modelValue"
            @change="$emit('update:modelValue', option.value)"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
defineProps(["legend", "id", "options", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
