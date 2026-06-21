---
title: "Progress & Compress: A scalable framework for continual learning"
authors: ["Jonathan Schwarz", "Jelena Luketina", "Wojciech M. Czarnecki", "Agnieszka Grabska-Barwinska", "Yee Whye Teh", "Razvan Pascanu", "Raia Hadsell"]
year: 2018
venue: "ICML 2018"
arxiv: "https://arxiv.org/abs/1805.06370"
abstract: "We introduce a conceptually simple and scalable framework for continual learning domains where tasks are learned sequentially. Our method is constant in the number of parameters and is designed to preserve performance on previously encountered tasks while accelerating learning progress on subsequent problems. The key idea: a KNOWLEDGE BASE network (compressed, protected via EWC) + an ACTIVE COLUMN (plastic, learns the new task) — after each task, compress active→knowledge base, reset active."
graphLabel: "Progress & Compress (Schwarz 2018)"
graphDescription: "Schwarz, Luketina, Czarnecki, Grabska-Barwinska, Teh, Pascanu & Hadsell (2018, ICML). Two-column architecture: plastic Active Column learns current task freely; then distills into protected Knowledge Base via EWC. Constant parameters regardless of task count; strong forward transfer via lateral connections. Extends EWC to a scalable pipeline — the reference for regularization+distillation hybrid approaches."
draft: false
---
