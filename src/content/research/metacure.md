---
title: "MetaCURE: Meta Reinforcement Learning with Empowerment-Driven Exploration"
authors: ["Jin Zhang", "Jianhao Wang", "Hao Hu", "Tong Chen", "Yingfeng Chen", "Changjie Fan", "Chongjie Zhang"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2006.08170"
abstract: "Meta reinforcement learning (meta-RL) extracts knowledge from previous tasks and achieves fast adaptation to new tasks. Despite recent progress, efficient exploration in meta-RL remains a key challenge in sparse-reward tasks, as it requires quickly finding informative task-relevant experiences in both meta-training and adaptation. To address this challenge, we explicitly model an exploration policy learning problem for meta-RL, which is separated from exploitation policy learning, and introduce a novel empowerment-driven exploration objective, which aims to maximize information gain for task identification. We derive a corresponding intrinsic reward and develop a new off-policy meta-RL framework, which efficiently learns separate context-aware exploration and exploitation policies by sharing the knowledge of task inference. Experimental evaluation shows that our meta-RL method significantly outperforms state-of-the-art baselines on various sparse-reward MuJoCo locomotion tasks and more complex sparse-reward Meta-World tasks."
draft: false
graphLabel: "MetaCURE"
graphDescription: "Zhang et al. (2021). Separates exploration from exploitation in meta-RL with an empowerment-driven exploration objective that maximizes information gain for task identification — yielding an intrinsic reward and an off-policy framework sharing task inference. Strong on sparse-reward MuJoCo and Meta-World. ICML 2021."
graphEdges:
  - target: meta-rl
    label: based on
  - target: meta-exploration
    label: uses
  - target: intrinsic-motivation
    label: uses
  - target: task-inference
    label: uses
  - target: meta-world
    label: evaluated on
---
