<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <label :for="id">{{ label }}</label>
    <input tabindex="0" :type="type" :id="id" />
  </fieldset>
</template>

<script>
export default {
  name: "CInput",
  props: {
    legend: String,
    id: String,
    label: String,
    type: String,
  },
};
</script>
