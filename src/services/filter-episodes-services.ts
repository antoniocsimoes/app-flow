import { FilterPodCastModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpsodes = async (
  podcastName: string | undefined
): Promise<FilterPodCastModel> => {
  // define a interface de retorno
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  // buscando os dados
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  // verifico se tem conteúdo
  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  // outra maneira de fazer o responseFormat
  // responseFormat = {
  //   statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
  //   body: data,
  // }

  return responseFormat;
};
