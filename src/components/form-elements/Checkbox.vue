<template>
  <label :for="id">
    <input
      tabindex="0"
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    {{ label }}
  </label>
</template>

<script setup>
defineProps(["label", "id", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
