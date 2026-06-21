---
title: "VIP: Towards Universal Visual Reward and Representation via Value-Implicit Pre-Training"
authors: ["Yecheng Jason Ma", "Shagun Sodhani", "Dinesh Jayaraman", "Osbert Bastani", "Vikash Kumar", "Amy Zhang"]
year: 2023
venue: "ICLR 2023"
arxiv: "https://arxiv.org/abs/2210.00030"
abstract: "Reward and representation learning are two long-standing challenges for learning an expanding set of robot manipulation skills from sensory observations. Given the inherent cost and scarcity of in-domain, task-specific robot data, learning from large, diverse, offline human videos has emerged as a promising path towards acquiring a generally useful visual representation for control. VIP pre-trains a value function implicitly from human videos via an offline contrastive objective, yielding both a universal visual representation AND a zero-shot reward signal for downstream RL — without any environment interaction."
graphLabel: "VIP (Ma 2023)"
graphDescription: "Ma, Sodhani, Jayaraman, Bastani, Kumar & Zhang (2023, ICLR Spotlight). Pre-trains a VALUE FUNCTION (not just features) from offline human video via contrastive objectives — the implicit value doubles as a zero-shot reward signal AND a visual representation. Downstream tasks need no reward engineering: specify goal image, use VIP distances as reward. Extends R3M from representation to reward+representation."
draft: false
---
