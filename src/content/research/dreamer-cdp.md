---
title: "Dreamer-CDP: Improving Reconstruction-free World Models Via Continuous Deterministic Representation Prediction"
authors: ["Michael Hauri", "Friedemann Zenke"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2603.07083"
abstract: "Model-based reinforcement learning (MBRL) agents operating in high-dimensional observation spaces, such as Dreamer, rely on learning abstract representations for effective planning and control. Existing approaches typically employ reconstruction-based objectives in the observation space, which can render representations sensitive to task-irrelevant details. Recent alternatives trade reconstruction for auxiliary action prediction heads or view augmentation strategies, but perform worse in the Crafter environment than reconstruction-based methods. We close this gap between Dreamer and reconstruction-free models by introducing a JEPA-style predictor defined on continuous, deterministic representations. Our method matches Dreamer's performance on Crafter, demonstrating effective world model learning on this benchmark without reconstruction objectives."
draft: false
graphLabel: "Dreamer-CDP"
graphDescription: "Hauri & Zenke (2026). Reconstruction-free Dreamer via a JEPA-style predictor on continuous, deterministic representations (CDP) — avoids both pixel reconstruction and the auxiliary action-prediction / augmentation tricks of prior decoder-free models. Closes the Crafter gap, matching Dreamer without any reconstruction objective."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: decoder-free
    label: instance of
  - target: dreamerv3
    label: extends
  - target: latent-dynamics
    label: uses
  - target: crafter
    label: evaluated on
---
