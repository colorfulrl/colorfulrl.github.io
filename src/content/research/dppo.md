---
title: "Diffusion Policy Policy Optimization"
authors: ["Allen Z. Ren", "Justin Lidard", "Lars L. Ankile", "Anthony Simeonov", "Pulkit Agrawal", "Anirudha Majumdar", "Benjamin Burchfiel", "Hongkai Dai", "Max Simchowitz"]
year: 2025
venue: "ICLR 2025"
arxiv: "https://arxiv.org/abs/2409.00588"
abstract: "We introduce Diffusion Policy Policy Optimization, DPPO, an algorithmic framework including best practices for fine-tuning diffusion-based policies (e.g. Diffusion Policy) in continuous control and robot learning tasks using the policy gradient (PG) method from reinforcement learning (RL). PG methods are ubiquitous in training RL policies with other policy parameterizations; nevertheless, they had been conjectured to be less efficient for diffusion-based policies. Surprisingly, we show that DPPO achieves the strongest overall performance and efficiency for fine-tuning in common benchmarks compared to other RL methods for diffusion-based policies and also compared to PG fine-tuning of other policy parameterizations. Through experimental investigation, we find that DPPO takes advantage of unique synergies between RL fine-tuning and the diffusion parameterization, leading to structured and on-manifold exploration, stable training, and strong policy robustness. We further demonstrate the strengths of DPPO in a range of realistic settings, including simulated robotic tasks with pixel observations, and via zero-shot deployment of simulation-trained policies on robot hardware in a long-horizon, multi-stage manipulation task."
draft: false
graphLabel: "DPPO"
graphDescription: "Ren et al. (2025). Fine-tunes a behavior-cloned Diffusion Policy for control via PPO on a two-layer MDP (environment MDP outer, denoising MDP inner). Shows policy gradient — thought inefficient for diffusion policies — actually yields structured on-manifold exploration, stable training, and strong sim-to-real. ICLR 2025."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: diffusion-policy
    label: extends
  - target: expanded-mdp
    label: uses
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: uses
  - target: mujoco
    label: evaluated on
---
