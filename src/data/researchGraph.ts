export type NodeType = "topic" | "concept" | "paper";

export interface GraphNode {
  id: string;
  type: NodeType;
  label: string;
  description: string;
  slug?: string; // if set → clicking navigates to /research/[slug]
}

export interface GraphEdge {
  source: string;
  target: string;
  label: string;
}

export const GRAPH_NODES: GraphNode[] = [
  // ── Topics (root hubs) ──────────────────────────────────────────
  {
    id: "rl",
    type: "topic",
    label: "Reinforcement Learning",
    description: "Agent learns to act by maximizing cumulative reward through interaction with an environment.",
  },
  {
    id: "model-free-rl",
    type: "topic",
    label: "Model-Free RL",
    description: "Agent learns directly from interaction without building an explicit environment model. Simpler but sample-hungry.",
  },
  {
    id: "model-based-rl",
    type: "topic",
    label: "Model-Based RL",
    description: "Agent learns a world model and uses it for planning or synthetic data generation.",
  },

  // ── Concepts ────────────────────────────────────────────────────
  {
    id: "value-based",
    type: "concept",
    label: "Value-Based",
    description: "Learns V(s) or Q(s,a) to derive an optimal policy. Examples: DQN, Q-learning.",
  },
  {
    id: "policy-gradient",
    type: "concept",
    label: "Policy Gradient",
    description: "Directly optimizes policy parameters via gradient of expected return. Foundation of REINFORCE, PPO, SAC.",
  },
  {
    id: "actor-critic",
    type: "concept",
    label: "Actor-Critic",
    description: "Combines a policy (actor) and a value function (critic) to reduce gradient estimation variance.",
  },
  {
    id: "world-models-concept",
    type: "concept",
    label: "World Models",
    description: "A learned model that predicts future states in latent space, letting the agent plan or 'dream' without real interaction.",
  },
  {
    id: "latent-dynamics",
    type: "concept",
    label: "Latent Dynamics",
    description: "Models environment dynamics in a compact latent space rather than raw pixels — more efficient and easier to learn.",
  },
  {
    id: "rssm",
    type: "concept",
    label: "RSSM",
    description: "Recurrent State Space Model — combines deterministic (GRU) and stochastic (Gaussian) states to represent belief about the world.",
  },

  // ── Papers ──────────────────────────────────────────────────────
  {
    id: "sutton-barto",
    type: "paper",
    label: "RL: An Introduction",
    description: "Sutton & Barto (2018). The canonical RL textbook — MDP, TD learning, policy gradient, function approximation.",
    slug: "sutton-barto",
  },
  {
    id: "dqn",
    type: "paper",
    label: "DQN",
    description: "Mnih et al. (2015). Deep Q-Network — applies deep learning to Q-learning with experience replay and target networks, achieving human-level Atari play.",
    slug: "dqn",
  },
  {
    id: "ppo",
    type: "paper",
    label: "PPO",
    description: "Schulman et al. (2017). Proximal Policy Optimization — simple, stable, sample-efficient policy gradient. Backbone of many RLHF systems.",
    slug: "ppo",
  },
  {
    id: "sac",
    type: "paper",
    label: "SAC",
    description: "Haarnoja et al. (2018). Soft Actor-Critic — maximum entropy RL that automatically balances reward and entropy to encourage exploration.",
    slug: "sac",
  },
  {
    id: "world-models-paper",
    type: "paper",
    label: "World Models",
    description: "Ha & Schmidhuber (2018). Original architecture: VAE compresses observations → MDN-RNN models latent dynamics → CMA-ES optimizes controller. Demonstrated agents can learn inside dreams.",
    slug: "world-models-paper",
  },
  {
    id: "planet",
    type: "paper",
    label: "PlaNet",
    description: "Hafner et al. (2019). Learning Latent Dynamics for Planning — introduces RSSM and pure latent-space CEM planning without policy gradients.",
    slug: "planet",
  },
  {
    id: "dreamerv1",
    type: "paper",
    label: "DreamerV1",
    description: "Hafner et al. (2020). Dream to Control — combines PlaNet's RSSM with actor-critic trained entirely in imagination, no environment rollouts needed for policy updates.",
    slug: "dreamerv1",
  },
  {
    id: "dreamerv3",
    type: "paper",
    label: "DreamerV3",
    description: "Hafner et al. (2023). Mastering Diverse Domains — a single hyperparameter set that works across all domains (discrete/continuous, low/high-dim). Symlog predictions, free bits, KL balancing.",
    slug: "dreamerv3",
  },
];

export const GRAPH_EDGES: GraphEdge[] = [
  // RL → subtopics
  { source: "rl", target: "model-free-rl", label: "includes" },
  { source: "rl", target: "model-based-rl", label: "includes" },
  { source: "sutton-barto", target: "rl", label: "foundation" },

  // Model-free breakdown
  { source: "model-free-rl", target: "value-based", label: "includes" },
  { source: "model-free-rl", target: "policy-gradient", label: "includes" },
  { source: "policy-gradient", target: "actor-critic", label: "extends" },

  // Algorithm instances
  { source: "value-based", target: "dqn", label: "implements" },
  { source: "policy-gradient", target: "ppo", label: "implements" },
  { source: "actor-critic", target: "sac", label: "implements" },

  // Model-based breakdown
  { source: "model-based-rl", target: "world-models-concept", label: "includes" },
  { source: "world-models-concept", target: "latent-dynamics", label: "uses" },
  { source: "latent-dynamics", target: "rssm", label: "implements" },

  // World models papers lineage
  { source: "world-models-concept", target: "world-models-paper", label: "implements" },
  { source: "world-models-paper", target: "planet", label: "inspires" },
  { source: "rssm", target: "planet", label: "uses" },
  { source: "planet", target: "dreamerv1", label: "extends" },
  { source: "actor-critic", target: "dreamerv1", label: "uses" },
  { source: "dreamerv1", target: "dreamerv3", label: "extends" },
];
