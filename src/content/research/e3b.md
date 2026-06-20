---
title: "Exploration via Elliptical Episodic Bonuses"
authors: ["Mikael Henaff", "Roberta Raileanu", "Minqi Jiang", "Tim Rocktäschel"]
year: 2022
venue: "NeurIPS 2022"
arxiv: "https://arxiv.org/abs/2210.05805"
abstract: "In recent years, a number of reinforcement learning (RL) methods have been proposed to explore complex environments which differ across episodes. In this work, we show that the effectiveness of these methods critically relies on a count-based episodic term in their exploration bonus. As a result, despite their success in relatively simple, noise-free settings, these methods fall short in more realistic scenarios where the state space is vast and prone to noise. To address this limitation, we introduce Exploration via Elliptical Episodic Bonuses (E3B), a new method which extends count-based episodic bonuses to continuous state spaces and encourages an agent to explore states that are diverse under a learned embedding within each episode. The embedding is learned using an inverse dynamics model in order to capture controllable aspects of the environment. Our method sets a new state-of-the-art across 16 challenging tasks from the MiniHack suite and matches the performance of established methods on sparse-reward VizDoom tasks. We also demonstrate that E3B scales to high-dimensional pixel-based observations on a reward-free exploration task in the Habitat embodied AI simulator. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "E3B"
graphDescription: "Henaff et al. (2022). Extends count-based episodic bonuses to continuous state spaces via an elliptical (Mahalanobis) bonus over inverse-dynamics features within each episode — robust where the state space is vast and noisy. SOTA on 16 MiniHack tasks. NeurIPS 2022."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: episodic-exploration
    label: uses
  - target: count-based-exploration
    label: extends
---
