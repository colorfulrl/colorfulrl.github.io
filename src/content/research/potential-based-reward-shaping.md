---
title: "Policy Invariance Under Reward Transformations: Theory and Application to Reward Shaping"
authors: ["Andrew Y. Ng", "Daishi Harada", "Stuart Russell"]
year: 1999
venue: "ICML 1999"
arxiv: "https://people.eecs.berkeley.edu/~russell/papers/ml99-shaping.ps"
abstract: "This paper investigates conditions under which modifications to the reward function of a Markov decision process preserve the optimal policy. It is shown that, besides the positive linear transformation familiar from utility theory, one can add a reward for transitions between states that is expressible as the difference in value of an arbitrary potential function applied to those states. Furthermore, this is shown to be a necessary condition for invariance, in the sense that any other transformation may yield suboptimal policies unless further assumptions about the underlying MDP are made. These results shed light on the practice of reward shaping, a method used in reinforcement learning whereby additional training rewards are used to guide the learning agent. In particular, some well-known bugs in reward shaping procedures are shown to arise from non-potential-based rewards, and methods are given for constructing shaping potentials corresponding to distance-based and subgoal-based heuristics. We show that such potentials can lead to substantial reductions in learning time. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Potential-Based Shaping"
graphDescription: "Ng, Harada & Russell (1999). Proves that adding F = γΦ(s′) − Φ(s) for any potential Φ is the only reward transformation that provably preserves the optimal policy — making reward shaping safe. Explains why naive shaping introduces unintended optima. The theoretical foundation of reward shaping. ICML 1999."
graphEdges:
  - target: reward-shaping
    label: introduces
  - target: credit-assignment
    label: eases
  - target: sparse-reward
    label: mitigates
---
