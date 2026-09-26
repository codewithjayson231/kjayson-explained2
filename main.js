// KJayson Explained — filters, search and "Read more".
// Posts live as plain HTML in index.html, so search engines can read them
// even without JavaScript. This file only adds the interactive parts.
(function () {
  var posts = Array.prototype.slice.call(document.querySelectorAll(".post"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".seg button"));
  var search = document.getElementById("search");
  var empty = document.getElementById("empty");
  var filter = "all";

  // Counts in the About section
  function count(type) {
    return posts.filter(function (p) { return !type || p.dataset.type === type; }).length;
  }
  var setText = function (id, n) { var el = document.getElementById(id); if (el) el.textContent = n; };
  setText("count-all", count());
  setText("count-example", count("example"));
  setText("count-clarification", count("clarification"));

  // Collapse long posts behind "Read more"
  posts.forEach(function (post) {
    var body = post.querySelector(".body");
    if (!body || body.textContent.trim().length < 420) return;
    post.classList.add("collapsed");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "more";
    btn.textContent = "Read more";
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var open = post.classList.toggle("collapsed") === false;
      btn.textContent = open ? "Show less" : "Read more";
      btn.setAttribute("aria-expanded", String(open));
    });
    post.appendChild(btn);
  });

  // Open a post fully when someone arrives on its link (#post-id)
  function openTarget() {
    var id = location.hash.slice(1);
    var el = id && document.getElementById(id);
    if (el && el.classList.contains("collapsed")) {
      var b = el.querySelector(".more");
      if (b) b.click();
    }
  }
  openTarget();
  window.addEventListener("hashchange", openTarget);

  function apply() {
    var q = (search.value || "").trim().toLowerCase();
    var shown = 0;
    posts.forEach(function (p) {
      var okType = filter === "all" || p.dataset.type === filter;
      var okText = !q || p.textContent.toLowerCase().indexOf(q) !== -1;
      p.hidden = !(okType && okText);
      if (!p.hidden) shown++;
    });
    empty.hidden = shown !== 0;
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      filter = b.dataset.filter;
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      apply();
    });
  });
  search.addEventListener("input", apply);
})();
