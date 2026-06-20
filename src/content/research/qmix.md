---
title: "QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning"
authors: ["Tabish Rashid", "Mikayel Samvelyan", "Christian Schroeder de Witt", "Gregory Farquhar", "Jakob Foerster", "Shimon Whiteson"]
year: 2018
venue: "ICML 2018"
arxiv: "https://arxiv.org/abs/1803.11485"
abstract: "In many real-world settings, a team of agents must coordinate their behaviour while acting in a decentralised way. At the same time, it is often possible to train the agents in a centralised fashion in a simulated or laboratory setting, where global state information is available and communication constraints are lifted. Learning joint action-values conditioned on extra state information is an attractive way to exploit centralised learning, but the best strategy for then extracting decentralised policies is unclear. Our solution is QMIX, a novel value-based method that can train decentralised policies in a centralised end-to-end fashion. QMIX employs a network that estimates joint action-values as a complex non-linear combination of per-agent values that condition only on local observations. We structurally enforce that the joint-action value is monotonic in the per-agent values, which allows tractable maximisation of the joint action-value in off-policy learning, and guarantees consistency between the centralised and decentralised policies. We evaluate QMIX on a challenging set of StarCraft II micromanagement tasks, and show that QMIX significantly outperforms existing value-based multi-agent reinforcement learning methods."
draft: false
graphLabel: "QMIX"
graphDescription: "Rashid et al. (2018). Mixes per-agent values into the joint action-value with a monotonic mixing network — monotonicity makes the decentralized argmax match the centralized one. Standard value-based MARL baseline; SOTA on SMAC at release. ICML 2018."
graphEdges:
  - target: multi-agent-rl
    label: based on
  - target: ctde
    label: uses
  - target: value-decomposition
    label: uses
  - target: value-based
    label: based on
  - target: smac
    label: evaluated on
---
