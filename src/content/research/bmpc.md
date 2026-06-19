---
title: "Bootstrapped Model Predictive Control"
authors: ["Yuhang Wang", "Hanwei Guo", "Sizhe Wang", "Long Qian", "Xuguang Lan"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2503.18871"
abstract: "Model Predictive Control (MPC) has been demonstrated to be effective in continuous control tasks. When a world model and a value function are available, planning a sequence of actions ahead of time leads to a better policy. Existing methods typically obtain the value function and the corresponding policy in a model-free manner. However, we find that such an approach struggles with complex tasks, resulting in poor policy learning and inaccurate value estimation. To address this problem, we leverage the strengths of MPC itself. In this work, we introduce Bootstrapped Model Predictive Control (BMPC), a novel algorithm that performs policy learning in a bootstrapped manner. BMPC learns a network policy by imitating an MPC expert, and in turn, uses this policy to guide the MPC process. Combined with model-based TD-learning, our policy learning yields better value estimation and further boosts the efficiency of MPC. We also introduce a lazy reanalyze mechanism, which enables computationally efficient imitation learning. Our method achieves superior performance over prior works on diverse continuous control tasks. In particular, on challenging high-dimensional locomotion tasks, BMPC significantly improves data efficiency while also enhancing asymptotic performance and training stability, with comparable training time and smaller network sizes."
draft: false
graphLabel: "BMPC"
graphDescription: "Wang et al. (2025). Bootstrapped loop: policy imitates MPC expert → policy guides MPC → repeat. Lazy reanalyze for efficient imitation. Strong on high-dimensional locomotion with smaller networks."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: trajectory-optimization
    label: uses
  - target: actor-critic
    label: uses
  - target: mujoco
    label: evaluated on
---
