---
title: "For SALE: State-Action Representation Learning for Deep Reinforcement Learning"
authors: ["Scott Fujimoto", "Wei-Di Chang", "Edward J. Smith", "Shixiang Shane Gu", "Doina Precup", "David Meger"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2306.02451"
abstract: "In the field of reinforcement learning (RL), representation learning is a proven tool for complex image-based tasks, but is often overlooked for environments with low-level states, such as physical control problems. This paper introduces SALE, a method for learning embeddings that model the nuanced interaction between state and action. We provide a thorough analysis of the design space of these embeddings, which highlights important design considerations. We then integrate SALE and an adaptation of checkpoints for RL into TD3 to form the TD7 algorithm, which significantly outperforms existing continuous control algorithms. On the MuJoCo benchmark, TD7 improves over TD3 by 276.7% and 50.7% at 300k and 5M time steps, respectively, and works in both the online and offline settings. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "TD7"
graphDescription: "Fujimoto et al. (2023). Adds SALE — learned state-action embeddings capturing their joint interaction — plus RL checkpoints to TD3, giving TD7. Big gains on low-dimensional continuous control (+276.7% over TD3 at 300k steps); works online and offline. NeurIPS 2023."
graphEdges:
  - target: actor-critic
    label: uses
  - target: td3
    label: extends
  - target: offline-rl
    label: evaluated on
  - target: experience-replay
    label: uses
  - target: mujoco
    label: evaluated on
---
