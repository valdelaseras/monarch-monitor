<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      tabindex="0"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </fieldset>
</template>

<script setup>
defineProps(["legend", "id", "label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
