---
title: "Off-Policy Deep Reinforcement Learning without Exploration"
authors: ["Scott Fujimoto", "David Meger", "Doina Precup"]
year: 2018
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1812.02900"
abstract: "Many practical applications of reinforcement learning constrain agents to learn from a fixed batch of data which has already been gathered, without offering further possibility for data collection. In this paper, we demonstrate that due to errors introduced by extrapolation, standard off-policy deep reinforcement learning algorithms, such as DQN and DDPG, are incapable of learning with data uncorrelated to the distribution under the current policy, making them ineffective for this fixed batch setting. We introduce a novel class of off-policy algorithms, batch-constrained reinforcement learning, which restricts the action space in order to force the agent towards behaving close to on-policy with respect to a subset of the given data. We present the first continuous control deep reinforcement learning algorithm which can learn effectively from arbitrary, fixed batch data, and empirically demonstrate the quality of its behavior in several tasks."
draft: false
graphLabel: "BCQ"
graphEdges:
  - target: offline-rl
    label: introduces
  - target: ddpg
    label: extends
  - target: mujoco
    label: evaluated on
graphDescription: "Fujimoto et al. (2018). Defines the distributional shift problem in offline RL and proposes batch-constrained action selection — actions must be close to the behavior policy's data distribution."
---
