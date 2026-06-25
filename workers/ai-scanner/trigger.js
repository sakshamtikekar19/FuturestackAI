const axios = require("axios");

async function run() {
  try {
    const response = await axios.post("http://localhost:3000/api/scans/start", {
      domainUrl: "acme.com",
      organizationId: "org_test_123"
    });
    console.log("Triggered scan successfully:", response.data);
  } catch (error) {
    console.error("Failed to trigger:", error.message);
  }
}

run();
