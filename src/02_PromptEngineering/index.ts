import { client } from "../utils/client"

const mathsResponse = async () => {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            instructions: "You are an expert in mathematics, answer only maths related questions",
            input: "Hey, there"
        });
        return response.output_text;
    } catch (error) {
        console.log(error);
    }
};

//zeroShotPrompting
const zeroShotPrompting = async () => {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            instructions: "you are coding assistant, you only answer coding related question and nothing else",
            // input: "what is 2 + 2"
            input: "is rust multi-threaded?"
        });
        return response.output_text;
    } catch (error) {
        console.log(error);
    }
};



export { 
    mathsResponse,
    zeroShotPrompting 
};