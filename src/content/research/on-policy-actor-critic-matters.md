---
title: "What Matters for On-Policy Deep Actor-Critic Methods? A Large-Scale Study"
authors: ["Marcin Andrychowicz", "Anton Raichuk", "Piotr Stanczyk", "Manu Orsini", "Sertan Girgin", "Raphaël Marinier", "Léonard Hussenot", "Matthieu Geist", "Olivier Pietquin", "Marcin Michalski", "Sylvain Gelly", "Olivier Bachem"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://openreview.net/forum?id=nIAxjsniDzg"
abstract: "[Note: abstract reconstructed from secondary-source summaries, not fetched verbatim — OpenReview blocked automated access; verify against the original before quoting.] In recent years, reinforcement learning has made impressive progress, partly due to algorithmic improvements but also due to a large number of lower- and higher-level design choices that are often not addressed as thoroughly as the algorithms themselves. This paper implements more than 50 such design choices (network architecture, normalization, advantage estimation, entropy regularization, learning-rate schedules, and more) in a single unified on-policy deep actor-critic codebase, and trains over 250,000 agents across five continuous-control environments of varying complexity to isolate which choices actually matter and by how much, producing practical, evidence-backed recommendations for training on-policy actor-critic agents."
draft: false
graphLabel: "On-Policy AC Matters"
graphDescription: "Andrychowicz et al. (2021, ICLR). The systematic, large-scale sequel to 'Deep RL that Matters': instead of anecdotal variability, runs a controlled study of 50+ implementation choices across 250k+ trained agents to rank which tricks actually move the needle for on-policy actor-critic methods, and by how much. The reference to consult before deciding which 'undocumented trick' in a DBC-style reimplementation is worth keeping versus dropping."
graphEdges:
  - target: rigorous-evaluation
    label: uses
  - target: actor-critic
    label: studies
  - target: mujoco
    label: evaluated on
---
