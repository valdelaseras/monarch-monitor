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

export enum Stage {
  EGG = "egg",
  FIRST_INSTAR = "first instar",
  SECOND_INSTAR = "second instar",
  THIRD_INSTAR = "third instar",
  FOURTH_INSTAR = "fourth instar",
  FIFTH_INSTAR = "fifth instar",
  J = "j hanging",
  PUPA = "pupa",
  ADULT = "adult",
}

// @TODO: add more events
export enum ObservationEvent {
  DEPOSITING_EGGS = "depositing eggs",
  HATCHING = "hatching",
  MOLTING = "molting",
  J_HANGING = "j hanging",
  ENCLOSING = "enclosing",
  ECLOSING = "eclosing",
}

export enum Species {
  DANAUS_PLEXIPPUS = "danaus plexippus",
  // @TODO: would be fun some time later, DANAUS_CHRYSIPPUS etc.
}

enum Sex {
  UNDETERMINED = "undetermined",
  FEMALE = "female",
  MALE = "male",
}
