---
title: "Revisiting Bisimulation Metric for Robust Representations in Reinforcement Learning"
authors: ["Leiji Zhang", "Zeyu Wang", "Xin Li", "Yao-Hui Li"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2507.18519"
abstract: "Bisimulation metric has long been regarded as an effective control-related representation learning technique in various reinforcement learning tasks. However, in this paper, we identify two main issues with the conventional bisimulation metric: 1) an inability to represent certain distinctive scenarios, and 2) a reliance on predefined weights for differences in rewards and subsequent states during recursive updates. We find that the first issue arises from an imprecise definition of the reward gap, whereas the second issue stems from overlooking the varying importance of reward difference and next-state distinctions across different training stages and task settings. To address these issues, by introducing a measure for state-action pairs, we propose a revised bisimulation metric that features a more precise definition of reward gap and novel update operators with adaptive coefficient. We also offer theoretical guarantees of convergence for our proposed metric and its improved representation distinctiveness. In addition to our rigorous theoretical analysis, we conduct extensive experiments on two representative benchmarks, DeepMind Control and Meta-World, demonstrating the effectiveness of our approach."
draft: false
graphLabel: "Revisiting Bisimulation"
graphDescription: "Zhang, Wang, Li & Li (2025). Fixes the fixed-weight assumption baked into the classic bisimulation recursion (reward-gap weight vs. next-state-gap weight is hardcoded, e.g. DBC's fixed c1/c2) by making it adaptive per training stage/task, plus a more precise reward-gap definition via a state-action similarity measure, with new convergence guarantees. One of several 2025 papers converging on the same diagnosis as MICo/SimSR before it: the ORIGINAL bisimulation recursion is under-specified/unstable in ways that keep needing patches."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: dm-control
    label: evaluated on
  - target: meta-world
    label: evaluated on
---
