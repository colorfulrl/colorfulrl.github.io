---
title: "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks"
authors: ["Chelsea Finn", "Pieter Abbeel", "Sergey Levine"]
year: 2017
venue: "ICML 2017"
arxiv: "https://arxiv.org/abs/1703.03400"
abstract: "We propose an algorithm for meta-learning that is model-agnostic, in the sense that it is compatible with any model trained with gradient descent and applicable to a variety of different learning problems, including classification, regression, and reinforcement learning. The goal of meta-learning is to train a model on a variety of learning tasks, such that it can solve new learning tasks using only a small number of training samples. Our approach learns a model initialization that can be quickly adapted to new tasks with a few gradient steps."
graphLabel: "MAML (Finn 2017)"
graphDescription: "Finn, Abbeel & Levine (2017, ICML). Model-Agnostic Meta-Learning: finds an initialization θ such that a few gradient steps on any new task yields high performance. Applied to RL as MAML-RL (policy gradient inner loop, meta-gradient outer loop). The reference paper for gradient-based meta-learning — spawned ProMAML, MAML++, CAVIA, and many variants."
draft: false
---
