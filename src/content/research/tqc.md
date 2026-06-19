---
title: "Controlling Overestimation Bias with Truncated Mixture of Continuous Distributional Quantile Critics"
authors: ["Arsenii Kuznetsov", "Pavel Shvechikov", "Alexander Grishin", "Dmitry Vetrov"]
year: 2020
venue: "ICML 2020"
arxiv: "https://arxiv.org/abs/2005.04269"
abstract: "The overestimation bias is one of the major impediments to accurate off-policy learning. This paper investigates a novel way to alleviate the overestimation bias in a continuous control setting. Our method---Truncated Quantile Critics, TQC,---blends three ideas: distributional representation of a critic, truncation of critics prediction, and ensembling of multiple critics. Distributional representation and truncation allow for arbitrary granular overestimation control, while ensembling provides additional score improvements. TQC outperforms the current state of the art on all environments from the continuous control benchmark suite, demonstrating 25% improvement on the most challenging Humanoid environment."
draft: false
graphLabel: "TQC"
graphDescription: "Kuznetsov et al. (2020). Truncated Quantile Critics: distributional critic + drop top quantiles + ensemble — controls overestimation bias precisely. SOTA on continuous control benchmark suite."
graphEdges:
  - target: distributional-rl
    label: extends
  - target: actor-critic
    label: uses
  - target: qr-dqn
    label: extends
  - target: maximum-entropy-rl
    label: related to
---
