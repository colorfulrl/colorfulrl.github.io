---
title: "Learning Action-based Representations Using Invariance"
authors: ["Max Rudolph", "Caleb Chuck", "Kevin Black", "Misha Lvovsky", "Scott Niekum", "Amy Zhang"]
year: 2024
venue: "RLC 2024"
arxiv: "https://arxiv.org/abs/2403.16369"
abstract: "Robust reinforcement learning agents using high-dimensional observations must be able to identify relevant state features amidst many exogeneous distractors. A representation that captures controllability identifies these state elements by determining what affects agent control. While methods such as inverse dynamics and mutual information capture controllability for a limited number of timesteps, capturing long-horizon elements remains a challenging problem. Myopic controllability can capture the moment right before an agent crashes into a wall, but not the control-relevance of the wall while the agent is still some distance away. To address this we introduce action-bisimulation encoding, a method inspired by the bisimulation invariance pseudometric, that extends single-step controllability with a recursive invariance constraint. By doing this, action-bisimulation learns a multi-step controllability metric that smoothly discounts distant state features that are relevant for control. We demonstrate that action-bisimulation pretraining on reward-free, uniformly random data improves sample efficiency in several environments, including a photorealistic 3D simulation domain, Habitat. Additionally, we provide theoretical analysis and qualitative results demonstrating the information captured by action-bisimulation."
draft: false
graphLabel: "Action-Bisimulation"
graphDescription: "Rudolph, Chuck, Black, Lvovsky, Niekum & Zhang (2024, RLC). Removes the one assumption every prior bisimulation method (DBC, MICo, SimSR) still needed — a reward signal. Swaps 'same reward, same next-state distribution' for 'same controllability, same next-state distribution' (controllability estimated via inverse dynamics), then applies the SAME recursive bisimulation invariance constraint so the metric captures multi-step (not just myopic single-step) controllability. Trains on reward-free, uniformly random data. Reward-free bisimulation — directly relevant if a CARL baseline needs pretraining before any task reward is defined."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: unsupervised-rl
    label: uses
---
