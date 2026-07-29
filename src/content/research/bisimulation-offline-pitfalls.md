---
title: "Understanding and Addressing the Pitfalls of Bisimulation-based Representations in Offline Reinforcement Learning"
authors: ["Hongyu Zang", "Xin Li", "Leiji Zhang", "Yang Liu", "Baigui Sun", "Riashat Islam", "Remi Tachet des Combes", "Romain Laroche"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2310.17139"
abstract: "While bisimulation-based approaches hold promise for learning robust state representations for Reinforcement Learning (RL) tasks, their efficacy in offline RL tasks has not been up to par. In some cases, the learned representations may not even be as effective as the raw state. Through detailed analysis, we attribute the shortcomings of bisimulation methods to two limitations: failure in out-of-sample data, and instabilities caused by the strong coupling of reward with dynamics. Additionally, we identify that the strength of the reward scale is closely related to the model's performance. Building on these insights, we propose incorporating expectile regression into value/representation learning to address the challenge of out-of-sample data, and reward scaling to stabilize the training of bisimulation-based objectives. We validate our theoretical findings and proposed technique through empirical experiments, demonstrating that these techniques enable stable training, achieving significant performance improvements across a variety of environments and tasks, including notoriously difficult tasks like Humanoid, in offline RL, out-performing well-known model-free and model-based methods."
draft: false
graphLabel: "Bisimulation Offline Pitfalls"
graphDescription: "Zang, Li, Zhang, Liu, Sun, Islam, Tachet des Combes & Laroche (2023, NeurIPS). Diagnoses why bisimulation reps (MICo, SimSR) can underperform raw states in offline RL: missing/out-of-sample transitions in a fixed dataset break the recursive next-state term, and reward scale is tightly coupled to training stability. Fix: expectile regression (handles out-of-sample data without querying it) + reward scaling. Directly relevant if a CARL baseline is ever trained offline rather than online — a known, not-a-bug failure mode of this whole method family."
graphEdges:
  - target: bisimulation-metric
    label: addresses
  - target: offline-rl
    label: addresses
  - target: d4rl
    label: evaluated on
---
