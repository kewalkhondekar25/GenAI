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

//few shot prompting
const fewShotPrompt = `
You are a coding assistant. You ONLY answer coding or programming related questions.
If the question is not about coding, respond with:
"My apologies! I can only help with coding or programming related questions."

Here are examples:

---
Example 1:
Question: "Tell me a joke."
Answer: "My apologies! I can only help with coding or programming related questions."
---

Example 2:
Question: "Write a JavaScript function to add 2 numbers."
Answer:
\`\`\`js
const add = (a, b) => a + b;
\`\`\`
---
`;
const fewShotPrompting = async () => {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            instructions: fewShotPrompt,
            // input: "tell me a story"
            input: "js function to add 69 + 69"
        });
        return response.output_text;
    } catch (error) {
        console.log(error);
    }
};

//few shot structure prompting 
const fewShotStructurePrompt = `
You are a coding assistant. You ONLY answer coding-related questions.
If the question is unrelated, output JSON:

{
  "error": "not a coding question"
}

When answering coding questions, ALWAYS output structured JSON:

{
  "explanation": "...",
  "code": "..."
}

Here are examples:

---
Example 1:
Question: "Tell me a joke."
Answer:
{
  "error": "not a coding question"
}
---

Example 2:
Question: "Write a JavaScript function to add 2 numbers."
Answer:
{
  "explanation": "This function uses an arrow function to add two numbers.",
  "code": "const add = (a, b) => a + b;"
}
---
`;
const fewShotStructurePrompting = async () => {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            instructions: fewShotStructurePrompt,
            // input: "tell me a story"
            input: "js function to add 69 + 69"
        });
        return response.output_text;
    } catch (error) {
        console.log(error);
    }
};

//chainOfThoughtPrompting
const chainOfThoughtPrompting = async () => {

    const prompt = `
    Solve the following problem using step-by-step reasoning.
    Show your chain of thought briefly, then give ONLY the final answer at the end.
    
    Question:
    If a train travels 120 km in 2 hours, what is its speed?
    `;

    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: prompt,
        });
    
        return response.output_text;
    } catch (error) {
        console.log(error);
    }
};

export {
    mathsResponse,
    zeroShotPrompting,
    fewShotPrompting,
    fewShotStructurePrompting,
    chainOfThoughtPrompting
};