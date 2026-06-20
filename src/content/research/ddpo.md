---
title: "Training Diffusion Models with Reinforcement Learning"
authors: ["Kevin Black", "Michael Janner", "Yilun Du", "Ilya Kostrikov", "Sergey Levine"]
year: 2024
venue: "ICLR 2024"
arxiv: "https://arxiv.org/abs/2305.13301"
abstract: "Diffusion models are a class of flexible generative models trained with an approximation to the log-likelihood objective. However, most use cases of diffusion models are not concerned with likelihoods, but instead with downstream objectives such as human-perceived image quality or drug effectiveness. In this paper, we investigate reinforcement learning methods for directly optimizing diffusion models for such objectives. We describe how posing denoising as a multi-step decision-making problem enables a class of policy gradient algorithms, which we refer to as denoising diffusion policy optimization (DDPO), that are more effective than alternative reward-weighted likelihood approaches. Empirically, DDPO can adapt text-to-image diffusion models to objectives that are difficult to express via prompting, such as image compressibility, and those derived from human feedback, such as aesthetic quality. Finally, we show that DDPO can improve prompt-image alignment using feedback from a vision-language model without the need for additional data collection or human annotation."
draft: false
graphLabel: "DDPO"
graphDescription: "Black et al. (2024). Denoising Diffusion Policy Optimization — poses denoising as a multi-step MDP and finetunes text-to-image diffusion models with policy gradients to maximize downstream reward (compressibility, aesthetics, VLM-based prompt alignment). The paper that introduced the expanded-MDP view of generative-policy RL. ICLR 2024."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: expanded-mdp
    label: introduces
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: uses
  - target: rlhf
    label: related to
---
