---
title: "SAVGO: Learning State-Action Value Geometry with Cosine Similarity for Continuous Control"
authors: ["Stavros Orfanoudakis", "Pedro P. Vergara"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2605.00787"
abstract: "While representation and similarity learning have improved the sample efficiency of Reinforcement Learning (RL), they are rarely used to shape policy updates directly in the action space. To bridge this gap, a geometry-aware RL algorithm that explicitly incorporates value-based similarity into the policy update, State-Action Value Geometry Optimization (SAVGO), is proposed. In detail, SAVGO learns a joint state-action embedding space in which pairs with similar action-value estimates exhibit high cosine similarity, while dissimilar pairs are mapped to distinct directions. This learned geometry enables the generation of a similarity kernel over candidate actions sampled at each update, allowing policy improvement to be guided directly toward higher-value regions beyond local gradient-based updates. As a result, representation learning, value estimation, and policy optimization are unified within a single geometry-consistent objective, while preserving the scalability of off-policy actor-critic training. The proposed method is evaluated on standard MuJoCo continuous-control benchmarks, demonstrating improvements over strong baselines on challenging high-dimensional tasks. Ablation studies are done to analyze the contributions of value-geometry learning and similarity-based policy updates."
draft: false
graphLabel: "SAVGO"
graphDescription: "Orfanoudakis & Vergara (2026, very recent — verify claims independently). Not a bisimulation-metric paper: builds a state-ACTION similarity kernel from cosine distance between action-value embeddings, then uses that kernel to pick actions directly toward higher-value regions during policy improvement, rather than relying purely on local policy-gradient steps. Shares the family resemblance of 'similarity in representation space tracks similarity in value/behavior' with PSE/bisimulation, but the similarity is between candidate actions for one state, not between states."
graphEdges:
  - target: bisimulation-metric
    label: related
  - target: actor-critic
    label: extends
  - target: mujoco
    label: evaluated on
---
