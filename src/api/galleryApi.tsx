import { GalleryResponse } from "../models/gallery";
import instance from "./instance";

export const GalleryApi = {
  getAll: (): Promise<GalleryResponse[]> => {
    return instance.get("/galleries");
  },
};
