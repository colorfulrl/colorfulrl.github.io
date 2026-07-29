---
title: "Data-Efficient Hierarchical Reinforcement Learning"
authors: ["Ofir Nachum", "Shixiang Gu", "Honglak Lee", "Sergey Levine"]
year: 2018
venue: "NeurIPS 2018"
arxiv: "https://arxiv.org/abs/1805.08296"
abstract: "Hierarchical reinforcement learning (HRL) is a promising approach to extend traditional reinforcement learning (RL) methods to solve more complex tasks. Yet, the majority of current HRL methods require careful task-specific design and on-policy training, making them difficult to apply in real-world scenarios. In this paper, we study how we can develop HRL algorithms that are general, in that they do not make onerous additional assumptions beyond standard RL algorithms, and efficient, in the sense that they can be used with modest numbers of interaction samples, making them suitable for real-world problems such as robotic control. For generality, we develop a scheme where lower-level controllers are supervised with goals that are learned and proposed automatically by the higher-level controllers. To address efficiency, we propose to use off-policy experience for both higher and lower-level training. This poses a considerable challenge, since changes to the lower-level behaviors change the action space for the higher-level policy, and we introduce an off-policy correction to remedy this challenge. This allows us to take advantage of recent advances in off-policy model-free RL to learn both higher- and lower-level policies using substantially fewer environment interactions than on-policy algorithms. We term the resulting HRL agent HIRO and find that it is generally applicable and highly sample-efficient. Our experiments show that HIRO can be used to learn highly complex behaviors for simulated robots, such as pushing objects and utilizing them to reach target locations, learning from only a few million samples, equivalent to a few days of real-time interaction. In comparisons with a number of prior HRL methods, we find that our approach substantially outperforms previous state-of-the-art techniques."
draft: false
graphLabel: "HIRO"
graphDescription: "Nachum, Gu, Lee & Levine (2018). Two-level HRL where the higher-level policy proposes goals (a target state offset) for the lower-level policy to reach, both trained off-policy for sample efficiency. The key trick: since the lower-level policy keeps changing during training, past high-level actions (goals) stored in the replay buffer become mislabeled — HIRO relabels them post-hoc (an off-policy correction) so the higher-level's own experience replay stays valid. Learns complex simulated-robot behaviors (Ant Maze/Push/Fall) with far fewer samples than on-policy HRL. NeurIPS 2018."
graphEdges:
  - target: hierarchical-rl
    label: extends
  - target: goal-conditioned-rl
    label: uses
  - target: temporal-abstraction
    label: uses
  - target: experience-replay
    label: uses
  - target: mujoco
    label: evaluated on
---
