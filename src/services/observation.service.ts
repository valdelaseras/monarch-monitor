import axios from "axios";
import type { IObservation } from "@/domain/observation.interface";

export const ObservationService = {
  getObservations: (): Promise<IObservation[]> => {
    return axios
      .get<IObservation[]>("/data/observations.json")
      .then((response) => response.data);
  },
  getObservationById: (id: string): Promise<IObservation | undefined> => {
    return ObservationService.getObservations().then((observations) =>
      observations.find((observation: IObservation) => observation.id === id)
    );
  },
};
