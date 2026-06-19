---
title: "Proximal Policy Optimization Algorithms"
authors: ["John Schulman", "Filip Wolski", "Prafulla Dhariwal", "Alec Radford", "Oleg Klimov"]
year: 2017
venue: "arXiv"
arxiv: "https://arxiv.org/abs/1707.06347"
abstract: "We propose a new family of policy gradient methods for reinforcement learning, which alternate between sampling data through interaction with the environment, and optimizing a `surrogate` objective function using stochastic gradient ascent. Whereas standard policy gradient methods perform one gradient update per data sample, we propose a novel objective function that enables multiple epochs of minibatch updates. The new methods, which we call proximal policy optimization (PPO), have some of the benefits of trust region policy optimization (TRPO), but they are much simpler to implement, more general, and have better sample complexity (empirically). Our experiments test PPO on a collection of benchmark tasks, including simulated robotic locomotion and Atari game playing, and we show that PPO outperforms other online policy gradient methods, and overall strikes a favorable balance between sample complexity, simplicity, and wall-time."
draft: false
graphLabel: "PPO"
graphDescription: "Schulman et al. (2017). Clipped surrogate objective for stable policy updates. Simple, reliable, now the backbone of most RLHF systems."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: approximates
  - target: trpo
    label: simplifies
  - target: actor-critic
    label: uses
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
