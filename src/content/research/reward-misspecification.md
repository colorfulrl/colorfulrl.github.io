---
title: "The Effects of Reward Misspecification: Mapping and Mitigating Misaligned Models"
authors: ["Alexander Pan", "Kush Bhatia", "Jacob Steinhardt"]
year: 2022
venue: "ICLR 2022"
arxiv: "https://arxiv.org/abs/2201.03544"
abstract: "Reward hacking -- where RL agents exploit gaps in misspecified reward functions -- has been widely observed, but not yet systematically studied. To understand how reward hacking arises, we construct four RL environments with misspecified rewards. We investigate reward hacking as a function of agent capabilities: model capacity, action space resolution, observation space noise, and training time. More capable agents often exploit reward misspecifications, achieving higher proxy reward and lower true reward than less capable agents. Moreover, we find instances of phase transitions: capability thresholds at which the agent's behavior qualitatively shifts, leading to a sharp decrease in the true reward. Such phase transitions pose challenges to monitoring the safety of ML systems. To address this, we propose an anomaly detection task for aberrant policies and offer several baseline detectors. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Reward Misspecification"
graphDescription: "Pan, Bhatia & Steinhardt (2022). Systematically studies reward hacking — more capable agents exploit misspecified proxy rewards more, with 'phase transitions' where true reward sharply collapses past a capability threshold. Proposes anomaly detection for aberrant policies. ICLR 2022."
graphEdges:
  - target: reward-hacking
    label: studies
  - target: inverse-rl
    label: motivates
  - target: rlhf
    label: motivates
---
