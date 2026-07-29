---
title: "A Survey of Zero-shot Generalisation in Deep Reinforcement Learning"
authors: ["Robert Kirk", "Amy Zhang", "Edward Grefenstette", "Tim Rocktäschel"]
year: 2021
venue: "arXiv preprint (JAIR 76:201-264, 2023)"
arxiv: "https://arxiv.org/abs/2111.09794"
abstract: "The study of zero-shot generalisation (ZSG) in deep Reinforcement Learning (RL) aims to produce RL algorithms whose policies generalise well to novel unseen situations at deployment time, avoiding overfitting to their training environments. Tackling this is vital if we are to deploy reinforcement learning algorithms in real world scenarios, where the environment will be diverse, dynamic and unpredictable. This survey is an overview of this nascent field. We rely on a unifying formalism and terminology for discussing different ZSG problems, building upon previous works. We go on to categorise existing benchmarks for ZSG, as well as current methods for tackling these problems. Finally, we provide a critical discussion of the current state of the field, including recommendations for future work. Among other conclusions, we argue that taking a purely procedural content generation approach to benchmark design is not conducive to progress in ZSG, we suggest fast online adaptation and tackling RL-specific problems as some areas for future work on methods for ZSG, and we recommend building benchmarks in underexplored problem settings such as offline RL ZSG and reward-function variation."
draft: false
graphLabel: "ZSG Survey"
graphDescription: "Kirk, Zhang, Grefenstette & Rocktäschel (2021/JAIR 2023). Unifies terminology for zero-shot generalization in deep RL (train on a context distribution, test with zero adaptation on held-out contexts — contrast with meta-RL's few-shot adaptation), taxonomizes benchmarks and methods, and argues purely procedural-content-generation benchmarks (Procgen-style) under-serve the field relative to explicit-context benchmarks (CARL-style). The reference map for the whole generalization-RL literature."
graphEdges:
  - target: generalization-rl
    label: surveys
  - target: procgen
    label: discusses
  - target: carl
    label: discusses
---
