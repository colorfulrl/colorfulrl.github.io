---
title: "R2-Dreamer: Redundancy-Reduced World Models without Decoders or Augmentation"
authors: ["N. Morihira", "Amal Nahar", "K. Bharadwaj", "Y. Kato", "Akinobu Hayashi", "Tatsuya Harada"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2603.18202"
abstract: "A central challenge in image-based Model-Based Reinforcement Learning (MBRL) is to learn representations that distill essential information from irrelevant visual details. While promising, reconstruction-based methods often waste capacity on large task-irrelevant regions. Decoder-free methods instead learn robust representations by leveraging Data Augmentation (DA), but reliance on such external regularizers limits versatility. We propose R2-Dreamer, a decoder-free MBRL framework with a self-supervised objective that serves as an internal regularizer, preventing representation collapse without resorting to DA. The core of our method is a redundancy-reduction objective inspired by Barlow Twins, which can be easily integrated into existing frameworks. On DeepMind Control Suite and Meta-World, R2-Dreamer is competitive with strong baselines such as DreamerV3 and TD-MPC2 while training 1.59x faster than DreamerV3, and yields substantial gains on DMC-Subtle with tiny task-relevant objects. These results suggest that an effective internal regularizer can enable versatile, high-performance decoder-free MBRL."
draft: false
graphLabel: "R2-Dreamer"
graphDescription: "Morihira et al. (2026). Decoder-free MBRL with Barlow-Twins redundancy-reduction as internal regularizer — no reconstruction loss, no augmentation. 1.59× faster than DreamerV3; strong on DMC-Subtle (tiny task-relevant objects)."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: latent-dynamics
    label: uses
  - target: dreamerv3
    label: extends
  - target: dm-control
    label: evaluated on
---
