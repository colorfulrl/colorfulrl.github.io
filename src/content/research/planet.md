---
title: "Learning Latent Dynamics for Planning from Pixels"
authors: ["Danijar Hafner", "Timothy Lillicrap", "Ian Fischer", "Ruben Villegas", "David Ha", "Honglak Lee", "James Davidson"]
year: 2019
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1811.04551"
abstract: "PlaNet learns a latent dynamics model from pixel observations and plans with it using the cross-entropy method. The model uses a Recurrent State Space Model (RSSM) that combines deterministic and stochastic transitions, enabling accurate long-horizon predictions."
draft: false
graphLabel: "PlaNet"
graphDescription: "Hafner et al. (2019). Introduces RSSM and pure latent-space CEM planning — no policy gradients needed."
graphEdges:
  - target: world-models-paper
    label: inspired by
  - target: rssm
    label: uses
---
