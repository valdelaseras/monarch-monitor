<template>
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
</template>

<script setup>
defineProps(["id", "options", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
<!--@TODO: input[radio] can be a separate simple radio component or reuse CInput after refactoring-->
