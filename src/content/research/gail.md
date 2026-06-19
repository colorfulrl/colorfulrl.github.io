---
title: "Generative Adversarial Imitation Learning"
authors: ["Jonathan Ho", "Stefano Ermon"]
year: 2016
venue: "NeurIPS 2016"
arxiv: "https://arxiv.org/abs/1606.03476"
abstract: "Consider learning a policy from example expert behavior, without interaction with the expert or access to reinforcement signal. One approach is to recover the expert's cost function with inverse reinforcement learning, then extract a policy from that cost function with reinforcement learning. This approach is indirect and can be slow. We propose a new general framework for directly extracting a policy from data, as if it were obtained by reinforcement learning following inverse reinforcement learning. We show that a certain instantiation of our framework draws an analogy between imitation learning and generative adversarial networks, from which we derive a model-free imitation learning algorithm that obtains significant performance gains over existing model-free methods in imitating complex behaviors in large, high-dimensional environments."
draft: false
graphLabel: "GAIL"
graphDescription: "Ho & Ermon (2016). Casts imitation learning as a GAN: a discriminator distinguishes expert from policy trajectories while the policy (trained with TRPO) fools it — extracts a policy directly without the costly IRL-then-RL loop. NeurIPS 2016."
graphEdges:
  - target: imitation-learning
    label: based on
  - target: inverse-rl
    label: uses
  - target: trust-region
    label: uses
  - target: mujoco
    label: evaluated on
---
