---
title: "SLOPE: Optimistic Potential Landscape Shaping for Model-based Reinforcement Learning"
authors: ["Yao-Hui Li", "Zeyu Wang", "Xin Li", "Wei Pang", "Yingfang Yuan", "Zhengkun Chen", "Boya Zhang", "Riashat Islam", "Alex Lamb", "Yonggang Zhang"]
year: 2026
venue: "arXiv 2026"
arxiv: "https://arxiv.org/abs/2602.03201"
abstract: "Model-based reinforcement learning (MBRL) is sample-efficient but struggles in sparse reward settings. A critical bottleneck arises from the lack of informative gradients in sparse settings, where standard reward models often yield flat landscapes that struggle to guide planning. To address this challenge, we propose Shaping Landscapes with Optimistic Potential Estimates (SLOPE), a novel framework that shifts reward modeling from predicting sparse scalars to constructing informative potential landscapes. SLOPE employs optimistic distributional regression to estimate high-confidence upper bounds, which amplifies rare success signals and ensures sufficient exploration gradients. Evaluations on 30+ tasks across 5 benchmarks and real-world robotic deployments, demonstrate that SLOPE consistently outperforms leading baselines in fully sparse, semi-sparse, and dense rewards."
draft: false
graphLabel: "SLOPE"
graphDescription: "Li et al. (2026). Replaces sparse reward modeling with potential landscape construction via optimistic distributional regression — amplifies rare success signals to guide MBRL planning."
graphEdges:
  - target: model-based-rl
    label: improves
  - target: exploration
    label: addresses via potential shaping
  - target: distributional-rl
    label: uses
  - target: trajectory-optimization
    label: improves planning for
---
