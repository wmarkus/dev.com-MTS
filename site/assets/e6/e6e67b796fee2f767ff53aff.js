import{i,r as e,e as r,f as l,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as a,K as t,M as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as o,s as d,a as c,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as p}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const v="var(--ds-app-color-base-default-bg-opt1, #f4fafd)",g="block",x="100vh",f="100vh",w="calc(1 / 6 * 100%)",u="20vh",k="75vh",y="668px",b="121px",$="410px",z="410px",M="26px solid white",_="blur(10px)",S="274px",j="278px",H="216px",Y="121px",E="12%",C="668px",W="20",q="40",I="216px",O="121px",T=i`
  :host {
    --immersive-scroll-height: var(
      --ds-immersive-scroll-height,
      ${e(x)}
    );
    --immersive-scroll-max-height: var(
      --ds-immersive-scroll-max-height,
      ${e(f)}
    );
    --immersive-scroll-col-width: var(
      --ds-immersive-scroll-col-width,
      ${e(w)}
    );

    display: var(--ds-immersive-scroll-display, ${e(g)});
    overflow: clip;
  }

  .immersive-scroll {
    --immersive-scroll-height: var(
      --ds-immersive-scroll-height,
      ${e(x)}
    );
    --immersive-scroll-max-height: var(
      --ds-immersive-scroll-max-height,
      ${e(f)}
    );
    --immersive-scroll-col-width: var(
      --ds-immersive-scroll-col-width,
      ${e(w)}
    );
  }

  .sticky-full .sticky {
    width: 100%;
    height: var(--immersive-scroll-height);
    max-height: var(--immersive-scroll-max-height);
  }

  .sticky-wrapper {
    --sticky-wrapper-pointer-events: var(--ds-immersive-scroll-pointer-events, initial);
    position: relative;
    pointer-events: var(--sticky-wrapper-pointer-events);
  }

  .sticky {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background: var(
      --ds-immersive-scroll-background,
      ${e(v)}
    );
    z-index: var(--ds-z-index-0, 0);
  }

  .background-media {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: var(--ds-z-index-0, 0);
  }

  ::slotted([slot='background-media']) {
    --ds-media-aspect-ratio: auto;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-max-width: 100%;
    --ds-media-max-height: 100%;
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: 100%;
    --ds-media-picture-width: 100%;
    --ds-media-picture-max-width: 100%;
    --ds-media-picture-height: 100%;

    width: 100%;
    height: 100%;
  }

  .overflow {
    transform: translateZ(0);
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--ds-z-index-10, 10);
  }

  .timeline {
    position: relative;
    z-index: var(--ds-z-index-10, 10);
    margin-top: calc(var(--immersive-scroll-max-height) * -1);
  }

  .timeline-content {
    --timeline-content-position: relative;
    --timeline-content-additional-height: var(
      --ds-immersive-scroll-timeline-additional-height,
      ${e(u)}
    );
    --timeline-content-height: calc(
      var(--immersive-scroll-max-height) + var(--timeline-content-additional-height)
    );
    --timeline-content-last-img-pos-top: var(
      --ds-immersive-scroll-last-img-top,
      ${e(y)}
    );
    --timeline-content-last-img-height: var(
      --ds-immersive-scroll-last-img-height,
      ${e(b)}
    );
    --timeline-content-min-height: calc(
      var(--timeline-content-last-img-pos-top) + var(--timeline-content-last-img-height)
    );

    height: var(--timeline-content-height);
    overflow: visible;
    position: var(--timeline-content-position);
    display: flex;
    min-height: var(--timeline-content-min-height);
  }

  .timeline-buffer {
    --timeline-content-height: var(
      --ds-immersive-scroll-timeline-buffer-height,
      ${e(k)}
    );
    --timeline-content-min-height: 0;
  }

  .ripple-container {
    width: var(
      --ds-immersive-scroll-ripple-container-width,
      ${e($)}
    );
    height: var(
      --ds-immersive-scroll-ripple-container-height,
      ${e(z)}
    );
    position: relative;
    z-index: var(--ds-z-index-10, 10);
  }

  .ripple {
    --immersive-scroll-ripple-width: var(--ds-immersive-scroll-ripple-width, 100%);
    --immersive-scroll-ripple-height: var(--ds-immersive-scroll-ripple-height, 100%);

    width: var(--immersive-scroll-ripple-width);
    height: var(--immersive-scroll-ripple-height);
    border-radius: 100%;
    background-color: transparent;
    border: var(--ds-immersive-scroll-ripple-border, ${e(M)});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: var(
      --ds-immersive-scroll-ripple-shadow,
      10px 10px 22px 0 #3754aa73,
      10px 10px 22px 0 #3754aa73 inset,
      -10px -10px 22px #fff,
      -10px -10px 22px #fff inset,
      10px 10px 17px #fff inset
    );
    filter: var(--ds-immersive-scroll-ripple-filter, ${e(_)});
  }

  .ripple:nth-child(2) {
    --immersive-scroll-ripple-width: var(--ds-immersive-scroll-ripple-2-width, 150%);
    --immersive-scroll-ripple-height: var(--ds-immersive-scroll-ripple-2-height, 150%);
  }

  .ripple:nth-child(3) {
    --immersive-scroll-ripple-width: var(--ds-immersive-scroll-ripple-3-width, 200%);
    --immersive-scroll-ripple-height: var(--ds-immersive-scroll-ripple-3-height, 200%);
  }

  .ripple-media {
    --ripple-img-max-width: var(
      --ds-immersive-scroll-ripple-media-width,
      ${e(S)}
    );
    --ripple-img-max-height: var(
      --ds-immersive-scroll-ripple-media-height,
      ${e(j)}
    );

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: var(--ripple-img-max-width);
    max-height: var(--ripple-img-max-width);
    width: 100%;
    height: 100%;
  }

  ::slotted([slot='ripple-media']) {
    --ds-media-width: var(--ds-immersive-scroll-ripple-slot-width, 100%);
    --ds-media-height: var(--ds-immersive-scroll-ripple-slot-height, 100%);
  }

  .scroll-media {
    --scroll-img-display: var(--ds-immersive-scroll-media-display, flex);
    --scroll-img-width: var(
      --ds-immersive-scroll-media-width,
      ${e(H)}
    );
    --scroll-img-height: var(
      --ds-immersive-scroll-media-height,
      ${e(Y)}
    );
    --scroll-img-max-width: calc(var(--scroll-img-width) + calc(var(--ds-app-space-micro-l, 16px) * 2));
    --scroll-img-max-height: calc(var(--scroll-img-height) + calc(var(--ds-app-space-micro-l, 16px) * 2));
    --scroll-img-pos-left: var(--ds-immersive-scroll-media-left, var(--immersive-scroll-col-width));
    --scroll-img-pos-right: var(
      --ds-immersive-scroll-media-right,
      ${e(E)}
    );
    --scroll-img-pos-top: var(
      --ds-immersive-scroll-media-top,
      ${e(C)}
    );
    --scroll-img-pos-top-total: calc(
      var(--immersive-scroll-max-height) + var(--scroll-img-pos-top)
    );
    --scroll-img-z-index: var(
      --ds-immersive-scroll-media-z-index,
      var(--ds-z-index-20, ${e(W)})
    );

    display: var(--scroll-img-display);
    max-width: var(--scroll-img-max-width);
    max-height: var(--scroll-img-max-height);
    width: 100%;
    height: 100%;
    position: absolute;
    inset-inline-start: var(--scroll-img-pos-left);
    inset-inline-end: var(--scroll-img-pos-right);
    top: var(--scroll-img-pos-top);
    z-index: var(--scroll-img-z-index);
  }

  .scroll-media-1 {
    --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 2);
    top: var(--ds-immersive-scroll-media-1-top, 136px);
  }

  .scroll-media-2 {
    --scroll-img-width: var(--ds-immersive-scroll-media-2-width, 104px);
    --scroll-img-height: var(--ds-immersive-scroll-media-2-height, 59px);
    --scroll-img-pos-left: unset;
    --scroll-img-pos-right: calc(var(--immersive-scroll-col-width) * 1);
    top: var(--ds-immersive-scroll-media-2-top, 559px);
  }

  .scroll-media-3 {
    --scroll-img-display: var(--ds-immersive-scroll-media-3-display, none);
  }

  .scroll-media-4 {
    --scroll-img-width: var(--ds-immersive-scroll-media-4-width, 104px);
    --scroll-img-height: var(--ds-immersive-scroll-media-4-height, 59px);
    --scroll-img-pos-left: 0;
    --scroll-img-pos-right: unset;
    --scroll-img-z-index: var(--ds-immersive-scroll-media-4-z-index, var(--ds-z-index-30, 30));
    top: var(--ds-immersive-scroll-media-4-top, 629px);
  }

  .scroll-media-5 {
    --scroll-img-width: var(--ds-immersive-scroll-media-5-width, 168px);
    --scroll-img-height: var(--ds-immersive-scroll-media-5-height, 95px);
    --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 2);
    --scroll-img-z-index: var(--ds-immersive-scroll-media-5-z-index, var(--ds-z-index-30, 30));
    top: var(--ds-immersive-scroll-media-5-top, 48px);
  }

  .scroll-media-6 {
    --scroll-img-display: var(--ds-immersive-scroll-media-6-display, none);
  }

  .scroll-media-7 {
    --scroll-img-width: var(--ds-immersive-scroll-media-7-width, 176px);
    --scroll-img-height: var(--ds-immersive-scroll-media-7-height, 103px);
    --scroll-img-pos-left: 0;
    --scroll-img-pos-right: unset;
    top: var(--ds-immersive-scroll-media-7-top, 210px);
  }

  .scroll-media-8 {
    --scroll-img-display: var(--ds-immersive-scroll-media-8-display, none);
  }

  .scroll-media-9 {
    --scroll-img-width: var(--ds-immersive-scroll-media-9-width, 160px);
    --scroll-img-height: var(--ds-immersive-scroll-media-9-height, 90px);
    --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 1);
    top: var(--ds-immersive-scroll-media-9-top, 499px);
  }

  .scroll-media-10 {
    --scroll-img-width: var(--ds-immersive-scroll-media-10-width, 176px);
    --scroll-img-height: var(--ds-immersive-scroll-media-10-height, 99px);
    --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 2);
    --scroll-img-z-index: var(--ds-immersive-scroll-media-10-z-index, var(--ds-z-index-10, 10));
    top: var(--ds-immersive-scroll-media-10-top, 424px);
  }

  .scroll-media-11 {
    --scroll-img-width: var(--ds-immersive-scroll-media-11-width, 104px);
    --scroll-img-height: var(--ds-immersive-scroll-media-11-height, 59px);
    --scroll-img-pos-left: unset;
    --scroll-img-pos-right: calc(var(--immersive-scroll-col-width) * 1);
    --scroll-img-z-index: var(--ds-immersive-scroll-media-11-z-index, var(--ds-z-index-30, 30));
    top: var(--ds-immersive-scroll-media-11-top, 180px);
  }

  .featured-media {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: var(--immersive-scroll-height);
    max-width: 100%;
    max-height: var(--immersive-scroll-max-height);
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    z-index: var(
      --ds-immersive-scroll-featured-z-index,
      var(--ds-z-index-40, ${e(q)})
    );

    --video-animation-max-width: var(
      --ds-immersive-scroll-video-max-width,
      ${e(I)}
    );
    --video-animation-max-height: var(
      --ds-immersive-scroll-video-max-height,
      ${e(O)}
    );
    --ds-media-ump-height: var(--ds-immersive-scroll-ump-height, 100%);
    --ds-media-ump-min-width: var(--ds-immersive-scroll-ump-min-width, 0px);
  }

  ::slotted([slot='featured-media']) {
    padding: var(--ds-immersive-scroll-featured-padding, 0);
  }

  .featured-media-highlight {
    --ds-media-border-width: var(--ds-border-xs, 0.0625rem);
    --ds-media-border-style: solid;
    --ds-media-border-color: var(--ds-app-color-surface-glass-border-default, rgba(255, 255, 255, 0.1));
    --ds-media-backdrop-filter: var(--ds-blur-glass, 5rem);
    --ds-media-background: var(--ds-app-color-surface-glass-bg-default, rgba(255, 255, 255, 0.4));

    display: var(--ds-media-display, flex);
    max-width: var(--ds-media-max-width, 100%);
    border-radius: 1.5rem;
    backdrop-filter: var(--ds-media-backdrop-filter, initial);
    border-style: var(--ds-media-border-style, initial);
    border-color: var(--ds-media-border-color, initial);
    border-width: var(--ds-media-border-width, initial);
    background: var(--ds-media-background, initial);
  }

  ${i`
  .ripple {
    animation: ripple var(--ds-immersive-scroll-ripple-duration, 4s) infinite ease-in;
  }

  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    5% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
