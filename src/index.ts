import dotenv from "dotenv";
dotenv.config();

import { openAiResponse } from "./01_ResponsesApi";
import { mathsResponse, zeroShotPrompting } from "./02_PromptEngineering";

// openai responses api
openAiResponse()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//prompt engineering
mathsResponse()
    .then(res => console.log(res))
    .catch(err => console.log(err))

zeroShotPrompting()
    .then(res => console.log(res))
    .catch(err => console.log(err))