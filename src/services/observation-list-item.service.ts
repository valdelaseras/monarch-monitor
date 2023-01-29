import type {
  IObservation,
  IObservationListItem,
} from "@/domain/observation.interface";
import { ObservationService } from "@/services/observation.service";
import { AssetsService } from "@/services/assets.service";
import type { IAsset } from "@/domain/asset.interface";

export const ObservationListItemService = {
  /*
   * - Get observations: IObservation[] from ObservationService
   * - Get assets: IAsset[] from AssetService
   * - Map the correct asset ( src and alt ) in mapApiToObservationListItem()
   * */
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
  /*
   * - Get a single observation: IObservation from ObservationService by id
   * - Get assets: IAsset[] from AssetService
   * - Map the correct asset to the observation in mapApiToObservationListItem()
   * */
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

/*
 * Find the asset ( label prop ) that belongs to the observation ( stage prop ),
 * and return the complete IObservationListItem
 * */
const mapApiToObservationListItem = (
  observation: IObservation,
  assets: IAsset[]
): IObservationListItem => {
  const { src, alt } = assets.find(
    (asset) => asset.label === observation.stage
  )!;
  return {
    ...observation!,
    src,
    alt,
  };
};
