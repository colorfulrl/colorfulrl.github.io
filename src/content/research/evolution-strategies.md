---
title: "Evolution Strategies as a Scalable Alternative to Reinforcement Learning"
authors: ["Tim Salimans", "Jonathan Ho", "Xi Chen", "Szymon Sidor", "Ilya Sutskever"]
year: 2017
venue: "arXiv 2017"
arxiv: "https://arxiv.org/abs/1703.03864"
abstract: "We explore the use of Evolution Strategies (ES), a class of black box optimization algorithms, as an alternative to popular MDP-based RL techniques such as Q-learning and Policy Gradients. Experiments on MuJoCo and Atari show that ES is a viable solution strategy that scales extremely well with the number of CPUs available: By using a novel communication strategy based on common random numbers, our ES implementation only needs to communicate scalars, making it possible to scale to over a thousand parallel workers. This allows us to solve 3D humanoid walking in 10 minutes and obtain competitive results on most Atari games after one hour of training. In addition, we highlight several advantages of ES as a black box optimization technique: it is invariant to action frequency and delayed rewards, tolerant of extremely long horizons, and does not need temporal discounting or value function approximation."
draft: false
graphLabel: "Evolution Strategies"
graphDescription: "Salimans et al. (2017). Black-box ES as RL alternative: no gradients, no value functions — scales to 1000+ workers via shared random seeds. Competitive on MuJoCo and Atari."
graphEdges:
  - target: cma-es
    label: related to
  - target: exploration
    label: related to
  - target: mujoco
    label: evaluated on
  - target: atari
    label: evaluated on
---
