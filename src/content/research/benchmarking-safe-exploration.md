---
title: "Benchmarking Safe Exploration in Deep Reinforcement Learning"
authors: ["Alex Ray", "Joshua Achiam", "Dario Amodei"]
year: 2019
venue: "OpenAI Technical Report"
arxiv: "https://cdn.openai.com/safexp-short.pdf"
abstract: "Safe exploration is a key requirement for deploying reinforcement learning agents in the real world, where unsafe actions during training can cause irreversible harm. This work introduces Safety Gym, a suite of high-dimensional continuous-control environments for measuring progress on constrained RL, in which agents (Point, Car, and Doggo robots) must accomplish navigation tasks (Goal, Button, Push) while limiting the cost incurred from entering hazards, pressing wrong buttons, or contacting fragile objects. The benchmark separates the reward (task performance) from a cost signal (safety violations), framing the problem as a Constrained MDP. The report establishes standardized baselines by evaluating unconstrained and constrained policy-optimization algorithms — PPO, TRPO, their Lagrangian penalty variants, and Constrained Policy Optimization (CPO) — and proposes evaluation protocols that report both return and constraint-violation rate, enabling principled comparison of safe-exploration methods. [Note: abstract summarized from the technical report, pending verbatim text.]"
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
