---
title: "HarmonyDream: Task Harmonization Inside World Models"
authors: ["Haoyu Ma", "Jialong Wu", "Ningya Feng", "Jianmin Wang", "Mingsheng Long"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2310.00344"
abstract: "Model-based reinforcement learning (MBRL) holds the promise of sample-efficient learning by utilizing a world model, which models how the environment works and typically encompasses components for two tasks: observation modeling and reward modeling. In this paper, through a dedicated empirical investigation, we gain a deeper understanding of the role each task plays in world models and uncover the overlooked potential of sample-efficient MBRL by mitigating the domination of either observation or reward modeling. Our key insight is that while prevalent approaches of explicit MBRL attempt to restore abundant details of the environment via observation models, it is difficult due to the environment's complexity and limited model capacity. On the other hand, reward models, while dominating implicit MBRL and adept at learning compact task-centric dynamics, are inadequate for sample-efficient learning without richer learning signals. Motivated by these insights and discoveries, we propose a simple yet effective approach, HarmonyDream, which automatically adjusts loss coefficients to maintain task harmonization, i.e. a dynamic equilibrium between the two tasks in world model learning. Our experiments show that the base MBRL method equipped with HarmonyDream gains 10%-69% absolute performance boosts on visual robotic tasks and sets a new state-of-the-art result on the Atari 100K benchmark."
draft: false
graphLabel: "HarmonyDream"
graphDescription: "Ma et al. (2023). Auto-adjusts loss coefficients between observation modeling and reward modeling to prevent either from dominating — +10-69% on visual tasks, SOTA Atari 100k. From ContextWM group."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: dreamerv3
    label: extends
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
