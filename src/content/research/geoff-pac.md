---
title: "Generalized Off-Policy Actor-Critic"
authors: ["Shangtong Zhang", "Wendelin Boehmer", "Shimon Whiteson"]
year: 2019
venue: "NeurIPS 2019"
arxiv: "https://arxiv.org/abs/1903.11329"
abstract: "We propose a new objective, the counterfactual objective, unifying existing objectives for off-policy policy gradient algorithms in the continuing reinforcement learning (RL) setting. Compared to the commonly used excursion objective, which can be misleading about the performance of the target policy when deployed, our new objective better predicts such performance. We prove the Generalized Off-Policy Policy Gradient Theorem to compute the policy gradient of the counterfactual objective and use an emphatic approach to get an unbiased sample from this policy gradient, yielding the Generalized Off-Policy Actor-Critic (Geoff-PAC) algorithm. We demonstrate the merits of Geoff-PAC over existing algorithms in Mujoco robot simulation tasks, the first empirical success of emphatic algorithms in prevailing deep RL benchmarks."
draft: false
graphLabel: "Geoff-PAC"
graphDescription: "Zhang et al. (2019). Proposes the counterfactual objective for off-policy policy gradients — better reflects deployed target-policy performance than the excursion objective. Uses emphatic weighting for unbiased gradient. NeurIPS 2019."
graphEdges:
  - target: actor-critic
    label: uses
  - target: policy-gradient
    label: extends
  - target: mujoco
    label: evaluated on
---
