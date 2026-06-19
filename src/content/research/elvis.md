---
title: "ELVIS: Ensemble-Calibrated Latent Imagination for Long-Horizon Visual MPC"
authors: ["Yurui Du", "Pinhao Song", "Yutong Hu", "R. Detry"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2605.04709"
abstract: "A central challenge of visual control with model-based reinforcement learning (RL) is reliable long-horizon planning: long rollouts with learned latent dynamics exhibit branching futures and multi-modal action-value distributions. In addition, compounding model errors amplified by visual occlusions make deep imagination brittle. We present ELVIS, a latent model predictive controller (MPC) designed to make long-horizon planning practical. ELVIS plans in a Dreamer-style recurrent state space model (RSSM) and replaces standard unimodal model predictive path integral (MPPI) with a Gaussian-mixture MPPI that maintains multiple coherent hypotheses over long horizons, avoiding mode averaging under branching rollouts. In parallel, ELVIS stabilizes deep imagination with a shared uncertainty-aware lambda-return: an ensemble of latent critics defines an upper-confidence-bound (UCB) score that gates a time-varying lambda, adaptively trading off bootstrapping versus look-ahead to limit compounding error during planning. The same return is used both to train an actor-critic prior from imagined rollouts and to score candidate trajectories inside GMM-MPPI, aligning RL objectives with the planner's long-horizon optimization. On fourteen DeepMind Control Suite visual tasks, ELVIS establishes state-of-the-art performance compared with TD-MPC2 and DreamerV3. Finally, ELVIS transfers zero-shot to a real-world sand-spraying task with severe occlusions, improving surface-quality metrics and demonstrating robustness beyond simulation."
draft: false
graphLabel: "ELVIS"
graphDescription: "Du et al. (2026). RSSM + GMM-MPPI (multi-hypothesis planning) + UCB ensemble critics gating λ-return. Addresses mode-averaging and compounding error in long-horizon visual control. SOTA on 14 DMControl tasks."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: rssm
    label: uses
  - target: latent-dynamics
    label: uses
  - target: epistemic-uncertainty
    label: uses
  - target: trajectory-optimization
    label: uses
  - target: dm-control
    label: evaluated on
---
