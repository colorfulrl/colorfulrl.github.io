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
  {
    id: "crafter",
    type: "benchmark",
    label: "Crafter",
    description:
      "2D survival benchmark (Hafner, 2022) with 22 diverse achievements spanning resource gathering, crafting, and combat. Tests generalization across skills; used by DreamerV3, EMERALD, DyMoDreamer.",
  },
  {
    id: "smac",
    type: "benchmark",
    label: "SMAC",
    description:
      "StarCraft Multi-Agent Challenge — decentralized unit micromanagement scenarios on StarCraft II. The standard cooperative MARL benchmark; used by QMIX, COMA, MAPPO under partial observability.",
  },
  {
    id: "safety-gym",
    type: "benchmark",
    label: "Safety Gym",
    description:
      "OpenAI benchmark suite of constrained robot navigation tasks (Ray et al., 2019) where the agent earns reward but must limit cost from entering hazards. Standard testbed for Safe RL / CMDP algorithms.",
  },
  {
    id: "urlb",
    type: "benchmark",
    label: "URLB",
    description:
      "Unsupervised Reinforcement Learning Benchmark (Laskin et al., 2021) — two phases: reward-free pretraining, then downstream adaptation with extrinsic rewards. 12 continuous-control tasks over 3 DMControl domains; ships 8 unsupervised RL baselines for fair comparison.",
  },
  {
    id: "meta-world",
    type: "benchmark",
    label: "Meta-World",
    description:
      "Benchmark of 50 distinct simulated robotic-manipulation tasks on a Sawyer arm (Yu et al., 2019), with ML1/ML10/ML45 meta-RL splits and MT10/MT50 multi-task splits. The standard testbed for broad-distribution meta-RL and multi-task learning.",
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
  {
    id: "imitation-learning",
    type: "approach",
    label: "Imitation Learning",
    description:
      "Learns behavior from expert demonstrations rather than a reward signal. Includes behavior cloning (supervised), DAgger (interactive), and inverse RL (reward inference) — sidesteps reward engineering when demonstrations are available.",
  },
  {
    id: "inverse-rl",
    type: "approach",
    label: "Inverse RL",
    description:
      "Infers the reward function that best explains observed expert behavior, then optimizes it — instead of being given the reward. Family includes MaxEnt IRL, GAIL, and AIRL. Useful when rewards are hard to specify but demonstrations exist.",
  },
  {
    id: "behavior-cloning",
    type: "approach",
    label: "Behavior Cloning",
    description:
      "The most direct form of imitation learning: supervised regression/classification from observed states to expert actions, no environment interaction or reward. Simple but suffers from compounding error (covariate shift) off the expert distribution — the problem DAgger and energy-based variants address.",
  },
  {
    id: "rlhf",
    type: "approach",
    label: "RLHF",
    description:
      "Reinforcement Learning from Human Feedback — learns a reward model from human preference comparisons between trajectories/outputs, then optimizes a policy against it. Avoids hand-specified rewards; underpins preference-tuned LLMs (InstructGPT, ChatGPT) and earlier control tasks.",
  },
  {
    id: "multi-agent-rl",
    type: "approach",
    label: "Multi-Agent RL",
    description:
      "Multiple agents learning simultaneously in a shared environment — cooperative, competitive, or mixed. Core challenges: non-stationarity (other agents' policies change), multi-agent credit assignment, and scaling with the number of agents.",
  },
  {
    id: "safe-rl",
    type: "approach",
    label: "Safe RL",
    description:
      "Optimizes return while keeping expected cumulative costs within constraints — for settings where unsafe actions are unacceptable (robots, humans nearby). Typically formalized as a Constrained MDP and solved with Lagrangian, trust-region, or Lyapunov methods.",
  },
  {
    id: "unsupervised-rl",
    type: "approach",
    label: "Unsupervised RL",
    description:
      "Reward-free pretraining followed by fast downstream adaptation: the agent explores and learns skills, representations, or a world model without any task reward, then finetunes when an extrinsic reward appears. Spans skill discovery (DIAYN, DADS), pure exploration (Plan2Explore, APT), and is measured by the URLB benchmark.",
  },
  {
    id: "meta-rl",
    type: "approach",
    label: "Meta-RL",
    description:
      "Learning to learn: train across a distribution of tasks so the agent adapts to a new task from very few episodes — i.e. fast adaptation at test time. Two styles: optimization-based (MAML learns an easy-to-finetune init) and context-based (RL², PEARL, VariBAD infer the task from recent experience).",
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
  {
    id: "goal-conditioned-rl",
    type: "concept",
    label: "Goal-Conditioned RL",
    description:
      "Policies and value functions conditioned on a goal state g, learning to reach arbitrary goals rather than maximize a single reward. Underpins hindsight relabeling (HER), recursive classification (C-Learning), and contrastive goal-reaching.",
  },
  {
    id: "sequence-modeling",
    type: "concept",
    label: "Sequence Modeling",
    description:
      "Casts RL/decision-making as modeling a sequence of (state, action, return) tokens — predict the next action like a language model predicts the next word, sidestepping value functions and dynamic programming. Realized with transformers (Decision/Trajectory Transformer) or diffusion over whole trajectories (Diffuser, Decision Diffuser).",
  },
  {
    id: "skill-discovery",
    type: "concept",
    label: "Skill Discovery",
    description:
      "Learning a set of diverse, reusable skills with no reward — typically by maximizing the mutual information I(z; s) between a latent skill code z and the states it visits, so different z lead to distinguishable, predictable behaviors. The core mechanism of unsupervised skill-based RL (DIAYN, DADS).",
  },
  {
    id: "task-inference",
    type: "concept",
    label: "Task Inference",
    description:
      "Inferring which task/MDP the agent currently faces from recent experience, usually as a latent context variable, so a single policy conditioned on it adapts instantly. Implicit in RL²'s RNN hidden state; explicit and probabilistic in PEARL and VariBAD, where posterior uncertainty drives exploration.",
  },
  {
    id: "meta-exploration",
    type: "concept",
    label: "Meta-Exploration",
    description:
      "Exploration in the meta-RL setting whose purpose is to quickly identify the task — gathering the task-relevant information a separate exploitation policy then uses. Often decoupled from exploitation (DREAM) and driven by information gain / empowerment (MetaCURE).",
  },
  {
    id: "successor-features",
    type: "concept",
    label: "Successor Features",
    description:
      "A value-function representation that decouples environment dynamics from rewards: ψ(s,a) is the expected discounted sum of future state-features, so Q = ψ · w for any reward weights w. Lets value transfer instantly when only the reward changes, and pairs with generalized policy improvement (GPI). Generalizes Dayan's successor representation.",
  },
  {
    id: "ctde",
    type: "concept",
    label: "CTDE",
    description:
      "Centralized Training, Decentralized Execution — agents are trained with access to global state/other agents' info (e.g. a centralized critic), but execute using only local observations at test time. The dominant paradigm in cooperative MARL.",
  },
  {
    id: "value-decomposition",
    type: "concept",
    label: "Value Decomposition",
    description:
      "Factorizes a team's joint action-value into per-agent utilities so decentralized greedy actions stay consistent with the centralized argmax. VDN sums them; QMIX uses a monotonic mixing network. A specific realization of CTDE for value-based MARL.",
  },
  {
    id: "constrained-mdp",
    type: "concept",
    label: "Constrained MDP",
    description:
      "An MDP augmented with constraints on expected cumulative costs, separate from the reward. The standard formalism for Safe RL: maximize return subject to E[cost] ≤ threshold, solved via Lagrangian duality, trust regions, or Lyapunov functions.",
  },
  {
    id: "contrastive-rl",
    type: "concept",
    label: "Contrastive RL",
    description:
      "Uses contrastive (InfoNCE-style) objectives to learn representations whose inner products encode future-state reachability or similarity. Frames goal-conditioned RL as classification: C-Learning, Contrastive Learning as GCRL, and TD InfoNCE belong to this lineage; CURL applies it as a pixel auxiliary loss.",
  },

  // ── New Architectures (G) ────────────────────────────────────────
  {
    id: "transformer",
    type: "architecture",
    label: "Transformer",
    description:
      "Self-attention based sequence model — adapted for RL in Decision Transformer (return-conditioned) and Trajectory Transformer (sequence modelling over states/actions).",
  },
  {
    id: "diffusion-model",
    type: "architecture",
    label: "Diffusion Model",
    description:
      "Generative model that samples by iteratively denoising from noise, learning the score (gradient of log-density) of the data. In RL it represents highly-expressive, multimodal distributions over actions (Diffusion Policy, Diffusion-QL) or whole trajectories (Diffuser, Decision Diffuser), and serves as a pixel-space world model (DIAMOND).",
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
  { source: "value-based",          target: "successor-features",   label: "uses" },

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

  // goal-conditioned & contrastive RL lineage
  { source: "rl",                   target: "goal-conditioned-rl",  label: "includes" },
  { source: "goal-conditioned-rl",  target: "contrastive-rl",       label: "uses" },

  // RL as sequence modeling (transformer + diffusion trajectory generation)
  { source: "offline-rl",           target: "sequence-modeling",    label: "uses" },

  // imitation learning & inverse RL
  { source: "rl",                   target: "imitation-learning",   label: "includes" },
  { source: "imitation-learning",   target: "inverse-rl",           label: "includes" },
  { source: "imitation-learning",   target: "behavior-cloning",     label: "includes" },

  // RLHF — learns a reward model from human preferences
  { source: "rl",                   target: "rlhf",                 label: "includes" },
  { source: "rlhf",                 target: "inverse-rl",           label: "related to" },

  // Multi-agent RL
  { source: "rl",                   target: "multi-agent-rl",       label: "includes" },
  { source: "multi-agent-rl",       target: "ctde",                 label: "uses" },
  { source: "ctde",                 target: "value-decomposition",  label: "includes" },

  // Safe / Constrained RL
  { source: "rl",                   target: "safe-rl",              label: "includes" },
  { source: "safe-rl",              target: "constrained-mdp",      label: "based on" },

  // Unsupervised RL — reward-free pretraining + transfer
  { source: "rl",                   target: "unsupervised-rl",      label: "includes" },
  { source: "unsupervised-rl",      target: "exploration",          label: "uses" },
  { source: "unsupervised-rl",      target: "intrinsic-motivation", label: "uses" },
  { source: "unsupervised-rl",      target: "skill-discovery",      label: "includes" },

  // Meta-RL — learning to adapt fast at test time
  { source: "rl",                   target: "meta-rl",              label: "includes" },
  { source: "meta-rl",              target: "task-inference",       label: "includes" },
  { source: "meta-rl",              target: "meta-exploration",     label: "includes" },
];
