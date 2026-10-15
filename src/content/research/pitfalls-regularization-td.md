---
title: "The Pitfalls of Regularization in Off-Policy TD Learning"
authors: ["Gaurav Manek", "J. Zico Kolter"]
year: 2022
venue: "NeurIPS 2022"
arxiv: "https://papers.neurips.cc/paper_files/paper/2022/hash/e78457d4a04b8565f1fe5077df13cddb-Abstract-Conference.html"
abstract: "Temporal Difference (TD) learning is ubiquitous in reinforcement learning, where it is often combined with off-policy sampling and function approximation. Unfortunately, the combination of these three ingredients can lead to instability, and regularization is often proposed to restore stability. This paper builds new counterexamples showing that regularization does not fix the problem: with linear function approximation, off-policy TD can fail to learn a non-trivial value function regardless of the amount of regularization, regularization can cause divergence in common settings, and emphatic TD methods can still diverge under regularization. Divergence is also observed with neural-network approximators, so the role of regularization in TD methods needs to be reconsidered."
draft: false
graphLabel: "Regularization Pitfalls"
graphDescription: "Manek & Kolter (2022, NeurIPS). A cautionary result: adding L2 regularization to off-policy TD does not reliably cure the deadly triad — counterexamples show it can still diverge, converge to trivial solutions, or even induce divergence, and emphatic TD is not immune. Motivates the target-network and normalization analyses that follow."
graphEdges:
  - target: deadly-triad
    label: counterexamples to regularization
  - target: semi-gradient-td
    label: analyzes
  - target: emphatic-td
    label: shows can still diverge
  - target: breaking-deadly-triad-target-network
    label: contrasts with
---
