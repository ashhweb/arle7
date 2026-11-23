import {
  Briefcase,
  Droplets,
  FlaskConical,
  HeartPulse,
  Lock,
  Recycle,
  Shirt,
  SprayCan,
  Truck,
  WashingMachine,
  Wrench,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Commercial Laundry inside view (roof removed, isometric). Same structure as supermarket.ts.
 * The image path lives only in config/images.ts – swap assets/commercial-laundry.* (e.g. 7680 px
 * wide), run scripts/make-image-derivatives.mjs, and nothing else changes.
 * Positions are IMAGE percentages pointing at the exact spot.
 * `labelPlacement: "below"` moves a label under its icon if two labels ever collide.
 */
const commercialLaundry: SceneConfig = {
  id: "commercial-laundry",
  name: "Commercial Laundry",
  image: images.commercialLaundry,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the commercial laundry",
  },
  sections: [
    {
      id: "plant-room",
      name: "Plant Room",
      icon: Wrench,
      description: "Boilers, pumps and utilities that power the facility.",
      position: { x: 14.6, y: 39.2 },
      status: "coming-soon",
    },
    {
      id: "office",
      name: "Office",
      icon: Briefcase,
      description: "Administration, planning and customer service.",
      position: { x: 10.7, y: 65.7 },
      status: "coming-soon",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers, changing and hygiene facilities.",
      position: { x: 33.9, y: 72.7 },
      status: "coming-soon",
    },
    {
      id: "effluent-treatment-plant",
      name: "Effluent Treatment Plant",
      icon: Droplets,
      description: "Wastewater treatment before safe discharge.",
      position: { x: 39.9, y: 41.6 },
      status: "coming-soon",
    },
    {
      id: "janitor-room",
      name: "Janitor Room",
      icon: SprayCan,
      description: "Cleaning supplies and equipment storage.",
      position: { x: 47.0, y: 62.6 },
      status: "coming-soon",
    },
    {
      id: "tunnel-washers",
      name: "Tunnel Washers",
      icon: WashingMachine,
      description: "High-volume continuous batch washing lines.",
      position: { x: 49.2, y: 25.0 },
      status: "coming-soon",
    },
    {
      id: "laundry",
      name: "Laundry",
      icon: Shirt,
      description: "Main washing, drying and finishing floor.",
      position: { x: 55.9, y: 21.1 },
      status: "coming-soon",
    },
    {
      id: "laundry-healthcare",
      name: "Laundry - Healthcare",
      icon: HeartPulse,
      description: "Dedicated hygienic processing for hospital linen.",
      position: { x: 63.4, y: 17.1 },
      status: "coming-soon",
    },
    {
      id: "dry-cleaning",
      name: "Dry Cleaning",
      icon: Shirt,
      description: "Specialist garment and delicate fabric cleaning.",
      position: { x: 72.7, y: 16.9 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming delivery dock.",
      position: { x: 76.5, y: 72.7 },
      status: "coming-soon",
    },
    {
      id: "detergent-chemical-room",
      name: "Detergent / Chemical Room",
      icon: FlaskConical,
      description: "Safe storage and dosing of cleaning chemicals.",
      position: { x: 81.7, y: 24.6 },
      status: "coming-soon",
    },
    {
      id: "laundry-transfer-dock",
      name: "Laundry Transfer Dock",
      icon: Truck,
      description: "Loading and unloading of clean and soiled linen.",
      position: { x: 90.1, y: 25.6 },
      status: "coming-soon",
    },
  ],
};

export default commercialLaundry;
