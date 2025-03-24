const applyStyles = () => {
  console.log("应用样式");

  // 加载 FontAwesome CSS
  const fontAwesomeLink = document.createElement("link");
  fontAwesomeLink.rel = "stylesheet";
  fontAwesomeLink.href = chrome.runtime.getURL(
    "assets/fontawesome/css/all.css"
  );
  document.head.appendChild(fontAwesomeLink);

  // 加载自定义样式
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL("fonts.css");
  document.head.appendChild(link);

  console.log("应用样式完成");
};

// 尝试在 DOMContentLoaded 时执行
document.addEventListener("DOMContentLoaded", applyStyles);

// 如果 DOMContentLoaded 未触发，用 MutationObserver 兜底
const observer = new MutationObserver(() => {
  applyStyles();
  observer.disconnect(); // 应用一次后停止
});
observer.observe(document.body, { childList: true, subtree: true });
