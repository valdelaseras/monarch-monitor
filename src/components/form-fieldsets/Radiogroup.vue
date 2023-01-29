<template>
  <fieldset class="fieldset">
    <legend>{{ legend }}</legend>
    <div class="flex flex-column">
      <div v-for="option in options" :key="option.label" tabindex="0">
        <label :for="option.value">
          <input
            type="radio"
            name="sex"
            :value="option.value"
            :id="option.value"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "CRadiogroup",
  props: {
    legend: String,
    id: String,
    options: {},
  },
};
</script>
