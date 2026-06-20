---
title: "RLeXplore: Accelerating Research in Intrinsically-Motivated Reinforcement Learning"
authors: ["Mingqi Yuan", "Roger Creus Castanyer", "Bo Li", "Xin Jin", "Wenjun Zeng", "Glen Berseth"]
year: 2025
venue: "TMLR 2025"
arxiv: "https://arxiv.org/abs/2405.19548"
abstract: "Extrinsic rewards can effectively guide reinforcement learning (RL) agents in specific tasks. However, extrinsic rewards frequently fall short in complex environments due to the significant human effort needed for their design and annotation. This limitation underscores the necessity for intrinsic rewards, which offer auxiliary and dense signals and can enable agents to learn in an unsupervised manner. Although various intrinsic reward formulations have been proposed, their implementation and optimization details are insufficiently explored and lack standardization, thereby hindering research progress. To address this gap, we introduce RLeXplore, a unified, highly modularized, and plug-and-play framework offering reliable experimental standards for intrinsically-motivated RL. RLeXplore implements eight state-of-the-art intrinsic reward algorithms and provides an in-depth study of the implementation details that influence their performance, establishing standardized baselines and best practices, with open-source code and documentation. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "RLeXplore"
graphDescription: "Yuan et al. (2025). A unified, modular library implementing 8 state-of-the-art intrinsic-reward algorithms with standardized baselines — studies the implementation details that make or break intrinsic motivation. A reproducibility toolkit spanning count-based, curiosity, and state-entropy methods. TMLR 2025."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: count-based-exploration
    label: implements
  - target: curiosity-driven
    label: implements
  - target: state-entropy
    label: implements
---
