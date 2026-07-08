import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import fs from "fs";

async function main() {
  const mcpConfig = JSON.parse(fs.readFileSync('mcp.json', 'utf-8'));
  const stitchConfig = mcpConfig.mcpServers.stitch;

  console.log("Connecting to", stitchConfig.serverUrl);
  
  const transport = new SSEClientTransport(new URL(stitchConfig.serverUrl), {
    headers: stitchConfig.headers
  });
  
  const client = new Client(
    { name: "example-client", version: "1.0.0" },
    { capabilities: { prompts: {}, tools: {} } }
  );
  
  await client.connect(transport);
  console.log("Connected!");
  
  const tools = await client.listTools();
  console.log("Tools:", JSON.stringify(tools, null, 2));

  const prompts = await client.listPrompts();
  console.log("Prompts:", JSON.stringify(prompts, null, 2));
  
  // If there's a specific tool for generating a component, we can call it here.
  
  process.exit(0);
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
