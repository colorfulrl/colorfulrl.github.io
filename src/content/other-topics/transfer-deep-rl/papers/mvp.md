---
title: "Masked Visual Pre-training for Motor Control"
authors: ["Tete Xiao", "Ilija Radosavovic", "Trevor Darrell", "Jitendra Malik"]
year: 2022
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2203.06173"
abstract: "This paper shows that self-supervised visual pre-training from real-world images is effective for learning motor control tasks from pixels. We first train the visual representations by masked modeling of natural images. Then we freeze the visual encoder and train the motor control policy with RL. We find that this approach outperforms state-of-the-art methods for visual motor control by a large margin on both locomotion and manipulation tasks, using standard RL algorithms (PPO, SAC) without any task-specific architectural changes."
graphLabel: "MVP (Xiao 2022)"
graphDescription: "Xiao, Radosavovic, Darrell & Malik (2022). Applies masked autoencoding (MAE-style) pre-training on natural images → freeze the ViT encoder → train RL policy on top with standard SAC/PPO. Surprisingly strong: outperforms domain-specific pre-training on DMControl locomotion + manipulation. Shows that internet-scale image SSL transfers to motor control without video or robot data."
draft: false
---
