---
title: "Contrastive Behavioral Similarity Embeddings for Generalization in Reinforcement Learning"
authors: ["Rishabh Agarwal", "Marlos C. Machado", "Pablo Samuel Castro", "Marc G. Bellemare"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://arxiv.org/abs/2101.05265"
abstract: "Reinforcement learning methods trained on few environments rarely learn policies that generalize to unseen environments. To improve generalization, we incorporate the inherent sequential structure in reinforcement learning into the representation learning process. This approach is orthogonal to recent approaches, which rarely exploit this structure explicitly. Specifically, we introduce a theoretically motivated policy similarity metric (PSM) for measuring behavioral similarity between states. PSM assigns high similarity to states for which the optimal policies in those states as well as in future states are similar. We also present a contrastive representation learning procedure to embed any state similarity metric, which we instantiate with PSM to obtain policy similarity embeddings (PSEs). We demonstrate that PSEs improve generalization on diverse benchmarks, including LQR with spurious correlations, a jumping task from pixels, and Distracting DM Control Suite."
draft: false
graphLabel: "PSE"
graphDescription: "Agarwal, Machado, Castro & Bellemare (2021, ICLR). Swaps bisimulation's 'same reward + same next-state distribution' for a policy similarity metric (PSM): two states are close if their optimal policies now AND at all future states agree — a behavioral, policy-centric relaxation of bisimulation that survives reward-irrelevant visual variation better. Embeds PSM via contrastive learning (policy similarity embeddings). Directly targets zero-shot generalization (Procgen-style distractors), not just sample efficiency."
graphEdges:
  - target: bisimulation-metric
    label: variant of
  - target: generalization-rl
    label: addresses
  - target: contrastive-rl
    label: uses
  - target: procgen
    label: evaluated on
---
