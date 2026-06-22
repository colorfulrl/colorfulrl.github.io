---
title: "Deep Reinforcement Learning with Plasticity Injection"
authors: ["Evgenii Nikishin", "Junhyuk Oh", "Georg Ostrovski", "Clare Lyle", "Razvan Pascanu", "Will Dabney", "André Barreto"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2305.15555"
abstract: "A growing body of evidence suggests that neural networks employed in deep reinforcement learning (RL) gradually lose their plasticity, the ability to learn from new data; however, the analysis and mitigation of this phenomenon is hampered by the complex relationship between plasticity, exploration, and performance in RL. This paper introduces plasticity injection, a minimalistic intervention that increases the network plasticity without changing the number of trainable parameters or biasing the predictions. The diagnostic value of plasticity injection is that, by construction, it leaves predictions unchanged at injection time while restoring trainability — so a performance jump after injection confirms that plasticity loss was the bottleneck."
draft: false
graphLabel: "Plasticity Injection (Nikishin 2023)"
graphDescription: "Nikishin, Oh, Ostrovski, Lyle, Pascanu, Dabney & Barreto (2023, NeurIPS). A minimalistic head reset that restores trainability WITHOUT changing parameter count or perturbing current predictions. Doubles as a diagnostic: a performance jump right after injection proves plasticity loss was the bottleneck. Sits between targeted and non-targeted resets."
graphEdges:
  - target: plasticity
    label: mitigates
  - target: atari
    label: evaluated on
---
