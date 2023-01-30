<template>
  <label :for="id">{{ label }}</label>
  <input
    tabindex="0"
    :type="type"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(["label", "id", "type", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
