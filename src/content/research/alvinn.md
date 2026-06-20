---
title: "ALVINN: An Autonomous Land Vehicle in a Neural Network"
authors: ["Dean A. Pomerleau"]
year: 1988
venue: "NeurIPS 1988"
arxiv: "https://proceedings.neurips.cc/paper/1988/hash/812b4ba287f5ee0bc9d43bbf5bbe87fb-Abstract.html"
abstract: "ALVINN (Autonomous Land Vehicle In a Neural Network) is a 3-layer back-propagation network designed for the task of road following. Currently ALVINN takes images from a camera and a laser range finder as input and produces as output the direction the vehicle should travel in order to follow the road. Training has been conducted using simulated road images. Successful tests on the Carnegie Mellon autonomous navigation test vehicle indicate that the network can effectively follow real roads under certain field conditions. The representation developed to perform the task differs dramatically when the network is trained under various conditions, suggesting the possibility of a novel adaptive autonomous navigation system capable of tailoring its processing to the conditions at hand. [Note: abstract summarized from the paper, pending verbatim text.]"
draft: false
graphLabel: "ALVINN"
graphDescription: "Pomerleau (1988). The origin of neural-network behavior cloning — a 3-layer net maps camera/rangefinder input directly to steering to follow roads, trained on demonstrations. First end-to-end learned driving controller; ancestor of all deep imitation learning. NeurIPS 1988."
graphEdges:
  - target: behavior-cloning
    label: introduces
  - target: imitation-learning
    label: based on
---
