---
title: "Imitating Human Behaviour with Diffusion Models"
authors: ["Tim Pearce", "Tabish Rashid", "Anssi Kanervisto", "Dave Bignell", "Mingfei Sun", "Raluca Georgescu", "Sergio Valcarcel Macua", "Shan Zheng Tan", "Ida Momennejad", "Katja Hofmann", "Sam Devlin"]
year: 2023
venue: "ICLR 2023"
arxiv: "https://arxiv.org/abs/2301.10677"
abstract: "Diffusion models have emerged as powerful generative models in the text-to-image domain. This paper studies their application as observation-to-action models for imitating human behaviour in sequential environments. Human behaviour is stochastic and multimodal, with structured correlations between action dimensions. Meanwhile, standard modelling choices in behaviour cloning are limited in their expressiveness and may introduce bias into the cloned policy. We begin by pointing out the limitations of these choices. We then propose that diffusion models are an excellent fit for imitating human behaviour, since they learn an expressive distribution over the joint action space. We introduce several innovations to make diffusion models suitable for sequential environments; designing suitable architectures, investigating the role of guidance, and developing reliable sampling strategies. Experimentally, diffusion models closely match human demonstrations in a simulated robotic control task and a modern 3D gaming environment."
draft: false
graphLabel: "Diffusion BC"
graphDescription: "Pearce et al. (2023). Applies diffusion models as observation-to-action behavior cloning for human demonstrations — captures the stochastic, multimodal, correlated structure of human behaviour that unimodal BC misses. Contributes architectures, guidance, and sampling strategies for sequential settings. ICLR 2023."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: behavior-cloning
    label: extends
  - target: imitation-learning
    label: based on
---
