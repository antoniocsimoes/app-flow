import { FilterPodCastModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpsodes = async (): Promise<FilterPodCastModel> => {
  // define a interface de retorno
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

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
