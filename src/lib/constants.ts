/**
 * Central content source for the Ember Data landing page.
 * All product claims are positioning copy for a fictional portfolio
 * concept — nothing here describes a live service.
 */

export const SITE = {
  name: "Ember Data",
  tagline: "Real-time data infrastructure for onchain applications.",
  description:
    "Ember Data is a fictional portfolio concept: a developer-first data layer delivering real-time price feeds and verified cross-chain intelligence to decentralized applications.",
} as const;

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Resources", href: "#resources" },
] as const;

export const DOCS_LINK = { label: "Docs", href: "/docs" } as const;

export const START_BUILDING_LINK = {
  label: "Start building",
  href: "#developers",
} as const;

export const ILLUSTRATIVE_LABEL = "Illustrative demo data" as const;

export const ECOSYSTEM_LABEL =
  "Illustrative ecosystem — fictional brands" as const;

/** Fictional ecosystem participants. Rendered as text wordmarks only. */
export const ECOSYSTEM = [
  { name: "Northstar Protocol", mark: "northstar" },
  { name: "Meridian Labs", mark: "meridian" },
  { name: "Orbit Finance", mark: "orbit" },
  { name: "Lattice Network", mark: "lattice" },
  { name: "Nova Markets", mark: "nova" },
] as const;

export type EcosystemMark = (typeof ECOSYSTEM)[number]["mark"];

/** Illustrative TypeScript integration snippet (not a published SDK). */
export const SNIPPET_TS = `// Illustrative example — Ember Data is a concept, not a published SDK.
import { EmberClient } from "@ember-data/sdk";

const ember = new EmberClient({ network: "mainnet" });

// Subscribe to a real-time price feed.
const feed = await ember.priceFeeds.get("ETH/USD");

console.log(feed.price);      // "2500.00" (illustrative)
console.log(feed.timestamp);  // Unix time, seconds (illustrative)`;

/** Illustrative on-chain consumer pattern (conceptual, not deployed code). */
export const SNIPPET_SOL = `// Illustrative consumer pattern — conceptual, not deployed code.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IEmberFeed {
    function latestPrice(bytes32 feedId) external view returns (uint256);
}

contract ExampleConsumer {
    IEmberFeed public immutable ember;

    constructor(address emberFeed) {
        ember = IEmberFeed(emberFeed);
    }

    function ethUsd() external view returns (uint256) {
        return ember.latestPrice("ETH/USD");
    }
}`;

export const DEV_TABS = [
  { id: "typescript", label: "TypeScript", language: "ts", code: SNIPPET_TS },
  { id: "solidity", label: "Solidity", language: "sol", code: SNIPPET_SOL },
] as const;

export const PAYLOAD_FEED = "ETH/USD";
export const PAYLOAD_SOURCE = "illustrative-demo";
