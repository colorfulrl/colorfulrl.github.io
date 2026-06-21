---
title: "Next Embedding Prediction Makes World Models Stronger"
authors: ["George Bredis", "Nikita Balagansky", "Daniil Gavrilov", "Ruslan Rakhimov"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2603.02765"
abstract: "Capturing temporal dependencies is critical for model-based reinforcement learning (MBRL) in partially observable, high-dimensional domains. We introduce NE-Dreamer, a decoder-free MBRL agent that leverages a temporal transformer to predict next-step encoder embeddings from latent state sequences, directly optimizing temporal predictive alignment in representation space. This approach enables NE-Dreamer to learn coherent, predictive state representations without reconstruction losses or auxiliary supervision. On the DeepMind Control Suite, NE-Dreamer matches or exceeds the performance of DreamerV3 and leading decoder-free agents. On a challenging subset of DMLab tasks involving memory and spatial reasoning, NE-Dreamer achieves substantial gains. These results establish next-embedding prediction with temporal transformers as an effective, scalable framework for MBRL in complex, partially observable environments."
draft: false
graphLabel: "NE-Dreamer"
graphDescription: "Bredis et al. (2026). Decoder-free WM: temporal Transformer predicts next encoder embeddings directly in representation space — no reconstruction, no auxiliary supervision. Strong on DMLab memory/spatial tasks."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: decoder-free
    label: instance of
  - target: transformer
    label: uses
  - target: latent-dynamics
    label: uses
  - target: dm-control
    label: evaluated on
---
