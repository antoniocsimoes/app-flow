import fs from "fs";
import path from "path";
import { PodcastTransferModel } from "../models/podcast-model";

// __dirname = pega o caminho da minha src

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastTransferModel[]> => {

  const language = 'utf-8';

  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastTransferModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
