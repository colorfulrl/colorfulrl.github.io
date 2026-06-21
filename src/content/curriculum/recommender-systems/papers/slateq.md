---
title: "Reinforcement Learning for Slate-based Recommender Systems: A Tractable Decomposition and Practical Methodology (SlateQ)"
authors: ["Eugene Ie", "Vihan Jain", "Jing Wang", "Sanmit Narvekar", "Ritesh Agarwal", "Rui Wu", "Heng-Tze Cheng", "Morgane Lustman", "Vince Gatto", "Paul Covington", "Jim McFadden", "Tushar Chandra", "Craig Boutilier"]
year: 2019
venue: "IJCAI 2019"
arxiv: "https://arxiv.org/abs/1905.12767"
abstract: "Most practical recommender systems focus on estimating immediate user engagement without considering the long-term effects of recommendations on user behavior. Reinforcement learning (RL) methods offer the potential to optimize recommendations for long-term user engagement. However, since users are often presented with slates of multiple items - which may have interacting effects on user choice - methods are required to deal with the combinatorics of the RL action space. In this work, we address the challenge of making slate-based recommendations to optimize long-term value using RL. Our contributions are three-fold. (i) We develop SLATEQ, a decomposition of value-based temporal-difference and Q-learning that renders RL tractable with slates. Under mild assumptions on user choice behavior, we show that the long-term value (LTV) of a slate can be decomposed into a tractable function of its component item-wise LTVs. (ii) We outline a methodology that leverages existing myopic learning-based recommenders to quickly develop a recommender that handles LTV. (iii) We demonstrate our methods in simulation, and validate the scalability of decomposed TD-learning using SLATEQ in live experiments on YouTube."
graphLabel: "SlateQ"
graphDescription: "Ie et al. (2019, Google/IJCAI). Vấn đề: gợi ý cả một SLATE (danh sách item tương tác lẫn nhau) làm không gian hành động bùng nổ tổ hợp. SlateQ phân rã giá trị dài hạn (LTV) của slate thành hàm khả-tính của LTV từng item — Q-learning khả thi với slate. Validate live trên YouTube. Mốc value-based RecSys."
draft: false
---
