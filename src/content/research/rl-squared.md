---
title: "RL²: Fast Reinforcement Learning via Slow Reinforcement Learning"
authors: ["Yan Duan", "John Schulman", "Xi Chen", "Peter L. Bartlett", "Ilya Sutskever", "Pieter Abbeel"]
year: 2016
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1611.02779"
abstract: "Deep reinforcement learning (deep RL) has been successful in learning sophisticated behaviors automatically; however, the learning process requires a huge number of trials. In contrast, animals can learn new tasks in just a few trials, benefiting from their prior knowledge about the world. This paper seeks to bridge this gap. Rather than designing a 'fast' reinforcement learning algorithm, we propose to represent it as a recurrent neural network (RNN) and learn it from data. In our proposed method, RL^2, the algorithm is encoded in the weights of the RNN, which are learned slowly through a general-purpose ('slow') RL algorithm. The RNN receives all information a typical RL algorithm would receive, including observations, actions, rewards, and termination flags; and it retains its state across episodes in a given Markov Decision Process (MDP). The activations of the RNN store the state of the 'fast' RL algorithm on the current (previously unseen) MDP. We evaluate RL^2 experimentally on both small-scale and large-scale problems. On the small-scale side, we train it to solve randomly generated multi-arm bandit problems and finite MDPs. After RL^2 is trained, its performance on new MDPs is close to human-designed algorithms with optimality guarantees. On the large-scale side, we test RL^2 on a vision-based navigation task and show that it scales up to high-dimensional problems. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "RL²"
graphDescription: "Duan et al. (2016). Encodes the fast RL algorithm itself in an RNN's weights, trained by a slow outer RL loop — the RNN hidden state (kept across episodes) implicitly infers and adapts to the current MDP. The founding context-based meta-RL method."
graphEdges:
  - target: meta-rl
    label: introduces
  - target: task-inference
    label: introduces
  - target: policy-gradient
    label: uses
---
