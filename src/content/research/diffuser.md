---
title: "Planning with Diffusion for Flexible Behavior Synthesis"
authors: ["Michael Janner", "Yilun Du", "Joshua B. Tenenbaum", "Sergey Levine"]
year: 2022
venue: "ICML 2022"
arxiv: "https://arxiv.org/abs/2205.09991"
abstract: "Model-based reinforcement learning methods often use learning only for the purpose of estimating an approximate dynamics model, offloading the rest of the decision-making work to classical trajectory optimizers. Although conceptually simple, this combination has a number of empirical shortcomings, suggesting that learned models may not be well-suited to standard trajectory optimization. In this paper, we consider what it would look like to fold as much of the trajectory optimization pipeline as possible into the modeling problem, such that sampling from the model and planning with it become nearly identical. The core of our technical approach lies in a diffusion probabilistic model that plans by iteratively denoising trajectories. We show how classifier-guided sampling and image inpainting can be reinterpreted as coherent planning strategies, explore the unusual and useful properties of diffusion-based planning methods, and demonstrate the effectiveness of our framework in control settings that emphasize long-horizon decision-making and test-time flexibility. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Diffuser"
graphDescription: "Janner et al. (2022). Plans by iteratively denoising entire trajectories with a diffusion model — folds trajectory optimization into the model so sampling = planning. Classifier guidance and inpainting become planning strategies. The founding diffusion-planning paper. ICML 2022."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: offline-rl
    label: evaluated on
  - target: d4rl
    label: evaluated on
---
