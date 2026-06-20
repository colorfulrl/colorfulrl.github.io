---
title: "State Entropy Maximization with Random Encoders for Efficient Exploration"
authors: ["Younggyo Seo", "Lili Chen", "Jinwoo Shin", "Honglak Lee", "Pieter Abbeel", "Kimin Lee"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2102.09430"
abstract: "Recent exploration methods have proven to be a recipe for improving sample-efficiency in deep reinforcement learning (RL). However, efficient exploration in high-dimensional observation spaces still remains a challenge. This paper presents Random Encoders for Efficient Exploration (RE3), an exploration method that utilizes state entropy as an intrinsic reward. In order to estimate state entropy in environments with high-dimensional observations, we utilize a k-nearest neighbor entropy estimator in the low-dimensional representation space of a convolutional encoder. In particular, we find that the state entropy can be estimated in a stable and compute-efficient manner by utilizing a randomly initialized encoder, which is fixed throughout training. Our experiments show that RE3 significantly improves the sample-efficiency of both model-free and model-based RL methods on locomotion and navigation tasks from DeepMind Control Suite and MiniGrid benchmarks. We also show that RE3 allows learning diverse behaviors without extrinsic rewards, effectively improving sample-efficiency in downstream tasks."
draft: false
graphLabel: "RE3"
graphDescription: "Seo et al. (2021). Maximizes state entropy as intrinsic reward via a k-NN estimator in the latent space of a FIXED random encoder — no representation learning needed for the bonus, making it stable and cheap. Improves both model-free and model-based RL. ICML 2021."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: state-entropy
    label: uses
  - target: dm-control
    label: evaluated on
  - target: minigrid
    label: evaluated on
---
