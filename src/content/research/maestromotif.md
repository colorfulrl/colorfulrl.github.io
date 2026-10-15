---
title: "MaestroMotif: Skill Design from Artificial Intelligence Feedback"
authors: ["Martin Klissarov", "Mikael Henaff", "Roberta Raileanu", "Shagun Sodhani", "Pascal Vincent", "Amy Zhang", "Pierre-Luc Bacon", "Doina Precup", "Marlos C. Machado", "Pierluca D'Oro"]
year: 2024
venue: "arXiv 2024"
arxiv: "https://arxiv.org/abs/2412.08542"
abstract: "The paper proposes using natural-language descriptions of skills to give AI systems human knowledge about decision-making. MaestroMotif uses a large language model to generate a reward function for each skill from its text description, then uses the model's code-generation abilities together with reinforcement learning to train these skills and combine them into more complex behaviors specified in language. Evaluated on complex tasks in the NetHack Learning Environment, it outperforms existing methods in both performance and ease of use."
draft: false
graphLabel: "MaestroMotif"
graphDescription: "Klissarov et al. (2024). Skill design from AI feedback: an LLM turns natural-language skill descriptions into per-skill reward functions, then writes code to train the skills with RL and compose them into higher-level behaviors specified in language. Evaluated on NetHack."
graphEdges:
  - target: motif
    label: extends
  - target: ai-feedback-reward
    label: uses
  - target: options-framework
    label: designs skills as
  - target: skill-library
    label: builds
  - target: language-as-abstraction
    label: specifies skills via
  - target: nethack
    label: evaluated on
---
