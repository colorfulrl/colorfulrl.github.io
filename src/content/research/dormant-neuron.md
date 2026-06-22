---
title: "The Dormant Neuron Phenomenon in Deep Reinforcement Learning"
authors: ["Ghada Sokar", "Rishabh Agarwal", "Pablo Samuel Castro", "Utku Evci"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2302.12902"
abstract: "In this work we identify the dormant neuron phenomenon in deep reinforcement learning, where an agent's network suffers from an increasing number of inactive neurons, thereby affecting network expressivity. We demonstrate the presence of this phenomenon across a variety of algorithms and environments, and highlight its effect on learning. To address this issue, we propose a simple and effective method (ReDo) that Recycles Dormant neurons throughout training. Our experiments demonstrate that ReDo maintains the expressive power of networks by reducing the number of dormant neurons and results in improved performance."
draft: false
graphLabel: "Dormant Neurons / ReDo (Sokar 2023)"
graphDescription: "Sokar, Agarwal, Castro & Evci (2023, ICML Oral). Identifies the 'dormant neuron phenomenon' — a growing fraction of near-inactive neurons that throttles network expressivity as training proceeds — and gives a precise dormancy measure. ReDo (Recycle Dormant neurons) periodically reinitializes them, restoring capacity. A measurable pathology of plasticity loss + a targeted-reset mitigation."
graphEdges:
  - target: plasticity
    label: diagnoses
  - target: atari
    label: evaluated on
---
