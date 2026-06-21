---
title: "Offline Reinforcement Learning with Causal Structured World Models"
authors: ["Zheng-Mao Zhu", "Xiong-Hui Chen", "Hong-Long Tian", "Kun Zhang", "Yang Yu"]
year: 2022
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2206.01474"
abstract: "Model-based methods have recently shown promising for offline reinforcement learning (RL), aiming to learn good policies from historical data without interacting with the environment. Previous model-based offline RL methods learn fully connected nets as world-models that map the states and actions to the next-step states. However, it is sensible that a world-model should adhere to the underlying causal effect such that it will support learning an effective policy generalizing well in unseen states. In this paper, We first provide theoretical results that causal world-models can outperform plain world-models for offline RL by incorporating the causal structure into the generalization error bound. We then propose a practical algorithm, oFfline mOdel-based reinforcement learning with CaUsal Structure (FOCUS), to illustrate the feasibility of learning and leveraging causal structure in offline RL. Experimental results on two benchmarks show that FOCUS reconstructs the underlying causal structure accurately and robustly. Consequently, it performs better than the plain model-based offline RL algorithms and other causal model-based RL algorithms."
draft: false
graphLabel: "FOCUS (Causal World Model)"
graphDescription: "Zhu et al. (2022). Proves that a world model respecting the true CAUSAL structure (sparse, not fully-connected dynamics) has a tighter generalization-error bound for offline RL. FOCUS learns the causal structure then plans with it (over MOPO). The point where Causal RL meets world-models + offline RL."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: offline-rl
    label: improves
  - target: world-models-concept
    label: structures
---
