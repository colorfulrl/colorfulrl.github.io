---
title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion"
authors: ["Cheng Chi", "Zhenjia Xu", "Siyuan Feng", "Eric Cousineau", "Yilun Du", "Benjamin Burchfiel", "Russ Tedrake", "Shuran Song"]
year: 2023
venue: "RSS 2023"
arxiv: "https://arxiv.org/abs/2303.04137"
abstract: "This paper introduces Diffusion Policy, a new way of generating robot behavior by representing a robot's visuomotor policy as a conditional denoising diffusion process. We benchmark Diffusion Policy across 12 different tasks from 4 different robot manipulation benchmarks and find that it consistently outperforms existing state-of-the-art robot learning methods with an average improvement of 46.9%. Diffusion Policy learns the gradient of the action-distribution score function and iteratively optimizes with respect to this gradient field during inference via a series of stochastic Langevin dynamics steps. We find that the diffusion formulation yields powerful advantages when used for robot policies, including gracefully handling multimodal action distributions, being suitable for high-dimensional action spaces, and exhibiting impressive training stability. To fully unlock the potential of diffusion policies for visuomotor policy learning on physical robots, this paper presents a set of key technical contributions including the incorporation of receding horizon control, visual conditioning, and the time-series diffusion transformer. We hope this work will help motivate a new generation of policy learning techniques that are able to leverage the powerful generative modeling of diffusion models. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Diffusion Policy"
graphDescription: "Chi et al. (2023). Represents a visuomotor policy as a conditional denoising diffusion process over action sequences — handles multimodal actions, high-dim action spaces, and trains stably. +46.9% over prior methods across 12 manipulation tasks. The standard diffusion-BC method. RSS 2023."
graphEdges:
  - target: diffusion-model
    label: uses
  - target: behavior-cloning
    label: extends
  - target: imitation-learning
    label: based on
  - target: transformer
    label: uses
---
