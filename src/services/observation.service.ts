import type { IObservation, IObservationListItem } from "@/domain/observation";
import axios from "axios";

export const ObservationService = {
  getObservations: (): Promise<IObservationListItem[]> => {
    return axios
      .get<IObservation[]>("/data/observations.json")
      .then((response) => response.data)
      .then();
  },
  getObservationById: ( id: string ): Promise<IObservationListItem | undefined> => {
    return axios
      .get<IObservation[]>("/data/observations.json")
      .then((response) => response.data)
      .then((observations) =>
        observations.find((observation: IObservation) => observation.id === id))
      .then();
  },
};
