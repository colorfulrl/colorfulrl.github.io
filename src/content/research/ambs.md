---
title: "Learning Generalizable Representations for Reinforcement Learning via Adaptive Meta-learner of Behavioral Similarities"
authors: ["Jianda Chen", "Sinno Jialin Pan"]
year: 2022
venue: "ICLR 2022"
arxiv: "https://arxiv.org/abs/2212.13088"
abstract: "[Note: abstract reconstructed from a secondary-source summary, not fetched verbatim — verify against the original before quoting.] Learns generalizable state representations under the pi-bisimulation metric by first decomposing high-dimensional observations into two separate embeddings, one for reward and one for dynamics. Two meta-learners then measure similarity within each embedding using flexible, non-linear neural distance functions rather than fixing the distance to raw L1/Euclidean, as vanilla bisimulation does. Critically, the WEIGHT combining the reward-difference term and the dynamics-difference term inside the bisimulation update is itself learned adaptively alongside the policy (via SAC), instead of being a fixed hyperparameter. Shows improved robustness to task-irrelevant background and gains over DBC on DM Control, Distracting DM Control, and CARLA."
draft: false
graphLabel: "AMBS"
graphDescription: "Chen & Pan (2022, ICLR). Identifies exactly the assumption this reading list flags as fragile: the fixed weighting between the reward-difference term and the dynamics-difference term in the bisimulation recursion (DBC hardcodes it) should NOT be constant when dynamics vary between tasks/contexts — so AMBS learns that weight with a meta-learner, jointly with the policy. Directly anticipates the later 'Revisiting Bisimulation Metric' (2025) diagnosis of the same fixed-weight brittleness, three years earlier. One of the four papers identified as testing bisimulation under genuine dynamics/context variation rather than just visual distractors."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: generalization-rl
    label: addresses
  - target: contextual-mdp
    label: addresses
  - target: deep-bisimulation-control
    label: extends
---
