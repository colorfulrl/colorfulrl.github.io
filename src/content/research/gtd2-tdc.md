---
title: "Fast Gradient-Descent Methods for Temporal-Difference Learning with Linear Function Approximation"
authors: ["Richard S. Sutton", "Hamid Reza Maei", "Doina Precup", "Shalabh Bhatnagar", "David Silver", "Csaba Szepesvári", "Eric Wiewiora"]
year: 2009
venue: "ICML 2009"
arxiv: "https://mlanthology.org/icml/2009/sutton2009icml-fast"
abstract: "Sutton, Szepesvári and Maei's GTD algorithm was the first temporal-difference method that works with both linear function approximation and off-policy training while scaling linearly in the number of features. It is reliable but slow compared with conventional linear TD on on-policy problems, casting doubt on its practical value. This paper introduces two new gradient-TD methods. GTD2 uses a different objective function and converges provably like GTD but noticeably faster, though still slower than conventional TD. TDC keeps the conventional TD update and adds a correction term that starts at zero; in small test problems and a Computer Go application with a million features its learning rate is close to conventional TD, at roughly double the computation."
draft: false
graphLabel: "GTD2 / TDC"
graphDescription: "Sutton et al. (2009, ICML). Gradient-TD methods for off-policy learning with linear function approximation at linear cost: GTD2 follows the gradient of a different objective and converges faster than GTD; TDC keeps the usual TD update plus a correction term and learns at nearly the speed of conventional TD, for about double the computation. The classic true-gradient fix for the deadly triad."
graphEdges:
  - target: gradient-td
    label: introduces
  - target: projected-bellman-error
    label: minimizes
  - target: semi-gradient-td
    label: fixes
  - target: deadly-triad
    label: resolves for linear FA
  - target: off-policy-learning
    label: enables stable
---
