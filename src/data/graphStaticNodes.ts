// Static backbone of the research graph: everything except papers.
// Papers are driven from src/content/research/*.md (see buildResearchGraph.ts).
// Adding a new non-paper node: append to the arrays below.
// Adding a new paper: create src/content/research/<id>.md with graphEdges frontmatter.

// Rainbow order: topic → approach → concept → architecture → algorithm → paper → benchmark
export type NodeType =
  | "topic"        // R  broad research area
  | "approach"     // O  high-level methodological paradigm
  | "concept"      // Y  abstract theoretical idea
  | "architecture" // G  concrete model / neural-net structure
  | "algorithm"    // C  specific optimization / planning procedure
  | "paper"        // I  academic paper or textbook
  | "benchmark";   // V  evaluation environment / dataset

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
  // ── Topics (R) ──────────────────────────────────────────────────
  {
    id: "rl",
    type: "topic",
    label: "Reinforcement Learning",
    description:
      "Agent learns to act by maximizing cumulative reward through interaction with an environment.",
  },

  // ── Approaches (O) ──────────────────────────────────────────────
  {
    id: "model-free-rl",
    type: "approach",
    label: "Model-Free RL",
    description:
      "Learns directly from environment interaction without building an explicit model. Simpler but sample-hungry.",
  },
  {
    id: "model-based-rl",
    type: "approach",
    label: "Model-Based RL",
    description:
      "Learns a world model and uses it for planning or synthetic data generation.",
  },
  {
    id: "value-based",
    type: "approach",
    label: "Value-Based",
    description:
      "Learns V(s) or Q(s,a) and derives a policy implicitly. Examples: Q-learning, DQN.",
  },
  {
    id: "policy-gradient",
    type: "approach",
    label: "Policy Gradient",
    description:
      "Directly optimizes policy parameters via gradient of expected return. Foundation of REINFORCE, PPO, SAC.",
  },

  // ── Concepts (Y) ────────────────────────────────────────────────
  {
    id: "world-models-concept",
    type: "concept",
    label: "World Models",
    description:
      "The idea of a learned model that predicts future states in latent space, letting the agent plan or 'dream' without real interaction.",
  },
  {
    id: "latent-dynamics",
    type: "concept",
    label: "Latent Dynamics",
    description:
      "Modeling environment transitions in a compact latent space rather than raw pixels — more efficient and easier to learn.",
  },

  // ── Architectures (G) ───────────────────────────────────────────
  {
    id: "actor-critic",
    type: "architecture",
    label: "Actor-Critic",
    description:
      "Structural pattern combining a policy network (actor) and a value network (critic) to reduce variance while keeping bias low.",
  },
  {
    id: "rssm",
    type: "architecture",
    label: "RSSM",
    description:
      "Recurrent State Space Model — deterministic GRU hidden state plus stochastic Gaussian latent for probabilistic belief over world state.",
  },

  // ── Algorithms (C) ──────────────────────────────────────────────
  {
    id: "cem",
    type: "algorithm",
    label: "CEM",
    description:
      "Cross-Entropy Method — iteratively samples action sequences, selects top-k, and refits a Gaussian. Used for latent-space planning in PlaNet.",
  },
  {
    id: "cma-es",
    type: "algorithm",
    label: "CMA-ES",
    description:
      "Covariance Matrix Adaptation Evolution Strategy — derivative-free optimizer. Used by the original World Models paper to train the controller.",
  },

  // ── Benchmarks (V) ──────────────────────────────────────────────
  {
    id: "atari",
    type: "benchmark",
    label: "Atari",
    description:
      "Atari 2600 game suite — canonical pixel-based benchmark for discrete-action RL algorithms (DQN, PPO, Rainbow…).",
  },
  {
    id: "dm-control",
    type: "benchmark",
    label: "DMControl",
    description:
      "DeepMind Control Suite — continuous control tasks (pixels or proprioceptive state). Standard benchmark for model-based methods.",
  },
];

// Edges between non-paper nodes.
// Edges from papers are declared in each paper's graphEdges frontmatter.
export const GRAPH_STATIC_EDGES: GraphEdge[] = [
  // topic → approaches
  { source: "rl",                   target: "model-free-rl",        label: "includes" },
  { source: "rl",                   target: "model-based-rl",       label: "includes" },

  // approach internals
  { source: "model-free-rl",        target: "value-based",          label: "includes" },
  { source: "model-free-rl",        target: "policy-gradient",      label: "includes" },
  { source: "policy-gradient",      target: "actor-critic",         label: "uses" },

  // model-based → concepts → architectures
  { source: "model-based-rl",       target: "world-models-concept", label: "includes" },
  { source: "world-models-concept", target: "latent-dynamics",      label: "uses" },
  { source: "latent-dynamics",      target: "rssm",                 label: "implements" },
];
