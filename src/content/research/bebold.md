---
title: "BeBold: Exploration Beyond the Boundary of Explored Regions"
authors: ["Tianjun Zhang", "Huazhe Xu", "Xiaolong Wang", "Yi Wu", "Kurt Keutzer", "Joseph E. Gonzalez", "Yuandong Tian"]
year: 2020
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2012.08621"
abstract: "Efficient exploration under sparse rewards remains a key challenge in deep reinforcement learning. To guide exploration, previous work makes extensive use of intrinsic reward (IR). There are many heuristics for IR, including visitation counts, curiosity, and state-difference. In this paper, we analyze the pros and cons of each method and propose the regulated difference of inverse visitation counts as a simple but effective criterion for IR. The criterion helps the agent explore Beyond the Boundary of explored regions and mitigates common issues in count-based methods, such as short-sightedness and detachment. The resulting method, BeBold, solves the 12 most challenging procedurally-generated tasks in MiniGrid with just 120M environment steps, without any curriculum learning. In comparison, the previous SoTA only solves 50% of the tasks. BeBold also achieves SoTA on multiple tasks in NetHack, a popular rogue-like game that contains more challenging procedurally-generated environments."
draft: false
graphLabel: "BeBold"
graphDescription: "Zhang et al. (2020). Intrinsic reward = regulated difference of inverse visitation counts between consecutive states, gated episodically — pushes the agent just past the boundary of explored regions, fixing count-based short-sightedness and detachment. Direct precursor to NovelD. Solves hard MiniGrid tasks."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: count-based-exploration
    label: uses
  - target: episodic-exploration
    label: uses
  - target: minigrid
    label: evaluated on
---
