import {
  BedSingle,
  Briefcase,
  BriefcaseMedical,
  Car,
  ConciergeBell,
  Recycle,
  Scissors,
  SprayCan,
  Stethoscope,
  Users,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Hospital inside view (isometric cut-away, roof removed). Same structure as hotel.ts / college.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/hospital.png (+ .avif / .webp /
 * -lqip.jpg via scripts/make-image-derivatives.mjs hospital.png --webp) with a 7680 px wide
 * version and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. x is the centre of the marker in the
 * reference artwork; y is the marker centre + 2.6 % (the pin has a constant on-screen size and its
 * pointer tail sits ~25 px below the icon centre), so the icon lands exactly on the original marker.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 * (The half-visible marker at the very top edge, x ≈ 72 %, is intentionally NOT a pin.)
 */
const hospital: SceneConfig = {
  id: "hospital",
  name: "Hospital",
  image: images.hospital,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the hospital",
  },
  sections: [
    {
      id: "operating-room",
      name: "Operating Room",
      icon: Scissors,
      description: "Sterile surgical suites for planned and emergency procedures.",
      position: { x: 36.1, y: 10.0 },
      status: "coming-soon",
      labelPlacement: "below", // pin sits at the top edge of the image – keep its label on screen
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Medical waste handling and incoming supply dock.",
      position: { x: 81.9, y: 10.7 },
      status: "coming-soon",
      labelPlacement: "below", // top edge – keep the label on screen
    },
    {
      id: "public-washroom",
      name: "Public Washroom",
      icon: Users,
      description: "Clean, accessible facilities for patients and visitors.",
      position: { x: 50.8, y: 21.5 },
      status: "coming-soon",
    },
    {
      id: "opd",
      name: "OPD",
      icon: Stethoscope,
      description: "Outpatient clinics for consultations without admission.",
      position: { x: 63.4, y: 23.9 },
      status: "coming-soon",
    },
    {
      id: "patient-room",
      name: "Patient Room",
      icon: BedSingle,
      description: "Comfortable inpatient rooms for care and recovery.",
      position: { x: 74.5, y: 25.2 },
      status: "coming-soon",
    },
    {
      id: "car-park",
      name: "Car Park",
      icon: Car,
      description: "Parking for patients, visitors and staff.",
      position: { x: 24.9, y: 26.4 },
      status: "coming-soon",
    },
    {
      id: "office",
      name: "Office",
      icon: Briefcase,
      description: "Hospital administration and management.",
      position: { x: 35.5, y: 36.1 },
      status: "coming-soon",
    },
    {
      id: "janitor-room",
      name: "Janitor Room",
      icon: SprayCan,
      description: "Cleaning supplies and equipment storage.",
      position: { x: 80.6, y: 40.4 },
      status: "coming-soon",
    },
    {
      id: "nursing-station",
      name: "Nursing Station",
      icon: BriefcaseMedical,
      description: "Central hub for nurses to monitor and coordinate patient care.",
      position: { x: 38.0, y: 44.8 },
      status: "coming-soon",
    },
    {
      id: "hospital-reception",
      name: "Hospital Reception",
      icon: ConciergeBell,
      description: "Registration, enquiries and front desk.",
      position: { x: 57.7, y: 51.9 },
      status: "coming-soon",
    },
  ],
};

export default hospital;
