---
title: "Understanding Plasticity in Neural Networks"
authors: ["Clare Lyle", "Zeyu Zheng", "Evgenii Nikishin", "Bernardo Avila Pires", "Razvan Pascanu", "Will Dabney"]
year: 2023
venue: "ICML 2023"
arxiv: "https://arxiv.org/abs/2303.01486"
abstract: "Plasticity, the ability of a neural network to quickly change its predictions in response to new information, is essential for the adaptability and robustness of deep reinforcement learning systems. Deep neural networks are known to lose plasticity over the course of training even in relatively simple learning problems, but the mechanisms driving this phenomenon are still poorly understood. This paper conducts a systematic empirical analysis into plasticity loss, with the goal of understanding the phenomenon mechanistically in order to guide the future development of targeted solutions. We find that loss of plasticity is deeply connected to changes in the curvature of the loss landscape and the growth of parameter norms, and that LayerNorm is a particularly effective mitigation."
draft: false
graphLabel: "Understanding Plasticity (Lyle 2023)"
graphDescription: "Lyle, Zheng, Nikishin, Avila Pires, Pascanu & Dabney (2023, ICML Oral). A mechanistic study of WHY networks lose plasticity: links it to loss-landscape curvature and parameter-norm growth rather than any single symptom, and shows LayerNorm is a strong, simple mitigation. The conceptual backbone connecting non-stationarity → norm growth → sharpness → plasticity loss."
graphEdges:
  - target: plasticity
    label: analyzes mechanism
---
