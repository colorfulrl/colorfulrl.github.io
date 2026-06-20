---
title: "Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning"
authors: ["Tianhe Yu", "Deirdre Quillen", "Zhanpeng He", "Ryan Julian", "Karol Hausman", "Chelsea Finn", "Sergey Levine"]
year: 2019
venue: "CoRL 2019"
arxiv: "https://arxiv.org/abs/1910.10897"
abstract: "Meta-reinforcement learning algorithms can enable robots to acquire new skills much more quickly, by leveraging prior experience to learn how to learn. However, much of the current research on meta-reinforcement learning focuses on task distributions that are very narrow. For example, a commonly used meta-reinforcement learning benchmark uses different running velocities for a simulated robot as different tasks. When policies are meta-trained on such narrow task distributions, they cannot possibly generalize to more quickly acquire entirely new tasks. Therefore, if the aim of these methods is to enable faster acquisition of entirely new behaviors, we must evaluate them on task distributions that are sufficiently broad to enable generalization to new behaviors. In this paper, we propose an open-source simulated benchmark for meta-reinforcement learning and multi-task learning consisting of 50 distinct robotic manipulation tasks. Our aim is to make it possible to develop algorithms that generalize to accelerate the acquisition of entirely new, held-out tasks. We evaluate 7 state-of-the-art meta-reinforcement learning and multi-task learning algorithms on these tasks. Surprisingly, while each task and its variations (e.g., with different object positions) can be learned with reasonable success, these algorithms struggle to learn with multiple tasks at the same time, even with as few as ten distinct training tasks. Our analysis along with these results reveals that there is currently no method capable of solving Meta-World, motivating the development of new meta-reinforcement learning and multi-task learning algorithms that can be conveniently and openly evaluated on this benchmark. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Meta-World (Benchmark)"
graphDescription: "Yu et al. (2019). Introduces Meta-World — 50 distinct Sawyer-arm manipulation tasks with ML1/ML10/ML45 (meta-RL) and MT10/MT50 (multi-task) splits, designed for broad task distributions. Shows no existing method solves it. The standard meta-RL manipulation benchmark. CoRL 2019."
graphEdges:
  - target: meta-rl
    label: based on
  - target: meta-world
    label: introduces
  - target: mujoco
    label: uses
---
