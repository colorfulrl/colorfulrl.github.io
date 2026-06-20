---
title: "Behavior Transformers: Cloning k modes with one stone"
authors: ["Nur Muhammad Mahi Shafiullah", "Zichen Jeff Cui", "Ariuntuya Altanzaya", "Lerrel Pinto"]
year: 2022
venue: "NeurIPS 2022"
arxiv: "https://arxiv.org/abs/2206.11251"
abstract: "While behavior learning has made impressive progress in recent times, it lags behind computer vision and natural language processing due to its inability to leverage large, human-generated datasets. Human behavior has a wide variance, multiple modes, and human demonstrations typically do not come with reward labels. These properties limit the applicability of current methods in Behavior Cloning (BC) to learn from large, pre-collected datasets. In this work, we present Behavior Transformer (BeT), a new technique to model unlabeled demonstration data with multiple modes. BeT retrofits standard transformer architectures with action discretization coupled with a multi-task action correction inspired by offset prediction in object detection. This allows us to leverage the multi-modal modeling ability of modern transformers to predict multi-modal continuous actions. We experimentally evaluate BeT on a variety of robotic manipulation and self-driving behavior datasets. We show that BeT significantly improves over prior state-of-the-art work on solving demonstrated tasks while capturing the major modes present in the pre-collected datasets. Finally, through an extensive ablation study, we analyze the importance of every crucial component in BeT, quantifying the value of distributional modeling and multi-modal learning. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Behavior Transformers"
graphDescription: "Shafiullah et al. (2022). Behavior Transformer (BeT) — clones multi-modal demonstration data by retrofitting a transformer with action discretization + continuous offset correction, capturing the multiple modes that unimodal BC collapses. For large unlabeled human datasets. NeurIPS 2022."
graphEdges:
  - target: behavior-cloning
    label: extends
  - target: imitation-learning
    label: based on
  - target: transformer
    label: uses
---
