import type { IAsset } from "@/domain/asset.interface";
import axios from "axios";

export const AssetsService = {
  getAssets: (): Promise<IAsset[]> => {
    return axios
      .get<IAsset[]>("/data/assets.json")
      .then((response) => response.data);
  },
};
