---
title: "COPlanner: Plan to Roll Out Conservatively but to Explore Optimistically for Model-Based RL"
authors: ["Xiyao Wang", "Ruijie Zheng", "Yanchao Sun", "Ruonan Jia", "Wichayaporn Wongkamjan", "Huazhe Xu", "Furong Huang"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2310.07220"
abstract: "Dyna-style model-based reinforcement learning contains two phases: model rollouts to generate sample for policy learning and real environment exploration using current policy for dynamics model learning. However, due to the complex real-world environment, it is inevitable to learn an imperfect dynamics model with model prediction error, which can further mislead policy learning and result in sub-optimal solutions. In this paper, we propose COPlanner, a planning-driven framework for model-based methods to address the inaccurately learned dynamics model problem with conservative model rollouts and optimistic environment exploration. COPlanner leverages an uncertainty-aware policy-guided model predictive control (UP-MPC) component to plan for multi-step uncertainty estimation. This estimated uncertainty then serves as a penalty during model rollouts and as a bonus during real environment exploration respectively, to choose actions. Consequently, COPlanner can avoid model uncertain regions through conservative model rollouts, thereby alleviating the influence of model error. Simultaneously, it explores high-reward model uncertain regions to reduce model error actively through optimistic real environment exploration. COPlanner is a plug-and-play framework that can be applied to any dyna-style model-based methods. Experimental results on a series of proprioceptive and visual continuous control tasks demonstrate that both sample efficiency and asymptotic performance of strong model-based methods are significantly improved combined with COPlanner."
draft: false
graphLabel: "COPlanner"
graphDescription: "Wang et al. (2023). Dual uncertainty policy: uncertainty as penalty in model rollouts (conservative) + bonus in real exploration (optimistic). Plug-and-play for any Dyna-style MBRL."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: epistemic-uncertainty
    label: uses
  - target: trajectory-optimization
    label: uses
  - target: dm-control
    label: evaluated on
---
