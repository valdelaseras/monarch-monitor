<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <label :for="id">{{ label }}</label>
    <input
      tabindex="0"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </fieldset>
</template>

<script setup>
defineProps(["legend", "label", "id", "type", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
