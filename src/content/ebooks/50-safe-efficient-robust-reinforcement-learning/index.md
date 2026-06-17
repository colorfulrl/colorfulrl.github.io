---
title: "Safe, Efficient, and Robust Reinforcement Learning for Ranking and Diffusion Models"
author: "Shashank Gupta"
description: "Nghiên cứu RL an toàn và hiệu quả trong ranking an toàn (counterfactual LTR) và tinh chỉnh mô hình khuếch tán text-to-image. Đề xuất LOOP, kết hợp hiệu quả tính toán của REINFORCE và hiệu quả mẫu của PPO."
descriptionEn: "Among the most widely implemented forms of reinforcement learning in user-facing applications is the contextual bandit framework, which represents a simplified reinforcement learning scenario involving a single state for each interaction with the environment. When compared to comprehensive multi-step reinforcement learning scenarios, contextual bandits offer computational simplicity and facilitate easier deployment, using existing offline logged data in an efficient manner. Each context-action pair directly yields a reward, thus eliminating complexities associated with sequential decision-making. Despite the benefits, implementing contextual bandits in ranking problems introduces notable challenges, particularly regarding biases in user feedback. The first part of this monograph addresses safety concerns in counterfactual learning-to-rank (LTR). It proposes a robust safe counterfactual LTR method that theoretically ensures a new ranking policy that performs at least as well as the currently deployed policy. The second part focuses on enhancing sample efficiency in contextual bandit learning and evaluation, specifically, achieving lower error rate with limited data. Beyond ranking and recommendation systems, diffusion models have recently achieved SOTA results in generative tasks like text-to-image synthesis. However, these models do not inherently optimize custom objectives such as aesthetic quality or prompt alignment after training. To tackle this, the monograph proposes an efficient reinforcement learning fine-tuning method for text-to-image diffusion models, combining REINFORCE’s computational efficiency with PPO’s improved sample efficiency in a novel method – leave-one-out PPO (LOOP). The contributions made in this research highlight the shared challenges of safety, efficiency, and robustness in contextual bandit methods across ranking and diffusion modeling contexts within the reinforcement learning paradigm."
# Đặt file ảnh bìa (ví dụ cover.jpg hoặc cover.png) vào CHUNG thư mục với
# file index.md này, rồi tham chiếu đường dẫn tương đối ở dưới. Bỏ comment
# dòng `cover:` khi đã có file ảnh.
cover: ./bia.png
# link: ""
restricted: true
category: "safe-rl"
order: 50
draft: false
---
