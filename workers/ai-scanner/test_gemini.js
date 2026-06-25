const axios = require('axios');
require("dotenv").config({ path: "../../.env" });

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
  try {
    const res = await axios.get(url);
    res.data.models.forEach(m => console.log(m.name));
  } catch(e) {
    console.error(e.message);
  }
}
listModels();
