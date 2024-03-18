const { ChatOpenAI } = require("@langchain/openai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
require("dotenv").config();
const chatactivity = require("../utils/chatActivity");

const chat = async (body) => {
  const { message, activityId } = body;
  function findActivityById(activityId) {
    return chatactivity.find((activity) => activity.id == activityId);
  }

  const foundActivity = findActivityById(activityId);

  if (foundActivity) {
  } else {
    console.log("Actividad no encontrada para el ID:", activityId);
  }

  const prompt = ChatPromptTemplate.fromTemplate(foundActivity?.prompt);
  const outputParser = new StringOutputParser();

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const llmChain = prompt.pipe(chatModel).pipe(outputParser);

  const response = await llmChain.invoke({
    input: message,
  });


  return response;
};
module.exports = chat;
