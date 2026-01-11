// スクロール時のフェードインアニメーション
document.addEventListener('DOMContentLoaded', () => {
    // アニメーション対象の要素を取得
    const fadeElements = document.querySelectorAll('.empathy, .philosophy, .services, .story, .cta');

    // Intersection Observer の設定
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // 各要素を監視
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // スムーズスクロール（ボタンクリック時）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // # のみの場合はトップへスクロール
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // 対象要素が存在する場合のみスクロール
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // プロフィール展開機能
    const aboutToggle = document.getElementById('about-toggle');
    const aboutExpanded = document.getElementById('about-expanded');

    if (aboutToggle && aboutExpanded) {
        aboutToggle.addEventListener('click', () => {
            const isExpanded = aboutToggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // 閉じる
                aboutToggle.setAttribute('aria-expanded', 'false');
                aboutExpanded.hidden = true;
                aboutToggle.innerHTML = 'プロフィールをもう少し読む <span class="arrow">↓</span>';
            } else {
                // 開く
                aboutToggle.setAttribute('aria-expanded', 'true');
                aboutExpanded.hidden = false;
                aboutToggle.innerHTML = '閉じる <span class="arrow">↑</span>';

                // スムーズにスクロール（展開したコンテンツの先頭へ）
                setTimeout(() => {
                    aboutExpanded.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    }

    // 共感セクション：1行ずつスクロールトリガー
    const empathyLines = document.querySelectorAll('.empathy-line');

    const empathyObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const empathyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                // 各行のインデックスを取得
                const index = Array.from(empathyLines).indexOf(entry.target);
                // 0.15s ずつ delay を付けて表示
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                // 一度表示したら監視を解除
                empathyObserver.unobserve(entry.target);
            }
        });
    }, empathyObserverOptions);

    // 各行を監視
    empathyLines.forEach(line => {
        empathyObserver.observe(line);
    });
});
