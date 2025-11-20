import { client } from "../utils/client";

const openAiResponse = async () => {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: "Hey there"
        });
        const message = response.output_text
        return message;
    } catch (error) {
        console.log(error);
    }
};

export { openAiResponse };