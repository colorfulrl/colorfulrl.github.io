---
title: "Behavior-Regularized Diffusion Policy Optimization for Offline Reinforcement Learning"
authors: ["Chen-Xiao Gao", "Chenyang Wu", "Mingjun Cao", "Chenjun Xiao", "Yang Yu", "Zongzhang Zhang"]
year: 2025
venue: "ICML 2025"
arxiv: "https://arxiv.org/abs/2502.04778"
abstract: "Behavior regularization, which constrains the policy to stay close to some behavior policy, is widely used in offline reinforcement learning (RL) to manage the risk of hazardous exploitation of unseen actions. Nevertheless, existing literature on behavior-regularized RL primarily focuses on explicit policy parameterizations, such as Gaussian policies. Consequently, it remains unclear how to extend this framework to more advanced policy parameterizations, such as diffusion models. In this paper, we introduce BDPO, a principled behavior-regularized RL framework tailored for diffusion-based policies, thereby combining the expressive power of diffusion policies and the robustness provided by regularization. The key ingredient of our method is to calculate the Kullback-Leibler (KL) regularization analytically as the accumulated discrepancies in reverse-time transition kernels along the diffusion trajectory. By integrating the regularization, we develop an efficient two-time-scale actor-critic RL algorithm that produces the optimal policy while respecting the behavior constraint. Comprehensive evaluations conducted on synthetic 2D tasks and continuous control tasks from the D4RL benchmark validate its effectiveness and superior performance."
draft: false
graphLabel: "BDPO"
graphDescription: "Gao et al. (2025). Extends behavior-regularized offline RL to diffusion policies — computes the KL-to-behavior penalty analytically as accumulated discrepancies along the reverse diffusion path (pathwise KL), and solves it with a two-time-scale actor-critic that keeps value functions at intermediate diffusion steps (bi-level value). SOTA on D4RL. ICML 2025."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: offline-rl
    label: based on
  - target: expanded-mdp
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: value-based
    label: uses
  - target: diffusion-ql
    label: related to
  - target: d4rl
    label: evaluated on
---
