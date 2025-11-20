import dotenv from "dotenv";
dotenv.config();

import { openAiResponse } from "./01_ResponsesApi";
import { 
    chainOfThoughtPrompting,
    fewShotPrompting, 
    fewShotStructurePrompting, 
    mathsResponse, 
    zeroShotPrompting 
} from "./02_PromptEngineering";

// openai responses api
openAiResponse()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//prompt engineering
mathsResponse()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//zeroShotPrompting
zeroShotPrompting()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//fewShotPrompting
fewShotPrompting()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//fewShotStructurePrompting
fewShotStructurePrompting()
    .then(res => console.log(res))
    .catch(err => console.log(err))

//chainOfThoughtPrompting
chainOfThoughtPrompting()
    .then(res => console.log(res))
    .catch(err => console.log(err))