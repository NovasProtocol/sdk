import { getBehaviors } from "./behavior";

export function getReputation(agentId: string): number {
  const behaviors = getBehaviors(agentId);

  if (behaviors.length === 0) return 0;

  const successCount = behaviors.filter((b) => b.success).length;
  return successCount / behaviors.length;
}
