---
title: "A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
authors: ["Stéphane Ross", "Geoffrey J. Gordon", "J. Andrew Bagnell"]
year: 2011
venue: "AISTATS 2011"
arxiv: "https://arxiv.org/abs/1011.0686"
abstract: "Sequential prediction problems such as imitation learning, where future observations depend on previous predictions (actions), violate the common i.i.d. assumptions made in statistical learning. This leads to poor performance in theory and often in practice. Some recent approaches provide stronger guarantees in this setting, but remain somewhat unsatisfactory as they train either non-stationary or stochastic policies and require a large number of iterations. In this paper, we propose a new iterative algorithm, which trains a stationary deterministic policy, that can be seen as a no regret algorithm in an online learning setting. We show that any such no regret algorithm, combined with additional reduction assumptions, must find a policy with good performance under the distribution of observations it induces in such sequential settings. We demonstrate that this new approach outperforms previous approaches on two challenging imitation learning problems and a benchmark sequence labeling problem."
draft: false
graphLabel: "DAgger"
graphDescription: "Ross, Gordon & Bagnell (2011). Dataset Aggregation — fixes behavior cloning's compounding error by iteratively querying the expert on states the learner actually visits, framed as no-regret online learning. The canonical interactive imitation algorithm. AISTATS 2011."
graphEdges:
  - target: imitation-learning
    label: based on
  - target: behavior-cloning
    label: addresses
  - target: credit-assignment
    label: addresses
---
