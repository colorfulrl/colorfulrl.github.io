---
title: "Temporal Difference Learning for Model Predictive Control"
authors: ["Nicklas Hansen", "Xiaolong Wang", "Hao Su"]
year: 2022
venue: "ICML 2022"
arxiv: "https://arxiv.org/abs/2203.04955"
abstract: "Data-driven model predictive control has two key advantages over model-free methods: a potential for improved sample efficiency through model learning, and better performance as computational budget for planning increases. However, it is both costly to plan over long horizons and challenging to obtain an accurate model of the environment. In this work, we combine the strengths of model-free and model-based methods. We use a learned task-oriented latent dynamics model for local trajectory optimization over a short horizon, and use a learned terminal value function to estimate long-term return, both of which are learned jointly by temporal difference learning. Our method, TD-MPC, achieves superior sample efficiency and asymptotic performance over prior work on both state and image-based continuous control tasks from DMControl and Meta-World."
draft: false
graphLabel: "TD-MPC"
graphDescription: "Hansen et al. (2022). Latent MPC + TD-learned terminal value function; combines short-horizon trajectory optimization with long-term value estimation. Precursor to TD-MPC2."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: introduces
  - target: temporal-difference
    label: uses
  - target: latent-dynamics
    label: uses
  - target: dm-control
    label: evaluated on
---
