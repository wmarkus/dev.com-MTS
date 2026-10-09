# Developer site migration

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site owner and design team are preparing to reduce and redesign the
Microsoft Developer website.

## Product Purpose

Inventory the existing site, preserve the migration scope, and prepare an
editable content and design handoff. The requested end state is a faithful
recreation followed by footprint reduction in Framer and a Figma-led redesign.

## Capabilities and Constraints

- The source is `https://developer.microsoft.com/en-us/`.
- English pages on the same hostname are in scope, including Reactor.
- Exclude the Microsoft Developer blog, Edge, games, and Microsoft 365
  (including its Office, Graph, and Teams product-family routes).
- Language-neutral paths remain candidates until the page language or redirect
  establishes whether they are English.
- Other hosts are out of scope as pages. An external asset URL is a dependency,
  not an instruction to crawl its host.
- Do not reduce scope or redesign the source during the inventory phase.
- Respect robots rules, access restrictions, and external redirect boundaries.
- An inventory entry is not proof of a migrated or even inspected page.
- The user explicitly authorized full reproduction on October 8, 2026.
- Capture the included website and its required assets into this repository
  before beginning any Framer or Figma connection work.
- Do not copy credentials, ephemeral form tokens, or tracking identifiers.
  Keep analytics disabled in the local recreation.

## Evidence on Hand

Public navigation, robots declarations, sitemaps, and inspected page metadata.
The repository originally contained only a README. No licensed source export,
Framer project, or Figma file URL was supplied.

## Open Decisions

Destination Framer project; Figma design file; eventual
keep/consolidate/remove decisions. These are deferred until the repository
recreation is complete.
