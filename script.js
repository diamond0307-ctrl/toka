(() => {
  const works = [
    {
      id: "error-is-beautiful",
      number: "NO.01",
      title: "ERROR IS BEAUTIFUL",
      year: "2026",
      technique: "Mixed media / print texture",
      size: "未設定",
      edition: "Original",
      framed: "未設定",
      status: "available",
      price: "¥55,000",
      priceValue: 55000,
      shipping: "未設定",
      description:
        "鼻血、花、傷、可愛さ。きれいに整わない感情をそのまま刷り込んだ、TOKAの世界の入口になる一点。",
      mainImage: "./assets/error-is-beautiful.jpg",
      detailImages: ["./assets/toka-work-3753.jpg", "./assets/toka-work-3755.jpg"],
      framedImage: "./assets/toka-work-3756.jpg",
      roomImage: "./assets/toka-work-3757.jpg",
      paymentUrl: "",
      layout: "large",
    },
    {
      id: "work-3753",
      number: "NO.02",
      title: "UNTITLED ARCHIVE 3753",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "available",
      price: "未設定",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。正式な作品情報が決まり次第、JavaScript内の作品データだけを変更してください。",
      mainImage: "./assets/toka-work-3753.jpg",
      detailImages: ["./assets/error-is-beautiful.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "tall",
    },
    {
      id: "work-3755",
      number: "NO.03",
      title: "UNTITLED ARCHIVE 3755",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "sold",
      price: "SOLD",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。売約済み作品もTOKAのアーカイブとして一覧に残します。",
      mainImage: "./assets/toka-work-3755.jpg",
      detailImages: ["./assets/toka-work-3756.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "square",
    },
    {
      id: "work-3756",
      number: "NO.04",
      title: "UNTITLED ARCHIVE 3756",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "available",
      price: "未設定",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。複数画像を追加する場合は detailImages に画像パスを追加してください。",
      mainImage: "./assets/toka-work-3756.jpg",
      detailImages: ["./assets/toka-work-3757.jpg", "./assets/toka-work-3758.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "wide",
    },
    {
      id: "work-3757",
      number: "NO.05",
      title: "UNTITLED ARCHIVE 3757",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "available",
      price: "未設定",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。",
      mainImage: "./assets/toka-work-3757.jpg",
      detailImages: ["./assets/toka-work-3758.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "small",
    },
    {
      id: "work-3758",
      number: "NO.06",
      title: "UNTITLED ARCHIVE 3758",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "sold",
      price: "SOLD",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。",
      mainImage: "./assets/toka-work-3758.jpg",
      detailImages: ["./assets/toka-work-3759.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "square",
    },
    {
      id: "work-3759",
      number: "NO.07",
      title: "UNTITLED ARCHIVE 3759",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "available",
      price: "未設定",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。",
      mainImage: "./assets/toka-work-3759.jpg",
      detailImages: ["./assets/toka-work-3760.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "tall",
    },
    {
      id: "work-3760",
      number: "NO.08",
      title: "UNTITLED ARCHIVE 3760",
      year: "未設定",
      technique: "未設定",
      size: "未設定",
      edition: "未設定",
      framed: "未設定",
      status: "available",
      price: "未設定",
      priceValue: null,
      shipping: "未設定",
      description: "作品説明をここに入力。",
      mainImage: "./assets/toka-work-3760.jpg",
      detailImages: ["./assets/error-is-beautiful.jpg"],
      framedImage: "",
      roomImage: "",
      paymentUrl: "",
      layout: "wide",
    },
  ];

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isReducedMotion = motionQuery.matches;
  let lockedScrollY = 0;

  const uniqueImages = (work) =>
    [
      work.mainImage,
      ...(work.detailImages || []),
      work.framedImage,
      work.roomImage,
    ].filter((image, index, images) => image && images.indexOf(image) === index);

  const displayStatus = (status) => (status === "sold" ? "SOLD" : "AVAILABLE");
  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const lockBody = () => {
    if (document.body.classList.contains("is-layer-open")) {
      return;
    }

    lockedScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.classList.add("is-layer-open");
  };

  const unlockBody = () => {
    if (document.querySelector(".work-modal.is-open") || document.querySelector(".image-viewer.is-open")) {
      return;
    }

    document.body.classList.remove("is-layer-open", "is-viewer-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, lockedScrollY);
  };

  const getFocusableElements = (root) =>
    [...root.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(
      (element) => element.offsetParent !== null
    );

  const trapFocus = (event, root) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements(root);
    if (!focusableElements.length) {
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const initHero = () => {
    const hero = document.querySelector(".hero");
    const nav = document.querySelector(".site-nav");
    const voidLayer = document.querySelector(".hero__void");
    const titleToka = document.querySelector(".hero__title-line--toka");
    const titleWorld = document.querySelector(".hero__title-line--world");
    const character = document.querySelector(".hero__character");
    const impactBurst = document.querySelector(".hero__impact-burst");
    const bloodLine = document.querySelector(".hero__blood-line");
    const bleed = document.querySelector(".hero__bleed");
    const drops = document.querySelectorAll(".hero__drop");
    const splashes = document.querySelectorAll(".site-splash");
    const enter = document.querySelector(".hero__enter");

    if (
      !hero ||
      !nav ||
      !voidLayer ||
      !titleToka ||
      !titleWorld ||
      !character ||
      !impactBurst ||
      !bloodLine ||
      !bleed ||
      !enter
    ) {
      return;
    }

    const hasGsap = Boolean(window.gsap);
    const hasScrollTrigger = Boolean(window.ScrollTrigger);

    const revealStaticHero = () => {
      nav.classList.add("is-visible");
      nav.style.opacity = "1";
      nav.style.transform = "none";
      enter.style.opacity = "1";
      enter.style.transform = "translate(-50%, 0)";
      titleToka.style.opacity = "1";
      titleWorld.style.opacity = "1";
      character.style.opacity = "1";
      voidLayer.style.opacity = "0";
      impactBurst.style.opacity = "0.34";
      bloodLine.style.opacity = "0.55";
      bleed.style.opacity = "0.36";
      drops.forEach((drop) => {
        drop.style.opacity = "0.42";
      });
    };

    if (isReducedMotion || !hasGsap) {
      revealStaticHero();
      return;
    }

    const { gsap } = window;
    const animationSettings = {
      ease: "power3.out",
      titleBlur: "18px",
    };
    let scrollMotionInitialized = false;
    let initScrollMotion = () => {};

    gsap.set(voidLayer, { opacity: 1 });
    gsap.set([titleToka, titleWorld], {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      filter: `blur(${animationSettings.titleBlur})`,
    });
    gsap.set(titleToka, { x: -46, y: 14 });
    gsap.set(titleWorld, { x: 38, y: -6 });
    gsap.set(character, { opacity: 0, scale: 1.04 });
    gsap.set(impactBurst, { opacity: 0, scale: 0.16, rotate: -16 });
    gsap.set(bloodLine, { opacity: 0, strokeDasharray: 120, strokeDashoffset: 120 });
    gsap.set(bleed, { opacity: 0, scale: 0.16, rotate: -8 });
    gsap.set(drops, { opacity: 0, scale: 0, transformOrigin: "50% 50%" });
    gsap.set(enter, { opacity: 0, y: 10 });
    gsap.set(nav, { opacity: 0, y: -8 });

    const intro = gsap.timeline({
      defaults: { ease: animationSettings.ease },
      onComplete: () => {
        gsap.to(character, {
          y: -1,
          scale: 1.002,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        initScrollMotion();
      },
    });
    intro
      .to(impactBurst, { opacity: 0.96, scale: 0.62, rotate: -4, duration: 0.2 }, 0.16)
      .to(impactBurst, { scale: 1, rotate: 0, duration: 0.24, ease: "back.out(2)" }, 0.31)
      .to(character, { opacity: 1, duration: 0.05, ease: "steps(1)" }, 0.36)
      .to(character, { opacity: 0.18, duration: 0.07, ease: "steps(1)" }, 0.43)
      .to(character, { opacity: 1, duration: 0.08, ease: "steps(1)" }, 0.53)
      .to(voidLayer, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0.45)
      .to(character, { scale: 1, duration: 1.16 }, 0.56)
      .to(impactBurst, { opacity: 0, scale: 1.32, duration: 0.48, ease: "power2.out" }, 0.62)
      .to(bloodLine, { opacity: 1, strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" }, 1.18)
      .to(bleed, { opacity: 0.76, scale: 1, rotate: 0, duration: 0.66, ease: "power2.out" }, 1.46)
      .to(
        [titleToka, titleWorld],
        {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)",
          duration: 0.92,
          stagger: 0.08,
        },
        1.62
      )
      .to([titleToka, titleWorld], { filter: "blur(1px)", duration: 0.12, yoyo: true, repeat: 1 }, 2.05)
      .to(drops, { opacity: 0.78, scale: 1, duration: 0.34, stagger: 0.07, ease: "back.out(2.2)" }, 2.16)
      .to(enter, { opacity: 1, y: 0, duration: 0.55 }, "-=0.18")
      .to(
        nav,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => nav.classList.add("is-visible"),
        },
        "-=0.28"
      );

    initScrollMotion = () => {
      if (!hasScrollTrigger || scrollMotionInitialized) {
        return;
      }

      scrollMotionInitialized = true;
      gsap.registerPlugin(window.ScrollTrigger);

      gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=115%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
      .to(titleToka, { x: "-5vw", y: "-3vh", opacity: 0.76 }, 0.06)
      .to(titleWorld, { x: "6vw", y: "4vh", opacity: 0.72 }, 0.06)
      .to(drops, { rotate: 12, scale: 1.12, opacity: 0.42 }, 0.1)
      .to(bleed, { scale: 1.18, opacity: 0.34 }, 0.12)
      .to(enter, { opacity: 0, y: 18 }, 0.05)
      .to([titleToka, titleWorld, character], { opacity: 0.18 }, 0.84);

      const splashMotion = [
      {
        from: { xPercent: -36, yPercent: 8, rotate: -15, scale: 0.82, clipPath: "inset(0 68% 0 0)" },
        to: { xPercent: 18, yPercent: -8, rotate: 7, scale: 1.08, clipPath: "inset(0 0% 0 0)" },
        scrub: 1.15,
      },
      {
        from: { xPercent: 46, yPercent: 30, rotate: 12, scale: 0.72, clipPath: "inset(42% 0 0 48%)" },
        to: { xPercent: -16, yPercent: -12, rotate: -8, scale: 1.12, clipPath: "inset(0% 0 0 0%)" },
        scrub: 1.45,
      },
      {
        from: { xPercent: -42, yPercent: -34, rotate: -9, scale: 0.8, clipPath: "inset(0 54% 30% 0)" },
        to: { xPercent: 30, yPercent: 18, rotate: 8, scale: 1.04, clipPath: "inset(0 0% 0% 0)" },
        scrub: 1.7,
      },
      {
        from: { xPercent: -8, yPercent: 42, rotate: -14, scale: 0.72, opacity: 0, clipPath: "inset(48% 28% 0 24%)" },
        to: { xPercent: 24, yPercent: -22, rotate: 14, scale: 1.08, opacity: 0.46, clipPath: "inset(0% 0% 0 0%)" },
        scrub: 2.05,
      },
      {
        from: { xPercent: 34, yPercent: 24, rotate: 13, scale: 0.78 },
        to: { xPercent: -20, yPercent: -18, rotate: -7, scale: 1.03 },
        scrub: 2.3,
      },
    ];

      splashes.forEach((splash, index) => {
        const motion = splashMotion[index];
        if (!motion) {
          return;
        }

        gsap.fromTo(splash, motion.from, {
          ...motion.to,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: () =>
              `+=${Math.min(
                document.documentElement.scrollHeight - window.innerHeight,
                window.innerHeight * 7
              )}`,
            scrub: motion.scrub,
          },
        });
      });

      window.ScrollTrigger.refresh();
    };
  };

  const initWorks = () => {
    const grid = document.querySelector("[data-works-grid]");
    const modal = document.querySelector("[data-work-modal]");
    const modalImage = document.querySelector("[data-work-main-image]");
    const modalTitle = document.querySelector("[data-work-title]");
    const modalStatus = document.querySelector("[data-work-status]");
    const modalSpecs = document.querySelector("[data-work-specs]");
    const modalDescription = document.querySelector("[data-work-description]");
    const modalPrice = document.querySelector("[data-work-price]");
    const purchaseButton = document.querySelector(".purchase-button");
    const purchaseNote = document.querySelector("[data-purchase-note]");
    const thumbs = document.querySelector("[data-work-thumbs]");
    const closeWorkButton = document.querySelector("[data-close-work]");
    const openViewerButton = document.querySelector("[data-open-viewer]");
    const viewer = document.querySelector("[data-image-viewer]");
    const viewerStage = document.querySelector("[data-viewer-stage]");
    const viewerImage = document.querySelector("[data-viewer-image]");
    const viewerCount = document.querySelector("[data-viewer-count]");
    const closeViewerButton = document.querySelector("[data-close-viewer]");
    const prevViewerButton = document.querySelector("[data-viewer-prev]");
    const nextViewerButton = document.querySelector("[data-viewer-next]");

    if (
      !grid ||
      !modal ||
      !modalImage ||
      !modalTitle ||
      !modalStatus ||
      !modalSpecs ||
      !modalDescription ||
      !modalPrice ||
      !purchaseButton ||
      !purchaseNote ||
      !thumbs ||
      !closeWorkButton ||
      !openViewerButton ||
      !viewer ||
      !viewerStage ||
      !viewerImage ||
      !viewerCount ||
      !closeViewerButton ||
      !prevViewerButton ||
      !nextViewerButton
    ) {
      return;
    }

    let activeWork = works[0];
    let activeImages = uniqueImages(activeWork);
    let activeImageIndex = 0;
    let lastFocusedElement = null;

    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let dragStartX = 0;
    let dragStartY = 0;
    let lastTapTime = 0;
    let hasMoved = false;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    const activePointers = new Map();

    const specRows = [
      ["制作年", "year"],
      ["素材、技法", "technique"],
      ["サイズ", "size"],
      ["原画 / 複製", "edition"],
      ["額装", "framed"],
      ["販売状態", "status"],
      ["送料", "shipping"],
    ];

    const renderWorks = () => {
      grid.innerHTML = works
        .map((work, index) => {
          const status = displayStatus(work.status);
          const layout = work.layout || "square";
          const align = ["left", "center", "right"][index % 3];

          // バッジを判定
          let badgeHTML = "";
          if (work.status === "sold") {
            badgeHTML = '<span class="work-card__badge work-card__badge--sold">SOLD</span>';
          } else if (work.priceValue) {
            badgeHTML = `<span class="work-card__badge">${escapeHtml(work.price)}</span>`;
          }

          return `
            <button
              class="work-card work-card--${layout} work-card--${align}"
              type="button"
              data-work-id="${escapeHtml(work.id)}"
              style="--work-delay: ${Math.min(index * 70, 420)}ms"
            >
              <span class="work-card__image-wrap">
                <img class="work-card__image" src="${escapeHtml(work.mainImage)}" alt="${escapeHtml(work.title)}" loading="lazy" />
                ${badgeHTML}
              </span>
              <span class="work-card__meta">
                <span class="work-card__number">${escapeHtml(work.number)}</span>
                <span class="work-card__title">${escapeHtml(work.title)}</span>
                <span class="work-card__price">${escapeHtml(work.price)}</span>
                <span class="work-card__status">${status}</span>
              </span>
            </button>
          `;
        })
        .join("");
    };

    const revealWorksOnScroll = () => {
      const cards = [...grid.querySelectorAll(".work-card")];

      if (isReducedMotion || !("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      );

      cards.forEach((card) => observer.observe(card));
    };

    const renderModalImage = (index) => {
      activeImageIndex = (index + activeImages.length) % activeImages.length;
      modalImage.src = activeImages[activeImageIndex];
      modalImage.alt = activeWork.title;

      thumbs.querySelectorAll(".work-thumb").forEach((thumb, thumbIndex) => {
        thumb.classList.toggle("is-active", thumbIndex === activeImageIndex);
      });
    };

    const openWork = (workId) => {
      const foundWork = works.find((work) => work.id === workId);
      if (!foundWork) {
        return;
      }

      activeWork = foundWork;
      activeImages = uniqueImages(activeWork);
      activeImageIndex = 0;
      lastFocusedElement = document.activeElement;

      modalStatus.textContent = displayStatus(activeWork.status);
      modalTitle.textContent = activeWork.title;
      modalDescription.textContent = activeWork.description;
      modalPrice.textContent = activeWork.price;
      purchaseNote.textContent = "";
      
      if (activeWork.status === "sold") {
        purchaseButton.textContent = "✓ SOLD";
        purchaseButton.disabled = true;
        purchaseButton.setAttribute("aria-disabled", "true");
      } else {
        purchaseButton.textContent = "BUY NOW";
        purchaseButton.disabled = false;
        purchaseButton.setAttribute("aria-disabled", "false");
      }
      modalSpecs.innerHTML = specRows
        .map(([label, key]) => {
          const value = key === "status" ? displayStatus(activeWork.status) : activeWork[key];
          return `<dt>${label}</dt><dd>${escapeHtml(value)}</dd>`;
        })
        .join("");
      thumbs.innerHTML = activeImages
        .map(
          (image, index) => `
            <button class="work-thumb" type="button" data-thumb-index="${index}" aria-label="${escapeHtml(activeWork.title)} image ${index + 1}">
              <img src="${escapeHtml(image)}" alt="${escapeHtml(activeWork.title)} image ${index + 1}" />
            </button>
          `
        )
        .join("");

      renderModalImage(0);
      modal.scrollTop = 0;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      lockBody();
      closeWorkButton.focus({ preventScroll: true });
    };

    const closeWork = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      unlockBody();

      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus({ preventScroll: true });
      }
    };

    const applyViewerTransform = () => {
      viewerImage.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    };

    const resetViewerTransform = () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      applyViewerTransform();
    };

    const updateViewerImage = () => {
      viewerImage.src = activeImages[activeImageIndex];
      viewerImage.alt = activeWork.title;
      viewerCount.textContent = `${activeImageIndex + 1} / ${activeImages.length}`;
      renderModalImage(activeImageIndex);
      resetViewerTransform();
    };

    const openViewer = (index = activeImageIndex) => {
      activeImageIndex = index;
      viewer.classList.add("is-open");
      viewer.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-layer-open", "is-viewer-open");
      updateViewerImage();
      closeViewerButton.focus({ preventScroll: true });
    };

    const closeViewer = () => {
      viewer.classList.remove("is-open");
      viewer.setAttribute("aria-hidden", "true");
      activePointers.clear();
      resetViewerTransform();
      document.body.classList.remove("is-viewer-open");
      unlockBody();
      openViewerButton.focus({ preventScroll: true });
    };

    const showViewerImage = (direction) => {
      activeImageIndex = (activeImageIndex + direction + activeImages.length) % activeImages.length;
      updateViewerImage();
    };

    const clampPan = () => {
      const stageRect = viewerStage.getBoundingClientRect();
      const maxX = Math.max(0, (stageRect.width * (scale - 1)) / 2);
      const maxY = Math.max(0, (stageRect.height * (scale - 1)) / 2);
      translateX = Math.min(maxX, Math.max(-maxX, translateX));
      translateY = Math.min(maxY, Math.max(-maxY, translateY));
    };

    const getPointerDistance = () => {
      const points = [...activePointers.values()];
      if (points.length < 2) {
        return 0;
      }

      return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    };

    const onPointerDown = (event) => {
      if (!viewer.classList.contains("is-open")) {
        return;
      }

      viewerStage.setPointerCapture(event.pointerId);
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      dragStartX = translateX;
      dragStartY = translateY;
      hasMoved = false;

      if (activePointers.size === 2) {
        pinchStartDistance = getPointerDistance();
        pinchStartScale = scale;
      }
    };

    const onPointerMove = (event) => {
      if (!activePointers.has(event.pointerId)) {
        return;
      }

      event.preventDefault();
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (activePointers.size >= 2) {
        const distance = getPointerDistance();
        if (pinchStartDistance > 0) {
          scale = Math.min(4, Math.max(1, pinchStartScale * (distance / pinchStartDistance)));
          if (scale === 1) {
            translateX = 0;
            translateY = 0;
          }
          clampPan();
          applyViewerTransform();
        }
        hasMoved = true;
        return;
      }

      const deltaX = event.clientX - pointerStartX;
      const deltaY = event.clientY - pointerStartY;
      hasMoved = hasMoved || Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8;

      if (scale > 1) {
        translateX = dragStartX + deltaX;
        translateY = dragStartY + deltaY;
        clampPan();
        applyViewerTransform();
      }
    };

    const onPointerUp = (event) => {
      if (!activePointers.has(event.pointerId)) {
        return;
      }

      activePointers.delete(event.pointerId);
      const deltaX = event.clientX - pointerStartX;
      const deltaY = event.clientY - pointerStartY;

      if (scale === 1 && hasMoved && Math.abs(deltaX) > 64 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        showViewerImage(deltaX < 0 ? 1 : -1);
        return;
      }

      const now = Date.now();
      const isTap = !hasMoved || (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8);
      if (isTap && now - lastTapTime < 300) {
        scale = scale > 1 ? 1 : 2.25;
        translateX = 0;
        translateY = 0;
        applyViewerTransform();
        lastTapTime = 0;
      } else if (isTap) {
        lastTapTime = now;
      }
    };

    const handlePurchase = () => {
      if (activeWork.status === "sold") {
        purchaseNote.textContent = "申し訳ございません。この作品は売約済みです。";
        purchaseButton.setAttribute("aria-disabled", "true");
        purchaseButton.disabled = true;
        return;
      }

      if (activeWork.paymentUrl) {
        purchaseNote.textContent = "お支払い画面に遷移します...";
        window.open(activeWork.paymentUrl, "_blank", "noopener,noreferrer");
        return;
      }

      purchaseNote.textContent = "✓ ご購入ありがとうございます。詳細はメールでお知らせします。";
      purchaseButton.textContent = "お問い合わせする";
      purchaseButton.addEventListener("click", () => {
        window.location.href = "mailto:contact@toka-world.com?subject=作品購入について";
      }, { once: true });
    };

    renderWorks();
    revealWorksOnScroll();

    grid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-work-id]");
      if (card) {
        openWork(card.dataset.workId);
      }
    });

    thumbs.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-thumb-index]");
      if (thumb) {
        renderModalImage(Number(thumb.dataset.thumbIndex));
      }
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeWork();
      }
    });

    closeWorkButton.addEventListener("click", closeWork);
    openViewerButton.addEventListener("click", () => openViewer(activeImageIndex));
    purchaseButton.addEventListener("click", handlePurchase);
    closeViewerButton.addEventListener("click", closeViewer);
    prevViewerButton.addEventListener("click", () => showViewerImage(-1));
    nextViewerButton.addEventListener("click", () => showViewerImage(1));

    viewerStage.addEventListener("pointerdown", onPointerDown);
    viewerStage.addEventListener("pointermove", onPointerMove);
    viewerStage.addEventListener("pointerup", onPointerUp);
    viewerStage.addEventListener("pointercancel", onPointerUp);
    viewerStage.addEventListener(
      "touchmove",
      (event) => {
        if (viewer.classList.contains("is-open")) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    document.addEventListener("keydown", (event) => {
      if (viewer.classList.contains("is-open")) {
        trapFocus(event, viewer);
      } else if (modal.classList.contains("is-open")) {
        trapFocus(event, modal);
      }

      if (event.key === "Escape" && viewer.classList.contains("is-open")) {
        closeViewer();
      } else if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeWork();
      } else if (viewer.classList.contains("is-open") && event.key === "ArrowRight") {
        showViewerImage(1);
      } else if (viewer.classList.contains("is-open") && event.key === "ArrowLeft") {
        showViewerImage(-1);
      }
    });
  };

  const initProfileFallback = () => {
    const profileImage = document.querySelector("[data-profile-image]");
    if (!profileImage) {
      return;
    }

    profileImage.addEventListener("error", () => {
      profileImage.removeAttribute("src");
      profileImage.alt = "";
      profileImage.closest(".about-toka__portrait")?.classList.add("is-missing");
    });
  };

  initHero();
  initWorks();
  initProfileFallback();
})();
