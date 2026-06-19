---
title: "Hindsight Experience Replay"
authors: ["Marcin Andrychowicz", "Filip Wolski", "Alex Ray", "Jonas Schneider", "Rachel Fong", "Peter Welinder", "Bob McGrew", "Josh Tobin", "Pieter Abbeel", "Wojciech Zaremba"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1707.01495"
abstract: "Dealing with sparse rewards is one of the biggest challenges in Reinforcement Learning (RL). We present a novel technique called Hindsight Experience Replay which allows sample-efficient learning from rewards which are sparse and binary and therefore avoid the need for complicated reward engineering. It can be combined with an arbitrary off-policy RL algorithm and may be seen as a form of implicit curriculum. We demonstrate our approach on the task of manipulating objects with a robotic arm. In particular, we run experiments on three different tasks: pushing, sliding, and pick-and-place, in each case using only binary rewards indicating whether or not the task is completed. Our ablation studies show that Hindsight Experience Replay is a crucial ingredient which makes training possible in these challenging environments. We show that our policies trained on a physics simulation can be deployed on a physical robot and successfully complete the task."
draft: false
graphLabel: "HER"
graphDescription: "Andrychowicz et al. (2017). Relabels failed episodes with achieved goal — every trajectory becomes informative. Solves sparse-reward robotic manipulation with binary rewards only."
graphEdges:
  - target: experience-replay
    label: extends
  - target: exploration
    label: addresses
  - target: ddpg
    label: uses
---
