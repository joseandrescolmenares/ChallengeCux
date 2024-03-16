import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import prompts from "../utils/prompts";

export  const chat = async () => {
  const prompt = ChatPromptTemplate.fromTemplate(prompts);
  const outputParser = new StringOutputParser();

  const chatModel = new ChatOpenAI({
    openAIApiKey: "...",
  });

  const llmChain = prompt.pipe(chatModel).pipe(outputParser);

  const response = await llmChain.invoke({
    prompt: { prompt },
    input: "what is LangSmith?",
  });

  return response;
};
