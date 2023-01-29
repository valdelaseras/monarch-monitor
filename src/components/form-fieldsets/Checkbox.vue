<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <label for="{{ id }}">
      <input
          type="checkbox"
          id="{{ id }}"
          :checked="true"
      />
      {{ label }}
    </label>
  </fieldset>
</template>

<script>
export default {
  name: "CCheckbox",
  props: {
    legend: String,
    id: String,
    label: String,
  },
};
</script>
