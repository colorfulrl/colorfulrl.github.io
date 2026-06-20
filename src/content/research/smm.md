---
title: "Efficient Exploration via State Marginal Matching"
authors: ["Lisa Lee", "Benjamin Eysenbach", "Emilio Parisotto", "Eric Xing", "Sergey Levine", "Ruslan Salakhutdinov"]
year: 2019
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1906.05274"
abstract: "Exploration is critical to a reinforcement learning agent's performance in its given environment. Prior work on intrinsic motivation and provably efficient exploration encourage the agent to visit novel states by rewarding it for reaching states with low visitation density. We study an alternative perspective on exploration: rather than reaching individually novel states, the agent should aim to reach a target distribution of states. We formalize this as State Marginal Matching (SMM), where the agent aims to learn a policy whose state marginal distribution matches a given target state distribution, such as a uniform distribution over the state space. We show that SMM amounts to a two-player, zero-sum game between a state density model and a parametric policy, and that many prior exploration methods arise as approximations to this objective. We propose a practical algorithm for SMM, and demonstrate that it explores faster and adapts more quickly to new tasks than prior exploration methods on a variety of simulated and real-world tasks. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "SMM"
graphDescription: "Lee et al. (2019). Reframes exploration as matching the policy's state-marginal distribution to a target (e.g. uniform) — a two-player game between a density model and the policy. Shows many prior exploration methods are approximations of this objective. The foundational state-coverage view. "
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: state-entropy
    label: introduces
  - target: mujoco
    label: evaluated on
---
