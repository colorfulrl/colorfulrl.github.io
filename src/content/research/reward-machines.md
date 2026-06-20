---
title: "Reward Machines: Exploiting Reward Function Structure in Reinforcement Learning"
authors: ["Rodrigo Toro Icarte", "Toryn Q. Klassen", "Richard Valenzano", "Sheila A. McIlraith"]
year: 2022
venue: "JAIR 2022"
arxiv: "https://arxiv.org/abs/2010.03950"
abstract: "Reinforcement learning (RL) methods usually treat reward functions as black boxes. As such, these methods must extensively interact with the environment in order to discover rewards and optimal policies. In most RL applications, however, users have to program the reward function and, hence, there is the opportunity to make the reward function visible -- to show the reward function's code to the RL agent so it can exploit the function's internal structure to learn optimal policies in a more sample efficient manner. In this paper, we show how to accomplish this idea in two steps. First, we propose reward machines, a type of finite state machine that supports the specification of reward functions while exposing reward function structure. We then describe different methodologies to exploit this structure to support learning, including automated reward shaping, task decomposition, and counterfactual reasoning with off-policy learning. Experiments on tabular and continuous domains, across different tasks and RL agents, show the benefits of exploiting reward function structure with respect to sample efficiency and the quality of resultant policies. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Reward Machines"
graphDescription: "Toro Icarte et al. (2022). Exposes the structure of (often non-Markovian) reward functions as a finite-state automaton — a reward machine — over which the agent can do automated reward shaping, task decomposition, and counterfactual off-policy updates. Supports temporal-logic task specs. JAIR 2022."
graphEdges:
  - target: non-markovian-reward
    label: introduces
  - target: temporal-abstraction
    label: structures
  - target: reward-shaping
    label: uses
  - target: hierarchical-rl
    label: uses
---
