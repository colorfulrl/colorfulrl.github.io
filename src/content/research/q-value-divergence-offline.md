---
title: "Understanding, Predicting and Better Resolving Q-Value Divergence in Offline-RL"
authors: ["Yang Yue", "Rui Lu", "Bingyi Kang", "Shiji Song", "Gao Huang"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2310.04411"
abstract: "The divergence of Q-value estimation has been a prominent issue in offline RL, where the agent has no access to real dynamics. Traditional beliefs attribute this instability to querying out-of-distribution actions when bootstrapping value targets. The authors instead identify a different, so far overlooked cause: self-excitation, where updating the Q-function at one point spuriously raises values elsewhere through the network's generalization. They introduce the Self-Excite Eigenvalue Measure (SEEM), a metric based on the Neural Tangent Kernel, whose theory reliably predicts at an early stage whether training will diverge. They then show LayerNorm effectively avoids divergence without introducing detrimental bias and can be added to modern offline RL methods."
draft: false
graphLabel: "Q-Divergence (SEEM)"
graphDescription: "Yue et al. (2023, NeurIPS). Re-diagnoses offline Q-value divergence as NTK self-excitation rather than OOD actions alone. SEEM, a metric built on the Neural Tangent Kernel, predicts early in training whether it will diverge; adding LayerNorm to the critic avoids divergence without detrimental bias and can be plugged into modern offline RL methods."
graphEdges:
  - target: q-value-divergence
    label: explains
  - target: deadly-triad
    label: instance of
  - target: offline-rl
    label: studies
  - target: cql
    label: contrasts OOD-action view of
---
