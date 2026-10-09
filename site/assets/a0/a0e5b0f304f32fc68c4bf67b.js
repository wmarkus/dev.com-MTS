
let observer;
let components = {
  "reimagine-container": {
    "importPath": "/__mirror/assets/27f96f880557a603103493bd",
    "dependencies": []
  },
  "reimagine-base-ui-shell": {
    "importPath": "/__mirror/assets/2801aad3ac6d645e6a9c2104",
    "dependencies": []
  },
  "reimagine-high-impact-accordion": {
    "importPath": "/__mirror/assets/e4201db4a6b310d4d417549a",
    "dependencies": []
  },
  "reimagine-action-bar": {
    "importPath": "/__mirror/assets/2b8d845f5dc751594319bc31",
    "dependencies": []
  },
  "reimagine-announcement": {
    "importPath": "/__mirror/assets/68460d2422d95d01ca0712e4",
    "dependencies": []
  },
  "reimagine-article": {
    "importPath": "/__mirror/assets/148d7415b242d33f298208b8",
    "dependencies": []
  },
  "reimagine-back-to-top": {
    "importPath": "/__mirror/assets/cd80a05d1c760726041f2d4a",
    "dependencies": []
  },
  "reimagine-badge": {
    "importPath": "/__mirror/assets/9bce10b1f8f8949b4fd224b8",
    "dependencies": []
  },
  "reimagine-badge-title": {
    "importPath": "/__mirror/assets/168dbbc87d6ba482c10555f8",
    "dependencies": []
  },
  "reimagine-breadcrumbs": {
    "importPath": "/__mirror/assets/1292fb2c981b6f4a70b56592",
    "dependencies": []
  },
  "reimagine-button": {
    "importPath": "/__mirror/assets/a61cf5773721562dbd2411c0",
    "dependencies": []
  },
  "reimagine-button-group": {
    "importPath": "/__mirror/assets/ea6784fd34f0ec31a8e3ea36",
    "dependencies": []
  },
  "reimagine-card-group": {
    "importPath": "/__mirror/assets/8843033d9968009768eb2ded",
    "dependencies": []
  },
  "reimagine-collapse": {
    "importPath": "/__mirror/assets/b670dbee7a113410be9d03bb",
    "dependencies": []
  },
  "reimagine-dialog": {
    "importPath": "/__mirror/assets/38a55c40105a3b4e3a91fe6f",
    "dependencies": []
  },
  "reimagine-divider": {
    "importPath": "/__mirror/assets/5f924eec6274a2d611fc1ea0",
    "dependencies": []
  },
  "reimagine-filter-item-with-nested-list": {
    "importPath": "/__mirror/assets/763f046c6b4a1cf58ece6dcc",
    "dependencies": []
  },
  "reimagine-filter-list": {
    "importPath": "/__mirror/assets/9fd60df4838f5fcf6a800752",
    "dependencies": []
  },
  "reimagine-flyout": {
    "importPath": "/__mirror/assets/0cdac61967f47b1499d41f06",
    "dependencies": []
  },
  "reimagine-heading-block": {
    "importPath": "/__mirror/assets/11b65e1b71e1d66db11aaeb4",
    "dependencies": []
  },
  "reimagine-icon": {
    "importPath": "/__mirror/assets/3a819be3e030a831ebc01cae",
    "dependencies": []
  },
  "reimagine-inline-price": {
    "importPath": "/__mirror/assets/14896f18d9ae3eece2e85e44",
    "dependencies": []
  },
  "reimagine-link": {
    "importPath": "/__mirror/assets/6f420e2acd03dd8281f266cc",
    "dependencies": []
  },
  "reimagine-link-group": {
    "importPath": "/__mirror/assets/4952414e6b0dcd2d71af3447",
    "dependencies": []
  },
  "reimagine-link-list": {
    "importPath": "/__mirror/assets/24143c91ae535a4bf153c862",
    "dependencies": []
  },
  "reimagine-list-item": {
    "importPath": "/__mirror/assets/d0f2740c702159d74ce93cda",
    "dependencies": []
  },
  "reimagine-media": {
    "importPath": "/__mirror/assets/f5e89525fe8c0c99d1b3adb6",
    "dependencies": []
  },
  "reimagine-media-player": {
    "importPath": "/__mirror/assets/f4a56d00516728c1cca3fd3b",
    "dependencies": []
  },
  "reimagine-media-text-stack": {
    "importPath": "/__mirror/assets/b7892939c8c077cc536d2d24",
    "dependencies": []
  },
  "reimagine-modal": {
    "importPath": "/__mirror/assets/cccbf194968ca6234f09b1b8",
    "dependencies": []
  },
  "reimagine-notification-banner": {
    "importPath": "/__mirror/assets/2e39bc65cb71597614418f34",
    "dependencies": []
  },
  "reimagine-pill": {
    "importPath": "/__mirror/assets/8211e5b454c0493e54031c58",
    "dependencies": []
  },
  "reimagine-progress-meter": {
    "importPath": "/__mirror/assets/2dc41f397ccef0016b72d953",
    "dependencies": []
  },
  "reimagine-qrcode": {
    "importPath": "/__mirror/assets/c178a5388c824d42c90e84a0",
    "dependencies": []
  },
  "reimagine-roadmap-dialog": {
    "importPath": "/__mirror/assets/6f270b28bdb3923e899e88ab",
    "dependencies": []
  },
  "reimagine-rolling-text": {
    "importPath": "/__mirror/assets/ea1e672cd53a68a755e7c770",
    "dependencies": []
  },
  "reimagine-scroll-spy": {
    "importPath": "/__mirror/assets/2f0bb4bad824762bcbdf832b",
    "dependencies": []
  },
  "reimagine-search": {
    "importPath": "/__mirror/assets/c804e2ab80d017aa58efdac2",
    "dependencies": []
  },
  "reimagine-section-title": {
    "importPath": "/__mirror/assets/1d96d343495d384ed7e9537d",
    "dependencies": []
  },
  "reimagine-selector-slider": {
    "importPath": "/__mirror/assets/b8dc20ae816e4d41d2d06c1f",
    "dependencies": []
  },
  "reimagine-share": {
    "importPath": "/__mirror/assets/4e3b85677c2068b877d588d7",
    "dependencies": []
  },
  "reimagine-share-dialog": {
    "importPath": "/__mirror/assets/9f6a076e3c0f37b3f2ed4319",
    "dependencies": []
  },
  "reimagine-show-more-show-less": {
    "importPath": "/__mirror/assets/5d83d9f0e2e35327e3d1f7f8",
    "dependencies": []
  },
  "reimagine-slider-range": {
    "importPath": "/__mirror/assets/428b9c00bd7f253e938a338c",
    "dependencies": []
  },
  "reimagine-star-rating": {
    "importPath": "/__mirror/assets/73d8ca330c615aa94f07d57b",
    "dependencies": []
  },
  "reimagine-stat": {
    "importPath": "/__mirror/assets/dfe9bfdeca64f5cc0a14aa70",
    "dependencies": []
  },
  "reimagine-sticky": {
    "importPath": "/__mirror/assets/5567906201e72283a030a68f",
    "dependencies": []
  },
  "reimagine-text-block": {
    "importPath": "/__mirror/assets/1744c47504083b26d862e98f",
    "dependencies": []
  },
  "reimagine-toggle-switch": {
    "importPath": "/__mirror/assets/f0e6c13d499003970b4ae525",
    "dependencies": []
  },
  "reimagine-layout": {
    "importPath": "/__mirror/assets/e62bb722193ecd15faae88e6",
    "dependencies": []
  },
  "reimagine-layout-column": {
    "importPath": "/__mirror/assets/b68c976cfd8642cec42ff35a",
    "dependencies": []
  },
  "reimagine-banner-featured": {
    "importPath": "/__mirror/assets/6688f45cd643d864c70d4e08",
    "dependencies": []
  },
  "reimagine-banner-heading": {
    "importPath": "/__mirror/assets/af550e3d1441b5ea91718e95",
    "dependencies": []
  },
  "reimagine-banner-news": {
    "importPath": "/__mirror/assets/0b8c3e1d91cda9082bfbb487",
    "dependencies": []
  },
  "reimagine-banner-search": {
    "importPath": "/__mirror/assets/ca03f68700ffc017e279a6ca",
    "dependencies": []
  },
  "reimagine-banner-timer": {
    "importPath": "/__mirror/assets/0e81410d80ea4363836c3b03",
    "dependencies": []
  },
  "reimagine-cta-banner": {
    "importPath": "/__mirror/assets/b883ddb094428ef7875a3961",
    "dependencies": []
  },
  "reimagine-section-with-media": {
    "importPath": "/__mirror/assets/814e7015ae8b2fd205468e64",
    "dependencies": []
  },
  "reimagine-section-with-quote": {
    "importPath": "/__mirror/assets/dc28151dc8a683e219c0678a",
    "dependencies": []
  },
  "reimagine-statement-banner": {
    "importPath": "/__mirror/assets/b9cb9fad39d2e525a47385d2",
    "dependencies": []
  },
  "reimagine-banner-testimonial": {
    "importPath": "/__mirror/assets/9c826018975a3f6ed3a6aa23",
    "dependencies": []
  },
  "reimagine-featured": {
    "importPath": "/__mirror/assets/c3c4917c694c2c1991cb9202",
    "dependencies": []
  },
  "reimagine-featured-stack": {
    "importPath": "/__mirror/assets/4db94a2a66817a461fd07a7a",
    "dependencies": []
  },
  "reimagine-card-grid-logo-wall": {
    "importPath": "/__mirror/assets/95190d353cb3bb01812b553c",
    "dependencies": []
  },
  "reimagine-media-text-stacked": {
    "importPath": "/__mirror/assets/e1b554cf3a32d7bd38d9c30e",
    "dependencies": []
  },
  "reimagine-mixed-stack": {
    "importPath": "/__mirror/assets/ce0d74e74dfdf3eb1edb545c",
    "dependencies": []
  },
  "reimagine-card-grid-product": {
    "importPath": "/__mirror/assets/ee5521d9be6f3309602820a3",
    "dependencies": []
  },
  "reimagine-card-grid-staggered": {
    "importPath": "/__mirror/assets/cdf319854ae3b38ef2e5146d",
    "dependencies": []
  },
  "reimagine-carousel-card-grid": {
    "importPath": "/__mirror/assets/b6f37822a685fe3117c4a850",
    "dependencies": []
  },
  "reimagine-carousel-featured": {
    "importPath": "/__mirror/assets/c193fbabf675526022f73cc3",
    "dependencies": []
  },
  "reimagine-carousel-storytelling": {
    "importPath": "/__mirror/assets/b2cc277bee39fffa3ab0c07b",
    "dependencies": []
  },
  "reimagine-editorial-agenda": {
    "importPath": "/__mirror/assets/457e76b42e73907ac496867b",
    "dependencies": []
  },
  "reimagine-editorial-featured": {
    "importPath": "/__mirror/assets/e512bc786a408690f99df7cd",
    "dependencies": []
  },
  "reimagine-story-grid": {
    "importPath": "/__mirror/assets/2feae9d16358da874d9c6fa6",
    "dependencies": []
  },
  "reimagine-features-and-pricng-3-col": {
    "importPath": "/__mirror/assets/9949587cbf8fe9b93f4c09e2",
    "dependencies": []
  },
  "reimagine-features-and-pricing-comparison": {
    "importPath": "/__mirror/assets/fc4f4ec7d963e890ba69ec34",
    "dependencies": []
  },
  "reimagine-pricing-grid": {
    "importPath": "/__mirror/assets/d39181eddf2133f2b5988849",
    "dependencies": []
  },
  "reimagine-features-and-pricing-product-highlight": {
    "importPath": "/__mirror/assets/ac7b244f810db3ae38be0cde",
    "dependencies": []
  },
  "reimagine-hero-ai-search": {
    "importPath": "/__mirror/assets/7430ea9fa2e46faca035c80e",
    "dependencies": []
  },
  "reimagine-hero-article": {
    "importPath": "/__mirror/assets/ac6553cf629d42b0fff50db1",
    "dependencies": []
  },
  "reimagine-hero-author": {
    "importPath": "/__mirror/assets/252eec8b95e5f1f177267b15",
    "dependencies": []
  },
  "reimagine-hero-category": {
    "importPath": "/__mirror/assets/571f8ece4839561a8db3d9df",
    "dependencies": []
  },
  "reimagine-hero-featured": {
    "importPath": "/__mirror/assets/28c3db1d2e8eda954aed8602",
    "dependencies": []
  },
  "reimagine-hero-featured-xl-video": {
    "importPath": "/__mirror/assets/d25606fe0ba9c7fece08eb97",
    "dependencies": []
  },
  "reimagine-hero-dynamic-text": {
    "importPath": "/__mirror/assets/e1c874f63fb61425f358bad2",
    "dependencies": []
  },
  "reimagine-hero-impact": {
    "importPath": "/__mirror/assets/20d1d8070a3e935a8fdea33d",
    "dependencies": []
  },
  "reimagine-hero-tabs": {
    "importPath": "/__mirror/assets/7ea1636a1770b4219deedb46",
    "dependencies": []
  },
  "reimagine-hero-transactional": {
    "importPath": "/__mirror/assets/82572d9e9ce9daef08739af1",
    "dependencies": []
  },
  "reimagine-hero-product": {
    "importPath": "/__mirror/assets/6269d03ab902140989b402e1",
    "dependencies": []
  },
  "reimagine-hero-quicklinks": {
    "importPath": "/__mirror/assets/177a524aa8a5cafee7797972",
    "dependencies": []
  },
  "reimagine-hero-search": {
    "importPath": "/__mirror/assets/c0bc80d682501c99e4d44db9",
    "dependencies": []
  },
  "reimagine-high-impact-featured-accordion": {
    "importPath": "/__mirror/assets/e66b203eb0506660c5757391",
    "dependencies": []
  },
  "reimagine-logo-testimonials": {
    "importPath": "/__mirror/assets/34aea45e4f601917782397c6",
    "dependencies": []
  },
  "reimagine-media-demo": {
    "importPath": "/__mirror/assets/b07a4a57190bb8116d6b0b5a",
    "dependencies": []
  },
  "reimagine-high-impact-media-tabs": {
    "importPath": "/__mirror/assets/e83749f08a47d89ec36bc5a8",
    "dependencies": []
  },
  "reimagine-high-impact-product-accordion": {
    "importPath": "/__mirror/assets/e795a0da9f766882abc8213d",
    "dependencies": []
  },
  "reimagine-high-impact-vertical-tabs": {
    "importPath": "/__mirror/assets/1ddb7cdbba30d3b80aded049",
    "dependencies": []
  },
  "reimagine-immersive-scroll": {
    "importPath": "/__mirror/assets/e6e67b796fee2f767ff53aff",
    "dependencies": []
  },
  "reimagine-media-in-page-gallery": {
    "importPath": "/__mirror/assets/21affc36a18f5526d10e6977",
    "dependencies": []
  },
  "reimagine-media-video": {
    "importPath": "/__mirror/assets/8999954872cbfe921b1efb57",
    "dependencies": []
  },
  "reimagine-media-with-caption": {
    "importPath": "/__mirror/assets/f7d010aab21d80a6ef72c558",
    "dependencies": []
  },
  "reimagine-filtered-search": {
    "importPath": "/__mirror/assets/c5f219be8368345ba6e7067c",
    "dependencies": []
  },
  "reimagine-dynamic-search-results": {
    "importPath": "/__mirror/assets/e98914ad1d8ebfd41c826120",
    "dependencies": []
  },
  "reimagine-search-results": {
    "importPath": "/__mirror/assets/62fbd6d2dbd368f1cb735c0b",
    "dependencies": []
  },
  "reimagine-data-tiles": {
    "importPath": "/__mirror/assets/d405148a9d3aa711f4cf4a50",
    "dependencies": []
  },
  "reimagine-data-with-caption": {
    "importPath": "/__mirror/assets/22c84d053b92d6b6a4b7c1ac",
    "dependencies": []
  },
  "reimagine-data-with-icon": {
    "importPath": "/__mirror/assets/3da6b1ff9204d924c8ef32f8",
    "dependencies": []
  },
  "reimagine-stats-featured": {
    "importPath": "/__mirror/assets/fe93bbc8fd2d5bde45ee80c5",
    "dependencies": []
  },
  "reimagine-card-summary": {
    "importPath": "/__mirror/assets/fe3200fe203d7789cfaf116e",
    "dependencies": []
  },
  "reimagine-timeline": {
    "importPath": "/__mirror/assets/118b0743a57e89ef9bd12d42",
    "dependencies": []
  },
  "reimagine-timeline-bar": {
    "importPath": "/__mirror/assets/918f45e48217cde7d98b9358",
    "dependencies": []
  },
  "reimagine-timeline-bar-indicator": {
    "importPath": "/__mirror/assets/f0cea525b6f3c710ac88f68c",
    "dependencies": []
  },
  "reimagine-utility-footnote": {
    "importPath": "/__mirror/assets/67c357beb0a166fbac5cbcf4",
    "dependencies": []
  },
  "reimagine-jumplinks": {
    "importPath": "/__mirror/assets/2e98f606834874d4078c49db",
    "dependencies": []
  },
  "reimagine-utility-link-list": {
    "importPath": "/__mirror/assets/18e77f54d1be5ff333264e1c",
    "dependencies": []
  },
  "reimagine-link-media": {
    "importPath": "/__mirror/assets/901670d4e6a77d14df10a929",
    "dependencies": []
  },
  "reimagine-logo-footer": {
    "importPath": "/__mirror/assets/cb8d78d798732ac48f8b76f1",
    "dependencies": []
  },
  "reimagine-long-form-seo": {
    "importPath": "/__mirror/assets/66cea42d5bf1cd052f38a2ef",
    "dependencies": []
  },
  "reimagine-accordion": {
    "importPath": "/__mirror/assets/1376567b2b82d941066974ae",
    "dependencies": []
  },
  "reimagine-accordion-item": {
    "importPath": "/__mirror/assets/a02566bdcc69dc2fb8def7b6",
    "dependencies": []
  },
  "reimagine-agenda": {
    "importPath": "/__mirror/assets/badbc3304561d8af2e6cd5ef",
    "dependencies": []
  },
  "reimagine-agenda-item": {
    "importPath": "/__mirror/assets/9829fb7b1c5c404a95d5e594",
    "dependencies": []
  },
  "reimagine-ai-powered-assistant": {
    "importPath": "/__mirror/assets/a28cb96b9b0b0c8633d6de65",
    "dependencies": []
  },
  "reimagine-ai-powered-assistant-drawer": {
    "importPath": "/__mirror/assets/e445185e33abf9828df4f710",
    "dependencies": []
  },
  "reimagine-ai-powered-assistant-drawer-pricing-hub": {
    "importPath": "/__mirror/assets/bebb1cc6e0bd3a39bf2b6d85",
    "dependencies": []
  },
  "reimagine-ai-search": {
    "importPath": "/__mirror/assets/1f8c0f6a17a3a2deb8d87df4",
    "dependencies": []
  },
  "reimagine-card-badge": {
    "importPath": "/__mirror/assets/cc6bbf25ee2073a78ec68397",
    "dependencies": []
  },
  "reimagine-card-banner": {
    "importPath": "/__mirror/assets/ca6674f0d5c9eb5234b953db",
    "dependencies": []
  },
  "reimagine-card-case-study": {
    "importPath": "/__mirror/assets/91b34a12fefef04357a5153b",
    "dependencies": []
  },
  "reimagine-card-customer-story": {
    "importPath": "/__mirror/assets/0d6ace9c9c211f2702c3a539",
    "dependencies": []
  },
  "reimagine-card-data": {
    "importPath": "/__mirror/assets/25c9867fae3222ad50575542",
    "dependencies": []
  },
  "reimagine-card-data-sheet": {
    "importPath": "/__mirror/assets/0ce88c4f5129906b9fd440cd",
    "dependencies": []
  },
  "reimagine-card-dialog": {
    "importPath": "/__mirror/assets/65da8bc524419971e9dfc1d9",
    "dependencies": []
  },
  "reimagine-card-editorial": {
    "importPath": "/__mirror/assets/65d95d0e0a8253f9b35e220d",
    "dependencies": []
  },
  "reimagine-card-feature": {
    "importPath": "/__mirror/assets/678beb0b3a257198c3c5e545",
    "dependencies": []
  },
  "reimagine-card-in-hero": {
    "importPath": "/__mirror/assets/4f1b79f8ab1d81b960179672",
    "dependencies": []
  },
  "reimagine-card-multiaction": {
    "importPath": "/__mirror/assets/bd98cb6c62f19f9515144ff3",
    "dependencies": []
  },
  "reimagine-card-plan-detail": {
    "importPath": "/__mirror/assets/b45bca51de09be99e532ac4e",
    "dependencies": []
  },
  "reimagine-card-product-pricing": {
    "importPath": "/__mirror/assets/e30cdc75288db1e04f449461",
    "dependencies": []
  },
  "reimagine-card-promo": {
    "importPath": "/__mirror/assets/6e81f223b6d814035f9d055a",
    "dependencies": []
  },
  "reimagine-card-quote": {
    "importPath": "/__mirror/assets/1def43726edb88460b31a938",
    "dependencies": []
  },
  "reimagine-card-split": {
    "importPath": "/__mirror/assets/15586172e7dfeb5b3ba11708",
    "dependencies": []
  },
  "reimagine-card-stat": {
    "importPath": "/__mirror/assets/87618cfe62512b01ff651d21",
    "dependencies": []
  },
  "reimagine-card-stat-banner": {
    "importPath": "/__mirror/assets/a818b9c0621156f220db263f",
    "dependencies": []
  },
  "reimagine-card-testimonial": {
    "importPath": "/__mirror/assets/1106061e559f68e8918906c8",
    "dependencies": []
  },
  "reimagine-card-timer": {
    "importPath": "/__mirror/assets/e5a51cb343c290ca6994931c",
    "dependencies": []
  },
  "reimagine-carousel": {
    "importPath": "/__mirror/assets/f0dcbcfc64b899822a2f75c7",
    "dependencies": []
  },
  "reimagine-carousel-indicator": {
    "importPath": "/__mirror/assets/183c4411ec679f3100ca3ad0",
    "dependencies": []
  },
  "reimagine-carousel-item": {
    "importPath": "/__mirror/assets/c3028ac1e7450290cd8de498",
    "dependencies": []
  },
  "reimagine-checklist": {
    "importPath": "/__mirror/assets/02cec9456d36db0c9a013457",
    "dependencies": []
  },
  "reimagine-checklist-item": {
    "importPath": "/__mirror/assets/c5517d3a6b22eafe92e41891",
    "dependencies": []
  },
  "reimagine-dropdown": {
    "importPath": "/__mirror/assets/674e87e1db3168cb538c091d",
    "dependencies": []
  },
  "reimagine-dropdown-bar": {
    "importPath": "/__mirror/assets/856a791d80d0c3cd5deffa7d",
    "dependencies": []
  },
  "reimagine-dropdown-trigger": {
    "importPath": "/__mirror/assets/c180aa30a3b15984764facc1",
    "dependencies": []
  },
  "reimagine-title-dropdown": {
    "importPath": "/__mirror/assets/e36241c2f7e767d425700ab0",
    "dependencies": []
  },
  "reimagine-footnote": {
    "importPath": "/__mirror/assets/24ffb6cd5011ed58be394c8a",
    "dependencies": []
  },
  "reimagine-footnote-item": {
    "importPath": "/__mirror/assets/7f18a1d05eb820a3155b27d9",
    "dependencies": []
  },
  "reimagine-indicator": {
    "importPath": "/__mirror/assets/09db1e47c1629650b1283f7c",
    "dependencies": []
  },
  "reimagine-indicator-row": {
    "importPath": "/__mirror/assets/f5aa250e03ed271d4bca2302",
    "dependencies": []
  },
  "reimagine-checkbox": {
    "importPath": "/__mirror/assets/a58177e8a2d05ab042fe96d3",
    "dependencies": []
  },
  "reimagine-input": {
    "importPath": "/__mirror/assets/4718d81c8cee21657f50b7b7",
    "dependencies": []
  },
  "reimagine-link-bar": {
    "importPath": "/__mirror/assets/a5942143ce4ae137089d14d5",
    "dependencies": []
  },
  "reimagine-link-bar-item": {
    "importPath": "/__mirror/assets/8f3f82a93bb54383cc9bbcb4",
    "dependencies": []
  },
  "reimagine-logo-tabs": {
    "importPath": "/__mirror/assets/33bde034db2a6fbde064f580",
    "dependencies": []
  },
  "reimagine-logobar": {
    "importPath": "/__mirror/assets/f1056dbb2bc56626f0e90a55",
    "dependencies": []
  },
  "reimagine-logobar-item": {
    "importPath": "/__mirror/assets/b53611747e168f8af3c1226d",
    "dependencies": []
  },
  "reimagine-menu-list-item": {
    "importPath": "/__mirror/assets/63ddef7636bc85df236e4205",
    "dependencies": []
  },
  "reimagine-menu-list": {
    "importPath": "/__mirror/assets/c55634b5c47498bb74d55729",
    "dependencies": []
  },
  "reimagine-pagination": {
    "importPath": "/__mirror/assets/39f1ed08dc709b5515b4ed55",
    "dependencies": []
  },
  "reimagine-pagination-item": {
    "importPath": "/__mirror/assets/72896a82736095ef9ca8d2b0",
    "dependencies": []
  },
  "reimagine-popover": {
    "importPath": "/__mirror/assets/d85c69aad3852816cbccc749",
    "dependencies": []
  },
  "reimagine-popover-trigger": {
    "importPath": "/__mirror/assets/1af715169b90659658eb13d4",
    "dependencies": []
  },
  "reimagine-pricing-metered-filters": {
    "importPath": "/__mirror/assets/5b993b24819ff1047da8f623",
    "dependencies": []
  },
  "reimagine-pricing-metered-table": {
    "importPath": "/__mirror/assets/42135b0fd0c1d799df570d9e",
    "dependencies": []
  },
  "reimagine-radiobutton-group": {
    "importPath": "/__mirror/assets/344a739c20660c21ca87d1cf",
    "dependencies": []
  },
  "reimagine-radiobutton": {
    "importPath": "/__mirror/assets/fd41585ba663ceeb56957848",
    "dependencies": []
  },
  "reimagine-related-products": {
    "importPath": "/__mirror/assets/8257e2a086fb91e13056fdae",
    "dependencies": []
  },
  "reimagine-related-products-item": {
    "importPath": "/__mirror/assets/e9bc27b982236a11a690d9f7",
    "dependencies": []
  },
  "reimagine-scrollslider": {
    "importPath": "/__mirror/assets/7133520157bd645ba875297e",
    "dependencies": []
  },
  "reimagine-scrollslider-item": {
    "importPath": "/__mirror/assets/08c2f7191e700d0b495894c6",
    "dependencies": []
  },
  "reimagine-secondary-nav": {
    "importPath": "/__mirror/assets/a393f3766a90dab025bb2672",
    "dependencies": []
  },
  "reimagine-secondary-nav-item": {
    "importPath": "/__mirror/assets/a037aa793f6deda3081463df",
    "dependencies": []
  },
  "reimagine-selector": {
    "importPath": "/__mirror/assets/c4c51273df8fd61fc225790c",
    "dependencies": []
  },
  "reimagine-selector-links-item": {
    "importPath": "/__mirror/assets/aa78055202ce721e908a109b",
    "dependencies": []
  },
  "reimagine-sku": {
    "importPath": "/__mirror/assets/e0e73fe054b9586e2d3ef775",
    "dependencies": []
  },
  "reimagine-statement": {
    "importPath": "/__mirror/assets/91e09d9640c1bd1700fc30cd",
    "dependencies": []
  },
  "reimagine-statement-footer": {
    "importPath": "/__mirror/assets/1dd8bebb626749028d200ea1",
    "dependencies": []
  },
  "reimagine-table": {
    "importPath": "/__mirror/assets/20f0b18219df1cdad41ace49",
    "dependencies": []
  },
  "reimagine-tab": {
    "importPath": "/__mirror/assets/5fa0268efc308181a7ee82be",
    "dependencies": []
  },
  "reimagine-tab-compound": {
    "importPath": "/__mirror/assets/e03f91b8ff40a863a9136cbe",
    "dependencies": []
  },
  "reimagine-tab-item": {
    "importPath": "/__mirror/assets/8927abf95a80fd8e9bef95ad",
    "dependencies": []
  },
  "reimagine-tabs": {
    "importPath": "/__mirror/assets/75afd3b650a13c2d07b54168",
    "dependencies": []
  },
  "reimagine-tab-panel": {
    "importPath": "/__mirror/assets/7e7eaf4c4d267bf73504882c",
    "dependencies": []
  },
  "reimagine-tag": {
    "importPath": "/__mirror/assets/e03438b5798d9e90c6c162a8",
    "dependencies": []
  },
  "reimagine-tag-bar": {
    "importPath": "/__mirror/assets/9ae4d4d6343ea9426aafb791",
    "dependencies": []
  },
  "reimagine-ui-shell": {
    "importPath": null,
    "dependencies": []
  },
  "reimagine-article-header": {
    "importPath": "/__mirror/assets/fdfb4a53767c986ac2fd81e9",
    "dependencies": []
  },
  "reimagine-editorial-article-chapter": {
    "importPath": "/__mirror/assets/d6ffec315888505e9be1322a",
    "dependencies": []
  },
  "reimagine-article-header-author": {
    "importPath": "/__mirror/assets/2add35710ae8b774c17fe8e7",
    "dependencies": []
  },
  "reimagine-editorial-article-quote": {
    "importPath": "/__mirror/assets/faeb2919515a016f03b06e59",
    "dependencies": []
  },
  "reimagine-editorial-article-summary": {
    "importPath": "/__mirror/assets/b7a0b51a2b808bcc5799dc8c",
    "dependencies": []
  },
  "reimagine-editorial-article-takeaway": {
    "importPath": "/__mirror/assets/1c38a39ca4a9e2df8d3128fa",
    "dependencies": []
  },
  "reimagine-hero-featured-slider": {
    "importPath": "/__mirror/assets/376582ee644396d88e5876f8",
    "dependencies": []
  },
  "reimagine-hero-featured-slider-item": {
    "importPath": "/__mirror/assets/39ee9f05e1ae2b702799e998",
    "dependencies": []
  },
  "reimagine-hero-media-carousel": {
    "importPath": "/__mirror/assets/c2d4e4cc7142d2f952241f15",
    "dependencies": []
  },
  "reimagine-hero-media-carousel-item": {
    "importPath": "/__mirror/assets/012348200018f0a9e9b0dd09",
    "dependencies": []
  },
  "reimagine-media-playlist-video": {
    "importPath": "/__mirror/assets/db49e49bd26c7e76725d6837",
    "dependencies": []
  },
  "reimagine-media-playlist-video-item": {
    "importPath": "/__mirror/assets/d8222e095db7ec1c4184c4bd",
    "dependencies": []
  },
  "reimagine-card-event": {
    "importPath": "/__mirror/assets/0ef563784ff5eab585300025",
    "dependencies": []
  },
  "reimagine-card-event-details": {
    "importPath": "/__mirror/assets/fddb6daa6a803dcb1bf845aa",
    "dependencies": []
  },
  "rds-onecloud-phone-rates": {
    "importPath": null,
    "dependencies": []
  },
  "reimagine-article-list": {
    "importPath": "/__mirror/assets/7142ca63f84e6a28285da619",
    "dependencies": []
  },
  "reimagine-article-list-item": {
    "importPath": "/__mirror/assets/868805f2781c1c9bb698c07e",
    "dependencies": []
  },
  "reimagine-story-summary": {
    "importPath": "/__mirror/assets/dbb786bcd3f7764dec4fd1dd",
    "dependencies": []
  },
  "rds-onecloud-dropdown": {
    "importPath": null,
    "dependencies": []
  },
  "rds-onecloud-dropdown-bar": {
    "importPath": null,
    "dependencies": []
  },
  "rds-onecloud-tabs": {
    "importPath": null,
    "dependencies": []
  },
  "rds-onecloud-filter": {
    "importPath": null,
    "dependencies": []
  }
};
const eagerLoad = [];

