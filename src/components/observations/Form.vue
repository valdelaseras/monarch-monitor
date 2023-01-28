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
          <form class="form">
<!--            @TODO: datepicker-->
<!--            <div class="form-group">-->
<!--            </div>-->
<!--        @TODO: some events should be disabled based on the selection of 'stage'-->
            <fieldset class="fieldset">
              <legend>Current stage the organism</legend>
              <select id="stage">
                <option
                  v-for="stageOption in stageOptions"
                  :value="stageOption.value"
                >
                  {{ stageOption.label }}
                </option>
              </select>
            </fieldset>
            <fieldset class="fieldset">
              <legend>Event</legend>
              <select id="event">
                <option
                  v-for="eventOption in eventOptions"
                  :value="eventOption.value"
                >
                  {{ eventOption.label }}
                </option>
              </select>
            </fieldset>
            <fieldset class="fieldset">
              <legend>Sex</legend>
              <div class="flex flex-column">
                <div>
                  <label for="undetermined">
                    <input
                      type="radio"
                      name="sex"
                      value="Undetermined"
                      id="undetermined"
                      :checked="true"
                    />
                    Undetermined
                  </label>
                </div>
                <div>
                  <label for="sex-f">
                    <input type="radio" name="sex" value="f" id="sex-f" />
                    Female
                  </label>
                </div>
                <div>
                  <label for="sex-m">
                    <input type="radio" name="sex" value="M" id="sex-m" />
                    Male
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset class="fieldset">
              <legend>Organism state</legend>
              <label for="alive">
                <input
                  type="checkbox"
                  value="true"
                  id="alive"
                  :checked="true"
                />
                Alive
              </label>
            </fieldset>
            <fieldset class="fieldset">
              <legend>Location</legend>
              <label for="location">General area</label>
              <input type="text" id="location" />
            </fieldset>
            <fieldset class="fieldset">
              <legend>Note</legend>
              <label for="note">Additional remarks</label>
              <textarea id="note"></textarea>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ObservationEvent, Stage } from "@/domain/observation";

interface IOption {
  value: string;
  label: string;
}

function enumToOptions(enumerator: {
  [key: string]: string;
}): IOption[] {
  return Object.values(enumerator).map((value: string) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
  }));
}

export default {
  name: "CForm",
  computed: {
    stageOptions() {
      return enumToOptions(Stage);
    },
    eventOptions() {
      return enumToOptions(ObservationEvent);
    },
  },
};
</script>
