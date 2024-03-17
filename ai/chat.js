const { ChatOpenAI } = require("@langchain/openai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
require('dotenv').config();
const { prompts } = require("../utils/prompts");

const chat = async (message) => {

  

  const prompt = ChatPromptTemplate.fromTemplate(`{input}`);
  const outputParser = new StringOutputParser();

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const llmChain = prompt.pipe(chatModel).pipe(outputParser);

  const response = await llmChain.invoke({
    input: message,
  });

  console.log(response,"respuestas")

  return response;
};
module.exports = chat;
