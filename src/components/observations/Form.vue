<!--@TODO: some options should be disabled based on specific selection options-->
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
            <!--            <fieldset class="fieldset">-->
            <!--              <legend>Date</legend>-->
            <!--              <Datepicker v-model="date" utc></Datepicker>-->
            <!--            </fieldset>-->
            <fieldset class="fieldset">
              <legend>Current stage the organism</legend>
              <select id="stage">
                <option
                  v-for="option in stageOptions"
                  :key="option.label"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </fieldset>
            <fieldset class="fieldset">
              <legend>Event</legend>
              <select id="event">
                <option
                  v-for="option in eventOptions"
                  :key="option.label"
                  :value="option.value"
                >
                  {{ option.label }}
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
import { ObservationEvent } from "@/domain/observation-event.enum";
import { Stage } from "@/domain/stage.enum";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

interface IOption {
  value: string;
  label: string;
}

// Create a { label, value } object array of an enum with string values,
// so we don't have to manually update the template whenever a new prop
// gets added to the enums
function enumToOptions(enumerator: { [key: string]: string }): IOption[] {
  return Object.values(enumerator).map((value: string) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
  }));
}

export default {
  name: "CForm",
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
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
