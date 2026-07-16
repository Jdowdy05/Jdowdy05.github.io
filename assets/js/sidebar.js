(() => {
  const body = document.body;
  const sidebar = document.getElementById("site-sidebar");
  const collapseButton = document.getElementById("sidebar-collapse");
  const collapseIcon = collapseButton.querySelector(".sidebar__collapse-icon");
  const collapseText = collapseButton.querySelector(".sidebar__collapse-text");
  const mobileButton = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("drawer-backdrop");
  const main = document.getElementById("main-content");
  const collapsibleProfile = sidebar.querySelectorAll(
    ".sidebar__identity, .sidebar__section-label, .sidebar__foot"
  );
  const mobileQuery = window.matchMedia("(max-width: 899px)");
  const storageKey = "jdowdy-sidebar-collapsed";
  let lastFocused = null;

  const readPreference = () => {
    try {
      return window.localStorage.getItem(storageKey) === "true";
    } catch (_) {
      return false;
    }
  };

  const savePreference = (collapsed) => {
    try {
      window.localStorage.setItem(storageKey, String(collapsed));
    } catch (_) {
      // The layout still works when browser storage is unavailable.
    }
  };

  const setSidebarAvailability = (available) => {
    sidebar.setAttribute("aria-hidden", String(!available));
    if ("inert" in sidebar) sidebar.inert = !available;
  };

  const setMainAvailability = (available) => {
    main.setAttribute("aria-hidden", String(!available));
    if ("inert" in main) main.inert = !available;
  };

  const updateDesktop = (collapsed) => {
    body.classList.toggle("sidebar-collapsed", collapsed);
    collapseButton.setAttribute("aria-expanded", String(!collapsed));
    collapseText.textContent = collapsed ? "Expand sidebar" : "Collapse sidebar";
    collapsibleProfile.forEach((element) => {
      element.setAttribute("aria-hidden", String(collapsed));
    });
    savePreference(collapsed);
  };

  const openMobile = () => {
    lastFocused = document.activeElement;
    body.classList.add("sidebar-mobile-open");
    mobileButton.setAttribute("aria-expanded", "true");
    backdrop.setAttribute("aria-hidden", "false");
    setSidebarAvailability(true);
    setMainAvailability(false);
    collapseButton.focus();
  };

  const closeMobile = ({ restoreFocus = true } = {}) => {
    body.classList.remove("sidebar-mobile-open");
    mobileButton.setAttribute("aria-expanded", "false");
    backdrop.setAttribute("aria-hidden", "true");
    setSidebarAvailability(false);
    setMainAvailability(true);
    if (restoreFocus && lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const syncForViewport = () => {
    if (mobileQuery.matches) {
      body.classList.remove("sidebar-collapsed", "sidebar-mobile-open");
      mobileButton.setAttribute("aria-expanded", "false");
      collapseButton.setAttribute("aria-expanded", "true");
      collapseIcon.textContent = "×";
      collapseText.textContent = "Close menu";
      backdrop.setAttribute("aria-hidden", "true");
      setSidebarAvailability(false);
      setMainAvailability(true);
    } else {
      body.classList.remove("sidebar-mobile-open");
      collapseIcon.textContent = "‹";
      backdrop.setAttribute("aria-hidden", "true");
      setSidebarAvailability(true);
      setMainAvailability(true);
      updateDesktop(readPreference());
    }
  };

  collapseButton.addEventListener("click", () => {
    if (mobileQuery.matches) {
      closeMobile();
      return;
    }
    updateDesktop(!body.classList.contains("sidebar-collapsed"));
  });

  mobileButton.addEventListener("click", () => {
    if (body.classList.contains("sidebar-mobile-open")) closeMobile();
    else openMobile();
  });

  backdrop.addEventListener("click", () => closeMobile());

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileQuery.matches) closeMobile({ restoreFocus: false });
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!mobileQuery.matches || !body.classList.contains("sidebar-mobile-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMobile();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = Array.from(sidebar.querySelectorAll("a, button:not([disabled])"));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  if (typeof mobileQuery.addEventListener === "function") mobileQuery.addEventListener("change", syncForViewport);
  else mobileQuery.addListener(syncForViewport);

  syncForViewport();
})();
