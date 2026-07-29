---
title: "Contrastive Representations for Temporal Reasoning"
authors: ["Alicja Ziarko", "Michal Bortkiewicz", "Michal Zawalski", "Benjamin Eysenbach", "Piotr Milos"]
year: 2025
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2508.13113"
abstract: "In classical AI, perception relies on learning state-based representations, while planning, which can be thought of as temporal reasoning over action sequences, is typically achieved through search. We study whether such reasoning can instead emerge from representations that capture both perceptual and temporal structure. We show that standard temporal contrastive learning, despite its popularity, often fails to capture temporal structure due to its reliance on spurious features. To address this, we introduce Contrastive Representations for Temporal Reasoning (CRTR), a method that uses a negative sampling scheme to provably remove these spurious features and facilitate temporal reasoning. CRTR achieves strong results on a suite of relational reasoning tasks, and, notably, outperforms search-based oracle methods on tasks such as scheduling and predicting the effects of removing an item from a plan, sometimes by up to 30 times. In addition, CRTR can enable planning in Sokoban, including with backtracking."
draft: false
graphLabel: "CRTR"
graphDescription: "Ziarko, Bortkiewicz, Zawalski, Eysenbach & Milos (2025). Shows standard temporal contrastive learning (the same family as Contrastive RL / TD InfoNCE) latches onto spurious features and fails at genuine temporal/relational reasoning; introduces a negative-sampling scheme (CRTR) that provably strips those spurious features. Learned representations alone then support planning-style reasoning (scheduling, plan-edit effects, Sokoban with backtracking), beating search-based oracles by up to 30x on some tasks without doing explicit search at inference."
graphEdges:
  - target: contrastive-rl
    label: extends
  - target: trajectory-optimization
    label: related to
---
