---
title: "Mirror Descent Policy Optimization"
authors: ["Manan Tomar", "Lior Shani", "Yonathan Efroni", "Mohammad Ghavamzadeh"]
year: 2022
venue: "ICLR 2022"
arxiv: "https://arxiv.org/abs/2005.09814"
abstract: "Mirror descent (MD), a well-known first-order method in constrained convex optimization, has recently been shown as an important tool to analyze trust-region algorithms in reinforcement learning (RL). However, there remains a considerable gap between the theory and practice of these algorithms. In this paper, we propose Mirror Descent Policy Optimization (MDPO). MDPO iteratively updates the policy by approximately solving a trust-region problem, whose objective function consists of two terms: a linearization of the standard RL objective and a proximity term that restricts two consecutive policies to be close to each other. Each update performs this approximation by taking multiple gradient steps on this objective function. We derive on-policy and off-policy variants of MDPO and highlight important design choices motivated by the existing theory. We show the connections between on-policy MDPO and TRPO/PPO, and that explicitly enforcing the trust-region constraint is in fact not necessary for high performance. We then show how off-policy MDPO recovers soft actor-critic (SAC) under a slight modification, and that MDPO performs better than or on par with TRPO, PPO, and SAC on continuous control. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "MDPO"
graphDescription: "Tomar et al. (2022). Derives policy optimization from the mirror-descent principle — a linearized objective + proximity term solved by multiple gradient steps. Unifies TRPO/PPO (on-policy) and SAC (off-policy) under one view, showing explicit trust-region enforcement isn't necessary. ICLR 2022."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: uses
  - target: actor-critic
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: mujoco
    label: evaluated on
---
