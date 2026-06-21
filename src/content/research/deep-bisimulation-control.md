---
title: "Learning Invariant Representations for Reinforcement Learning without Reconstruction"
authors: ["Amy Zhang", "Rowan McAllister", "Roberto Calandra", "Yarin Gal", "Sergey Levine"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://arxiv.org/abs/2006.10742"
abstract: "We study how representation learning can accelerate reinforcement learning from rich observations, such as images, without relying either on domain knowledge or pixel-reconstruction. Our goal is to learn representations that both provide for effective downstream control and invariance to task-irrelevant details. Bisimulation metrics quantify behavioral similarity between states in continuous MDPs, which we propose using to learn robust latent representations which encode only the task-relevant information from observations. Our method trains encoders such that distances in latent space equal bisimulation distances in state space. We demonstrate the effectiveness of our method at disregarding task-irrelevant information using modified visual MuJoCo tasks, where the background is replaced with moving distractors and natural videos, while achieving SOTA performance. We also test a first-person highway driving task where our method learns invariance to clouds, weather, and time of day. Finally, we provide generalization results drawn from properties of bisimulation metrics, and links to causal inference."
draft: false
graphLabel: "Deep Bisimulation (DBC)"
graphDescription: "Zhang, McAllister, Calandra, Gal & Levine (2021, ICLR). Deep Bisimulation for Control: learns latent representations whose distances equal bisimulation distances — encoding only behaviorally-relevant state, discarding task-irrelevant visual detail WITHOUT reconstruction. Robust to distractors/backgrounds; the paper draws explicit links to causal feature selection. A causal-invariance route to decoder-free representation."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: latent-dynamics
    label: uses
---
