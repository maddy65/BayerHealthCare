const { OpenAI } = require("openai");
require("dotenv").config();  // To load environment variables from .env file

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to get a "Tip of the Day"
async function getHealthTip() {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",  
      prompt: "Give me a health tip for the day.",
      max_tokens: 60,
    });

    const healthTip = response.choices[0].text.trim();
    return healthTip;
  } catch (error) {
    console.error("Error fetching health tip from OpenAI:", error);
    throw new Error("Could not fetch health tip");
  }
}

module.exports = { getHealthTip };
