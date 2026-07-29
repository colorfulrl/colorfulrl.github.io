---
title: "A Generalized Bisimulation Metric of State Similarity between Markov Decision Processes: From Theoretical Propositions to Applications"
authors: ["Zhenyu Tao", "Wei Xu", "Xiaohu You"]
year: 2025
venue: "NeurIPS 2025"
arxiv: "https://arxiv.org/abs/2509.18714"
abstract: "[Note: abstract reconstructed from a secondary-source summary, not fetched verbatim — verify against the original before quoting.] Standard bisimulation metrics are defined within a single MDP, which limits their use for comparing states drawn from two different MDPs (e.g. source vs. target task, or two different context instances in a contextual MDP). This paper generalizes the bisimulation metric to compare states across distinct MDPs, proves it satisfies symmetry, an inter-MDP triangle inequality, and reduces to the standard bisimulation distance when restricted to identical state spaces. These properties yield tighter theoretical bounds for policy transfer, state aggregation, and sampling-based estimation than applying the standard metric ad hoc across MDPs, along with explicit sample-complexity results, validated numerically."
draft: false
graphLabel: "Generalized Bisimulation Metric"
graphDescription: "Tao, Xu & You (2025, NeurIPS). Theoretical unification paper: extends bisimulation distance from 'two states in the SAME MDP' to 'two states in DIFFERENT MDPs' with proven symmetry, an inter-MDP triangle inequality, and consistency with the standard metric as a special case. This is precisely the cross-context comparison a CARL/contextual-MDP experiment implicitly needs (comparing a state under context c1 to a state under context c2) but that DBC's within-episode formulation was never proven to support rigorously."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: contextual-mdp
    label: addresses
  - target: generalization-rl
    label: addresses
---
