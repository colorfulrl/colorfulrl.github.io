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
  {
    id: "mujoco",
    type: "benchmark",
    label: "MuJoCo",
    description:
      "MuJoCo physics simulator — standard continuous-control benchmark for policy gradient and actor-critic algorithms (DDPG, TD3, SAC, PPO…).",
  },
  {
    id: "d4rl",
    type: "benchmark",
    label: "D4RL",
    description:
      "Datasets for Deep Data-Driven RL — offline RL benchmark with fixed datasets of varying quality (expert, medium, random) across locomotion and manipulation tasks.",
  },
  {
    id: "minecraft",
    type: "benchmark",
    label: "Minecraft",
    description:
      "Open-world survival game used as long-horizon planning benchmark. Dreamer v4 proposes the diamonds-from-offline-data challenge: obtaining diamonds without any environment interaction.",
  },

  // ── New Approaches (O) ──────────────────────────────────────────
  {
    id: "distributional-rl",
    type: "approach",
    label: "Distributional RL",
    description:
      "Models the full distribution of returns Z(s,a) rather than just its expectation, enabling risk-sensitive policies and a richer training signal.",
  },
  {
    id: "exploration",
    type: "approach",
    label: "Exploration",
    description:
      "Methods for visiting under-explored states: count-based bonuses, curiosity, random distillation, or explicit return-to-state strategies.",
  },
  {
    id: "offline-rl",
    type: "approach",
    label: "Offline RL",
    description:
      "Learns effective policies from a fixed, pre-collected dataset without any further environment interaction — requires handling distributional shift.",
  },
  {
    id: "hierarchical-rl",
    type: "approach",
    label: "Hierarchical RL",
    description:
      "Decomposes tasks into multiple levels of abstraction, with higher levels setting subgoals and lower levels executing them over extended time horizons.",
  },
  {
    id: "maximum-entropy-rl",
    type: "approach",
    label: "MaxEnt RL",
    description:
      "Augments the reward with an entropy term H(π), encouraging the policy to be as stochastic as possible while still maximising reward — foundation of SAC.",
  },

  // ── New Concepts (Y) ────────────────────────────────────────────
  {
    id: "temporal-difference",
    type: "concept",
    label: "TD Learning",
    description:
      "Bootstraps value estimates from successive predictions rather than waiting for episode end — the unifying mechanism behind Q-learning, SARSA, and all value-based methods.",
  },
  {
    id: "experience-replay",
    type: "concept",
    label: "Experience Replay",
    description:
      "Stores past (s,a,r,s') transitions in a buffer and re-samples them during training, breaking temporal correlations and improving data efficiency.",
  },
  {
    id: "trust-region",
    type: "concept",
    label: "Trust Region",
    description:
      "Constrains policy updates so each step stays within a region where the surrogate objective is reliable — formalised as a KL bound in TRPO, simplified to clipping in PPO.",
  },
  {
    id: "intrinsic-motivation",
    type: "concept",
    label: "Intrinsic Motivation",
    description:
      "Self-generated reward signals derived from novelty, prediction error, or information gain — enables exploration without extrinsic rewards.",
  },
  {
    id: "temporal-abstraction",
    type: "concept",
    label: "Temporal Abstraction",
    description:
      "Acting over extended time horizons by composing primitive actions into options or skills, reducing the effective planning horizon.",
  },
  {
    id: "credit-assignment",
    type: "concept",
    label: "Credit Assignment",
    description:
      "The problem of attributing delayed rewards to the specific past actions that caused them — addressed by eligibility traces, GAE, and hierarchical architectures.",
  },

  {
    id: "epistemic-uncertainty",
    type: "concept",
    label: "Epistemic Uncertainty",
    description:
      "Uncertainty about model parameters due to limited data — distinct from aleatoric (environment) randomness. Applied in two ways: as exploration bonus (VIME) and as model safety signal to detect OOD regions and prevent model exploitation (uncertainty-aware MBRL).",
  },

  // ── New Architectures (G) ────────────────────────────────────────
  {
    id: "transformer",
    type: "architecture",
    label: "Transformer",
    description:
      "Self-attention based sequence model — adapted for RL in Decision Transformer (return-conditioned) and Trajectory Transformer (sequence modelling over states/actions).",
  },

  // ── New Algorithms (C) ──────────────────────────────────────────
  {
    id: "mcts",
    type: "algorithm",
    label: "MCTS",
    description:
      "Monte Carlo Tree Search — builds a search tree via repeated simulation (select → expand → rollout → backprop). Used by MuZero with a learned model.",
  },
  {
    id: "trajectory-optimization",
    type: "algorithm",
    label: "Traj Opt",
    description:
      "Optimises a sequence of actions over a receding horizon using a learned model — decoder-free in TD-MPC, CEM-based in PlaNet.",
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

  // rl → new approaches
  { source: "rl",                   target: "hierarchical-rl",      label: "includes" },
  { source: "rl",                   target: "offline-rl",           label: "includes" },

  // model-free branches
  { source: "model-free-rl",        target: "distributional-rl",    label: "includes" },
  { source: "model-free-rl",        target: "exploration",          label: "includes" },
  { source: "model-free-rl",        target: "maximum-entropy-rl",   label: "includes" },

  // value-based concepts
  { source: "value-based",          target: "temporal-difference",  label: "uses" },
  { source: "value-based",          target: "experience-replay",    label: "uses" },

  // policy-gradient → trust region
  { source: "policy-gradient",      target: "trust-region",         label: "uses" },

  // hierarchical → temporal abstraction
  { source: "hierarchical-rl",      target: "temporal-abstraction", label: "based on" },

  // exploration → intrinsic motivation
  { source: "exploration",          target: "intrinsic-motivation", label: "uses" },

  // model-based → planning algorithms
  { source: "model-based-rl",       target: "mcts",                 label: "uses" },
  { source: "model-based-rl",       target: "trajectory-optimization", label: "uses" },

  // model-based → epistemic uncertainty
  { source: "model-based-rl",       target: "epistemic-uncertainty", label: "considers" },
];
