import type { ObservationEvent } from "@/domain/observation-event.enum";
import type { Sex } from "@/domain/sex.enum";
import type { Stage } from "@/domain/stage.enum";
import type { Species } from "@/domain/species.enum";

export interface IObservation {
  id: string;
  event: ObservationEvent;
  species: Species;
  stage: Stage;
  sex: Sex;
  alive: boolean;
  location: string;
  datetime: number;
  note?: string;
}

export interface IObservationListItem extends IObservation {
  src: string;
  alt: string;
}
