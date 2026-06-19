---
title: "Mastering Complex Control in MOBA Games with Deep Reinforcement Learning"
authors: ["Deheng Ye", "Zhao Liu", "Mingfei Sun", "Bei Shi", "Peilin Zhao", "Hao Wu", "Hongsheng Yu", "Shaojie Yang", "Xipeng Wu", "Qingwei Guo", "Qiaobo Chen", "Yinyuting Yin", "Hao Zhang", "Tengfei Shi", "Liang Wang", "Qiang Fu", "Wei Yang", "Lanxiao Huang"]
year: 2020
venue: "AAAI 2020"
arxiv: "https://arxiv.org/abs/1912.09729"
abstract: "We study the reinforcement learning problem of complex action control in the Multi-player Online Battle Arena (MOBA) 1v1 games. This problem involves far more complicated state and action spaces than those of traditional 1v1 games, such as Go and Atari series, which makes it very difficult to search any policies with human-level performance. In this paper, we present a deep reinforcement learning framework to tackle this problem from the perspectives of both system and algorithm. Our system is of low coupling and high scalability, which enables efficient explorations at large scale. Our algorithm includes several novel strategies, including control dependency decoupling, action mask, target attention, and dual-clip PPO, with which our proposed actor-critic network can be effectively trained in our system. Tested on the MOBA game Honor of Kings, our AI agent, called Tencent Solo, can defeat top professional human players in full 1v1 games."
draft: false
graphLabel: "Dual-Clip PPO"
graphDescription: "Ye et al. (2020). Adds a second clip c to PPO for negative-advantage steps — prevents the surrogate loss from pulling the policy toward bad actions when the probability ratio deviates far from 1. Proposed in the context of Honor of Kings MOBA agent (AAAI 2020)."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: extends
  - target: actor-critic
    label: uses
---
