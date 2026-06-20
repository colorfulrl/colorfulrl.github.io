---
title: "Offline Reinforcement Learning as One Big Sequence Modeling Problem"
authors: ["Michael Janner", "Qiyang Li", "Sergey Levine"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://arxiv.org/abs/2106.02039"
abstract: "Reinforcement learning (RL) is typically concerned with estimating stationary policies or single-step models, leveraging the Markov property to factorize problems in time. However, we can also view RL as a generic sequence modeling problem, with the goal being to produce a sequence of actions that leads to a sequence of high rewards. Viewed in this way, it is tempting to consider whether high-capacity sequence prediction models that have been successful in other domains, such as natural-language processing, may be useful in RL. We explore this idea and present the Trajectory Transformer, which models reinforcement learning data using a GPT architecture and treats RL as a sequence generation problem. We give a simple recipe for discretizing continuous state and action spaces and use a modified beam search for planning. The Trajectory Transformer matches or outperforms dedicated offline RL algorithms on most tasks from the D4RL benchmark."
draft: false
graphLabel: "Traj. Transformer"
graphDescription: "Janner et al. (2021). Treats offline RL as sequence generation: discretize (s,a,r) tokens, train GPT, plan with beam search. Parallel approach to Decision Transformer — both at NeurIPS 2021."
graphEdges:
  - target: offline-rl
    label: based on
  - target: sequence-modeling
    label: introduces
  - target: transformer
    label: uses
  - target: d4rl
    label: evaluated on
---
