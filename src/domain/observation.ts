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

enum Stage {
  EGG,
  FIRST_INSTAR,
  SECOND_INSTAR,
  THIRD_INSTAR,
  FOURTH_INSTAR,
  FIFTH_INSTAR,
  J,
  PUPA,
  ADULT,
}

enum ObservationEvent {
  DEPOSITING_EGGS,
  HATCHING,
  MOLTING,
  J_HANGING,
  ECLOSING,
  ENCLOSING,
}

enum Species {
  DANAUS_PLEXIPPUS,
  DANAUS_CHRYSIPPUS,
}

enum Sex {
  UNDETERMINED,
  FEMALE,
  MALE,
}
