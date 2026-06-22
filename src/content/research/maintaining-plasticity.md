---
title: "Maintaining Plasticity in Deep Continual Learning"
authors: ["Shibhansh Dohare", "J. Fernando Hernandez-Garcia", "Parash Rahman", "A. Rupam Mahmood", "Richard S. Sutton"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2306.13812"
abstract: "Modern deep-learning systems are specialized to problem settings in which training occurs once and then never again, as opposed to continual-learning settings in which training occurs continually. If deep-learning systems are applied in a continual learning setting, then it is well known that they may fail to remember earlier examples. More fundamental, but less well known, is that they may also lose their ability to learn new things, a phenomenon called loss of plasticity. We show loss of plasticity using the classic ImageNet dataset and reinforcement-learning problems across a wide range of variations, and introduce Continual Backpropagation, which selectively reinitializes low-utility units to maintain plasticity indefinitely."
draft: false
graphLabel: "Maintaining Plasticity / CBP (Dohare 2023)"
graphDescription: "Dohare, Hernandez-Garcia, Rahman, Mahmood & Sutton (2023). Demonstrates loss of plasticity broadly (ImageNet + RL) and introduces Continual Backpropagation (CBP): a targeted reset that continually reinitializes the least-useful units to keep the network trainable indefinitely. The Sutton-lab line of work that culminated in the Nature 2024 paper 'Loss of plasticity in deep continual learning'."
graphEdges:
  - target: plasticity
    label: mitigates
---
