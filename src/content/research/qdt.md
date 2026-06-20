---
title: "Q-learning Decision Transformer: Leveraging Dynamic Programming for Conditional Sequence Modelling in Offline RL"
authors: ["Taku Yamagata", "Ahmed Khalil", "Raul Santos-Rodriguez"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2209.03993"
abstract: "Recent works have shown that tackling offline reinforcement learning (RL) with a conditional policy produces promising results. The Decision Transformer (DT) combines the conditional policy approach and a transformer architecture, showing competitive performance against several benchmarks. However, DT lacks stitching ability -- one of the critical abilities for offline RL to learn the optimal policy from sub-optimal trajectories. This issue becomes particularly significant when the offline dataset only contains sub-optimal trajectories. On the other hand, the conventional RL approaches based on Dynamic Programming (such as Q-learning) do not have the same limitation; however, they suffer from unstable learning behaviours, especially when they rely on function approximation in an off-policy learning setting. In this paper, we propose the Q-learning Decision Transformer (QDT) to address the shortcomings of DT by leveraging the benefits of Dynamic Programming (Q-learning). It utilises the Dynamic Programming results to relabel the return-to-go in the training data to then train the DT with the relabelled data. Our approach efficiently exploits the benefits of these two approaches and compensates for each other's shortcomings to achieve better performance. We empirically show these in both simple toy environments and the more complex D4RL benchmark, showing competitive performance gains."
draft: false
graphLabel: "QDT"
graphDescription: "Yamagata et al. (2023). Fixes Decision Transformer's lack of 'stitching' by using Q-learning (dynamic programming) to relabel the return-to-go in the dataset, then training the DT on relabelled data — combines sequence modeling with the value-propagation that lets it recover optimal policies from sub-optimal trajectories. ICML 2023."
graphEdges:
  - target: offline-rl
    label: based on
  - target: sequence-modeling
    label: uses
  - target: decision-transformer
    label: extends
  - target: value-based
    label: uses
  - target: transformer
    label: uses
  - target: d4rl
    label: evaluated on
---
