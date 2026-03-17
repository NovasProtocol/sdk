interface Behavior {
  agentId: string;
  action: string;
  success: boolean;
}

const logs: Behavior[] = [];

export function trackBehavior(agentId: string, action: string, success: boolean) {
  logs.push({ agentId, action, success });
}

export function getBehaviors(agentId: string) {
  return logs.filter((b) => b.agentId === agentId);
}
