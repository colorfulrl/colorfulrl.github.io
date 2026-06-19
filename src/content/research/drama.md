---
title: "Drama: Mamba-Enabled Model-Based Reinforcement Learning Is Sample and Parameter Efficient"
authors: ["Wenlong Wang", "Ivana Dusparic", "Yucheng Shi", "Ke Zhang", "Vinny Cahill"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2410.08893"
abstract: "Model-based reinforcement learning (RL) offers a solution to the data inefficiency that plagues most model-free RL algorithms. However, learning a robust world model often requires complex and deep architectures, which are computationally expensive and challenging to train. Within the world model, sequence models play a critical role in accurate predictions, and various architectures have been explored, each with its own challenges. Currently, recurrent neural network (RNN)-based world models struggle with vanishing gradients and capturing long-term dependencies. Transformers, on the other hand, suffer from the quadratic memory and computational complexity of self-attention mechanisms, scaling as O(n^2), where n is the sequence length. To address these challenges, we propose a state space model (SSM)-based world model, Drama, specifically leveraging Mamba, that achieves O(n) memory and computational complexity while effectively capturing long-term dependencies and enabling efficient training with longer sequences. We also introduce a novel sampling method to mitigate the suboptimality caused by an incorrect world model in the early training stages. Combining these techniques, Drama achieves a normalised score on the Atari100k benchmark that is competitive with other state-of-the-art (SOTA) model-based RL algorithms, using only a 7 million-parameter world model. Drama is accessible and trainable on off-the-shelf hardware, such as a standard laptop."
draft: false
graphLabel: "Drama"
graphDescription: "Wang et al. (2024). Mamba (SSM) as WM sequence model — O(n) complexity vs O(n²) Transformer, captures long-term dependencies without vanishing gradients. Competitive Atari 100k with only 7M params, runs on a laptop."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: atari
    label: evaluated on
---
