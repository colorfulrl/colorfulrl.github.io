---
title: "Prioritized Level Replay"
authors: ["Minqi Jiang", "Edward Grefenstette", "Tim Rocktäschel"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2010.03934"
abstract: "Environments with procedurally generated content serve as important benchmarks for testing systematic generalization in deep reinforcement learning. In this setting, each level is an algorithmically created environment instance with a unique configuration of its factors of variation. PLR prioritizes the replay of levels based on a learning potential score (temporal difference error) — replaying levels where the agent still has room to improve, rather than cycling uniformly through new levels. This simple replay curriculum dramatically improves generalization on held-out levels."
graphLabel: "PLR (Jiang 2021)"
graphDescription: "Jiang, Grefenstette & Rocktäschel (2021, ICML). Prioritized Level Replay: maintain a score per procedurally-generated level proportional to the agent's learning potential (TD error); preferentially replay levels with highest potential. Dramatically improves generalization on held-out test levels in MiniGrid, BabyAI, Procgen. Simple, drop-in curriculum for procedurally-generated environments."
draft: false
---
