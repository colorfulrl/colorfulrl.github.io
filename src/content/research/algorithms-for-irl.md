---
title: "Algorithms for Inverse Reinforcement Learning"
authors: ["Andrew Y. Ng", "Stuart Russell"]
year: 2000
venue: "ICML 2000"
arxiv: "https://ai.stanford.edu/~ang/papers/icml00-irl.pdf"
abstract: "This paper addresses the problem of inverse reinforcement learning (IRL) in Markov decision processes, that is, the problem of extracting a reward function given observed, optimal behavior. IRL may be useful for apprenticeship learning to acquire skilled behavior, and for ascertaining the reward function being optimized by a natural system. The paper first characterizes the set of all reward functions for which a given policy is optimal, then derives three algorithms for IRL: two for the case where the policy is known (tabulated rewards on a finite state space, and linear function approximation over a large or infinite state space), and a third for the realistic case where the policy is known only through a finite set of sampled trajectories. A central difficulty is degeneracy — many reward functions (including the all-zero reward) make the observed policy optimal — which the paper addresses with heuristics that favor rewards making the observed policy robustly, maximally distinguishable from alternatives. [Note: abstract summarized from the paper, pending verbatim text.]"
draft: false
graphLabel: "Algorithms for IRL"
graphDescription: "Ng & Russell (2000). The paper that founded inverse reinforcement learning — formalizes recovering a reward from observed optimal behavior, characterizes the degenerate solution set, and gives three algorithms (linear-program, function-approx, and trajectory-based). Origin of the whole IRL field. ICML 2000."
graphEdges:
  - target: inverse-rl
    label: introduces
  - target: imitation-learning
    label: based on
---
