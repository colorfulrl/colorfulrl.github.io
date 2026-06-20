---
title: "Benchmarking Safe Exploration in Deep Reinforcement Learning"
authors: ["Alex Ray", "Joshua Achiam", "Dario Amodei"]
year: 2019
venue: "OpenAI Technical Report"
arxiv: "https://cdn.openai.com/safexp-short.pdf"
abstract: "Reinforcement learning (RL) agents need to explore their environments in order to learn optimal policies by trial and error. In many environments, safety is a critical concern and certain errors are unacceptable: for example, robotics systems that interact with humans should never cause injury to the humans while exploring. While it is currently typical to train RL agents mostly or entirely in simulation, where safety concerns are minimal, we anticipate that challenges in simulating the complexities of the real world (such as human-AI interactions) will cause a shift towards training RL agents directly in the real world, where safety concerns are paramount. Consequently we take the position that safe exploration should be viewed as a critical focus area for RL research, and in this work we make three contributions to advance the study of safe exploration. First, building on a wide range of prior work on safe reinforcement learning, we propose to standardize constrained RL as the main formalism for safe exploration. Second, we present the Safety Gym benchmark suite, a new slate of high-dimensional continuous control environments for measuring research progress on constrained RL. Finally, we benchmark several constrained deep RL algorithms on Safety Gym environments to establish baselines that future work can build on"
draft: false
graphLabel: "Safety Gym (Benchmark)"
graphDescription: "Ray, Achiam & Amodei (2019). The OpenAI report introducing Safety Gym — constrained robot-navigation tasks separating reward from a safety-cost signal (CMDP). Establishes standardized baselines (PPO/TRPO-Lagrangian, CPO) and constraint-violation evaluation protocols. The standard Safe RL testbed."
graphEdges:
  - target: safe-rl
    label: based on
  - target: constrained-mdp
    label: based on
  - target: safety-gym
    label: introduces
  - target: cpo
    label: benchmarks
---
