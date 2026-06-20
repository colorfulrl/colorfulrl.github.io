---
domain: "Healthcare / Medical"
description: "Lộ trình RL cho y tế: học từ dữ liệu bệnh án tĩnh (offline RL) cho phác đồ điều trị, với ràng buộc an toàn là điều kiện sống còn."
descriptionEn: "An RL-for-healthcare path: learning treatment policies from static clinical records (offline RL), where safety constraints are existential."
order: 5
draft: false
stages:
  - id: prerequisites
    label: "Nền tảng (Core-RL)"
    labelEn: "Prerequisites (Core-RL)"
    items:
      - ref: cql
      - ref: iql
  - id: core
    label: "Cốt lõi"
    labelEn: "Core"
    items:
      - ref: ai-clinician-sepsis
        after: [cql]
      - ref: rl-mechanical-ventilation
        after: [iql]
  - id: advanced
    label: "Nâng cao"
    labelEn: "Advanced"
    items:
      - ref: rl-dynamic-treatment-regimes
        after: [ai-clinician-sepsis]
---

Y tế là nơi RL gặp ràng buộc khắc nghiệt nhất: **không được thử-sai trên bệnh
nhân**, nên gần như mọi thứ là **offline RL** (học từ bệnh án tĩnh) + an toàn.
Mốc kinh điển: **AI Clinician** (Komorowski 2018, Nature Medicine) học chiến
lược truyền dịch/vận mạch cho nhiễm khuẩn huyết; RL cho **máy thở**; và khung
**dynamic treatment regimes** (phác đồ điều trị nhiều giai đoạn). Mảng này nối
thẳng `offline-rl` và `safe-rl` trong Core-RL.

> **Prerequisite**: CQL, IQL (offline RL) từ [Core-RL graph](/research).
