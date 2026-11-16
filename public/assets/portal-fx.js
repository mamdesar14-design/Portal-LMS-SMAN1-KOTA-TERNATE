/* EDUSITE SMANSA — interaksi & animasi tambahan (dimuat sebelum intro.js). */
(function(){
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function(id){ return document.getElementById(id); };

  /* ---------- 1. Intro: judul huruf demi huruf + butir cahaya + tirai ---------- */
  var intro = $("intro");
  var title = intro && intro.querySelector(".intro-title");
  if(title && !reduce){
    var span = title.querySelector("span:not(.intro-bloom)");
    if(span){
      var text = span.textContent;
      title.setAttribute("aria-label", text);
      var k = 0;
      span.className = "fx-word";
      span.setAttribute("aria-hidden", "true");
      span.innerHTML = text.split("").map(function(c){
        return '<span class="ch" style="--k:' + (k++) + '">' + (c === " " ? "&nbsp;" : c.replace(/</g, "&lt;")) + "</span>";
      }).join("");
      title.classList.add("fx-split");
    }
  }
  if(intro && !reduce){
    var motes = document.createElement("div");
    motes.className = "fx-motes"; motes.setAttribute("aria-hidden", "true");
    var html = "";
    for(var i = 0; i < 18; i++){
      var s = (3 + Math.random() * 6).toFixed(1);
      html += '<i style="--x:' + (Math.random() * 100).toFixed(1) + '%;--s:' + s + 'px;--d:' + (9 + Math.random() * 9).toFixed(1) + 's;--dl:' + (-Math.random() * 12).toFixed(1) + 's;--o:' + (.35 + Math.random() * .45).toFixed(2) + ';--dx:' + ((Math.random() - .5) * 120).toFixed(0) + 'px"></i>';
    }
    motes.innerHTML = html;
    var shade = intro.querySelector(".intro-shade");
    if(shade && shade.parentNode) shade.parentNode.insertBefore(motes, shade.nextSibling);
    else intro.appendChild(motes);

    var enterBtn = $("intro-enter"), passing = false;
    if(enterBtn){
      enterBtn.addEventListener("click", function(ev){
        if(passing) return;               /* klik kedua (dari kita) diteruskan ke intro.js */
        ev.stopImmediatePropagation(); ev.preventDefault();
        if(document.querySelector(".fx-curtain")) return;
        enterBtn.disabled = true;
        var r = enterBtn.getBoundingClientRect();
        var cx = ev.clientX || (r.left + r.width / 2), cy = ev.clientY || (r.top + r.height / 2);
        var cur = document.createElement("div");
        cur.className = "fx-curtain"; cur.setAttribute("aria-hidden", "true");
        cur.style.setProperty("--cx", cx + "px"); cur.style.setProperty("--cy", cy + "px");
        cur.innerHTML = '<img src="assets/logo-sman1.png" alt="">';
        document.body.appendChild(cur);
        setTimeout(function(){
          enterBtn.disabled = false; passing = true; enterBtn.click(); passing = false;
        }, 480);
        setTimeout(function(){ cur.classList.add("is-out"); }, 960);
        setTimeout(function(){ if(cur.parentNode) cur.parentNode.removeChild(cur); }, 1600);
      }, true);
    }
  }

  /* ---------- 2. Bar progres gulir ---------- */
  if(!reduce){
    var bar = document.createElement("div");
    bar.className = "fx-progress"; bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var ticking = false;
    var upd = function(){
      ticking = false;
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty("--sp", h > 0 ? Math.min(1, Math.max(0, scrollY / h)).toFixed(4) : 0);
    };
    addEventListener("scroll", function(){ if(!ticking){ ticking = true; requestAnimationFrame(upd); } }, { passive:true });
    addEventListener("resize", upd, { passive:true });
  }

  /* ---------- 3. Riak saat ditekan ---------- */
  var RIP = ".btn, .ab-btn, .card, .seg button, .intro-cta, .page-switch-item, .hamb, .brand-home, .k-stat";
  if(!reduce){
    document.addEventListener("pointerdown", function(e){
      if(e.button !== 0) return;
      var host = e.target.closest(RIP);
      if(!host || host.disabled) return;
      var r = host.getBoundingClientRect();
      var size = Math.max(r.width, r.height) * 2.2;
      host.classList.add("fx-rip-host");
      var rp = document.createElement("span");
      rp.className = "fx-ripple";
      rp.style.setProperty("--r", size + "px");
      rp.style.setProperty("--x", (e.clientX - r.left) + "px");
      rp.style.setProperty("--y", (e.clientY - r.top) + "px");
      host.appendChild(rp);
      setTimeout(function(){ if(rp.parentNode) rp.parentNode.removeChild(rp); }, 650);
    }, { passive:true });
  }

  /* ---------- 4. Kartu: sorotan & kemiringan halus mengikuti kursor ---------- */
  if(fine && !reduce){
    var grid = $("grid");
    if(grid){
      grid.addEventListener("pointermove", function(e){
        var c = e.target.closest(".card"); if(!c) return;
        var r = c.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        c.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        c.style.setProperty("--ry", ((px - .5) * 6).toFixed(2) + "deg");
        c.style.setProperty("--rx", ((.5 - py) * 5).toFixed(2) + "deg");
      });
      grid.addEventListener("pointerout", function(e){
        var c = e.target.closest(".card"); if(!c || c.contains(e.relatedTarget)) return;
        c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg");
      });
    }
  }

  /* ---------- 5. Angka menghitung naik ---------- */
  function countUp(el, to){
    to = +to || 0;
    if(reduce || to === 0){ el.textContent = to; return; }
    var from = +el.dataset.shown || 0, t0 = performance.now(), dur = 700;
    el.dataset.shown = to;
    (function step(t){
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * e);
      if(p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ---------- 6. Ringkasan beranda mengikuti isi grid ---------- */
  var gridEl = $("grid"), hsMapel = $("hs-mapel"), hs = $("hero-stats");
  function syncStats(){
    if(!gridEl || !hsMapel) return;
    var n = gridEl.querySelectorAll(".card").length;
    var q = $("q");
    if(q && q.value.trim()) return; /* saat mencari, jangan ubah angka total */
    countUp(hsMapel, n);
    if(hs) hs.classList.toggle("is-empty", n === 0);
  }
  if(gridEl && window.MutationObserver){
    new MutationObserver(syncStats).observe(gridEl, { childList:true });
    syncStats();
  }

  /* ---------- 7. Angka statistik panel admin ---------- */
  var kStats = $("k-stats");
  if(kStats && window.MutationObserver){
    new MutationObserver(function(){
      kStats.querySelectorAll("b[data-count]").forEach(function(b){
        var to = +b.textContent; b.textContent = "0"; countUp(b, to);
      });
    }).observe(kStats, { childList:true });
  }

  /* ---------- 8. Muncul saat digulir ---------- */
  var revealSel = ["footer .f-about", "footer .f-col"];
  var targets = [];
  revealSel.forEach(function(s){
    document.querySelectorAll(s).forEach(function(el, i){ el.classList.add("fx-reveal"); el.style.setProperty("--rd", i); targets.push(el); });
  });
  if(!reduce && "IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin:"0px 0px -8% 0px", threshold:.08 });
    targets.forEach(function(t){ io.observe(t); });
  } else targets.forEach(function(t){ t.classList.add("is-in"); });
})();
