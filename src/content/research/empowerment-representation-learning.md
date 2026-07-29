---
title: "Learning to Perceive the World Through Control: Empowerment-Based Representation Learning"
authors: ["Mahsa Bastankhah", "Sophie Broderick", "Benjamin Eysenbach"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2605.30656"
abstract: "In many practical reinforcement learning environments, observations are far higher-dimensional than the variables that matter for control. In this work, we ask: can we learn representations that capture only control-relevant features of the environment? We study this question through the empowerment objective, which maximizes an agent's influence over the environment and is widely used for unsupervised skill learning. We show that empowerment agents induce two distinct representations -- forward and backward -- that capture complementary aspects of the state, and both of which are invariant to control-irrelevant features. Thus, empowerment maximization leads agents to learn an implicit, control-centric model of the world. Our analysis highlights the importance of learning representations through interaction rather than from passive datasets: interaction aimed at maximizing control is essential for learning useful invariance properties, a perspective that aligns closely with the causal learning literature."
draft: false
graphLabel: "Empowerment Representations"
graphDescription: "Bastankhah, Broderick & Eysenbach (2026, very recent — verify claims independently). Ties VIC's original empowerment objective (maximize I(option; termination state), i.e. an agent's influence over its environment) directly to control-centric representation learning: shows empowerment-maximizing agents automatically induce forward/backward representations invariant to control-irrelevant features, with NO bisimulation-style reward or dynamics-distance loss needed. Argues learning these invariances requires acting to maximize control, not passive observation — connects back to the causal-invariance framing DBC itself uses. A reward-free, empowerment-driven alternative route to the same 'discard task-irrelevant detail' goal bisimulation methods pursue."
graphEdges:
  - target: vic
    label: extends
  - target: skill-discovery
    label: uses
  - target: causal-rl
    label: related
  - target: bisimulation-metric
    label: alternative to
---
