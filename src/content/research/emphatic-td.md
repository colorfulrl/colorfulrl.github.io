---
title: "An Emphatic Approach to the Problem of Off-policy Temporal-Difference Learning"
authors: ["Richard S. Sutton", "A. Rupam Mahmood", "Martha White"]
year: 2016
venue: "JMLR 2016"
arxiv: "https://arxiv.org/abs/1503.04269"
abstract: "This paper introduces emphatic temporal-difference learning, which reweights TD updates by emphasizing or de-emphasizing them at different time steps. The weighting makes the expected update of linear TD(λ) stable under off-policy training. The main prior methods with stability at comparable per-step cost are the gradient-TD family (TDC, GTD(λ), GQ(λ)); emphatic TD(λ) is simpler, with one learned parameter vector and one step-size parameter. The treatment also covers state-dependent discounting and bootstrapping, and a way to specify how much interest to place in valuing different states accurately."
draft: false
graphLabel: "Emphatic TD"
graphDescription: "Sutton, Mahmood & White (2016, JMLR). Instead of adding a second weight vector like gradient TD, scale each update by a follow-on trace so the effective state distribution matches the target policy; the expected linear TD(λ) update becomes stable off-policy. Simpler than TDC/GTD, but high-variance in practice."
graphEdges:
  - target: etd
    label: introduces
  - target: emphatic-weighting
    label: introduces
  - target: off-policy-learning
    label: stabilizes
  - target: semi-gradient-td
    label: fixes
  - target: deadly-triad
    label: resolves for linear FA
  - target: gtd2-tdc
    label: simpler alternative to
---
