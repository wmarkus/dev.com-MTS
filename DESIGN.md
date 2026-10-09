# Inventory workspace

This document describes the **original migration-review tool**, not the
Microsoft Developer website or its future redesign.

## Purpose and hierarchy

Operate mode: inspect route evidence, review coverage gaps, record scope
decisions, and export a handoff. The completeness warning and current
English-only scope precede the route table. Source pages are always marked
as not migrated.

## Visual system

- System UI typography, with Segoe UI preferred when available.
- Light document surfaces for a desktop review workflow.
- Background `#f5f7fa`, surface `#ffffff`, text `#172338`.
- Action blue `#0755ac`, supporting text `#506078`, border `#d3dce7`.
- Amber warning surface `#fff6df`; warning text `#5f491b`.
- Compact table rows, plain evidence disclosures, and a route-detail panel.
- Status uses words as well as color. No source trademarks or illustrations.

## Behavior

All locale and area filters reflect the included records. On narrow screens,
filters form two columns, the table scrolls inside its own container, and the
detail panel follows the table. Keyboard focus moves to the selected route
heading. View switches use buttons, not incorrect partial tab semantics.
Motion is restricted to a short view reveal and honors reduced-motion settings.

## Detector review

The `border-accent-on-rounded` finding on the view-navigation buttons is a
false positive: these buttons explicitly set `border-radius: 0`, and their
bottom border is the selected-view indicator, not a rounded-card accent.
No detector suppression was added.
