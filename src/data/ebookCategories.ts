/** Maps category slug → bilingual display labels.
 *  Add a new entry here whenever a new category slug is introduced in ebook frontmatter.
 *  If a slug is missing, the page falls back to the slug itself.
 */
export const EBOOK_CATEGORY_LABELS: Record<string, { vi: string; en: string }> =
  {
    "rl-foundations": { vi: "Nền tảng RL", en: "RL Foundations" },
    "deep-rl": { vi: "Deep RL", en: "Deep RL" },
    "model-based-rl": { vi: "RL dựa trên mô hình", en: "Model-Based RL" },
    "control-theory": { vi: "Lý thuyết điều khiển", en: "Control Theory" },
    "multi-agent-rl": { vi: "RL đa tác nhân", en: "Multi-Agent RL" },
    "applied-rl": { vi: "RL ứng dụng", en: "Applied RL" },
    "rl-for-finance": { vi: "RL cho tài chính", en: "RL for Finance" },
    "distributional-rl": { vi: "RL phân phối", en: "Distributional RL" },
    "rl-for-cyber-security": { vi: "RL cho an ninh mạng", en: "RL for Cyber Security" },
    "rl-and-cognitive-analytics": { vi: "RL và phân tích nhận thức", en: "RL and Cognitive Analytics" },
    "electromagnetic-detection-satellites": { vi: "Vệ tinh trinh sát điện từ", en: "Electromagnetic Detection Satellites" },
    "rl-for-edge-ai": { vi: "RL cho AI biên", en: "RL for Edge AI" },
    "wireless-communications-and-networking": { vi: "Truyền thông và mạng không dây", en: "Wireless Communications and Networking" },
    "robotics": { vi: "Robot học", en: "Robotics" },
    "uav": { vi: "UAV (Máy bay không người lái)", en: "UAV" },
    "games": { vi: "Trò chơi", en: "Games" },
    "job-shop": { vi: "Lập lịch sản xuất", en: "Job-Shop Scheduling" },
    "rl-for-business": { vi: "RL trong kinh doanh", en: "RL for Business" },
    "safe-rl": { vi: "RL an toàn", en: "Safe RL" },
    "medical-rl": { vi: "RL trong y tế", en: "Medical RL" },
    "other": { vi: "Khác", en: "Other" },
    "rlhf": { vi: "RLHF", en: "RLHF" },
  };
