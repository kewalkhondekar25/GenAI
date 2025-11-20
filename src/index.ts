import dotenv from "dotenv";
dotenv.config();
import { openAiResponse } from "./01_ResponsesApi";

//openai responses api
openAiResponse()
    .then(res => console.log(res))
    .catch(err => console.log(err))
