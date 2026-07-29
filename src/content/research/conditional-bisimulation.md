---
title: "Generalization Across Observation Shifts in Reinforcement Learning"
authors: ["Anuj Mahajan", "Amy Zhang"]
year: 2023
venue: "arXiv preprint (also under review as \"Conditional Bisimulation for Generalization in Reinforcement Learning\", OpenReview)"
arxiv: "https://arxiv.org/abs/2306.04595"
abstract: "Learning policies which are robust to changes in the environment are critical for real world deployment of Reinforcement Learning agents. They are also necessary for achieving good generalization across environment shifts. We focus on bisimulation metrics, which provide a powerful means for abstracting task relevant components of the observation and learning a succinct representation space for training the agent using reinforcement learning. In this work, we extend the bisimulation framework to also account for context dependent observation shifts. Specifically, we focus on the simulator based learning setting and use alternate observations to learn a representation space which is invariant to observation shifts using a novel bisimulation based objective. This allows us to deploy the agent to varying observation settings during test time and generalize to unseen scenarios. We further provide novel theoretical bounds for simulator fidelity and performance transfer guarantees for using a learnt policy to unseen shifts. Empirical analysis on the high-dimensional image based control domains demonstrates the efficacy of our method."
draft: false
graphLabel: "Conditional Bisimulation"
graphDescription: "Mahajan & Zhang (2023). Extends bisimulation to CONTEXT-dependent observation shift specifically: uses a simulator to generate alternate observations (same underlying context) and trains a bisimulation objective so the representation is invariant across them, with theoretical simulator-fidelity and transfer bounds. Note: the construction is about OBSERVATION-level shift (rendering/appearance variants of a fixed context) via a simulator generating alternates — closest published work to a 'contextual bisimulation' but not confirmed to test continuous physics-PARAMETER shift (CARL's gravity/friction/length axis) the way this reading list's research question needs; read the full method section before assuming it covers dynamics shift, not just appearance shift."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: generalization-rl
    label: addresses
  - target: contextual-mdp
    label: addresses
---
