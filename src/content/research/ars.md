---
title: "Simple random search provides a competitive approach to reinforcement learning"
authors: ["Horia Mania", "Aurelia Guy", "Benjamin Recht"]
year: 2018
venue: "NeurIPS 2018"
arxiv: "https://arxiv.org/abs/1803.07055"
abstract: "A common belief in model-free reinforcement learning is that methods based on random search in the parameter space of policies exhibit significantly worse sample complexity than those that explore the space of actions. We dispel such beliefs by introducing a random search method for training static, linear policies for continuous control problems, matching state-of-the-art sample efficiency on the benchmark MuJoCo locomotion tasks. Our method also finds a nearly optimal controller for a challenging instance of the Linear Quadratic Regulator, a classical problem in control theory, when the dynamics are not known. Computationally, our random search algorithm is at least 15 times more efficient than the fastest competing model-free methods on these benchmarks. We take advantage of this computational efficiency to evaluate the performance of our method over hundreds of random seeds and many different hyperparameter configurations for each benchmark task. Our simulations highlight a high variability in performance in these benchmark tasks, suggesting that commonly used estimations of sample efficiency do not adequately evaluate the performance of RL algorithms."
draft: false
graphLabel: "ARS"
graphDescription: "Mania et al. (2018). Augmented Random Search — derivative-free, perturbs linear policy parameters and estimates gradient from finite differences. Matches PPO/TRPO sample efficiency on MuJoCo; 15× faster compute. Challenges assumptions about action-space vs parameter-space exploration."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: mujoco
    label: evaluated on
---
