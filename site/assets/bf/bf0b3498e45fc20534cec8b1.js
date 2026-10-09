import{r as t,i as e,e as i,f as a,c as s,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as o,e as r,f as l,w as n,s as p,i as m,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{d as v,s as c}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{V as g,R as u,g as _}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{B as b}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";const y="auto",f="initial",S="initial",E="content-box",$="initial",w="initial",x="initial",k="initial",P="initial",C="initial",T="initial",A="initial",L="flex",R="fit-content",z="100%",I="auto",j="initial",B="initial",D="relative",V="0rem",M="0rem",O="0rem",q="0rem",H="0rem",F="initial",U="initial",N="auto",G="initial",W="initial",J="initial",K="initial",Q="initial",X="initial",Y="initial",Z="absolute",tt="0",et="0",it="0",at="0",st="100%",dt="100%",ot="var(--ds-media-asset-border-start-start-radius, 0)",rt="20",lt="absolute",nt="10",pt="20",mt="initial",ht="var(--ds-app-space-micro-m, 1rem)",vt="var(--ds-app-space-micro-m, 1rem)",ct="var(--ds-app-space-micro-m, 1rem)",gt="var(--ds-app-space-micro-m, 1rem)",ut="50%",_t="50%",bt="translate(-50%, -50%)",yt="var(--ds-app-space-micro-m, 1rem)",ft="var(--ds-app-space-micro-m, 1rem)",St="var(--ds-app-space-micro-m, 1rem)",Et="var(--ds-app-space-micro-m, 1rem)",$t=e`
  :host {
    aspect-ratio: var(--ds-media-aspect-ratio, ${t(y)});
    background: var(--ds-media-background, ${t(f)});
    backdrop-filter: var(--ds-media-backdrop-filter, ${t(S)});
    border-style: var(--ds-media-border-style, ${t(w)});
    border-color: var(--ds-media-border-color, ${t(x)});
    border-width: var(--ds-media-border-width, ${t(k)});
    box-sizing: var(--ds-media-box-sizing, ${t(E)}) !important;
    box-shadow: var(--ds-media-box-shadow, ${t($)});
    display: var(--ds-media-display, ${t(L)});
    width: var(--ds-media-width, ${t(R)});
    max-width: var(--ds-media-max-width, ${t(z)});
    height: var(--ds-media-height, ${t(I)});
    max-height: var(--ds-media-max-height, ${t(j)});
    object-fit: var(--ds-media-object-fit, ${t(B)});
    position: var(--ds-media-position, ${t(D)});
    overflow: var(--ds-media-overflow, ${t(U)});
    padding-inline-start: var(
      --ds-media-padding-inline-start,
      ${t(V)}
    );
    padding-inline-end: var(
      --ds-media-padding-inline-end,
      ${t(M)}
    );
    padding-block-start: var(
      --ds-media-padding-block-start,
      ${t(O)}
    );
    padding-block-end: var(
      --ds-media-padding-block-end,
      ${t(q)}
    );
    z-index: var(--ds-media-zindex, var(--ds-z-index-auto, ${t(F)}));
    margin-block-start: var(
      --ds-media-margin-block-start,
      ${t(H)}
    );
  }

  :host .media__asset {
    display: var(--ds-media-asset-display, ${t(G)});
    width: var(--ds-media-asset-width, ${t(X)});
    height: var(--ds-media-asset-height, ${t(Y)});
  }

  :host,
  :host([type='highlight--double-image']) ::slotted([slot='media__double-img']) {
    border-start-start-radius: var(
      --ds-media-border-start-start-radius,
      ${t(P)}
    );
    border-start-end-radius: var(
      --ds-media-border-start-end-radius,
      ${t(C)}
    );
    border-end-end-radius: var(
      --ds-media-border-end-end-radius,
      ${t(T)}
    );
    border-end-start-radius: var(
      --ds-media-border-end-start-radius,
      ${t(A)}
    );
  }

  :host([aspect-ratio='21-9']) {
    --ds-media-aspect-ratio: 21 / 9;
  }

  :host([aspect-ratio='16-9']) {
    --ds-media-aspect-ratio: 16 / 9;
  }

  :host([aspect-ratio='4-3']) {
    --ds-media-aspect-ratio: 4 / 3;
  }

  :host([aspect-ratio='1-1']) {
    --ds-media-aspect-ratio: 1 / 1;
  }

  :host([aspect-ratio='3-4']) {
    --ds-media-aspect-ratio: 3 / 4;
  }

  :host([aspect-ratio='2-3']) {
    --ds-media-aspect-ratio: 2 / 3;
  }

  :host([aspect-ratio='auto']) {
    --ds-media-aspect-ratio: auto;
  }

  :host([aspect-ratio='fluid']) {
    --ds-media-width: 100%;
  }

  :host([drop-shadow]) {
    --ds-media-box-shadow: var(
      --ds-elevation-level-6,
      0px 32px 64px rgba(0, 0, 0, 0.14) 0px 0px 8px rgba(0, 0, 0, 0.12)
    );
  }

  img,
  picture,
  ::slotted(img),
  ::slotted(picture) {
    --ds-media-asset-overflow: auto;

    aspect-ratio: var(--ds-media-aspect-ratio, ${t(y)});
    border-start-start-radius: var(
      --ds-media-asset-border-start-start-radius,
      ${t(W)}
    );
    border-start-end-radius: var(
      --ds-media-asset-border-start-end-radius,
      ${t(J)}
    );
    border-end-end-radius: var(
      --ds-media-asset-border-end-end-radius,
      ${t(K)}
    );
    border-end-start-radius: var(
      --ds-media-asset-border-end-start-radius,
      ${t(Q)}
    );
  }

  img,
  ::slotted(img) {
    display: var(--ds-media-display, flex);
    width: var(--ds-media-width, ${t(R)});
    max-width: var(--ds-media-max-width, ${t(z)});
    height: var(--ds-media-height, ${t(I)});
    max-height: var(--ds-media-max-height, ${t(j)});
    object-fit: var(--ds-media-object-fit, ${t(B)});
  }

  picture,
  ::slotted(picture) {
    display: var(--ds-media-picture-display, flex);
    width: var(
      --ds-media-picture-width,
      var(--ds-media-width, ${t(R)})
    );
    max-width: var(
      --ds-media-picture-max-width,
      var(--ds-media-max-width, ${t(z)})
    );
    height: var(
      --ds-media-picture-height,
      var(--ds-media-height, ${t(I)})
    );
  }

  ::slotted(iframe) {
    border: 0;
  }

  /* border-width */
  :host([border-width='xs']) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-xs, 0.25rem);
  }

  :host([border-width='s']) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-s, 0.5rem);
  }

  :host([border-width='m']) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
  }

  :host([border-width='l']) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-l, 1.5rem);
  }

  /* Object Fit */
  :host([object-fit='cover']) {
    --ds-media-object-fit: cover;
  }

  :host([object-fit='contain']) {
    --ds-media-object-fit: contain;
  }

  :host([object-fit='fill']) {
    --ds-media-object-fit: fill;
  }

  :host([object-fit='scale-down']) {
    --ds-media-object-fit: scale-down;
  }

  /* Highlight styles */
  :host([type^='highlight']) {
    --ds-media-border-start-start-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-border-start-end-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-border-end-start-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-border-end-end-radius: var(--ds-app-radii-l, 1.5rem);
    --ds-media-padding-inline-start: var(--ds-app-space-micro-3xl, 4.5rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-3xl, 4.5rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-3xl, 4.5rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-3xl, 4.5rem);
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-overflow: hidden;
  }

  /* Highlight + border-width */
  :host([type^='highlight'][border-width='xs']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-media-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-border-end-end-radius: var(--ds-app-radii-m, 1rem);
  }

  :host([type^='highlight'][border-width='s']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host([type^='highlight'][border-width='m']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-m, 1rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-m, 1rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-m, 1rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-m, 1rem);
  }

  :host([type^='highlight'][border-width='l']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-l, 1.5rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-l, 1.5rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-l, 1.5rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-l, 1.5rem);
  }

  /* Additional highlight */
  :host([type='highlight--double-image']) ::slotted([slot='media__double-img']) {
    position: absolute;
    z-index: var(--ds-z-index-0, 0);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :host([type='highlight--double-image']) ::slotted([slot='media__asset']) {
    position: relative;
    z-index: var(--ds-z-index-10, 10);
  }

  :host([surface]) {
    --ds-surface-border-radius: var(--ds-media-border-start-start-radius);
  }

  :host([type='highlight'][surface='glass']),
  :host([type='highlight'][surface='solid']) {
    --ds-surface-border-radius: var(--ds-media-border-start-start-radius);
  }

  :host([type='highlight'][surface='glass']),
  :host([type='highlight--glass']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-l);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-l);
    --ds-media-padding-block-start: var(--ds-app-space-micro-l);
    --ds-media-padding-block-end: var(--ds-app-space-micro-l);
    --ds-media-background: ${t(v.background)};
    --ds-media-border-width: ${t(v.borderWidth)};
    --ds-media-border-style: ${t(v.borderStyle)};
    --ds-media-border-color: ${t(v.borderColor)};
    --ds-media-backdrop-filter: ${t(v.backdropFilter)};
    --ds-surface-background: ${t(v.background)};
  }

  :host([type='highlight'][surface='solid']),
  :host([type='highlight--solid']) {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-m);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-m);
    --ds-media-padding-block-start: var(--ds-app-space-micro-m);
    --ds-media-padding-block-end: var(--ds-app-space-micro-m);
    --ds-media-background: ${t(c.background)};
    --ds-media-border-width: ${t(c.borderWidth)};
    --ds-media-border-style: ${t(c.borderStyle)};
    --ds-media-border-color: ${t(c.borderColor)};
    --ds-surface-background: ${t(c.background)};
  }

  :host([type='highlight']),
  :host([type='highlight'][surface='color']),
  :host([type='highlight--color']) {
    --ds-surface-background: var(--ds-app-color-base-special-bg-opt1-left, 'initial');
    --ds-media-background: var(--ds-app-color-base-special-bg-opt1-left, 'initial');
  }

  /* end additional highlight */

  :host([video]) .media__asset,
  :host([iframe]) .media__asset {
    display: flex;
    width: 100%;
  }

  :host([overlay]) .media__asset {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  :host([overlay]) .media__asset__overlay {
    position: var(
      --ds-media-overlay-position,
      ${t(Z)}
    );
    top: var(--ds-media-overlay-top, ${t(tt)});
    left: var(--ds-media-overlay-left, ${t(et)});
    right: var(
      --ds-media-overlay-right,
      ${t(it)}
    );
    bottom: var(
      --ds-media-overlay-bottom,
      ${t(at)}
    );
    width: var(
      --ds-media-overlay-width,
      ${t(st)}
    );
    height: var(
      --ds-media-overlay-height,
      ${t(dt)}
    );
    border-radius: ${t(ot)};
    z-index: var(
      --ds-media-overlay-zindex,
      var(--ds-z-index-20, ${t(rt)})
    );
  }

  :host([overlay]) .media__asset__overlay::after {
    content: '';
    position: absolute;
    top: inherit;
    left: inherit;
    right: inherit;
    bottom: inherit;
    border-radius: inherit;
    background: var(--ds-media-overlay-background, initial);
  }

  :host([overlay]) ::slotted([slot^='media__pos']) {
    --ds-media-slot-zindex: var(
      --ds-media-overlay-slot-zindex,
      var(--ds-z-index-20, ${t(pt)})
    );
  }

  :host([overlay='asset--fill']) {
    --ds-media-overlay-background: var(--ds-app-color-overlay-fill);
  }

  :host([overlay='asset--top']) {
    /* video-overlay-vertical removed - custom gradient using overlay fill color */
    --ds-media-overlay-background: linear-gradient(
      180deg,
      var(--ds-app-color-overlay-fill) 0%,
      transparent 100%
    );
  }

  :host([overlay='asset--bottom-1']) {
    /* video-overlay-bottom-vertical removed - custom gradient from bottom */
    --ds-media-overlay-background: linear-gradient(
      0deg,
      var(--ds-app-color-overlay-fill) 0%,
      transparent 50%
    );
  }

  :host([overlay='asset--bottom-2']) {
    /* video-overlay-bottom-vertical-light removed - lighter bottom gradient */
    --ds-media-overlay-background: linear-gradient(
      0deg,
      var(--ds-color-alpha-white-400, rgba(255, 255, 255, 0.4)) 0%,
      transparent 50%
    );
  }

  :host([overlay='asset--bottom-3']) {
    /* video-overlay-bottom-vertical-strong removed - stronger bottom gradient */
    --ds-media-overlay-background: linear-gradient(
      0deg,
      var(--ds-color-alpha-white-800, rgba(255, 255, 255, 0.8)) 0%,
      transparent 66%
    );
  }

  :host([overlay='bg--fill']) {
    --ds-media-overlay-background: var(--ds-app-color-overlay-fill);
  }

  :host([overlay='bg--horizontal']) {
    --ds-media-overlay-background: var(--ds-app-color-overlay-opt1-left);
  }

  :host([overlay='bg--horizontal-faded']) {
    /* background-overlay-horizontal-faded removed - faded gradient using opt1 stops */
    --ds-media-overlay-background: linear-gradient(
      90deg,
      var(--ds-app-color-overlay-opt1-stop1) 0%,
      var(--ds-app-color-overlay-opt1-stop2) 66%
    );
  }

  :host([overlay='bg--horizontal-right']) {
    /* background-overlay-horizontal-right removed - right-to-left gradient using opt1 stops */
    --ds-media-overlay-background: linear-gradient(
      270deg,
      var(--ds-app-color-overlay-opt1-stop1) 0%,
      var(--ds-app-color-overlay-opt1-stop2) 100%
    );
  }

  :host([overlay='bg--horizontal-faded-right']) {
    /* background-overlay-horizontal-faded-right removed - faded right-to-left gradient */
    --ds-media-overlay-background: linear-gradient(
      270deg,
      var(--ds-app-color-overlay-opt1-stop1) 0%,
      var(--ds-app-color-overlay-opt1-stop2) 66%
    );
  }

  :host([overlay='bg--vertical']) {
    --ds-media-overlay-background: var(--ds-app-color-overlay-opt2-left);
  }

  :host([overlay='bg--vertical-color']) {
    /* background-overlay-vertical-color removed - use opt2 gradient with custom color stops */
    --ds-media-overlay-background: linear-gradient(
      90deg,
      var(--ds-app-color-overlay-opt2-stop1) 0%,
      var(--ds-app-color-overlay-opt2-stop2) 100%
    );
  }

  :host([video]),
  :host([iframe]) {
    --ds-media-slot-zindex: var(--ds-z-index-30, 30);
    --ds-media-overlay-zindex: 10; /* this value is set to less than 10 because the media overlay should be below to the UMP play button */
    width: var(--ds-media-video-width, ${t("100%")});
  }
  
  :host([video]) ::slotted([slot='media__asset']),
  :host([iframe]) ::slotted([slot='media__asset']) {
    --ds-media-ump-pointer-events: var(
      --ds-media-pointer-events,
      ${t(N)}
    );
    --ds-media-player-pointer-events: var(
      --ds-media-pointer-events,
      ${t(N)}
    );

    border-start-start-radius: var(--ds-media-asset-border-start-start-radius, initial);
    border-start-end-radius: var(--ds-media-asset-border-start-end-radius, initial);
    border-end-end-radius: var(--ds-media-asset-border-end-end-radius, initial);
    border-end-start-radius: var(--ds-media-asset-border-end-start-radius, initial);
    overflow: var(--ds-media-asset-overflow, initial);
  }

  :host([video][overlay][video-configuration='inline']) ::slotted([slot='media__asset']) {
    --ds-media-ump-visibility: visible;
    --ds-media-ump-opacity: 1;
  }

  :host([video]) .media__pos-top-right,
  :host([video]) .media__pos-top-left,
  :host([video]) .media__pos-bottom-right,
  :host([video]) .media__pos-bottom-left,
  :host([video]) .media__pos-center-center {
    max-width: var(--ds-media-slot-max-width, initial);
    top: var(--ds-media-slot-top, initial);
    margin-inline: var(--ds-media-slot-margin-inline, initial);
    padding-inline: var(--ds-media-slot-padding-inline, initial);
  }

  ::slotted([slot^='media__pos']) {
    position: var(--ds-media-slot-position, ${t(lt)});
    z-index: var(--ds-media-slot-zindex, var(--ds-z-index-10, ${t(nt)}));
    padding-inline: var(
      --ds-media-slot-padding-inline,
      ${t(mt)}
    );
  }

  ::slotted([slot='media__pos-top-left']) {
    left: calc(
      var(--ds-media-slot-top-left-x, ${t(ht)}) +
        var(--ds-media-padding-inline-start, ${t(V)})
    );
    top: calc(
      var(--ds-media-slot-top-left-y, ${t(vt)}) +
        var(--ds-media-padding-block-start, ${t(O)})
    );
  }

  ::slotted([slot='media__pos-top-right']) {
    right: calc(
      var(--ds-media-slot-top-right-x, ${t(ct)}) +
        var(--ds-media-padding-inline-end, ${t(M)})
    );
    top: calc(
      var(--ds-media-slot-top-right-y, ${t(gt)}) +
        var(--ds-media-padding-block-start, ${t(O)})
    );
  }

  ::slotted([slot='media__pos-center-center']) {
    left: var(
      --ds-media-slot-center-center-x,
      ${t(ut)}
    );
    top: var(
      --ds-media-slot-center-center-y,
      ${t(_t)}
    );
    transform: var(
      --ds-media-slot-center-center-transform,
      ${t(bt)}
    );
  }

  ::slotted([slot='media__pos-bottom-left']) {
    left: calc(
      var(
          --ds-media-slot-bottom-left-x,
          ${t(yt)}
        ) +
        var(--ds-media-padding-inline-start, ${t(V)})
    );
    bottom: calc(
      var(
          --ds-media-slot-bottom-left-y,
          ${t(ft)}
        ) +
        var(--ds-media-padding-block-end, ${t(q)})
    );
  }

  ::slotted([slot='media__pos-bottom-right']) {
    right: calc(
      var(
          --ds-media-slot-bottom-right-x,
          ${t(St)}
        ) +
        var(--ds-media-padding-inline-end, ${t(M)})
    );
    bottom: calc(
      var(
          --ds-media-slot-bottom-right-y,
          ${t(Et)}
        ) +
        var(--ds-media-padding-block-end, ${t(q)})
    );
  }

  canvas {
    display: flex;
    width: 100%;
    height: inherit;
    object-fit: cover;
  }

  ::slotted(img[gif-paused]),
  ::slotted(picture[gif-paused]),
  [canvas-hidden] {
    display: none;
  }

  [canvas-visible] {
    display: var(--ds-media-display);
    object-fit: cover;
  }
`;class wt{constructor(t,e){if(this._isUniversalMediaPlayer=!1,this._isPaused=!1,this._videoControllerEvents=[],this._host=t,this._videoTrigger=e.videoTrigger||o(this._host,"reimagine-button"),this._videoElement=e.videoElement||this._host.querySelector("universal-media-player"),this._videoElement){if("universal-media-player"===this._videoElement.nodeName.toLowerCase()&&(this._isUniversalMediaPlayer=!0,this._host.hasAttribute("aspect-ratio"))){const t=this._host.getAttribute("aspect-ratio");this.updateAspectRatio(t)}this._host.addController(this)}}hostConnected(){var t;"play"===(null==(t=this._videoTrigger)?void 0:t.getAttribute("video-control"))&&(this._isPaused=!0),this._videoControllerEvents.push({el:this._videoElement,type:"ended",handler:this._handleVideoEnded.bind(this)},{el:this._videoElement,type:"playing",handler:this._handleVideoPlaying.bind(this)}),this._videoTrigger&&this._videoControllerEvents.push({el:this._videoTrigger,type:"click",handler:this._handleTriggerClick.bind(this)}),r(this._videoControllerEvents)}hostDisconnected(){this._visibilityTimeout&&clearTimeout(this._visibilityTimeout),this._umpShadowDomInterval&&(clearInterval(this._umpShadowDomInterval),this._umpShadowDomInterval=void 0),l(this._videoControllerEvents)}hostUpdated(){if(this._isUniversalMediaPlayer&&!this._umpShadowRootElement&&this.umpShadowDomReady(this._videoElement).then(t=>{var e;if(!t)return;const i=this._videoElement;if(this._umpShadowRootElement=t,this._host.hasAttribute("video-fit")){const e=this._host.getAttribute("video-fit");this.updateVideoFit(t,e)}(null==(e=i.options)||!e.autoplay)&&!i.classList.contains("ump-visible")&&(null==i||i.classList.add("ump-visible"),null==i||i.classList.remove("ump-hidden"))}),this._host.hasAttribute("aspect-ratio")){const t=this._host.getAttribute("aspect-ratio");this.updateAspectRatio(t)}if(this._host.hasAttribute("video-fit")&&this._umpShadowRootElement){const t=this._host.getAttribute("video-fit");this.updateVideoFit(this._umpShadowRootElement,t)}}updateAspectRatio(t){var e,i;if(t&&this._isUniversalMediaPlayer){const a=t.replace("-","/")??"16/9";null==(i=null==(e=this._videoElement)?void 0:e.style)||i.setProperty("--ump-aspect-ratio",a)}}updateVideoFit(t,e){var i;e&&this._isUniversalMediaPlayer&&(null==(i=null==t?void 0:t.style)||i.setProperty("object-fit",e))}async umpShadowDomReady(t){return this._umpShadowDomInterval&&(clearInterval(this._umpShadowDomInterval),this._umpShadowDomInterval=void 0),new Promise(e=>{let i=0;this._umpShadowDomInterval=setInterval(()=>{var a,s,d;i++;let o=null==(s=null==(a=this._videoElement)?void 0:a.shadowRoot)?void 0:s.querySelector("video");t&&(o=null==(d=null==t?void 0:t.shadowRoot)?void 0:d.querySelector("video")),o?(clearInterval(this._umpShadowDomInterval),this._umpShadowDomInterval=void 0,e(o)):i>=60&&(clearInterval(this._umpShadowDomInterval),this._umpShadowDomInterval=void 0,e(null))},50)})}_handleVideoPlaying(){this.umpShadowDomReady(this._videoElement).then(()=>{this._videoElement.classList.contains("ump-visible")||(this._visibilityTimeout&&clearTimeout(this._visibilityTimeout),this._visibilityTimeout=globalThis.setTimeout(()=>{var t,e;null==(t=this._videoElement)||t.classList.add("ump-visible"),null==(e=this._videoElement)||e.classList.remove("ump-hidden")},50)),this._host.hasAttribute("overlay")&&this._host.getAttribute("video-configuration")===g.inline&&this._host.removeAttribute("overlay")})}_handleTriggerClick(){this._isUniversalMediaPlayer&&(this._isPaused?(this._videoElement.play(),this._onVideoPaused(!0)):(this._videoElement.pause(),this._onVideoPaused(!1)))}_handleVideoEnded(){this._onVideoPaused(!1)}_onVideoPaused(t){this._videoTrigger&&(t?(this._videoTrigger.setAttribute("video-control","pause"),this._videoTrigger.setAttribute("aria-label",this._videoTrigger.getAttribute("pause-button-label")??"Pause video"),this._isPaused=!1):(this._videoTrigger.setAttribute("video-control","play"),this._videoTrigger.setAttribute("aria-label",this._videoTrigger.getAttribute("play-button-label")??"Play video"),this._isPaused=!0))}}class xt{constructor(t,e){var i;if(this._isPaused=!1,this._isReducedMotion=n(),this._buttonClick=this.handleButtonClick.bind(this),this._gifLoad=this.initCanvas.bind(this),this._host=t,this._gifElement=(null==e?void 0:e.gifElement)||this._host.querySelector('img[src*=".gif"]'),"picture"===(null==(i=this._gifElement.parentElement)?void 0:i.nodeName.toLowerCase())&&(this._gifPicture=this._gifElement.parentElement),this._buttonTrigger=(null==e?void 0:e.buttonTrigger)||o(this._host,"reimagine-button"),this._gifElement){if(!this._buttonTrigger)return void console.warn("For accessibility support, a play/pause button is required.");(this._host=t).addController(this),this.init()}}hostConnected(){var t,e;null==(t=this._buttonTrigger)||t.addEventListener("click",this._buttonClick),null==(e=this._gifElement)||e.addEventListener("load",this._gifLoad)}hostDisconnected(){var t,e;null==(t=this._buttonTrigger)||t.removeEventListener("click",this._buttonClick),null==(e=this._gifElement)||e.removeEventListener("load",this._gifLoad)}init(){var t;this._isReducedMotion&&(null==(t=this._buttonTrigger)||t.setAttribute("video-control","play"),this._isPaused=!0)}createCanvas(){var t;if(this._gifElement&&null!=(t=this._gifElement)&&t.complete){const t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return;const i=this._gifElement.getAttribute("alt")||"",a=""===i?"presentation":"";t.width=this._gifElement.naturalWidth,t.height=this._gifElement.naturalHeight,t.toggleAttribute("canvas-hidden",!this._isReducedMotion),t.toggleAttribute("aria-hidden",!this._isReducedMotion),""!==i&&t.setAttribute("aria-label",i),""!==a&&t.setAttribute("role",a),e.drawImage(this._gifElement,0,0),this._canvasElement=t}}appendCanvas(){var t,e,i,a;this._canvasElement&&(null==(t=this._gifElement)||t.toggleAttribute("gif-paused",this._isReducedMotion||this._isPaused),null!=(e=this._host.shadowRoot)&&e.querySelector("canvas")||null==(a=null==(i=this._host.shadowRoot)?void 0:i.querySelector(".media__asset"))||a.append(this._canvasElement))}initCanvas(){this.createCanvas(),this.appendCanvas()}handleButtonClick(){var t,e,i,a,s;this._isPaused=!this._isPaused,null==(t=this._gifElement)||t.toggleAttribute("gif-paused",this._isPaused),null==(e=this._gifElement)||e.toggleAttribute("aria-hidden",this._isPaused),this._gifPicture&&(this._gifPicture.toggleAttribute("gif-paused",this._isPaused),this._gifPicture.toggleAttribute("aria-hidden",this._isPaused)),null==(i=this._canvasElement)||i.toggleAttribute("canvas-hidden",!this._isPaused),null==(a=this._canvasElement)||a.toggleAttribute("aria-hidden",!this._isPaused),null==(s=this._buttonTrigger)||s.setAttribute("video-control",this._isPaused?"play":"pause")}}var kt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Ct=(t,e,i,a)=>{for(var s,d=a>1?void 0:a?Pt(e,i):e,o=t.length-1;o>=0;o--)(s=t[o])&&(d=(a?s(e,i,d):s(d))||d);return a&&d&&kt(e,i,d),d};const Tt="reimagine-media";let At=class extends u{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._doubleImageSlotEmpty=!0,this._captionSlotEmpty=!0,this._posTopLeftSlotEmpty=!0,this._posTopRightSlotEmpty=!0,this._posCenterCenterSlotEmpty=!0,this._posBottomLeftSlotEmpty=!0,this._posBottomRightSlotEmpty=!0,this._mediaAssetSlotEmpty=!0,this._defaultPlayPauseAttributes={size:"small",appearance:"button--primary",shape:"rounded","video-control":"pause"},this.video=!1,this.iframe=!1,this.dropShadow=!1,this.isGif=!1,this.priority=!1}_hasAnyVideoPositionSlot(){return!(this._posTopLeftSlotEmpty&&this._posTopRightSlotEmpty&&this._posCenterCenterSlotEmpty&&this._posBottomLeftSlotEmpty&&this._posBottomRightSlotEmpty)}async _handleSlotChange(t){if(this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._doubleImageSlotEmpty=0===this._doubleImageSlot.length,this._captionSlotEmpty=0===this._captionSlot.length,this._posTopLeftSlotEmpty=0===this._posTopLeftSlot.length,this._posTopRightSlotEmpty=0===this._posTopRightSlot.length,this._posCenterCenterSlotEmpty=0===this._posCenterCenterSlot.length,this._posBottomLeftSlotEmpty=0===this._posBottomLeftSlot.length,this._posBottomRightSlotEmpty=0===this._posBottomRightSlot.length,this._mediaAssetSlotEmpty=0===this._mediaAssetSlot.length,this._mediaAssetSlotEmpty)this.iframe=!1;else{const t=this._mediaAssetSlot[0];this.iframe="iframe"===t.nodeName.toLowerCase()}if(this.video&&(this._hasAnyVideoPositionSlot()&&this._updateVideoTrigger(t),this.video&&!this._mediaAssetSlotEmpty&&this._setVideoController()),!this._mediaAssetSlotEmpty){const t=this._mediaAssetSlot[0];if(this.priority){let e=null;t instanceof HTMLImageElement?e=t:"picture"===t.nodeName.toLowerCase()&&(e=t.querySelector("img")),e&&(e.setAttribute("fetchpriority","high"),e.setAttribute("loading","eager"))}"picture"===t.nodeName.toLowerCase()?t.querySelector('img[src*=".gif"]')&&(this.isGif=!0):"img"===t.nodeName.toLowerCase()&&t instanceof HTMLImageElement&&t.src.includes(".gif")&&(this.isGif=!0)}!this._mediaAssetSlotEmpty&&this.isGif&&(this._videoTrigger=o(this,"reimagine-button"),p(this._videoTrigger,this._defaultPlayPauseAttributes),this._videoTrigger||this.append(this._createPlayPauseButton()),this._gifController instanceof xt||(this._gifController=new xt(this)))}_createPlayPauseButton(t="media__pos-top-right"){const e=new b,i={...this._defaultPlayPauseAttributes,slot:t};return p(e,i),e}_updateVideoTrigger(t){const e=t.target;this._videoTrigger=e.assignedElements()[0],this._videoTrigger instanceof b&&(p(this._videoTrigger,this._defaultPlayPauseAttributes),this.video&&this.style.setProperty("--ds-media-pointer-events","none"))}_setVideoController(){const t=this._mediaAssetSlot[0];let e=null;if("universal-media-player"===t.nodeName.toLowerCase()?e=t:m(t,"reimagine-media-player")&&(e=t.querySelector("universal-media-player")),e){this._videoElement=e,this._videoElement.classList.add("ump-hidden");const t={videoTrigger:this._videoTrigger,videoElement:this._videoElement};new wt(this,t)}}updated(t){if(super.updated(t),t.has("mediaHeight")&&this.mediaHeight){const t=this._sanitizeCSSMeasurement(this.mediaHeight);t&&(this.style.setProperty("--ds-media-height",t),this.style.setProperty("--ds-media-max-height",t))}}_sanitizeCSSMeasurement(t){if(!t||"string"!=typeof t)return null;const e=t.trim();return/^-?\d+(\.\d+)?(px|%)$/i.test(e)?e:null}_renderOptionalSlot(t,e){return d`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDoubleImage(){if(this.type===_.highlightDoubleImage)return this._renderOptionalSlot("media__double-img",this._doubleImageSlotEmpty)}render(){return d`
      ${this._renderOptionalSlot("media__first",this._firstSlotEmpty)}
      <div part="media__asset" class="media__asset">
        <div class="media__asset__overlay" part="media__asset__overlay"></div>
        <slot name="media__asset" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      ${this._renderDoubleImage()}
      ${this._renderOptionalSlot("media__caption",this._captionSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-top-left",this._posTopLeftSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-top-right",this._posTopRightSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-center-center",this._posCenterCenterSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-bottom-left",this._posBottomLeftSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-bottom-right",this._posBottomRightSlotEmpty)}
      ${this._renderOptionalSlot("media__last",this._lastSlotEmpty)}
    `}};At.styles=[$t],Ct([i({slot:"media__first"})],At.prototype,"_firstSlot",2),Ct([i({slot:"media__last"})],At.prototype,"_lastSlot",2),Ct([i({slot:"media__double-img"})],At.prototype,"_doubleImageSlot",2),Ct([i({slot:"media__caption"})],At.prototype,"_captionSlot",2),Ct([i({slot:"media__pos-top-left"})],At.prototype,"_posTopLeftSlot",2),Ct([i({slot:"media__pos-top-right"})],At.prototype,"_posTopRightSlot",2),Ct([i({slot:"media__pos-center-center"})],At.prototype,"_posCenterCenterSlot",2),Ct([i({slot:"media__pos-bottom-left"})],At.prototype,"_posBottomLeftSlot",2),Ct([i({slot:"media__pos-bottom-right"})],At.prototype,"_posBottomRightSlot",2),Ct([i({slot:"media__asset"})],At.prototype,"_mediaAssetSlot",2),Ct([a()],At.prototype,"_firstSlotEmpty",2),Ct([a()],At.prototype,"_lastSlotEmpty",2),Ct([a()],At.prototype,"_doubleImageSlotEmpty",2),Ct([a()],At.prototype,"_captionSlotEmpty",2),Ct([a()],At.prototype,"_posTopLeftSlotEmpty",2),Ct([a()],At.prototype,"_posTopRightSlotEmpty",2),Ct([a()],At.prototype,"_posCenterCenterSlotEmpty",2),Ct([a()],At.prototype,"_posBottomLeftSlotEmpty",2),Ct([a()],At.prototype,"_posBottomRightSlotEmpty",2),Ct([a()],At.prototype,"_mediaAssetSlotEmpty",2),Ct([a()],At.prototype,"_videoTrigger",2),Ct([a()],At.prototype,"_videoElement",2),Ct([a()],At.prototype,"_gifController",2),Ct([s({reflect:!0})],At.prototype,"theme",2),Ct([s({reflect:!0,attribute:"aspect-ratio"})],At.prototype,"aspectRatio",2),Ct([s({reflect:!0,attribute:"video-fit"})],At.prototype,"videoFit",2),Ct([s({reflect:!0,attribute:"object-fit"})],At.prototype,"objectFit",2),Ct([s({reflect:!0,attribute:"video-configuration"})],At.prototype,"videoConfiguration",2),Ct([s({type:Boolean,reflect:!0})],At.prototype,"video",2),Ct([s({type:Boolean,reflect:!0})],At.prototype,"iframe",2),Ct([s({type:Boolean,reflect:!0,attribute:"drop-shadow"})],At.prototype,"dropShadow",2),Ct([s({type:Boolean,reflect:!0,attribute:"is-gif"})],At.prototype,"isGif",2),Ct([s({reflect:!0})],At.prototype,"surface",2),Ct([s({reflect:!0,attribute:"border-width"})],At.prototype,"borderWidth",2),Ct([s({reflect:!0})],At.prototype,"type",2),Ct([s({reflect:!0})],At.prototype,"overlay",2),Ct([s({reflect:!0,attribute:"media-height"})],At.prototype,"mediaHeight",2),Ct([s({type:Boolean,reflect:!0})],At.prototype,"priority",2),At=Ct([h(Tt)],At);export{At as M,wt as V,Tt as n};
