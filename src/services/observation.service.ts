import type { IObservation } from "@/domain/observation";
import axios from "axios";

export const ObservationService = {
  getObservations: (): Promise<IObservation[]> => {
    return axios
      .get<IObservation[]>("/data/observations.json")
      .then((response) => response.data);
  },
  getObservationById: ( id: string ): Promise<IObservation | undefined> => {
    return axios
      .get<IObservation[]>("/data/observations.json")
      .then((response) => response.data)
      .then((observations) =>
        observations.find((observation: IObservation) => observation.id === id)
      );
  },
};
