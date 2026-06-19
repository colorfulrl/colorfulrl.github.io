---
title: "Biased Dreams: Limitations to Epistemic Uncertainty Quantification in Latent Space Models"
authors: ["Julia Berger", "Bernd Frauenknecht", "Sebastian Trimpe", "Bastian Leibe"]
year: 2026
venue: "arXiv 2026"
arxiv: "https://arxiv.org/abs/2604.25416"
abstract: "Model-Based Reinforcement Learning distinguishes between physical dynamics models operating on proprioceptive inputs and latent dynamics models operating on high-dimensional image observations. A prominent latent approach is the Recurrent State Space Model used in the Dreamer family. While epistemic uncertainty quantification to inform exploration and mitigate model exploitation is well established for physical dynamics models, its transfer to latent dynamics models has received limited scrutiny. We empirically demonstrate that latent transitions are biased toward well-represented regions of latent space, exhibiting an attractor behavior that can deviate from true environment dynamics. As a result, discrepancies in environment dynamics may not manifest in latent space, undermining the reliability of epistemic uncertainty estimates. Because these attractors often lie in high-reward regions, latent rollouts systematically overestimate predicted rewards. Our findings highlight key limitations of epistemic uncertainty estimation in latent dynamics models and motivate more critical evaluation of this method."
draft: false
graphLabel: "Biased Dreams"
graphDescription: "Berger et al. (2026). Demonstrates attractor bias in RSSM: latent rollouts drift toward well-represented (high-reward) regions, making epistemic uncertainty estimates unreliable in Dreamer-family models."
graphEdges:
  - target: model-based-rl
    label: critiques
  - target: rssm
    label: analyzes limitations of
  - target: latent-dynamics
    label: critiques
  - target: epistemic-uncertainty
    label: analyzes
  - target: dreamerv1
    label: analyzes
---
