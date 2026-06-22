---
title: "Plasticity Loss in Deep Reinforcement Learning: A Survey"
authors: ["Timo Klein", "Christoph Luther", "Manus McAuliffe", "Lukas Miklautz", "Claudia Plant", "Sebastian Tschiatschek"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2411.04832"
abstract: "Plasticity refers to a network's ability to adapt to changing data distributions, which is crucial for the successful training of deep reinforcement learning agents. Loss of plasticity causes performance plateaus and contributes to scaling failures, overestimation bias, and insufficient exploration. To deepen the understanding of plasticity loss, we propose a unified definition, examine its drivers and pathologies, and organize over 50 mitigation strategies into the first comprehensive taxonomy of the field. Our analysis shows gaps in current evaluation practices and reveals that general regularization techniques often outperform domain-specific interventions. Future research should prioritize understanding the mechanisms underlying plasticity loss."
draft: false
graphLabel: "Plasticity Loss Survey (Klein 2024)"
graphDescription: "Klein, Luther, McAuliffe, Miklautz, Plant & Tschiatschek (2024). The field-defining survey of plasticity loss in deep RL: a unified definition, a taxonomy of drivers (non-stationarity, high replay ratio, large-mean regression) and pathologies (dormant neurons, rank collapse, parameter-norm growth, gradient issues), and ~50 mitigations across 12 categories. Key finding: general-purpose regularizers (LayerNorm, SpectralNorm) tend to beat domain-specific plasticity interventions. The entry-point map."
graphEdges:
  - target: plasticity
    label: surveys
---
