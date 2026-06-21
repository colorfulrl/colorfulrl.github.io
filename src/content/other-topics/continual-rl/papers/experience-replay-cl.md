---
title: "Experience Replay for Continual Learning"
authors: ["David Rolnick", "Arun Ahuja", "Jonathan Schwarz", "Timothy P. Lillicrap", "Greg Wayne"]
year: 2019
venue: "NeurIPS 2019"
arxiv: "https://arxiv.org/abs/1811.11682"
abstract: "Continual learning is the problem of learning new tasks or knowledge while protecting old knowledge and ideally generalizing from old experience to learn new tasks faster. Neural networks trained by stochastic gradient descent often degrade on old tasks when trained successively on new tasks with different data distributions. In this paper, we show that experience replay — maintaining a memory of past experiences and interleaving them with new ones — is highly effective at preventing catastrophic forgetting in RL agents trained sequentially across tasks."
graphLabel: "Experience Replay for CL (Rolnick 2019)"
graphDescription: "Rolnick, Ahuja, Schwarz, Lillicrap & Wayne (2019, NeurIPS). Shows that interleaving replay of past experiences (CLEAR: Continual Learning with Experience And Replay) combats catastrophic forgetting in RL across sequential tasks. Simple, effective, RL-native: leverages the replay buffer already present in off-policy algorithms. The baseline for replay-based continual RL."
draft: false
---
