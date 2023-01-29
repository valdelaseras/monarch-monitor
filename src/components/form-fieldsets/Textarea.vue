<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <label for="{{ id }}">{{ label }}</label>
    <textarea id="{{ id }}"></textarea>
  </fieldset>
</template>

<script>
export default {
  name: "CTextarea",
  props: {
    legend: String,
    id: String,
    label: String,
  },
};
</script>
