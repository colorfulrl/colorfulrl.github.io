---
title: "Simple Policy Optimization"
authors: ["Zhengpeng Xie", "Qiang Zhang", "Fan Yang", "Marco Hutter", "Renjing Xu"]
year: 2025
venue: "ICML 2025"
arxiv: "https://openreview.net/forum?id=SG8Yx1FyeU"
abstract: "Model-free reinforcement learning algorithms have seen remarkable progress, but key challenges remain. Trust Region Policy Optimization (TRPO) is known for ensuring monotonic policy improvement through conservative updates within a trust region, backed by strong theoretical guarantees. However, its reliance on complex second-order optimization limits its practical efficiency. Proximal Policy Optimization (PPO) addresses this by simplifying TRPO's approach using ratio clipping, improving efficiency but sacrificing some theoretical robustness. This raises a natural question: Can we combine the strengths of both methods? In this paper, we introduce Simple Policy Optimization (SPO), a novel unconstrained first-order algorithm. By slightly modifying the policy loss used in PPO, SPO can achieve the best of both worlds. Our new objective improves upon ratio clipping, offering stronger theoretical properties and better constraining the probability ratio within the trust region. Empirical results demonstrate that SPO outperforms PPO with a simple implementation, particularly for training large, complex network architectures end-to-end."
draft: false
graphLabel: "SPO"
graphDescription: "Xie et al. (2025). Simple Policy Optimization — an unconstrained first-order objective that, with a small change to PPO's loss, constrains the probability ratio within the trust region more tightly than ratio clipping, gaining stronger theory while staying simple. Scales to large networks. ICML 2025."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: trust-region
    label: uses
  - target: actor-critic
    label: uses
---
