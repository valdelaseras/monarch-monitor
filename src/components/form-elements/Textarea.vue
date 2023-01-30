<template>
  <label :for="id"> {{ label }}</label>
  <textarea
    :id="id"
    tabindex="0"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
defineProps(["id", "label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
