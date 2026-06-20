---
domain: "Healthcare / Medical"
description: "Lộ trình RL cho y tế: học phác đồ điều trị từ bệnh án tĩnh (offline RL), đánh giá policy mà KHÔNG được thử trên bệnh nhân (off-policy evaluation), và các cạm bẫy khiến RL y tế gây tranh cãi."
descriptionEn: "An RL-for-healthcare path: learning treatment policies from static records (offline RL), evaluating policies WITHOUT testing on patients (off-policy evaluation), and the pitfalls that make medical RL contentious."
order: 5
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL · Offline)"
    labelEn: "Prerequisites (Core-RL · Offline)"
    items:
      - ref: cql
      - ref: iql
      - ref: bcq
  - id: treatment
    label: "Phác đồ điều trị"
    labelEn: "Treatment Policies"
    items:
      - ref: dtr
        after: [iql]
      - ref: ai-clinician
        after: [cql]
      - ref: rl-ventilation
        after: [cql]
  - id: ope
    label: "Off-Policy Evaluation"
    labelEn: "Off-Policy Evaluation"
    items:
      - ref: doubly-robust-ope
        after: [iql]
      - ref: magic-ope
        after: [doubly-robust-ope]
  - id: safety-caveats
    label: "An toàn & Cạm bẫy"
    labelEn: "Safety & Caveats"
    items:
      - ref: gottesman-guidelines
        after: [ai-clinician]
      - ref: ai-clinician-critique
        after: [ai-clinician]
---

Y tế là nơi RL gặp ràng buộc khắc nghiệt nhất: **không được thử-sai trên bệnh
nhân**. Hệ quả định hình toàn bộ lĩnh vực.

- **Nền tảng là Offline RL**: gần như mọi thứ học từ **bệnh án tĩnh** (ICU logs)
  — **CQL, IQL, BCQ** xử lý lỗi ngoài-phân-phối khi không có tương tác mới.
- **Phác đồ điều trị**: khung **dynamic treatment regimes** (phác đồ nhiều giai
  đoạn, gốc biostatistics), **AI Clinician** (Komorowski 2018 — chiến lược truyền
  dịch/vận mạch cho nhiễm khuẩn huyết), RL cho **máy thở**.
- **Off-Policy Evaluation (OPE)**: vì KHÔNG thể deploy thử, phải ước lượng giá trị
  một policy *chỉ từ data tĩnh* — **doubly robust**, **MAGIC**. Đây là trái tim kỹ
  thuật của RL y tế, không phải phụ trợ.
- **An toàn & Cạm bẫy**: RL y tế **gây tranh cãi** — confounding, reward sai, OPE
  variance lớn dễ cho kết luận sai. **Guidelines** (Gottesman 2019) và các phê bình
  AI Clinician cảnh báo: kết quả đẹp trên giấy không bằng an toàn lâm sàng.

> **Prerequisite**: CQL, IQL, BCQ (offline RL) từ [Core-RL graph](/research).
> Mảng này cũng nối `safe-rl` trong graph chính.
