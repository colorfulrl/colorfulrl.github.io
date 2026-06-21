---
title: "Top-K Off-Policy Correction for a REINFORCE Recommender System"
authors: ["Minmin Chen", "Alex Beutel", "Paul Covington", "Sagar Jain", "Francois Belletti", "Ed H. Chi"]
year: 2019
venue: "WSDM 2019"
arxiv: "https://arxiv.org/abs/1812.02353"
abstract: "Industrial recommender systems deal with extremely large action spaces -- many millions of items to recommend. Moreover, they need to serve billions of users, who are unique at any point in time, making a complex user state space. Luckily, huge quantities of logged implicit feedback (e.g., user clicks, dwell time) are available for learning. Learning to recommend from logged feedback is however subject to biases caused by only observing feedback on recommendations selected by the previous versions of the recommender. In this work, we present a general recipe of addressing such biases in a production top-K recommender system at YouTube, built with a policy-gradient-based algorithm, i.e. REINFORCE. The contributions of the paper are: (1) scaling REINFORCE to a production recommender system with an action space on the orders of millions; (2) applying off-policy correction to address data biases in learning from logged feedback collected from multiple behavior policies; (3) proposing a novel top-K off-policy correction to account for our policy recommending multiple items at a time; (4) showcasing the value of exploration. We demonstrate the effectiveness of our approach through a series of simulations and multiple live experiments on YouTube."
graphLabel: "YouTube Top-K REINFORCE"
graphDescription: "Chen et al. (2019, Google/WSDM). Học gợi ý từ LOG (off-policy) là chuẩn công nghiệp vì không thử-sai trực tiếp được. Bài này scale REINFORCE tới hàng triệu action ở YouTube, thêm off-policy correction cho bias của log đa-policy, và top-K correction khi gợi ý nhiều item cùng lúc. Mốc policy-gradient off-policy của RecSys."
draft: false
---
