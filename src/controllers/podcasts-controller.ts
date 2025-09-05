import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpsodes } from "../services/list-episodes-services";
import { serviceFilterEpsodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { FilterPodCastModel } from "../models/podcast-transfer-model";

const generciFunction = (content: FilterPodCastModel, res: ServerResponse) =>{
  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.write(JSON.stringify(content.body));
  res.end();
}

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content: FilterPodCastModel = await serviceListEpsodes();  

  generciFunction(content, res);  
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  
  const content: FilterPodCastModel = await serviceFilterEpsodes(req.url);  

  generciFunction(content, res);  
};
