---
title: "All Models are Wrong, Knowing Where is Useful: On Model Uncertainty in Reinforcement Learning"
authors: ["Bernd Frauenknecht", "Devdutt Subhasish", "Artur Eisele", "Friedrich Solowjow", "Sebastian Trimpe"]
year: 2026
venue: "arXiv 2026"
arxiv: "https://arxiv.org/abs/2606.01363"
abstract: "Model-based reinforcement learning (MBRL) infers information about the environment from a learned dynamics model and bears the potential to address open problems such as data efficient and safe learning in robotics. However, inaccuracies of the learned dynamics model are typically exploited by the agent, substantially hampering the capabilities of MBRL methods. We present a framework for dealing with inaccuracies of probabilistic models through targeted handling of uncertainty that effectively mitigates model exploitation. We present recent successes in learning directly on hardware and safe exploration, and discuss future directions for uncertainty-aware MBRL."
draft: false
graphLabel: "All Models Are Wrong"
graphDescription: "Frauenknecht et al. (2026). Framework for uncertainty-aware MBRL: targeted uncertainty handling prevents model exploitation and enables safe hardware learning."
graphEdges:
  - target: model-based-rl
    label: addresses limitations of
  - target: epistemic-uncertainty
    label: introduces framework for
  - target: exploration
    label: enables safer
---
