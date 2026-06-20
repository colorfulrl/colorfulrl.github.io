---
title: "Deep Reinforcement Learning from Human Preferences"
authors: ["Paul Christiano", "Jan Leike", "Tom B. Brown", "Miljan Martic", "Shane Legg", "Dario Amodei"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1706.03741"
abstract: "For sophisticated reinforcement learning (RL) systems to interact usefully with real-world environments, we need to communicate complex goals to these systems. In this work, we explore goals defined in terms of (non-expert) human preferences between pairs of trajectory segments. We show that this approach can effectively solve complex RL tasks without access to the reward function, including Atari games and simulated robot locomotion, while providing feedback on less than one percent of our agent's interactions with the environment. This reduces the cost of human oversight far enough that it can be practically applied to state-of-the-art RL systems. To demonstrate the flexibility of our approach, we show that we can successfully train complex novel behaviors with about an hour of human time. These behaviors and environments are considerably more complex than any that have been previously learned from human feedback."
draft: false
graphLabel: "Deep RL from Human Preferences"
graphDescription: "Christiano et al. (2017). The founding RLHF paper — learns a reward model from human preference comparisons between trajectory segments, training Atari and MuJoCo agents with feedback on <1% of interactions. Direct ancestor of InstructGPT/ChatGPT alignment. NeurIPS 2017."
graphEdges:
  - target: rlhf
    label: introduces
  - target: inverse-rl
    label: related to
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
