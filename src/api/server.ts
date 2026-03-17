import express from "express";
import { createAgent } from "../core/identity";
import { trackBehavior } from "../core/behavior";
import { getReputation } from "../core/reputation";

const app = express();
app.use(express.json());

// Create agent
app.post("/agent", (req, res) => {
  const { name } = req.body;
  const agent = createAgent(name);
  res.json(agent);
});

// Track behavior
app.post("/behavior", (req, res) => {
  const { agentId, action, success } = req.body;
  trackBehavior(agentId, action, success);
  res.json({ status: "ok" });
});

// Get reputation
app.get("/reputation/:id", (req, res) => {
  const score = getReputation(req.params.id);
  res.json({ reputation: score });
});

app.listen(3000, () => {
  console.log("Novas Protocol API running on http://localhost:3000");
});
