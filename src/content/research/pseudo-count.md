---
title: "Unifying Count-Based Exploration and Intrinsic Motivation"
authors: ["Marc G. Bellemare", "Sriram Srinivasan", "Georg Ostrovski", "Tom Schaul", "David Saxton", "Rémi Munos"]
year: 2016
venue: "NeurIPS 2016"
arxiv: "https://arxiv.org/abs/1606.01868"
abstract: "We consider an agent's uncertainty about its environment and the problem of generalizing this uncertainty across observations. Specifically, we focus on the problem of exploration in non-tabular reinforcement learning. Drawing inspiration from the intrinsic motivation literature, we use density models to measure uncertainty, and propose a novel algorithm for deriving a pseudo-count from an arbitrary density model. This technique enables us to generalize count-based exploration algorithms to the non-tabular case. We apply our ideas to Atari 2600 games, providing sensible pseudo-counts from raw pixels. We transform these pseudo-counts into intrinsic rewards and obtain significantly improved exploration in a number of hard games, including the infamously difficult Montezuma's Revenge."
draft: false
graphLabel: "Pseudo-Count"
graphDescription: "Bellemare et al. (2016). Derives pseudo-counts from density models to extend tabular count-based exploration to deep RL — unifying two exploration literatures. Breaks Montezuma's Revenge."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: unifies with
  - target: atari
    label: evaluated on
---
