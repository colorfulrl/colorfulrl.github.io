---
title: "Robustness of quantum reinforcement learning under hardware errors"
authors: ["Andrea Skolik", "Stefano Mangini", "Thomas Bäck", "Chiara Macchiavello", "Vedran Dunjko"]
year: 2022
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2212.09431"
abstract: "Variational quantum machine learning algorithms have become the focus of recent research on how to utilize near-term quantum devices for machine learning tasks. They are considered suitable for this as the circuits that are run can be tailored to the device, and a big part of the computation is delegated to the classical optimizer. It has also been hypothesized that they may be more robust to hardware noise than conventional algorithms due to their hybrid nature. We systematically study how hardware errors — depolarizing, amplitude damping, and coherent noise — affect VQC-based RL agents trained in simulation then deployed on noisy hardware, finding that hybrid QRL shows surprising resilience and that certain noise levels can even aid exploration."
graphLabel: "QRL Robustness (Skolik 2022)"
graphDescription: "Skolik, Mangini, Bäck, Macchiavello & Dunjko (2022). Systematic study of how NISQ hardware noise (depolarizing, amplitude damping, coherent errors) affects VQC-based RL agents. Key insight: hybrid QRL is surprisingly robust to noise — and certain error levels can improve exploration. Critical read before deploying QRL on real quantum hardware."
draft: false
---
