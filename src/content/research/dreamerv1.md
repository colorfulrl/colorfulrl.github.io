---
title: "Dream to Control: Learning Behaviors by Latent Imagination"
authors: ["Danijar Hafner", "Timothy Lillicrap", "Jimmy Ba", "Mohammad Norouzi"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/1912.01603"
abstract: "DreamerV1 learns long-horizon behaviors from images purely by latent imagination. It trains an actor-critic entirely inside the world model's imagined trajectories, then uses the learned behaviors in the real environment."
draft: false
graphLabel: "DreamerV1"
graphDescription: "Hafner et al. (2020). Combines PlaNet's RSSM with actor-critic trained fully in imagination — no env rollouts for policy updates."
graphEdges:
  - target: planet
    label: extends
  - target: actor-critic
    label: uses
---
