---
title: "Pre-training Contextualized World Models with In-the-wild Videos for Reinforcement Learning"
authors: ["Jialong Wu", "Haoyu Ma", "Chao Deng", "Mingsheng Long"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2305.18499"
abstract: "Unsupervised pre-training methods utilizing large and diverse datasets have achieved tremendous success across a range of domains. Recent work has investigated such unsupervised pre-training methods for model-based reinforcement learning (MBRL) but is limited to domain-specific or simulated data. In this paper, we study the problem of pre-training world models with abundant in-the-wild videos for efficient learning of downstream visual control tasks. However, in-the-wild videos are complicated with various contextual factors, such as intricate backgrounds and textured appearance, which precludes a world model from extracting shared world knowledge to generalize better. To tackle this issue, we introduce Contextualized World Models (ContextWM) that explicitly separate context and dynamics modeling to overcome the complexity and diversity of in-the-wild videos and facilitate knowledge transfer between distinct scenes. Specifically, a contextualized extension of the latent dynamics model is elaborately realized by incorporating a context encoder to retain contextual information and empower the image decoder, which encourages the latent dynamics model to concentrate on essential temporal variations. Our experiments show that in-the-wild video pre-training equipped with ContextWM can significantly improve the sample efficiency of MBRL in various domains, including robotic manipulation, locomotion, and autonomous driving."
draft: false
graphLabel: "ContextWM"
graphDescription: "Wu et al. (2023). Pretrains WM on in-the-wild videos by separating context encoder (background) from dynamics model (temporal changes) — transfers world knowledge to downstream control tasks. NeurIPS 2023."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: rssm
    label: extends
  - target: dm-control
    label: evaluated on
---
