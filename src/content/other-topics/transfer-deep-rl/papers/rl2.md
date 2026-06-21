---
title: "RL²: Fast Reinforcement Learning via Slow Reinforcement Learning"
authors: ["Yan Duan", "John Schulman", "Xi Chen", "Peter L. Bartlett", "Ilya Sutskever", "Pieter Abbeel"]
year: 2016
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1611.02779"
abstract: "Deep reinforcement learning has been successful in learning sophisticated behaviors automatically; however, the learning process requires a huge number of trials. In this paper, we propose to represent a fast RL algorithm as a recurrent neural network (RNN) and learn it from data. In effect, the RNN learns to implement its own RL algorithm. The slow RL algorithm (standard deep RL) provides a training signal to the RNN across many tasks; at test time, the RNN's hidden state encodes everything it has learned about the current task and allows it to adapt quickly."
graphLabel: "RL² (Duan 2016)"
graphDescription: "Duan, Schulman et al. (2016). Meta-RL via recurrent networks: represent the fast RL algorithm itself as an RNN trained by a slow outer RL loop across many tasks. At test time, the RNN hidden state acts as a running memory of the current episode — the agent adapts in-context without gradient updates. Foundation paper for in-context meta-RL."
draft: false
---
