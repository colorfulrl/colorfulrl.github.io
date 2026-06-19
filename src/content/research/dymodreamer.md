---
title: "DyMoDreamer: World Modeling with Dynamic Modulation"
authors: ["Boxuan Zhang", "Runqing Wang", "Wei Xiao", "Weipu Zhang", "Jian Sun", "Gao Huang", "Jie Chen", "Gang Wang"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2509.24804"
abstract: "A critical bottleneck in deep reinforcement learning (DRL) is sample inefficiency, as training high-performance agents often demands extensive environmental interactions. Model-based reinforcement learning (MBRL) mitigates this by building world models that simulate environmental dynamics and generate synthetic experience, improving sample efficiency. However, conventional world models process observations holistically, failing to decouple dynamic objects and temporal features from static backgrounds. This approach is computationally inefficient, especially for visual tasks where dynamic objects significantly influence rewards and decision-making performance. To address this, we introduce DyMoDreamer, a novel MBRL algorithm that incorporates a dynamic modulation mechanism to improve the extraction of dynamic features and enrich the temporal information. DyMoDreamer employs differential observations derived from a novel inter-frame differencing mask, explicitly encoding object-level motion cues and temporal dynamics. Dynamic modulation is modeled as stochastic categorical distributions and integrated into a recurrent state-space model (RSSM), enhancing the model's focus on reward-relevant dynamics. Experiments demonstrate that DyMoDreamer sets a new state-of-the-art on the Atari 100k benchmark with a 156.6% mean human-normalized score, establishes a new record of 832 on the DeepMind Visual Control Suite, and gains a 9.5% performance improvement after 1M steps on the Crafter benchmark."
draft: false
graphLabel: "DyMoDreamer"
graphDescription: "Zhang et al. (2025). Inter-frame differencing mask decouples dynamic objects from static background → stochastic categorical modulation injected into RSSM. SOTA Atari 100k 156.6% HNS, DMControl 832, Crafter +9.5%."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: rssm
    label: extends
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
