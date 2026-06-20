---
title: "Successor-Predecessor Intrinsic Exploration"
authors: ["Changmin Yu", "Neil Burgess", "Maneesh Sahani", "Samuel J. Gershman"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2305.15277"
abstract: "Exploration is essential in reinforcement learning, particularly in environments where external rewards are sparse. Here we focus on exploration with intrinsic rewards, where the agent transiently augments the external rewards with self-generated intrinsic rewards. Although the study of intrinsic rewards has a long history, existing methods focus on composing the intrinsic reward based on measures of future prospects of states, ignoring the information contained in the retrospective structure of transition sequences. Here we argue that the agent can utilise retrospective information to generate explorative behaviour with structure-awareness, facilitating efficient exploration based on global instead of local information. We propose Successor-Predecessor Intrinsic Exploration (SPIE), an exploration algorithm based on a novel intrinsic reward combining prospective and retrospective information. We show that SPIE yields more efficient and ethologically plausible exploratory behaviour in environments with sparse rewards and bottleneck states than competing methods. We also implement SPIE in deep reinforcement learning agents, and show that the resulting agent achieves stronger empirical performance than existing methods on sparse-reward Atari games."
draft: false
graphLabel: "SPIE"
graphDescription: "Yu et al. (2023). Intrinsic reward combining prospective (successor representation) and retrospective (predecessor representation) structure — using where you came from, not just where you'll go, for globally structure-aware exploration. Strong on sparse-reward, bottleneck-state tasks and Atari. NeurIPS 2023."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: successor-features
    label: uses
  - target: sparse-reward
    label: addresses
  - target: atari
    label: evaluated on
---
