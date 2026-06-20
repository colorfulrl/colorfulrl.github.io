---
title: "Truly Proximal Policy Optimization"
authors: ["Yuhui Wang", "Hao He", "Chao Wen", "Xiaoyang Tan"]
year: 2019
venue: "UAI 2019"
arxiv: "https://arxiv.org/abs/1903.07940"
abstract: "Proximal policy optimization (PPO) is one of the most successful deep reinforcement learning methods, achieving state-of-the-art performance across a wide range of challenging tasks. However, its optimization behavior is still far from being fully understood. In this paper, we show that PPO could neither strictly restrict the likelihood ratio as it attempts to do nor enforce a well-defined trust region constraint, which means that it may still suffer from the risk of performance instability. To address this issue, we present an enhanced PPO method, named Trust Region-based PPO with Rollback (TR-PPO-RB). Two critical improvements are made in our method: 1) it adopts a new clipping function to support a rollback behavior to restrict the difference between the new policy and the old one; 2) the triggering condition for clipping is replaced with a trust region-based one, such that optimizing the resulting surrogate objective function provides guaranteed monotonic improvement of the ultimate policy performance. It seems, by adhering more truly to making the algorithm proximal, that our method improves the original PPO on both sample efficiency and performance. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "TR-PPO-RB"
graphDescription: "Wang et al. (2019). Shows PPO's ratio clipping neither bounds the likelihood ratio nor enforces a true trust region; fixes it with a rollback clipping function + a trust-region-based trigger condition with monotonic-improvement guarantees. UAI 2019."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: uses
  - target: actor-critic
    label: uses
  - target: mujoco
    label: evaluated on
---
