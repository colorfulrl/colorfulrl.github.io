---
title: "Guided Policy Search"
authors: ["Sergey Levine", "Vladlen Koltun"]
year: 2013
venue: "ICML 2013"
arxiv: "https://proceedings.mlr.press/v28/levine13.html"
abstract: "Direct policy search can effectively scale to high-dimensional systems, but complex policies with hundreds of parameters often present a challenge for such methods, requiring numerous samples and often falling into poor local optima. We present a guided policy search algorithm that uses trajectory optimization to direct policy learning and avoid poor local optima. We show how differential dynamic programming can be used to generate suitable guiding samples, and describe a regularized importance sampled policy optimization that incorporates these samples into the policy search. We evaluate the method by learning neural network controllers for planar swimming, hopping, and walking, as well as simulated 3D humanoid running."
draft: false
graphLabel: "Guided Policy Search"
graphDescription: "Levine & Koltun (2013, ICML). Uses trajectory optimization (differential dynamic programming) to generate high-reward 'guiding samples', then folds them into policy search via regularized importance sampling — steering a high-dimensional neural-net policy away from the poor local optima that plague direct policy gradient. The bridge from optimal control to deep policy learning; foundational lineage for end-to-end visuomotor policies."
graphEdges:
  - target: trajectory-optimization
    label: guided by
  - target: policy-gradient
    label: instance of
  - target: model-based-rl
    label: uses model via traj-opt
  - target: imitation-learning
    label: guiding samples as supervision
---
