---
title: "Accurate and Efficient World Modeling with Masked Latent Transformers"
authors: ["Maxime Burchi", "Radu Timofte"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2507.04075"
abstract: "The Dreamer algorithm has recently obtained remarkable performance across diverse environment domains by training powerful agents with simulated trajectories. However, the compressed nature of its world model's latent space can result in the loss of crucial information, negatively affecting the agent's performance. Recent approaches, such as Delta-IRIS and DIAMOND, address this limitation by training more accurate world models. However, these methods require training agents directly from pixels, which reduces training efficiency and prevents the agent from benefiting from the inner representations learned by the world model. In this work, we propose an alternative approach to world modeling that is both accurate and efficient. We introduce EMERALD (Efficient MaskEd latent tRAnsformer worLD model), a world model using a spatial latent state with MaskGIT predictions to generate accurate trajectories in latent space and improve the agent performance. On the Crafter benchmark, EMERALD achieves new state-of-the-art performance, becoming the first method to surpass human experts performance within 10M environment steps. Our method also succeeds to unlock all 22 Crafter achievements at least once during evaluation."
draft: false
graphLabel: "EMERALD"
graphDescription: "Burchi & Timofte (2025). MaskGIT predictions on spatial latent states — accurate WM in latent space without pixel training. First method to surpass human experts on all 22 Crafter achievements within 10M steps."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: transformer
    label: uses
  - target: crafter
    label: evaluated on
  - target: atari
    label: evaluated on
---
