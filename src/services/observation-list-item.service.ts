import type {
  IObservation,
  IObservationListItem,
} from "@/domain/observation.interface";
import { ObservationService } from "@/services/observation.service";
import { AssetsService } from "@/services/assets.service";
import type { IAsset } from "@/domain/asset.interface";

export const ObservationListItemService = {
  getObservationListItems: (): Promise<IObservationListItem[]> => {
    return Promise.all([
      ObservationService.getObservations(),
      AssetsService.getAssets(),
    ]).then(([observations, assets]) => {
      return observations.map((observation) =>
        mapApiToObservationListItem(observation, assets)
      );
    });
  },
  getObservationListItemById: (
    id: string
  ): Promise<IObservationListItem | undefined> => {
    return Promise.all([
      ObservationService.getObservationById(id),
      AssetsService.getAssets(),
    ]).then(([observation, assets]) => {
      if (!observation) {
        return;
      }
      return mapApiToObservationListItem(observation, assets);
    });
  },
};

const mapApiToObservationListItem = (
  observation: IObservation,
  assets: IAsset[]
) => {
  const { src, alt } = assets.find(
    (asset) => asset.label === observation.stage
  )!;
  return {
    ...observation!,
    src,
    alt,
  };
};
