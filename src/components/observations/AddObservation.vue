<!--@TODO: Form flows: some options should be disabled or auto selected based on specific form selections-->
<!--@TODO: Form submission, expand the form-fieldset components with more extensive options, proper form handling, validation etc-->
<!--@TODO: DatePicker-->
<template>
  <div class="column">
    <div class="column">
      <div class="content">
        <h3>Add new observation</h3>
      </div>
    </div>
    <div class="column">
      <div class="column two">
        <div class="content">
          <form
            class="form"
            role="form"
            aria-label="Add new observation form"
            @submit.prevent="onSubmit"
          >
            <CSelect
              id="stage"
              legend="Current stage the organism"
              :options="stageOptions"
            />
            <CSelect id="event" legend="Event" :options="eventOptions" />
            <CRadiogroup id="sex" legend="Sex" :options="sexOptions" />
            <CCheckbox
              id="alive"
              legend="State of butterfly"
              label="Alive"
              checked="true"
              :aria-checked="true"
            />
            <CInput
              id="location"
              legend="Location"
              type="text"
              label="General area"
            />
            <CTextarea legend="Note" id="note" label="Additional remarks" />
            <a class="btn btn-primary" @click="onSubmit">Submit</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ObservationEvent } from "@/domain/observation-event.enum";
import { Stage } from "@/domain/stage.enum";
import { Sex } from "@/domain/sex.enum";
import CSelect from "@/components/form-fieldsets/Select.vue";
import CRadiogroup from "@/components/form-fieldsets/Radiogroup.vue";
import CTextarea from "@/components/form-fieldsets/Textarea.vue";
import CCheckbox from "@/components/form-fieldsets/Checkbox.vue";
import CInput from "@/components/form-fieldsets/Input.vue";

interface IOption {
  value: string;
  label: string;
}

/*
 * Create a { label, value } object array of an enum with string values,
 * so we don't have to manually update the template whenever a new prop
 * gets added to the enums.
 *
 * Note: I probably would want to move this to another component/file ( something
 * like a 'utils' kind of file ) down the line
 * */
function enumToOptions(enumerator: { [key: string]: string }): IOption[] {
  return Object.values(enumerator).map((value: string) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
  }));
}

export default {
  name: "AddObservation",
  components: {
    CInput,
    CCheckbox,
    CTextarea,
    CRadiogroup,
    CSelect,
  },
  setup() {
    const stageOptions = enumToOptions(Stage);
    const eventOptions = enumToOptions(ObservationEvent);
    const sexOptions = enumToOptions(Sex);

    const onSubmit = () => {
      console.log("submit form");
    };

    return {
      stageOptions,
      sexOptions,
      eventOptions,
      onSubmit,
    };
  },
};
</script>
