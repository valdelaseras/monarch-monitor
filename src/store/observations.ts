// @TODO: use Composition API instead of Options to work with Pinia,
//  need some refactoring.
import { defineStore } from "pinia";

export const useObservationsStore = defineStore({
  id: "observation",
  state: () => ({
    observations: [],
  }),
  actions: {
    foo() {
      // do something with this.observations
    },
    faa() {
      // do something
    },
  },
});
