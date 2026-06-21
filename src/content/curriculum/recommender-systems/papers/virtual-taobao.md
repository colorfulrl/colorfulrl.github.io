---
title: "Virtual-Taobao: Virtualizing Real-world Online Retail Environment for Reinforcement Learning"
authors: ["Jing-Cheng Shi", "Yang Yu", "Qing Da", "Shi-Yong Chen", "An-Xiang Zeng"]
year: 2018
venue: "AAAI 2019"
arxiv: "https://arxiv.org/abs/1805.10000"
abstract: "Applying reinforcement learning in physical-world tasks is extremely challenging. It is commonly infeasible to sample a large number of trials, as required by current reinforcement learning methods, in a physical environment. This paper reports our project on Virtual-Taobao, where we present our approach to address this challenge for the application in Taobao, one of the largest online retail platforms. We build Virtual-Taobao, a simulator learned from historical customer behavior data, and use it to train policies for the platform. Particularly, we propose GAN-for-Simulating-Distribution (GAN-SD) to better generate customer features, and Multi-agent Adversarial Imitation Learning (MAIL) to better learn customer behaviors. Moreover, we propose Action Norm Constraint (ANC) strategy to reduce the overfitting of the simulator. We evaluate Virtual-Taobao with both offline and online experiments, showing that policies trained purely in Virtual-Taobao significantly outperform the platform's existing online supervised learning approach."
graphLabel: "Virtual-Taobao"
graphDescription: "Shi et al. (2018, Nanjing/Alibaba/AAAI). Xây simulator của Taobao từ log hành vi khách hàng (GAN-SD sinh đặc trưng khách, MAIL học hành vi, ANC chống overfit), rồi train policy hoàn toàn trong simulator. Policy ảo vượt phương pháp supervised online khi deploy thật. Cách giải bài 'không thử-sai trên người dùng thật'."
draft: false
---
