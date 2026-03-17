import { v4 as uuidv4 } from "uuid";

export interface Agent {
  id: string;
  name: string;
}

const agents: Record<string, Agent> = {};

export function createAgent(name: string): Agent {
  const id = uuidv4();
  const agent = { id, name };
  agents[id] = agent;
  return agent;
}

export function getAgent(id: string): Agent | null {
  return agents[id] || null;
}
