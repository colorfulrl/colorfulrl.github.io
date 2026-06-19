import type { CollectionEntry } from "astro:content";
import {
  GRAPH_STATIC_NODES,
  GRAPH_STATIC_EDGES,
  type GraphNode,
  type GraphEdge,
} from "@/data/graphStaticNodes";

export type { GraphNode, GraphEdge };

export function buildResearchGraph(
  entries: CollectionEntry<"research">[],
): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const paperNodes: GraphNode[] = entries
    .filter(e => !e.data.draft)
    .map(entry => ({
      id:          entry.id,
      type:        "paper" as const,
      label:       entry.data.graphLabel ?? entry.data.title,
      description: entry.data.graphDescription ?? entry.data.abstract ?? "",
      slug:        entry.id,
    }));

  const paperEdges: GraphEdge[] = entries
    .filter(e => !e.data.draft)
    .flatMap(entry =>
      (entry.data.graphEdges ?? []).map(edge => ({
        source: entry.id,
        target: edge.target,
        label:  edge.label,
      })),
    );

  const nodes = [...GRAPH_STATIC_NODES, ...paperNodes];
  const allEdges = [...GRAPH_STATIC_EDGES, ...paperEdges];

  // Defensive filter: Cytoscape throws on init if an edge references a node
  // id that doesn't exist (e.g. an edge to a `draft: true` paper, or a typo in
  // graphEdges frontmatter). A single dangling edge blanks the whole graph, so
  // we drop them here and warn at build time instead of crashing in the browser.
  const nodeIds = new Set(nodes.map(n => n.id));
  const edges: GraphEdge[] = [];
  const dropped: GraphEdge[] = [];
  for (const edge of allEdges) {
    if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) edges.push(edge);
    else dropped.push(edge);
  }

  if (dropped.length > 0) {
    const detail = dropped
      .map(e => {
        const missing = !nodeIds.has(e.source) ? e.source : e.target;
        return `  ${e.source} —[${e.label}]→ ${e.target}  (missing node: "${missing}")`;
      })
      .join("\n");
    console.warn(
      `[buildResearchGraph] Dropped ${dropped.length} dangling edge(s) — ` +
        `target/source node not found (likely a draft paper or typo):\n${detail}`,
    );
  }

  return { nodes, edges };
}
