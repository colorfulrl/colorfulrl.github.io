---
title: "Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation"
authors: ["Yuhuai Wu", "Elman Mansimov", "Shun Liao", "Roger Grosse", "Jimmy Ba"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1708.05144"
abstract: "In this work, we propose to apply trust region optimization to deep reinforcement learning using a recently proposed Kronecker-factored approximation to the curvature. We extend the framework of natural policy gradient and propose to optimize both the actor and the critic using Kronecker-factored approximate curvature (K-FAC) with trust region; hence we call our method Actor Critic using Kronecker-Factored Trust Region (ACKTR). To the best of our knowledge, this is the first scalable trust region natural gradient method for actor-critic methods. It is also a method that learns non-trivial tasks in continuous control as well as discrete control policies directly from raw pixel inputs. We tested our approach across discrete domains in Atari games as well as continuous domains in the MuJoCo environment. With the proposed methods, we are able to achieve higher rewards and a 2- to 3-fold improvement in sample efficiency on average, compared to previous state-of-the-art on-policy actor-critic methods."
draft: false
graphLabel: "ACKTR"
graphDescription: "Wu et al. (2017). Natural policy gradient via K-FAC curvature approximation — first scalable trust-region actor-critic. 2-3× sample efficiency over A2C/PPO on Atari and MuJoCo."
graphEdges:
  - target: actor-critic
    label: extends
  - target: trust-region
    label: uses
  - target: policy-gradient
    label: extends
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
