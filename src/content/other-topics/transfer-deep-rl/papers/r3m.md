---
title: "R3M: A Universal Visual Representation for Robot Manipulation"
authors: ["Suraj Nair", "Aravind Rajeswaran", "Vikash Kumar", "Chelsea Finn", "Abhinav Gupta"]
year: 2022
venue: "CoRL 2022"
arxiv: "https://arxiv.org/abs/2203.12601"
abstract: "We study how visual representations pre-trained on diverse human video data can enable data-efficient learning of downstream robotic manipulation tasks. Concretely, we pre-train a visual representation using the Ego4D human video dataset using a combination of time-contrastive learning, video-language alignment, and an L1 penalty to encourage sparse and compact representations. The resulting representation, R3M, can be used as a frozen visual encoder to train manipulation policies from pixels with significantly less data than learning from scratch."
graphLabel: "R3M (Nair 2022)"
graphDescription: "Nair, Rajeswaran, Kumar, Finn & Gupta (2022, CoRL). Pre-trains a visual encoder on Ego4D human egocentric video via time-contrastive learning + video-language alignment → frozen R3M encoder transfers to robot manipulation with far less data than from-scratch. The canonical paper for pre-training visual representations from human video for RL."
draft: false
---
