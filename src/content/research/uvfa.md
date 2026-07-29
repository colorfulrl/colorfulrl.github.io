---
title: "Universal Value Function Approximators"
authors: ["Tom Schaul", "Daniel Horgan", "Karol Gregor", "David Silver"]
year: 2015
venue: "ICML 2015"
arxiv: "https://proceedings.mlr.press/v37/schaul15.pdf"
abstract: "Value functions are a core component of reinforcement learning. The main idea is to construct a single function approximator V(s; theta) that estimates the long-term reward from any state s, using parameters θ. In this paper we introduce universal value function approximators (UVFAs) V(s,g;theta) that generalise not just over states s but also over goals g. We develop an efficient technique for supervised learning of UVFAs, by factoring observed values into separate embedding vectors for state and goal, and then learning a mapping from s and g to these factored embedding vectors. We show how this technique may be incorporated into a reinforcement learning algorithm that updates the UVFA solely from observed rewards. Finally, we demonstrate that a UVFA can successfully generalise to previously unseen goals."
draft: false
graphLabel: "UVFA"
graphDescription: "Schaul, Horgan, Gregor & Silver (2015). Generalises the value function from V(s) to V(s,g;theta) — a single network that predicts return for any (state, goal) pair, not just any state. Factors V into separate state and goal embeddings, then a mapping into a shared space, so it can zero-shot generalise to goals never seen during training. The foundational paper behind goal-conditioned RL (HER, contrastive RL, and the entire goal-conditioned-value-function line all build on this factorization). ICML 2015."
graphEdges:
  - target: goal-conditioned-rl
    label: introduces
  - target: value-based
    label: extends
---