`}

  ${i`
  .scroll-media-1 {
    animation: linear move-up both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes move-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-125vh);
    }
  }
`}

  ${i`
  .scroll-media-2 {
    animation: linear move-up-fast-quarter both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes move-up-fast-quarter {
    0% {
      transform: translateY(0);
    }
    50%,
    100% {
      transform: translateY(-100vh);
    }
  }
`}

  ${i`
  .scroll-media-3 {
    animation: linear move-up-slow-quarter both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes move-up-slow-quarter {
    0%,
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-31.25vh);
    }
  }
`}

  ${i`
  .scroll-media-4 {
    animation: linear move-up-slow-half both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes move-up-slow-half {
    0%,
    25% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-62.5vh);
    }
  }
`}

  ${i`
  .scroll-media-5 {
    animation: linear move-up-fast-quarter both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .scroll-media-6 {
    animation: linear move-up both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .scroll-media-7 {
    animation: linear move-up-fast-half both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes move-up-fast-half {
    0% {
      transform: translateY(0);
    }
    25%,
    100% {
      transform: translateY(-100vh);
    }
  }
`}

  ${i`
  .scroll-media-8 {
    animation: linear move-up-slow-half both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .scroll-media-9 {
    animation: linear move-up-fast-half both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .scroll-media-10 {
    animation: linear move-up-fast-quarter both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .scroll-media-11 {
    animation: linear move-up-fast-quarter both;
    animation-timeline: view();
    animation-range: cover 0% exit 0%;
    animation-duration: 1ms;
  }
`}

  ${i`
  .featured-media {
    animation: linear show-video both;
    animation-timeline: view();
    animation-range: contain 0% exit 0%;
    animation-duration: 1ms;
  }

  @keyframes show-video {
    0% {
      max-width: var(--video-animation-max-width);
      max-height: var(--video-animation-max-height);
    }
    100% {
      max-width: 100%;
      max-height: 100vh;
    }
  }
`}

  ${i`
  .featured-media-highlight {
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;
    animation-name: media-highlight;
    animation-timeline: view();
    animation-range: contain exit 0%;
    animation-duration: 1ms;
  }

  @keyframes media-highlight {
    0% {
      padding: var(--ds-app-space-micro-l, 1rem);
    }
    75%,
    100% {
      padding: 0;
    }
  }
`}

  ${i`
  @media (prefers-reduced-motion: reduce) {
    .ripple,
    .scroll-media,
    .featured-media,
    .featured-media-highlight {
      animation: none;
    }

    .featured-media {
      max-width: var(--video-animation-max-width);
      max-height: var(--video-animation-max-height);
    }

    .featured-media-highlight {
      padding: var(--ds-app-space-micro-l, 1rem);
    }
  }

  @supports not (animation-timeline: view()) {
    .scroll-media,
    .featured-media,
    .featured-media-highlight {
      animation: none;
    }

    .featured-media {
      max-width: var(--video-animation-max-width);
      max-height: var(--video-animation-max-height);
    }

    .featured-media-highlight {
      padding: var(--ds-app-space-micro-l, 1rem);
    }
  }
`}
`,A={lastImgTop:"1266px",lastImgHeight:"198px",rippleMediaWidth:"562px",rippleMediaHeight:"473px",scrollMediaWidth:"370px",scrollMediaHeight:"208px",scrollMediaTop:"136px",videoMaxWidth:"800px",videoMaxHeight:"451px"},D={videoStartWidth:"calc(1 / 24 * 100% * 6)",videoStartHeight:"calc(1 / 24 * 100% * 2)"},F=i`
  @media screen and (min-width: ${e(h.md)}) {
    :host,
    .immersive-scroll {
      --immersive-scroll-col-width: var(
        --ds-immersive-scroll-col-width,
        calc(1 / 12 * 100%)
      );
    }

    .timeline-content {
      --timeline-content-last-img-pos-top: var(
        --ds-immersive-scroll-desktop-last-img-top,
        ${e(A.lastImgTop)}
      );
      --timeline-content-last-img-height: var(
        --ds-immersive-scroll-desktop-last-img-height,
        ${e(A.lastImgHeight)}
      );
      --timeline-content-min-height: calc(
        var(--timeline-content-last-img-pos-top) + var(--timeline-content-last-img-height)
      );
    }

    .ripple-media {
      --ripple-img-max-width: var(
        --ds-immersive-scroll-desktop-ripple-width,
        ${e(A.rippleMediaWidth)}
      );
      --ripple-img-max-height: var(
        --ds-immersive-scroll-desktop-ripple-height,
        ${e(A.rippleMediaHeight)}
      );
    }

    .scroll-media {
      --scroll-img-width: var(
        --ds-immersive-scroll-desktop-media-width,
        ${e(A.scrollMediaWidth)}
      );
      --scroll-img-height: var(
        --ds-immersive-scroll-desktop-media-height,
        ${e(A.scrollMediaHeight)}
      );
      --scroll-img-pos-top: var(
        --ds-immersive-scroll-desktop-media-top,
        ${e(A.scrollMediaTop)}
      );
      --scroll-img-max-width: calc(var(--scroll-img-width) + calc(var(--ds-app-space-micro-l, 16px) * 2));
      --scroll-img-max-height: calc(var(--scroll-img-height) + calc(var(--ds-app-space-micro-l, 16px) * 2));
    }

    .scroll-media-1 {
      --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 2);
      top: var(--ds-immersive-scroll-desktop-media-1-top, 136px);
    }

    .scroll-media-2 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-2-width, 149px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-2-height, 84px);
      --scroll-img-pos-right: calc(var(--immersive-scroll-col-width) * 2);
      top: var(--ds-immersive-scroll-desktop-media-2-top, 275px);
    }

    .scroll-media-3 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-3-width, 348px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-3-height, 196px);
      --scroll-img-pos-left: 0;
      --scroll-img-z-index: var(--ds-immersive-scroll-desktop-media-3-z-index, var(--ds-z-index-30, 30));
      --scroll-img-display: var(--ds-immersive-scroll-desktop-media-3-display, flex);
      top: var(--ds-immersive-scroll-desktop-media-3-top, 313px);
    }

    .scroll-media-4 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-4-width, 400px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-4-height, 225px);
      --scroll-img-pos-left: unset;
      --scroll-img-pos-right: 0;
      top: var(--ds-immersive-scroll-desktop-media-4-top, 384px);
    }

    .scroll-media-5 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-5-width, 350px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-5-height, 197px);
      --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 7);
      top: var(--ds-immersive-scroll-desktop-media-5-top, 482px);
    }

    .scroll-media-6 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-6-width, 299px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-6-height, 168px);
      --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 6);
      --scroll-img-display: var(--ds-immersive-scroll-desktop-media-6-display, flex);
      top: var(--ds-immersive-scroll-desktop-media-6-top, 668px);
    }

    .scroll-media-7 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-7-width, 283px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-7-height, 159px);
      --scroll-img-pos-left: unset;
      --scroll-img-pos-right: calc(var(--immersive-scroll-col-width) * 3);
      top: var(--ds-immersive-scroll-desktop-media-7-top, 840px);
    }

    .scroll-media-8 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-8-width, 306px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-8-height, 172px);
      --scroll-img-pos-left: 0;
      --scroll-img-z-index: var(--ds-immersive-scroll-desktop-media-8-z-index, var(--ds-z-index-30, 30));
      --scroll-img-display: var(--ds-immersive-scroll-desktop-media-8-display, flex);
      top: var(--ds-immersive-scroll-desktop-media-8-top, 937px);
    }

    .scroll-media-9 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-9-width, 339px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-9-height, 191px);
      --scroll-img-pos-left: calc(var(--immersive-scroll-col-width) * 2);
      top: var(--ds-immersive-scroll-desktop-media-9-top, 1079px);
    }

    .scroll-media-10 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-10-width, 306px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-10-height, 172px);
      --scroll-img-pos-left: 0;
      top: var(--ds-immersive-scroll-desktop-media-10-top, 1197px);
    }

    .scroll-media-11 {
      --scroll-img-width: var(--ds-immersive-scroll-desktop-media-11-width, 352px);
      --scroll-img-height: var(--ds-immersive-scroll-desktop-media-11-height, 198px);
      top: var(--ds-immersive-scroll-desktop-media-11-top, 1266px);
    }

    .featured-media {
      --video-animation-max-width: var(
        --ds-immersive-scroll-desktop-video-width,
        ${e(A.videoMaxWidth)}
      );
      --video-animation-max-height: var(
        --ds-immersive-scroll-desktop-video-height,
        ${e(A.videoMaxHeight)}
      );
    }
  }

  @media screen and (min-width: ${e(h.lg)}) {
    :host,
    .immersive-scroll {
      --immersive-scroll-col-width: var(
        --ds-immersive-scroll-col-width,
        calc(1 / 24 * 100%)
      );
    }

    .featured-media {
      --video-animation-start-width: var(
        --ds-immersive-scroll-large-video-start-width,
        ${e(D.videoStartWidth)}
      );
      --video-animation-start-height: var(
        --ds-immersive-scroll-large-video-start-height,
        ${e(D.videoStartHeight)}
      );
    }
  }
`;var P=Object.defineProperty,R=Object.getOwnPropertyDescriptor,B=Object.getPrototypeOf,K=Reflect.get,Z=(i,e,r,l)=>{for(var s,a=l>1?void 0:l?R(e,r):e,t=i.length-1;t>=0;t--)(s=i[t])&&(a=(l?s(e,r,a):s(a))||a);return l&&a&&P(e,r,a),a},G=(i,e,r)=>K(B(i),r,e);const J="reimagine-immersive-scroll";let L=class extends a{constructor(){super(...arguments),this._rippleMediaEmpty=!0,this._featuredMediaEmpty=!0}_handleBackgroundMediaSlotChange(){const i=this._backgroundMediaSlot.filter(i=>o(i,p));d(i,{"aspect-ratio":m.ratioFluid,"object-fit":t.cover})}_handleRippleMediaSlotChange(){this._rippleMediaEmpty=0===this._rippleMediaSlot.length}_handleDefaultSlotChange(){c(this,"reimagine-media",'[slot^="scroll-media-"]').forEach(i=>{d(i,{type:"highlight--glass","aspect-ratio":"16-9"})})}_handleFeaturedMediaSlotChange(){this._featuredMediaEmpty=0===this._featuredMediaSlot.length;const i=this._featuredMediaSlot.filter(i=>o(i,p))||[];d(i,{type:"highlight--glass","video-fit":"cover",video:""})}render(){return s`
      <div class="immersive-scroll sticky-full">
        <div class="sticky-wrapper">
          <div class="sticky">
            <div part="background-media" class="background-media">
              <slot
                name="background-media"
                @slotchange="${this._handleBackgroundMediaSlotChange}"
              ></slot>
            </div>
            <div class="overflow">
              <div class="ripple-container">
                <div class="ripple"></div>
                <div class="ripple"></div>
                <div class="ripple"></div>
                <div
                  part="ripple-media"
                  class="ripple-media"
                  style="${this._rippleMediaEmpty?"display: none;":""}"
                >
                  <slot
                    name="ripple-media"
                    @slotchange="${this._handleRippleMediaSlotChange}"
                  ></slot>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline">
            <div class="timeline-content timeline-buffer" aria-hidden="true"></div>
            <div class="timeline-content">
              ${Array.from({length:11},(i,e)=>s`
                  <div class="scroll-media scroll-media-${e+1}">
                    <slot
                      name="scroll-media-${e+1}"
                      @slotchange="${this._handleDefaultSlotChange}"
                    ></slot>
                  </div>
                `)}
              <div
                part="featured-media"
                class="featured-media"
                style="${this._featuredMediaEmpty?"display: none;":""}"
              >
                <div class="featured-media-highlight">
                  <slot
                    name="featured-media"
                    @slotchange="${this._handleFeaturedMediaSlotChange}"
                  ></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};L.styles=[...Array.isArray(G(L,L,"styles"))?G(L,L,"styles"):G(L,L,"styles")?[G(L,L,"styles")]:[],T,F],Z([r({slot:"background-media"})],L.prototype,"_backgroundMediaSlot",2),Z([r({slot:"ripple-media"})],L.prototype,"_rippleMediaSlot",2),Z([r({slot:"featured-media"})],L.prototype,"_featuredMediaSlot",2),Z([l()],L.prototype,"_rippleMediaEmpty",2),Z([l()],L.prototype,"_featuredMediaEmpty",2),L=Z([n(J)],L);export{L as ImmersiveScroll,J as name};
