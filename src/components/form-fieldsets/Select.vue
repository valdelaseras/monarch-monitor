<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <select id="{{ id }}">
      <option
        v-for="option in options"
        :key="option.label"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </fieldset>
</template>

<script>
export default {
  name: "CSelect",
  props: {
    legend: String,
    id: String,
    options: {},
  },
};
</script>
