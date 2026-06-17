import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Trang chủ",
    posts: "Bài viết",
    tags: "Thẻ",
    about: "Giới thiệu",
    archives: "Lưu trữ",
    search: "Tìm kiếm",
    ebooks: "Ebook",
    resources: "Tài nguyên",
    categories: "Chủ đề",
    more: "Thêm",
    support: "Buy me a coffee",
  },
  post: {
    publishedAt: "Đăng",
    updatedAt: "Cập nhật",
    sharePostIntro: "Chia sẻ bài này:",
    sharePostOn: "Chia sẻ qua {{platform}}",
    sharePostViaEmail: "Chia sẻ qua email",
    tagLabel: "Chủ đề",
    backToTop: "Lên đầu trang",
    goBack: "Quay lại",
    editPage: "Sửa trang",
    previousPost: "Bài trước",
    nextPost: "Bài kế",
    supportTitle: "Thích bài viết này?",
    supportDesc: "Nếu bài viết có ích, bạn có thể ủng hộ mình để có thêm động lực viết tiếp.",
    supportCta: "Buy me a coffee",
    ratingLabel: "Đánh giá bài viết",
    ratingStarLabel: "{{value}} sao",
    ratingEmpty: "Chưa có đánh giá",
    ratingSummary: "{{avg}}/5 · {{count}} lượt đánh giá",
    viewCount: "· {{count}} lượt xem",
  },
  pagination: {
    prev: "Trước",
    next: "Kế",
    page: "Trang",
  },
  home: {
    socialLinks: "Liên hệ",
    featured: "Bài chọn lọc",
    recentPosts: "Bài gần đây",
    allPosts: "Tất cả bài viết",
  },
  footer: {
    copyright: "Phạm Nhật Khoa",
    allRightsReserved: "",
  },
  pages: {
    tagTitle: "Chủ đề",
    tagDesc: "Tất cả bài có chủ đề",

    tagsTitle: "Chủ đề",
    tagsDesc: "Mọi chủ đề được dùng.",

    postsTitle: "Bài viết",
    postsDesc: "Tất cả bài đã đăng.",

    archivesTitle: "Lưu trữ",
    archivesDesc: "Mọi bài đã lưu trữ.",

    searchTitle: "Tìm kiếm",
    searchDesc: "Tìm bài viết bất kỳ…",

    ebooksTitle: "Ebook gợi ý",
    ebooksDesc: "Những ebook mình đã đọc và muốn giới thiệu tới bạn.",

    categoryTitle: "Chủ đề",
    categoryDesc: "Tất cả bài có chủ đề",

    categoriesTitle: "Chủ đề",
    categoriesDesc: "Mọi chủ đề được dùng để phân loại bài viết.",

    supportTitle: "Ủng hộ blog",
    supportDesc: "Cách ủng hộ mình duy trì và phát triển blog.",

    resourcesTitle: "Tài nguyên",
    resourcesDesc: "Bài viết, video, repo và khóa học mình thấy đáng đọc.",
  },
  ebooks: {
    viewLink: "Xem ebook",
    comingSoon: "Sắp có liên kết",
    by: "Tác giả",
    contactToGet: "Liên hệ để nhận sách",
    restrictedNote: "Sách này không thể chia sẻ công khai do bản quyền, vui lòng liên hệ riêng.",
    requestSubject: "Xin sách",
    categories: "Chủ đề",
    readMore: "Xem thêm",
    readLess: "Thu gọn",
  },
  a11y: {
    skipToContent: "Bỏ qua tới nội dung",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    toggleTheme: "Đổi chế độ sáng/tối",
    searchPlaceholder: "Tìm bài viết…",
    noResults: "Không có kết quả",
    goToPreviousPage: "Trang trước",
    goToNextPage: "Trang kế",
  },
  notFound: {
    title: "404 — Không tìm thấy",
    message: "Trang này không tồn tại",
    goHome: "Về trang chủ",
  },
} satisfies UIStrings;
