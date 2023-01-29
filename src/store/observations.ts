// @TODO: use Composition API instead of Options to work with Pinia,
//  need some refactoring in components

import { defineStore } from "pinia";
import type {
  IObservation,
  IObservationListItem,
} from "@/domain/observation.interface";
import { AssetsService } from "@/services/assets.service";
import type { IAsset } from "@/domain/asset.interface";

interface IObservationStoreState {
  observations: IObservationListItem[];
}

export const useObservationsStore = defineStore("observations", {
  state: (): IObservationStoreState => {
    return { observations: [] };
  },
  actions: {
    setObservations(observations: IObservationListItem[]) {
      this.observations = observations;
    },
    addObservation(formData: IObservation) {
      AssetsService.getAssetByLabel(formData.stage).then(
        ({ src, alt }: IAsset) => {
          const observation = {
            ...formData,
            src,
            alt,
          };
          this.observations.push(observation);
        }
      );
    },
    // updateObservation(){}
    // deleteObservation(){}
  },
});
