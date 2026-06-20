---
title: "Count-Based Exploration with Neural Density Models"
authors: ["Georg Ostrovski", "Marc G. Bellemare", "Aaron van den Oord", "Rémi Munos"]
year: 2017
venue: "ICML 2017"
arxiv: "https://arxiv.org/abs/1703.01310"
abstract: "Bellemare et al. (2016) introduced the notion of a pseudo-count, derived from a density model, to generalize count-based exploration to non-tabular reinforcement learning. This pseudo-count was used to generate an exploration bonus for a DQN agent and combined with a mixed Monte Carlo update was sufficient to achieve state of the art on the Atari 2600 game Montezuma's Revenge. We consider two questions left open by their work: First, how important is the quality of the density model for exploration? Second, what role does the Monte Carlo update play in exploration? We answer the first question by demonstrating the use of PixelCNN, an advanced neural density model for images, to supply a pseudo-count. In particular, we examine the intrinsic difficulties in adapting Bellemare et al.'s approach when assumptions about the model are violated. The result is a more practical and general algorithm requiring no special apparatus. We combine PixelCNN pseudo-counts with different agent architectures to dramatically improve the state of the art on several hard Atari games. One surprising finding is that the mixed Monte Carlo update is a powerful facilitator of exploration in the sparsest of settings, including Montezuma's Revenge."
draft: false
graphLabel: "Count-PixelCNN"
graphDescription: "Ostrovski et al. (2017). Uses PixelCNN as the density model for pseudo-count exploration — higher quality density → better exploration bonus. SOTA on hard Atari exploration tasks."
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: count-based-exploration
    label: uses
  - target: pseudo-count
    label: extends
  - target: atari
    label: evaluated on
---
