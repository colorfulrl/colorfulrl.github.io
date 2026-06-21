---
title: "Overcoming catastrophic forgetting in neural networks"
authors: ["James Kirkpatrick", "Razvan Pascanu", "Neil Rabinowitz", "Joel Veness", "Guillaume Desjardins", "Andrei A. Rusu", "Kieran Milan", "John Quan", "Tiago Ramalho", "Agnieszka Grabska-Barwinska", "Demis Hassabis", "Claudia Clopath", "Dharshan Kumaran", "Raia Hadsell"]
year: 2017
venue: "PNAS 2017"
arxiv: "https://arxiv.org/abs/1612.00796"
abstract: "The ability to learn tasks in a sequential fashion is crucial to the development of artificial intelligence. Neural networks are not, in general, capable of this and it has been widely thought that catastrophic forgetting is an inevitable feature of connectionist models. We introduce elastic weight consolidation (EWC), a method that protects parameters important to previous tasks by slowing down learning on those parameters using a quadratic penalty anchored at the previous task's optimal parameters, with weights determined by the Fisher information matrix."
graphLabel: "EWC (Kirkpatrick 2017)"
graphDescription: "Kirkpatrick, Pascanu, Rusu et al. (2017, PNAS / DeepMind). Elastic Weight Consolidation: protect parameters crucial to old tasks by penalizing changes proportional to their Fisher information — the Bayesian posterior approximation of task importance. The foundational regularization-based approach to catastrophic forgetting; applied to sequential Atari games. Spawned EWC++, SI, MAS, and the entire regularization branch."
draft: false
---
