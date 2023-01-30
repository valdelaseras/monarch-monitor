<template>
  <select
    :id="id"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      tabindex="0"
      v-for="option in options"
      :key="option.label"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
defineProps(["id", "options", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
