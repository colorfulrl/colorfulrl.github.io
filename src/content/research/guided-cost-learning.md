---
title: "Guided Cost Learning: Deep Inverse Optimal Control via Policy Optimization"
authors: ["Chelsea Finn", "Sergey Levine", "Pieter Abbeel"]
year: 2016
venue: "ICML 2016"
arxiv: "https://arxiv.org/abs/1603.00448"
abstract: "Reinforcement learning can acquire complex behaviors from high-level specifications. However, defining a cost function that can be optimized effectively and encodes the correct task is challenging in practice. We explore how inverse optimal control (IOC) can be used to learn behaviors from demonstrations, with applications to torque control of high-dimensional robotic systems. Our method addresses two key challenges in inverse optimal control: first, the need for informative features and effective regularization to impose structure on the cost, and second, the difficulty of learning the cost function under unknown dynamics for high-dimensional continuous systems. To address the former challenge, we present an algorithm capable of learning arbitrary nonlinear cost functions, such as neural networks, without meticulous feature engineering. To address the latter challenge, we formulate an efficient sample-based approximation for MaxEnt IOC. We evaluate our method on a series of simulated tasks and real-world robotic manipulation problems, demonstrating substantial improvement over prior methods both in terms of task complexity and sample efficiency."
draft: false
graphLabel: "Guided Cost Learning"
graphDescription: "Finn, Levine & Abbeel (2016). Deep MaxEnt inverse optimal control — learns arbitrary nonlinear (neural net) cost functions from demonstrations under unknown dynamics via a sample-based approximation, interleaving cost learning with policy optimization. Precursor to GAN-style imitation. ICML 2016."
graphEdges:
  - target: inverse-rl
    label: based on
  - target: maximum-entropy-rl
    label: uses
  - target: imitation-learning
    label: uses
  - target: mujoco
    label: evaluated on
---
