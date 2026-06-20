---
title: "NovelD: A Simple yet Effective Exploration Criterion"
authors: ["Tianjun Zhang", "Huazhe Xu", "Xiaolong Wang", "Yi Wu", "Kurt Keutzer", "Joseph E. Gonzalez", "Yuandong Tian"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://openreview.net/forum?id=CYUzpnOkFJp"
abstract: "Efficient exploration under sparse rewards remains a key challenge in deep reinforcement learning. Previous exploration methods (e.g., RND) have achieved strong results in multiple hard tasks. However, if there are multiple novel areas to explore, these methods often focus quickly on one without sufficiently trying others (like a depth-wise first search manner). In some scenarios (e.g., four corridor environment in Sec 4.2), we observe they explore in one corridor for long and fail to cover all the states. On the other hand, in theoretical RL, with optimistic initialization and the inverse square root of visitation count as a bonus, it won't suffer from this and explores different novel regions alternatively (like a breadth-first search manner). In this paper, inspired by this, we propose a simple but effective criterion called NovelD by weighting every novel area approximately equally. Our algorithm is very simple but yet shows comparable performance or even outperforms multiple SOTA exploration methods in many hard exploration tasks. Specifically, NovelD solves all the static procedurally-generated tasks in Mini-Grid with just 120M environment steps, without any curriculum learning. In comparison, the previous SOTA only solves 50% of them. NovelD also achieves SOTA on multiple tasks in NetHack, a rogue-like game that contains more challenging procedurally-generated environments. In multiple Atari games (e.g., MonteZuma's Revenge, Venture, Gravitar), NovelD outperforms RND. We analyze NovelD thoroughly in MiniGrid and found that empirically it helps the agent explore the environment more uniformly with a focus on exploring beyond the boundary."
draft: false
graphLabel: "NovelD"
graphDescription: "Zhang et al. (2021). Intrinsic reward = regulated difference of RND novelty between consecutive states, gated by episodic first-visit — weights every novel region roughly equally (breadth-first), fixing RND's depth-first fixation. Solves all static MiniGrid tasks; SOTA on NetHack. NeurIPS 2021."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: curiosity-driven
    label: uses
  - target: episodic-exploration
    label: uses
  - target: rnd
    label: extends
  - target: minigrid
    label: evaluated on
---
