---
title: "Model-based Policy Optimization under Approximate Bayesian Inference"
authors: ["Chaoqi Wang", "Yuxin Chen", "Kevin Murphy"]
year: 2024
venue: "AISTATS 2024"
arxiv: "https://proceedings.mlr.press/v238/wang24g.html"
abstract: "Model-based reinforcement learning algorithms that combine model-based planning with posterior sampling can achieve a principled balance between exploration and exploitation. Posterior sampling reinforcement learning (PSRL) is a conceptually elegant approach, but its theoretical guarantees rely on exact posterior inference, which is intractable in complex domains. In this work, we show that naively applying PSRL with approximate inference can be suboptimal. Our key contribution is an improved posterior factorization for the policy that drops the conditional independence assumption between the policy and the data given the model. This yields a general algorithmic framework for PSRL under approximate inference, along with a practical instantiation. On a range of benchmarks including the DeepMind Control Suite, OpenAI Gym, and Meta-World, our method delivers substantial improvements over prior methods in both dense- and sparse-reward settings. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Bayesian MBPO"
graphDescription: "Wang, Chen & Murphy (2024). Posterior-sampling model-based RL when inference is only approximate — shows naive PSRL is then suboptimal, and proposes a policy posterior factorization that drops the policy-data conditional independence assumption. Improves dense and sparse-reward control. AISTATS 2024."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: epistemic-uncertainty
    label: uses
  - target: exploration
    label: uses
  - target: dm-control
    label: evaluated on
---
