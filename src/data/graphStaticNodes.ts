// Static backbone of the research graph: topics and concepts only.
// Papers are loaded dynamically from src/content/research/*.md.
// Add a new topic/concept here; add a new paper by creating a .md file.

export type NodeType = "topic" | "concept" | "paper";

export interface GraphNode {
  id: string;
  type: NodeType;
  label: string;
  description: string;
  slug?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  label: string;
}

export const GRAPH_STATIC_NODES: GraphNode[] = [
  // ── Topics ──────────────────────────────────────────────────────────
  {
    id: "rl",
    type: "topic",
    label: "Reinforcement Learning",
    description:
      "Agent learns to act by maximizing cumulative reward through interaction with an environment.",
  },
  {
    id: "model-free-rl",
    type: "topic",
    label: "Model-Free RL",
    description:
      "Agent learns directly from interaction without building an explicit environment model. Simpler but sample-hungry.",
  },
  {
    id: "model-based-rl",
    type: "topic",
    label: "Model-Based RL",
    description:
      "Agent learns a world model and uses it for planning or synthetic data generation.",
  },

  // ── Concepts ────────────────────────────────────────────────────────
  {
    id: "value-based",
    type: "concept",
    label: "Value-Based",
    description:
      "Learns V(s) or Q(s,a) to derive an optimal policy. Examples: DQN, Q-learning.",
  },
  {
    id: "policy-gradient",
    type: "concept",
    label: "Policy Gradient",
    description:
      "Directly optimizes policy parameters via gradient of expected return. Foundation of REINFORCE, PPO, SAC.",
  },
  {
    id: "actor-critic",
    type: "concept",
    label: "Actor-Critic",
    description:
      "Combines a policy (actor) and a value function (critic) to reduce gradient estimation variance.",
  },
  {
    id: "world-models-concept",
    type: "concept",
    label: "World Models",
    description:
      "A learned model that predicts future states in latent space, letting the agent plan or 'dream' without real interaction.",
  },
  {
    id: "latent-dynamics",
    type: "concept",
    label: "Latent Dynamics",
    description:
      "Models environment dynamics in a compact latent space rather than raw pixels — more efficient and easier to learn.",
  },
  {
    id: "rssm",
    type: "concept",
    label: "RSSM",
    description:
      "Recurrent State Space Model — combines deterministic (GRU) and stochastic (Gaussian) states to represent belief about the world.",
  },
];

// Edges between topics and concepts only.
// Edges involving paper nodes are declared in each paper's frontmatter (graphEdges).
export const GRAPH_STATIC_EDGES: GraphEdge[] = [
  { source: "rl",                    target: "model-free-rl",         label: "includes" },
  { source: "rl",                    target: "model-based-rl",        label: "includes" },
  { source: "model-free-rl",         target: "value-based",           label: "includes" },
  { source: "model-free-rl",         target: "policy-gradient",       label: "includes" },
  { source: "policy-gradient",       target: "actor-critic",          label: "extends" },
  { source: "model-based-rl",        target: "world-models-concept",  label: "includes" },
  { source: "world-models-concept",  target: "latent-dynamics",       label: "uses" },
  { source: "latent-dynamics",       target: "rssm",                  label: "implements" },
];
