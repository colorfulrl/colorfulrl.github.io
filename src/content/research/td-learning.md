---
title: "Learning to Predict by the Methods of Temporal Differences"
authors: ["Richard S. Sutton"]
year: 1988
venue: "Machine Learning 3(1)"

abstract: "This article introduces a class of incremental learning procedures specialized for prediction-that is, for using past experience with an incompletely known system to predict its future behavior. Whereas conventional prediction-learning methods assign credit by means of the difference between predicted and actual outcomes, the new methods assign credit by means of the difference between temporally successive predictions. Although such temporal-difference methods have been used in Samuel's checker player, Holland's bucket brigade, and the author's Adaptive Heuristic Critic, they have remained poorly understood. Here we prove their convergence and optimality for special cases and relate them to supervised-learning methods. For most real-world prediction problems, temporal-difference methods require less memory and less peak computation than conventional methods and they produce more accurate predictions. We argue that most problems to which supervised learning is currently applied are really prediction problems of the sort to which temporal-difference methods can be applied to advantage."
draft: true
graphEdges:
  - target: temporal-difference
    label: introduces
  - target: value-based
    label: foundational to
graphLabel: "TD Learning"
graphDescription: "Sutton (1988). Foundational paper establishing temporal-difference learning: assigns credit by the difference between successive predictions rather than prediction vs outcome."
---
