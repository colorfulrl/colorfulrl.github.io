---
title: "SimSR: Simple Distance-based State Representation for Deep Reinforcement Learning"
authors: ["Hongyu Zang", "Xin Li", "Mingzhong Wang"]
year: 2022
venue: "AAAI 2022"
arxiv: "https://arxiv.org/abs/2112.15303"
abstract: "This work explores how to learn robust and generalizable state representation from image-based observations with deep reinforcement learning methods. Addressing the computational complexity, stringent assumptions and representation collapse challenges in existing work of bisimulation metric, we devise Simple State Representation (SimSR) operator. SimSR enables us to design a stochastic approximation method that can practically learn the mapping functions (encoders) from observations to latent representation space. In addition to the theoretical analysis and comparison with the existing work, we experimented and compared our work with recent state-of-the-art solutions in visual MuJoCo tasks. The results shows that our model generally achieves better performance and has better robustness and good generalization."
draft: false
graphLabel: "SimSR"
graphDescription: "Zang, Li & Wang (2022, AAAI). Replaces the Wasserstein/Kantorovich optimal-transport term inside the bisimulation metric with plain cosine similarity between next-state representations, cutting an order of computational complexity and avoiding solving an inner optimal-transport problem at every update — while still admitting a stochastic-approximation training scheme that avoids representation collapse. Simpler than DBC/MICo, competitive on visual MuJoCo."
graphEdges:
  - target: bisimulation-metric
    label: simplifies
  - target: mujoco
    label: evaluated on
---
