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
    description: "Học tăng cường — agent học cách hành động để tối đa hóa phần thưởng tích lũy qua tương tác với môi trường.",
  },
  {
    id: "model-free-rl",
    type: "topic",
    label: "Model-Free RL",
    description: "Agent học trực tiếp từ tương tác mà không xây dựng mô hình môi trường. Đơn giản hơn nhưng cần nhiều mẫu.",
  },
  {
    id: "model-based-rl",
    type: "topic",
    label: "Model-Based RL",
    description: "Agent học một mô hình của môi trường (world model) rồi dùng nó để lập kế hoạch hoặc tổng hợp dữ liệu.",
  },

  // ── Concepts ────────────────────────────────────────────────────
  {
    id: "value-based",
    type: "concept",
    label: "Value-Based",
    description: "Học hàm giá trị V(s) hoặc Q(s,a) để suy ra policy tối ưu. Ví dụ: DQN, Q-learning.",
  },
  {
    id: "policy-gradient",
    type: "concept",
    label: "Policy Gradient",
    description: "Tối ưu trực tiếp tham số policy bằng gradient của expected return. Nền tảng cho REINFORCE, PPO, SAC.",
  },
  {
    id: "actor-critic",
    type: "concept",
    label: "Actor-Critic",
    description: "Kết hợp policy (actor) và value function (critic) để giảm variance khi ước lượng gradient.",
  },
  {
    id: "world-models-concept",
    type: "concept",
    label: "World Models",
    description: "Mô hình học để dự đoán trạng thái tương lai trong không gian latent, cho phép agent 'mơ' và lập kế hoạch mà không cần tương tác thật.",
  },
  {
    id: "latent-dynamics",
    type: "concept",
    label: "Latent Dynamics",
    description: "Mô hình hóa động học môi trường trong không gian ẩn (latent space) thay vì pixel thô — hiệu quả hơn và dễ học hơn.",
  },
  {
    id: "rssm",
    type: "concept",
    label: "RSSM",
    description: "Recurrent State Space Model — kết hợp trạng thái deterministic (GRU) và stochastic (Gaussian) để biểu diễn belief về thế giới.",
  },

  // ── Papers ──────────────────────────────────────────────────────
  {
    id: "sutton-barto",
    type: "paper",
    label: "RL: An Introduction",
    description: "Sutton & Barto (2018). Cuốn sách nền tảng kinh điển về RL — MDP, TD learning, policy gradient, function approximation.",
    slug: "sutton-barto",
  },
  {
    id: "dqn",
    type: "paper",
    label: "DQN",
    description: "Mnih et al. (2015). Deep Q-Network — áp dụng deep learning vào Q-learning với experience replay và target network, chơi Atari ở mức con người.",
    slug: "dqn",
  },
  {
    id: "ppo",
    type: "paper",
    label: "PPO",
    description: "Schulman et al. (2017). Proximal Policy Optimization — thuật toán policy gradient đơn giản, ổn định, hiệu quả mẫu tốt. Backbone của nhiều hệ thống RLHF.",
    slug: "ppo",
  },
  {
    id: "sac",
    type: "paper",
    label: "SAC",
    description: "Haarnoja et al. (2018). Soft Actor-Critic — maximum entropy RL, tự động cân bằng giữa reward và entropy để khuyến khích exploration.",
    slug: "sac",
  },
  {
    id: "world-models-paper",
    type: "paper",
    label: "World Models",
    description: "Ha & Schmidhuber (2018). Kiến trúc gốc: VAE nén quan sát → MDN-RNN mô hình hóa động học latent → CMA-ES tối ưu controller. Chứng minh agent có thể học trong 'giấc mơ'.",
    slug: "world-models-paper",
  },
  {
    id: "planet",
    type: "paper",
    label: "PlaNet",
    description: "Hafner et al. (2019). Learning Latent Dynamics for Planning — giới thiệu RSSM và CEM planning thuần trong latent space, không cần policy gradient.",
    slug: "planet",
  },
  {
    id: "dreamerv1",
    type: "paper",
    label: "DreamerV1",
    description: "Hafner et al. (2020). Dream to Control — kết hợp RSSM của PlaNet với actor-critic học hoàn toàn trong imagination, không cần environment rollout để update policy.",
    slug: "dreamerv1",
  },
  {
    id: "dreamerv3",
    type: "paper",
    label: "DreamerV3",
    description: "Hafner et al. (2023). Mastering Diverse Domains — một bộ hyperparameter hoạt động trên mọi domain (discrete/continuous, low/high-dim). Symlog predictions, free bits, KL balancing.",
    slug: "dreamerv3",
  },
];

export const GRAPH_EDGES: GraphEdge[] = [
  // RL → subtopics
  { source: "rl", target: "model-free-rl", label: "bao gồm" },
  { source: "rl", target: "model-based-rl", label: "bao gồm" },
  { source: "sutton-barto", target: "rl", label: "nền tảng" },

  // Model-free breakdown
  { source: "model-free-rl", target: "value-based", label: "bao gồm" },
  { source: "model-free-rl", target: "policy-gradient", label: "bao gồm" },
  { source: "policy-gradient", target: "actor-critic", label: "mở rộng" },

  // Algorithm instances
  { source: "value-based", target: "dqn", label: "hiện thực" },
  { source: "policy-gradient", target: "ppo", label: "hiện thực" },
  { source: "actor-critic", target: "sac", label: "hiện thực" },

  // Model-based breakdown
  { source: "model-based-rl", target: "world-models-concept", label: "bao gồm" },
  { source: "world-models-concept", target: "latent-dynamics", label: "dùng" },
  { source: "latent-dynamics", target: "rssm", label: "hiện thực" },

  // World models papers lineage
  { source: "world-models-concept", target: "world-models-paper", label: "hiện thực" },
  { source: "world-models-paper", target: "planet", label: "truyền cảm hứng" },
  { source: "rssm", target: "planet", label: "dùng" },
  { source: "planet", target: "dreamerv1", label: "mở rộng" },
  { source: "actor-critic", target: "dreamerv1", label: "dùng" },
  { source: "dreamerv1", target: "dreamerv3", label: "mở rộng" },
];
