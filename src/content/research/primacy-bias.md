---
title: "The Primacy Bias in Deep Reinforcement Learning"
authors: ["Evgenii Nikishin", "Max Schwarzer", "Pierluca D'Oro", "Pierre-Luc Bacon", "Aaron Courville"]
year: 2022
venue: "ICML 2022"
arxiv: "https://arxiv.org/abs/2205.07802"
abstract: "This work identifies a common flaw of deep reinforcement learning (RL) algorithms: a tendency to rely on early interactions and ignore useful evidence encountered later. Because of training on progressively growing datasets, deep RL agents incur a risk of overfitting to earlier experiences, negatively affecting the rest of the learning process. Inspired by cognitive science, we refer to this effect as the primacy bias. Through a series of experiments, we dissect the algorithmic aspects of deep RL that exacerbate this bias, and propose a simple yet generally-applicable mechanism — periodically resetting a part of the agent — that tackles it without forgetting the replay buffer."
draft: false
graphLabel: "Primacy Bias (Nikishin 2022)"
graphDescription: "Nikishin, Schwarzer, D'Oro, Bacon & Courville (2022, ICML). Names the 'primacy bias': deep RL agents overfit to early interactions and lose the ability to learn from later data. The fix is strikingly simple — periodically RESET part of the network while keeping the replay buffer. The paper that launched resets as a plasticity remedy; the lineage behind SR-SPR and BBF."
graphEdges:
  - target: plasticity
    label: diagnoses
  - target: experience-replay
    label: resets but keeps buffer
  - target: atari
    label: evaluated on
---
