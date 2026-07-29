---
title: "Bisimulation Metrics for Continuous Markov Decision Processes"
authors: ["Norman Ferns", "Prakash Panangaden", "Doina Precup"]
year: 2011
venue: "SIAM Journal on Computing, 40(6):1662-1714"
arxiv: "https://www.cs.mcgill.ca/~prakash/Pubs/siamFP11.pdf"
abstract: "[Note: abstract reconstructed from secondary sources, not fetched verbatim due to access restrictions — verify against the original before quoting.] Extends the finite-state bisimulation metric (Ferns, Panangaden & Precup, 2004) to MDPs with continuous (or otherwise infinite) state spaces, where transition 'distributions over equivalence classes' no longer makes sense combinatorially and the Wasserstein term must instead be defined and shown well-behaved over general measurable state spaces. Establishes the existence, uniqueness and computability of the metric as a fixed point of a Bellman-style contraction operator on the space of pseudometrics, and proves the same value-difference bound as the finite case carries over. The technical prerequisite for applying bisimulation metrics to the pixel/continuous-control settings (MuJoCo, DM Control) that later deep-RL bisimulation methods actually target."
draft: false
graphLabel: "Bisimulation Metric (Continuous)"
graphDescription: "Ferns, Panangaden & Precup (2011, SIAM J. Computing). Generalizes the bisimulation metric from finite to continuous state spaces via a fixed-point/contraction-operator construction — the theoretical bridge that licenses applying bisimulation metrics to continuous-control and pixel-observation settings (MuJoCo, DM Control) rather than just tabular MDPs. Directly load-bearing for DBC."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: mujoco
    label: related
---
