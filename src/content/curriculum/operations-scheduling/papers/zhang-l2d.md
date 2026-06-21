---
title: "Learning to Dispatch for Job Shop Scheduling via Deep Reinforcement Learning (L2D)"
authors: ["Cong Zhang", "Wen Song", "Zhiguang Cao", "Jie Zhang", "Puay Siew Tan", "Chi Xu"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2010.12367"
abstract: "Priority dispatching rule (PDR) is widely used for solving real-world Job-shop scheduling problem (JSSP). However, the design of effective PDRs is a tedious task, requiring a myriad of specialized knowledge and often delivering limited performance. In this paper, we propose to automatically learn PDRs via an end-to-end deep reinforcement learning agent. We exploit the disjunctive graph representation of JSSP, and propose a Graph Neural Network based scheme to embed the states encountered during solving. The resulting policy network is size-agnostic, effectively enabling generalization on large-scale instances. Experiments show that the agent can learn high-quality PDRs from scratch with elementary raw features, and demonstrates strong performance against the best existing PDRs. The learned policies also perform well on much larger instances that are unseen in training."
graphLabel: "L2D (Job-Shop)"
graphDescription: "Zhang et al. (2020, NeurIPS). Học priority dispatching rule cho Job-Shop Scheduling end-to-end: biểu diễn disjunctive graph + GNN embed trạng thái, policy network 'size-agnostic' nên tổng quát lên instance lớn hơn lúc train. Học từ feature thô, vượt các PDR thủ công tốt nhất. Mốc RL cho lập lịch sản xuất."
draft: false
---
