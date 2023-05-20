import { atom } from 'recoil';
import { agentController, AgentController } from '@/util/models/Agent';

export const ATOM_AGENT_KEY = 'agent';
export const agentState = atom<AgentController>({
  key: ATOM_AGENT_KEY,
  default: agentController,
});
