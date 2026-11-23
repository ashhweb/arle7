import { Briefcase, ChefHat, Recycle, Store, UtensilsCrossed, Users, Warehouse } from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Shopping Centre inside view (exterior, eye-level). Same structure as supermarket.ts.
 * The image path lives only in config/images.ts – swap the file (e.g. an 8K version)
 * and nothing else changes. Positions are IMAGE percentages pointing at the exact spot.
 */
const shoppingCentre: SceneConfig = {
  id: "shopping-centre",
  name: "Shopping Centre",
  image: images.shoppingCentre,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the shopping centre",
  },
  sections: [
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Bulk storage and stock management for every store.",
      position: { x: 16, y: 53.5 },
      status: "coming-soon",
    },
    {
      id: "qsr-kitchen",
      name: "QSR Kitchen",
      icon: ChefHat,
      description: "Fast-service kitchen operations behind the food court.",
      position: { x: 25, y: 54 },
      status: "coming-soon",
    },
    {
      id: "qsr-dining",
      name: "QSR Dining Area",
      icon: UtensilsCrossed,
      description: "Open food court seating and quick-service dining.",
      position: { x: 32.5, y: 54 },
      status: "coming-soon",
    },
    {
      id: "mall-atrium",
      name: "Mall Atrium Area",
      icon: Store,
      description: "The central hall connecting shops, services and events.",
      position: { x: 42, y: 57.5 },
      status: "coming-soon",
    },
    {
      id: "public-washroom",
      name: "Public Washroom",
      icon: Users,
      description: "Clean, accessible facilities for all visitors.",
      position: { x: 54.5, y: 61.5 },
      status: "coming-soon",
    },
    {
      id: "office",
      name: "Office",
      icon: Briefcase,
      description: "Mall management and administration.",
      position: { x: 68, y: 60.5 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming delivery dock.",
      position: { x: 80, y: 59.5 },
      status: "coming-soon",
    },
  ],
};

export default shoppingCentre;
