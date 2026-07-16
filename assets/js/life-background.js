(() => {
  "use strict";

  const canvas = document.getElementById("life-background");
  const pauseButton = document.getElementById("life-toggle");
  const pauseLabel = document.getElementById("life-toggle-label");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const storageKey = "jdowdy-life-paused";
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileQuery = window.matchMedia("(max-width: 899px)");
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);

  let state = new Uint8Array(0);
  let next = new Uint8Array(0);
  let intensity = new Float32Array(0);
  let columns = 0;
  let rows = 0;
  let cellSize = 30;
  let width = 0;
  let height = 0;
  let generation = 0;
  let animationFrame = 0;
  let resizeTimer = 0;
  let lastFrameTime = 0;
  let lastGenerationTime = 0;

  const readPausedPreference = () => {
    try {
      return window.localStorage.getItem(storageKey) === "true";
    } catch (_) {
      return false;
    }
  };

  const savePausedPreference = (paused) => {
    try {
      window.localStorage.setItem(storageKey, String(paused));
    } catch (_) {
      // The background remains controllable when storage is unavailable.
    }
  };

  let userPaused = readPausedPreference();

  const hashString = (value) => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };

  const randomSource = (seed) => {
    let value = seed || 1;
    return () => {
      value ^= value << 13;
      value ^= value >>> 17;
      value ^= value << 5;
      return (value >>> 0) / 4294967296;
    };
  };

  const indexFor = (column, row) => {
    const wrappedColumn = (column + columns) % columns;
    const wrappedRow = (row + rows) % rows;
    return wrappedRow * columns + wrappedColumn;
  };

  const placeGlider = (column, row) => {
    [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]].forEach(([offsetX, offsetY]) => {
      state[indexFor(column + offsetX, row + offsetY)] = 1;
    });
  };

  const placeBlinker = (column, row) => {
    [-1, 0, 1].forEach((offset) => {
      state[indexFor(column + offset, row)] = 1;
    });
  };

  const seedGrid = () => {
    const random = randomSource(hashString(`${window.location.pathname}|living-lattice`));
    const density = mobileQuery.matches ? 0.145 : 0.17;
    state.fill(0);
    intensity.fill(0);
    generation = 0;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const horizontalWeight = 0.62 + (column / Math.max(1, columns - 1)) * 0.38;
        if (random() < density * horizontalWeight) state[row * columns + column] = 1;
      }
    }

    placeGlider(Math.max(2, Math.floor(columns * 0.42)), Math.max(2, Math.floor(rows * 0.34)));
    placeGlider(Math.max(2, Math.floor(columns * 0.7)), Math.max(2, Math.floor(rows * 0.18)));
    placeGlider(Math.max(2, Math.floor(columns * 0.84)), Math.max(2, Math.floor(rows * 0.62)));
    placeBlinker(Math.max(2, Math.floor(columns * 0.58)), Math.max(2, Math.floor(rows * 0.72)));
    placeBlinker(Math.max(2, Math.floor(columns * 0.88)), Math.max(2, Math.floor(rows * 0.42)));

    for (let index = 0; index < state.length; index += 1) intensity[index] = state[index];
  };

  const roundedCell = (x, y, size, radius) => {
    context.beginPath();
    if (typeof context.roundRect === "function") context.roundRect(x, y, size, size, radius);
    else context.rect(x, y, size, size);
    context.fill();
  };

  const smoothstep = (value) => value * value * (3 - 2 * value);

  const draw = () => {
    context.clearRect(0, 0, width, height);
    const baseSize = Math.max(7, Math.round(cellSize * 0.32));

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = row * columns + column;
        const value = Math.min(1, Math.max(0, intensity[index]));
        if (value < 0.012) continue;

        const eased = smoothstep(value);
        const horizontalWeight = 0.68 + (column / Math.max(1, columns - 1)) * 0.32;
        const accent = (column * 13 + row * 7) % 23 === 0;
        const alpha = (accent ? 0.58 : 0.46) * eased * horizontalWeight;
        context.fillStyle = accent
          ? `rgba(153, 91, 54, ${alpha})`
          : `rgba(38, 91, 70, ${alpha})`;

        const squareSize = baseSize * (0.7 + eased * 0.3);
        const x = column * cellSize + (cellSize - squareSize) / 2;
        const y = row * cellSize + (cellSize - squareSize) / 2;
        roundedCell(x, y, squareSize, Math.min(3, squareSize * 0.26));
      }
    }

    canvas.classList.add("is-ready");
  };

  const step = () => {
    let population = 0;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = row * columns + column;
        let neighbors = 0;
        for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
          for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
            if (offsetX === 0 && offsetY === 0) continue;
            neighbors += state[indexFor(column + offsetX, row + offsetY)];
          }
        }

        const alive = state[index] === 1;
        const survives = alive ? neighbors === 2 || neighbors === 3 : neighbors === 3;
        next[index] = survives ? 1 : 0;
        if (survives) population += 1;
      }
    }

    const previous = state;
    state = next;
    next = previous;
    next.fill(0);
    generation += 1;

    if (population < Math.max(5, Math.floor(columns * rows * 0.015))) {
      const position = (generation * 7) % Math.max(4, rows - 4);
      placeGlider(Math.max(2, Math.floor(columns * 0.76)), position);
      placeBlinker(Math.max(2, Math.floor(columns * 0.56)), Math.max(2, Math.floor(rows * 0.7)));
    }
  };

  const cadence = () => (mobileQuery.matches ? 900 : 760);
  const shouldAnimate = () => !userPaused && !motionQuery.matches && !saveData && !document.hidden;

  const updateIntensities = (elapsed) => {
    const blend = 1 - Math.exp(-elapsed / 210);
    for (let index = 0; index < intensity.length; index += 1) {
      const target = state[index];
      const difference = target - intensity[index];
      intensity[index] = Math.abs(difference) < 0.002 ? target : intensity[index] + difference * blend;
    }
  };

  const animate = (timestamp) => {
    if (!shouldAnimate()) {
      animationFrame = 0;
      draw();
      return;
    }

    if (!lastFrameTime) lastFrameTime = timestamp;
    if (!lastGenerationTime) lastGenerationTime = timestamp;
    const elapsed = Math.min(64, Math.max(0, timestamp - lastFrameTime));

    if (timestamp - lastGenerationTime >= cadence()) {
      step();
      lastGenerationTime = timestamp;
    }

    updateIntensities(elapsed);
    draw();
    lastFrameTime = timestamp;
    animationFrame = window.requestAnimationFrame(animate);
  };

  const syncAnimation = () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastFrameTime = 0;
    lastGenerationTime = 0;
    if (shouldAnimate()) animationFrame = window.requestAnimationFrame(animate);
    else draw();
  };

  const updatePauseButton = () => {
    if (!pauseButton || !pauseLabel) return;
    const motionUnavailable = motionQuery.matches || saveData;
    pauseButton.hidden = motionUnavailable;
    pauseButton.dataset.paused = String(userPaused);
    pauseLabel.textContent = userPaused ? "Resume Game of Life" : "Pause Game of Life";
  };

  const resizeCanvas = () => {
    width = Math.max(1, Math.round(canvas.clientWidth));
    height = Math.max(1, Math.round(canvas.clientHeight));
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    cellSize = mobileQuery.matches ? 26 : width > 1700 ? 34 : 30;
    columns = Math.max(8, Math.ceil(width / cellSize));
    rows = Math.max(8, Math.ceil(height / cellSize));
    while (columns * rows > 4500) {
      cellSize += 2;
      columns = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);
    }

    state = new Uint8Array(columns * rows);
    next = new Uint8Array(columns * rows);
    intensity = new Float32Array(columns * rows);
    seedGrid();
    draw();
    syncAnimation();
  };

  const queueResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resizeCanvas, 180);
  };

  if (pauseButton) {
    pauseButton.addEventListener("click", () => {
      userPaused = !userPaused;
      savePausedPreference(userPaused);
      updatePauseButton();
      syncAnimation();
    });
  }

  document.addEventListener("visibilitychange", syncAnimation);
  window.addEventListener("pagehide", () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  });
  window.addEventListener("pageshow", syncAnimation);
  window.addEventListener("resize", queueResize, { passive: true });
  if (typeof ResizeObserver === "function") new ResizeObserver(queueResize).observe(canvas);

  const handleMotionChange = () => {
    updatePauseButton();
    syncAnimation();
  };
  if (typeof motionQuery.addEventListener === "function") motionQuery.addEventListener("change", handleMotionChange);
  else motionQuery.addListener(handleMotionChange);

  updatePauseButton();
  resizeCanvas();
})();
