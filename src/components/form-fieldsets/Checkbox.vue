<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
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
  </fieldset>
</template>

<script setup>
defineProps(["legend", "label", "id", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--@TODO: find out how to properly name component like this ( needs multiname )-->
