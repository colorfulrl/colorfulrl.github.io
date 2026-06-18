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

  return {
    nodes: [...GRAPH_STATIC_NODES, ...paperNodes],
    edges: [...GRAPH_STATIC_EDGES, ...paperEdges],
  };
}
