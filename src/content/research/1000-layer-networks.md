---
title: "1000 Layer Networks for Self-Supervised RL: Scaling Depth Can Enable New Goal-Reaching Capabilities"
authors: ["Kevin Wang", "Ishaan Javali", "Michał Bortkiewicz", "Tomasz Trzciński", "Benjamin Eysenbach"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2503.14858"
abstract: "Scaling deep learning has driven remarkable progress across fields such as language and vision, yet the role of scale in reinforcement learning (RL) remains less well understood. In this paper, we investigate scaling the depth of self-supervised RL methods, going beyond prior work that has primarily focused on scaling network width or scale in domains outside RL. Studying the goal-conditioned RL setting, we investigate how, if at all, the depth of the value/policy networks affects performance and generalization. Using a contrastive self-supervised RL algorithm as our primary testbed, we find that, despite the conventional wisdom that deeper networks are difficult to optimize, scaling networks to include as many as 1024 layers can result in substantial performance improvements. Our experiments demonstrate that this trend holds across a diverse set of environments spanning locomotion, navigation, and manipulation, with the corresponding gains growing larger in more difficult tasks. On the qualitative side, we show that increasing network depth can enable emergent capabilities absent in shallower networks, such as stitching together prior experience, generalizing to new scenes, and exhibiting more robust behaviors under noise or perturbations. Analyzing the mechanistic basis for these improvements, we find that the benefits of depth may arise from the fact that the input to each additional layer is a residual stream that aggregates information from all previous layers, giving rise to a form of universal approximation that facilitates increasingly refined representations of the state and goal."
draft: false
graphLabel: "1000-Layer Networks"
graphDescription: "Wang et al. (2025). Depth, not just width or data, scales self-supervised (contrastive) goal-conditioned RL: networks up to ~1024 residual-stream layers keep improving performance on locomotion/navigation/manipulation, and depth unlocks qualitatively new capabilities (stitching together disjoint prior experience into unseen paths, generalizing to new scenes, robustness to noise) that shallow networks never show. Extends the contrastive-RL line (Eysenbach group) with a scaling-law lens."
graphEdges:
  - target: contrastive-rl
    label: extends
  - target: goal-conditioned-rl
    label: addresses
  - target: scaling-rl
    label: uses
  - target: mujoco
    label: evaluated on
---
