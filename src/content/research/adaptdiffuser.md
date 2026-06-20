---
title: "AdaptDiffuser: Diffusion Models as Adaptive Self-evolving Planners"
authors: ["Zhixuan Liang", "Yao Mu", "Mingyu Ding", "Fei Ni", "Masayoshi Tomizuka", "Ping Luo"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2302.01877"
abstract: "Diffusion models have demonstrated their powerful generative capability in many tasks, with great potential to serve as a paradigm for offline reinforcement learning. However, the quality of the diffusion model is limited by the insufficient diversity of training data, which hinders the performance of planning and the generalizability to new tasks. This paper introduces AdaptDiffuser, an evolutionary planning method with diffusion that can self-evolve to improve the diffusion model hence a better planner, not only for seen tasks but can also adapt to unseen tasks. AdaptDiffuser enables the generation of rich synthetic expert data for goal-conditioned tasks using guidance from reward gradients. It then selects high-quality data via a discriminator to finetune the diffusion model, which improves the generalization ability to unseen tasks. Empirical experiments on two benchmark environments and two carefully designed unseen tasks in KUKA industrial robot arm and Maze2D environments demonstrate the effectiveness of AdaptDiffuser."
draft: false
graphLabel: "AdaptDiffuser"
graphDescription: "Liang et al. (2023). Self-evolving diffusion planner — generates synthetic expert trajectories via reward-gradient guidance, filters them with a discriminator, then finetunes the diffusion model on them. Improves planning on seen tasks and adapts to unseen ones. Extends Diffuser. ICML 2023."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: sequence-modeling
    label: uses
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: offline-rl
    label: evaluated on
---