/** Update the lazy-loader configuration at runtime */
export async function updateConfig(config) {
  if (config.components) {
    components = { ...components, ...config.components };
  }

  if(config.prefix || config.suffix) {
    components = getScopedComponents(config.prefix, config.suffix);
  }

  if (config.rootElement) {
    if (observer) {
      observer.disconnect();
    }
    start(config.rootElement);
  }

  if (config.eagerLoad) {
    await Promise.allSettled(eagerLoad?.map((tagName) => register(tagName)));
  }
}

function getScopedComponents(prefix = "", suffix = "") {
  const scopedComponents = {};
  for (const [key, value] of Object.entries(components)) {
    const newKey = prefix + key + suffix;
    scopedComponents[newKey] = value;
  }

  return scopedComponents;
}

/** Load any undefined custom elements and load the components in the list */
async function load(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const tags = [...root.querySelectorAll(":not(:defined)")]?.map((el) =>
    el.tagName.toLowerCase()
  ) || [];
  if (rootTagName.includes("-") && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister?.map((tagName) => register(tagName)));
}

/** Register the component and any dependencies */
function register(tagName) {
  const component = components[tagName];

  if (customElements.get(tagName)) {
    
    cleanUp(component, tagName);
    return Promise.resolve();
  }

  if (!component) {
    
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    import(component.importPath)
      .then(() => {
        
        cleanUp(component, tagName);
        resolve();
      })
      .catch(() => {
        console.error(`Unable to load <${tagName}> from ${component.importPath}`);
        reject();
      });
  });
}

/** Remove the component from the list of components to load */
function cleanUp(component, tagName) {
  delete components[tagName];
  component.dependencies?.forEach((dependency) => {
    delete components[dependency];
  });

  if (!Object.keys(component).length) {
    observer.disconnect();
  }
}

/** Delay the display of the UI until all components have loaded */
function reduceFOUC() {
  Promise.allSettled(
    [...document.querySelectorAll(":not(:defined)")].map((component) =>
      customElements.whenDefined(component.tagName.toLowerCase())
    )
  ).then(() => document.body.classList.add("wc-loaded"));

  // Add fallback in case a component fails to load
  setTimeout(() => document.body.classList.add("wc-loaded"), 200);
}

/** Initialize the loader */
async function start(root = document.body) {
  reduceFOUC();

  // Eager load any components that are not defined in the Custom Elements Manifest
  await Promise.allSettled(eagerLoad?.map((tagName) => register(tagName)));

  // Watch for any new elements that are added to the DOM
  observer = new MutationObserver((mutations) => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          load(node);
        }
      }
    }
  });
  
  load(root);
  observer.observe(root, { subtree: true, childList: true });
}

start();
