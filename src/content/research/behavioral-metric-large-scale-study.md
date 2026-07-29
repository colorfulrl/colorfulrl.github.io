---
title: "Understanding Behavioral Metric Learning: A Large-Scale Study on Distracting Reinforcement Learning Environments"
authors: ["Ziyan Luo", "Tianwei Ni", "Pierre-Luc Bacon", "Doina Precup", "Xujie Si"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2506.00563"
abstract: "A key approach to state abstraction is approximating behavioral metrics (notably, bisimulation metrics) in the observation space and embedding these learned distances in the representation space. While promising for robustness to task-irrelevant noise, as shown in prior work, accurately estimating these metrics remains challenging, requiring various design choices that create gaps between theory and practice. Prior evaluations focus mainly on final returns, leaving the quality of learned metrics and the source of performance gains unclear. To systematically assess how metric learning works in deep reinforcement learning (RL), we evaluate five recent approaches, unified conceptually as isometric embeddings with varying design choices. We benchmark them with baselines across 20 state-based and 14 pixel-based tasks, spanning 370 task configurations with diverse noise settings. Beyond final returns, we introduce the evaluation of a denoising factor to quantify the encoder's ability to filter distractions. To further isolate the effect of metric learning, we propose and evaluate an isolated metric estimation setting, in which the encoder is influenced solely by the metric loss. Finally, we release an open-source, modular codebase to improve reproducibility and support future research on metric learning in deep RL."
draft: false
graphLabel: "Behavioral Metric Study"
graphDescription: "Luo, Ni, Bacon, Precup & Si (2025). The systematic audit this whole reading list needed: unifies DBC/MICo/SimSR/PSE-style methods as 'isometric embeddings' differing only in design choices, benchmarks all of them across 370 configs (20 state + 14 pixel tasks x noise settings), and — crucially — evaluates a denoising factor (does the encoder actually filter distractors) instead of only final return, plus an isolated-metric-estimation setting that removes the RL objective's confounding influence. Exactly the rigorous-evaluation lens (Rliable-style) applied specifically to the bisimulation-metric family. Read before choosing which variant (DBC vs MICo vs SimSR vs PSE) to implement for CARL."
graphEdges:
  - target: bisimulation-metric
    label: evaluates
  - target: rigorous-evaluation
    label: uses
  - target: dm-control
    label: evaluated on
---
