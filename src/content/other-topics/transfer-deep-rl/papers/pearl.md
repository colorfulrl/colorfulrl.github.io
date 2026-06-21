---
title: "Efficient Off-Policy Meta-Reinforcement Learning via Probabilistic Context Variables"
authors: ["Kate Rakelly", "Aurick Zhou", "Deirdre Quillen", "Chelsea Finn", "Sergey Levine"]
year: 2019
venue: "ICML 2019"
arxiv: "https://arxiv.org/abs/1903.08254"
abstract: "Deep reinforcement learning algorithms require large amounts of experience to learn an individual task. While in principle meta-reinforcement learning (meta-RL) algorithms enable agents to learn new skills from small amounts of experience, several major challenges preclude their practicality. PEARL addresses these by learning a probabilistic context variable z via a permutation-invariant encoder over transition tuples, then conditioning the policy on z. The key innovation: separate inference network from policy allows off-policy training across tasks, dramatically improving sample efficiency over on-policy meta-RL (e.g. MAML-RL)."
graphLabel: "PEARL (Rakelly 2019)"
graphDescription: "Rakelly, Zhou, Quillen, Finn & Levine (2019, ICML). Off-policy meta-RL via probabilistic context: a permutation-invariant encoder infers a latent task variable z from a small context buffer, then the policy conditions on z. Decoupling inference from policy allows experience replay — 20-100× more sample-efficient than MAML-RL on MuJoCo benchmarks. The practical meta-RL baseline."
draft: false
---
