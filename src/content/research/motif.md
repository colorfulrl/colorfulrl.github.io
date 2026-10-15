---
title: "Motif: Intrinsic Motivation from Artificial Intelligence Feedback"
authors: ["Martin Klissarov", "Pierluca D'Oro", "Shagun Sodhani", "Roberta Raileanu", "Pierre-Luc Bacon", "Pascal Vincent", "Amy Zhang", "Mikael Henaff"]
year: 2023
venue: "ICLR 2024"
arxiv: "https://arxiv.org/abs/2310.00166"
abstract: "Motif is a general method to interface prior knowledge from a large language model with a reinforcement learning agent. The LLM expresses preferences over pairs of event captions from the game; these preferences are distilled into an intrinsic reward used to train agents. Evaluated on NetHack, a procedurally generated, long-horizon game, agents trained only with the intrinsic reward achieve higher game scores than agents trained directly on the score, and combining intrinsic and extrinsic rewards does even better. The paper also studies alignment with human behavior, scaling with LLM size and prompt steerability."
draft: false
graphLabel: "Motif"
graphDescription: "Klissarov et al. (2023). Never lets the LLM act: Llama 2 70B ranks pairs of NetHack message captions, a reward model is fit to those preferences, then PPO trains on intrinsic (+ extrinsic) reward, thresholded and normalized by episodic counts to tame LLM noise. Solves staircase/Oracle tasks where RND, E3B and NovelD stall. Reveals 'misalignment by composition': the agent hacks the Oracle task by hallucination-like behavior."
graphEdges:
  - target: ai-feedback-reward
    label: introduces
  - target: llm-for-rl
    label: instance of
  - target: intrinsic-motivation
    label: LLM-derived
  - target: deep-rl-human-preferences
    label: preference reward model like
  - target: rnd
    label: outperforms
  - target: e3b
    label: outperforms
  - target: noveld
    label: outperforms
  - target: ppo
    label: trained with
  - target: reward-hacking
    label: exhibits
  - target: nethack
    label: evaluated on
---
