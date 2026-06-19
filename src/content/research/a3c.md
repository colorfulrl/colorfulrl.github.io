---
title: "Asynchronous Methods for Deep Reinforcement Learning"
authors: ["Volodymyr Mnih", "Adrià Puigdomènech Badia", "Mehdi Mirza", "Alex Graves", "Timothy P. Lillicrap", "Tim Harley", "David Silver", "Koray Kavukcuoglu"]
year: 2016
venue: "ICML 2016"
arxiv: "https://arxiv.org/abs/1602.01783"
abstract: "We propose a conceptually simple and lightweight framework for deep reinforcement learning that uses asynchronous gradient descent for optimization of deep neural network controllers. We present asynchronous variants of four standard reinforcement learning algorithms and show that parallel actor-learners have a stabilizing effect on training allowing all four methods to successfully train neural network controllers. The best performing method, an asynchronous variant of actor-critic, surpasses the current state-of-the-art on the Atari domain while training for half the time on a single multi-core CPU instead of a GPU. Furthermore, we show that asynchronous actor-critic succeeds on a wide variety of continuous motor control problems as well as on a new task of navigating random 3D mazes using a visual input."
draft: false
graphLabel: "A3C"
graphEdges:
  - target: actor-critic
    label: introduces
  - target: policy-gradient
    label: based on
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
graphDescription: "Mnih et al. (2016). Runs multiple parallel actors on CPU, using asynchronous gradient updates to decorrelate experience — removing the need for experience replay."
---
