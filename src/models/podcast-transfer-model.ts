import { PodcastTransferModel } from "./podcast-model";

export interface FilterPodCastModel {
    statusCode: number;
    body: PodcastTransferModel[];
}