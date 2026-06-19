---
title: "Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models"
authors: ["Kurtland Chua", "Roberto Calandra", "Rowan McAllister", "Sergey Levine"]
year: 2018
venue: "NeurIPS 2018"
arxiv: "https://arxiv.org/abs/1805.12114"
abstract: "Model-based reinforcement learning (RL) algorithms can attain excellent sample efficiency, but often lag behind the best model-free algorithms in terms of asymptotic performance. This is especially true with high-capacity parametric function approximators, such as deep networks. In this paper, we study how to bridge this gap, by employing uncertainty-aware dynamics models. We propose a new algorithm called probabilistic ensembles with trajectory sampling (PETS) that combines uncertainty-aware deep network dynamics models with sampling-based uncertainty propagation. Our comparison to state-of-the-art model-based and model-free deep RL algorithms shows that our approach matches the asymptotic performance of model-free algorithms on several challenging benchmark tasks, while requiring significantly fewer samples (e.g., 8 and 125 times fewer samples than Soft Actor Critic and Proximal Policy Optimization respectively on the half-cheetah task)."
draft: false
graphLabel: "PETS"
graphDescription: "Chua et al. (2018). Probabilistic ensemble dynamics models + CEM trajectory sampling — matches model-free asymptotic performance with 8-125× fewer samples. Bridges MBRL sample efficiency and MF performance."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: cem
    label: uses
  - target: epistemic-uncertainty
    label: uses
  - target: mujoco
    label: evaluated on
---
