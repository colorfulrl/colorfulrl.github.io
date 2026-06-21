---
title: "Gradient Surgery for Multi-Task Learning"
authors: ["Tianhe Yu", "Saurabh Kumar", "Abhishek Gupta", "Sergey Levine", "Karol Hausman", "Chelsea Finn"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2001.06782"
abstract: "While deep learning and deep reinforcement learning systems have demonstrated impressive results in domains such as image classification, game playing, and robotic control, data efficiency remains a major challenge. Multi-task learning has emerged as a promising approach for sharing structure across multiple tasks to enable more efficient learning. We identify a major cause of poor multi-task performance as conflicting gradients: task gradients that point in opposing directions. We propose PCGrad, which projects each task's gradient onto the normal plane of any conflicting task's gradient, preventing destructive interference."
graphLabel: "PCGrad (Yu 2020)"
graphDescription: "Yu, Kumar, Gupta, Levine, Hausman & Finn (2020, NeurIPS). Gradient Surgery: identifies conflicting task gradients (cosine similarity < 0) and projects each onto the normal plane of the conflicting task's gradient before summing — prevents destructive interference in multi-task RL without changing the network architecture. Simple, drop-in fix; significant improvement on MT10/MT50 robotic benchmarks."
draft: false
---
