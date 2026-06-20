---
title: "EfficientZero V2: Mastering Discrete and Continuous Control with Limited Data"
authors: ["Shengjie Wang", "Shaohuai Liu", "Weirui Ye", "Jiacheng You", "Yang Gao"]
year: 2024
venue: "ICML 2024"
arxiv: "https://arxiv.org/abs/2403.00564"
abstract: "Sample efficiency remains a crucial challenge in applying Reinforcement Learning (RL) to real-world tasks. While recent algorithms have made significant strides in improving sample efficiency, none have achieved consistently superior performance across diverse domains. In this paper, we introduce EfficientZero V2, a general framework designed for sample-efficient RL algorithms. We have expanded the performance of EfficientZero to multiple domains, encompassing both continuous and discrete actions, as well as visual and low-dimensional inputs. With a series of improvements we propose, EfficientZero V2 outperforms the current state-of-the-art (SOTA) by a significant margin in diverse tasks under the limited data setting. EfficientZero V2 exhibits a notable advancement over the prevailing general algorithm, DreamerV3, achieving superior outcomes in 50 of 66 evaluated tasks across diverse benchmarks, such as Atari 100k, Proprio Control, and Vision Control."
draft: false
graphLabel: "EfficientZero V2"
graphDescription: "Wang et al. (2024). Extends EfficientZero (MuZero + self-supervised model) to continuous actions and low-dim inputs with a series of improvements — a general sample-efficient framework beating DreamerV3 on 50/66 tasks across Atari 100k, Proprio, and Vision Control. ICML 2024."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: mcts
    label: uses
  - target: efficientzero
    label: extends
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
