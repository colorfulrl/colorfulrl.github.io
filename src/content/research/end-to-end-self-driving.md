---
title: "End to End Learning for Self-Driving Cars"
authors: ["Mariusz Bojarski", "Davide Del Testa", "Daniel Dworakowski", "Bernhard Firner", "Beat Flepp", "Prasoon Goyal", "Lawrence D. Jackel", "Mathew Monfort", "Urs Muller", "Jiakai Zhang", "Xin Zhang", "Jake Zhao", "Karol Zieba"]
year: 2016
venue: "arXiv preprint (NVIDIA)"
arxiv: "https://arxiv.org/abs/1604.07316"
abstract: "We trained a convolutional neural network (CNN) to map raw pixels from a single front-facing camera directly to steering commands. This end-to-end approach proved surprisingly powerful. With minimum training data from humans the system learns to drive in traffic on local roads with or without lane markings and on highways. It also operates in areas with unclear visual guidance such as in parking lots and on unpaved roads. The system automatically learns internal representations of the necessary processing steps such as detecting useful road features with only the human steering angle as the training signal. We never explicitly trained it to detect, for example, the outline of roads. Compared to explicit decomposition of the problem, such as lane marking detection, path planning, and control, our end-to-end system optimizes all processing steps simultaneously. We argue that this will eventually lead to better performance and smaller systems. Better performance will result because the internal components self-optimize to maximize overall system performance, instead of optimizing human-selected intermediate criteria, e.g., lane detection. Such criteria understandably are selected for ease of human interpretation which doesn't automatically guarantee maximum system performance. Smaller networks are possible because the system learns to solve the problem with the minimal number of processing steps. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "End-to-End Self-Driving"
graphDescription: "Bojarski et al. (2016), NVIDIA. Modern deep behavior cloning — a CNN maps front-camera pixels straight to steering, trained only on human driving, learning road features implicitly without lane-detection modules. Revived end-to-end imitation for autonomous driving."
graphEdges:
  - target: behavior-cloning
    label: based on
  - target: imitation-learning
    label: based on
---
