---
title: "Deep Neuroevolution: Genetic Algorithms Are a Competitive Alternative for Training Deep Neural Networks for Reinforcement Learning"
authors: ["Felipe Petroski Such", "Vashisht Madhavan", "Edoardo Conti", "Joel Lehman", "Kenneth O. Stanley", "Jeff Clune"]
year: 2017
venue: "arXiv 2017"
arxiv: "https://arxiv.org/abs/1712.06567"
abstract: "Deep artificial neural networks (DNNs) are typically trained via gradient-based learning algorithms, namely backpropagation. Evolution strategies (ES) can rival backprop-based algorithms such as Q-learning and policy gradients on challenging deep reinforcement learning (RL) problems. However, ES can be considered a gradient-based algorithm because it performs stochastic gradient descent via an operation similar to a finite-difference approximation of the gradient. That raises the question of whether non-gradient-based evolutionary algorithms can work at DNN scales. Here we demonstrate they can: we evolve the weights of a DNN with a simple, gradient-free, population-based genetic algorithm (GA) and it performs well on hard deep RL problems, including Atari and humanoid locomotion. The Deep GA successfully evolves networks with over four million free parameters, the largest neural networks ever evolved with a traditional evolutionary algorithm. These results (1) expand our sense of the scale at which GAs can operate, (2) suggest intriguingly that in some cases following the gradient is not the best choice for optimizing performance, and (3) make immediately available the multitude of neuroevolution techniques that improve performance. We demonstrate the latter by showing that combining DNNs with novelty search, which encourages exploration on tasks with deceptive or sparse reward functions, can solve a high-dimensional problem on which reward-maximizing algorithms (e.g. DQN, A3C, ES, and the GA) fail. Additionally, the Deep GA is faster than ES, A3C, and DQN (it can train Atari in ~4 hours on one desktop or ~1 hour distributed on 720 cores), and enables a state-of-the-art, up to 10,000-fold compact encoding technique."
draft: false
graphLabel: "Deep Neuroevolution"
graphDescription: "Such et al. (2017). Gradient-free GA trains DNNs competitively with DQN/A3C/ES on Atari and MuJoCo. GA + novelty search solves hard exploration problems where all gradient methods fail."
graphEdges:
  - target: evolution-strategies
    label: related to
  - target: novelty-search
    label: combines with
  - target: exploration
    label: related to
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
