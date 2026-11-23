/**
 * SINGLE SOURCE OF TRUTH for every image path in the site.
 *
 * To upgrade to the final 8K artwork: drop the new files into /src/assets with the same
 * names (or change the imports below). The viewer reads the natural size from the file,
 * so no other code needs to change. Provide .avif next to the .jpg for the best
 * performance; the <picture> element serves AVIF first and falls back to JPEG.
 */
import type { ImageAsset } from "@/types";

import landingJpg from "@/assets/landing-doha.jpg";
import landingAvif from "@/assets/landing-doha.avif";
import landingLqip from "@/assets/landing-doha-lqip.jpg";

import cityJpg from "@/assets/city-panorama.jpg";
import cityAvif from "@/assets/city-panorama.avif";
import cityLqip from "@/assets/city-panorama-lqip.jpg";

import marketJpg from "@/assets/supermarket-inside.jpg";
import marketAvif from "@/assets/supermarket-inside.avif";
import marketLqip from "@/assets/supermarket-inside-lqip.jpg";

import mallJpg from "@/assets/shopping-centre.jpg";
import mallAvif from "@/assets/shopping-centre.avif";
import mallLqip from "@/assets/shopping-centre-lqip.jpg";

import laundryJpg from "@/assets/commercial-laundry.jpg";
import laundryAvif from "@/assets/commercial-laundry.avif";
import laundryLqip from "@/assets/commercial-laundry-lqip.jpg";

import hotelJpg from "@/assets/hotel.jpg";
import hotelAvif from "@/assets/hotel.avif";
import hotelLqip from "@/assets/hotel-lqip.jpg";

import collegeJpg from "@/assets/college.jpg";
import collegeAvif from "@/assets/college.avif";
import collegeLqip from "@/assets/college-lqip.jpg";

import fastFoodJpg from "@/assets/fast-food.jpg";
import fastFoodAvif from "@/assets/fast-food.avif";
import fastFoodLqip from "@/assets/fast-food-lqip.jpg";

// Hospital: PNG source (used as the universal fallback) + AVIF/WebP + blurred placeholder.
// Replace these 4 files in /assets with the final 7680 px artwork (same names) – no code changes.
import hospitalPng from "@/assets/hospital.png";
import hospitalAvif from "@/assets/hospital.avif";
import hospitalWebp from "@/assets/hospital.webp";
import hospitalLqip from "@/assets/hospital-lqip.jpg";

export const images = {
  landing: {
    jpg: landingJpg,
    avif: landingAvif,
    placeholder: landingLqip,
    alt: "Doha, Qatar skyline at sunset over the bay",
  },
  city: {
    jpg: cityJpg,
    avif: cityAvif,
    placeholder: cityLqip,
    alt: "Aerial panorama of ARLE City with the Doha waterfront, industrial zone and airport",
  },
  supermarket: {
    jpg: marketJpg,
    avif: marketAvif,
    placeholder: marketLqip,
    alt: "Isometric cut-away view of the ARLE City supermarket",
  },
  shoppingCentre: {
    jpg: mallJpg,
    avif: mallAvif,
    placeholder: mallLqip,
    alt: "Eye-level view of the ARLE City shopping centre with its curved gold-trimmed roof, glass facade and car park",
  },
  commercialLaundry: {
    jpg: laundryJpg,
    avif: laundryAvif,
    placeholder: laundryLqip,
    alt: "Isometric cut-away view of the ARLE City commercial laundry with washing lines, treatment tanks, offices and a loading dock",
  },
  hotel: {
    jpg: hotelJpg,
    avif: hotelAvif,
    placeholder: hotelLqip,
    alt: "Elevated aerial view of the ARLE City hotel",
  },
  college: {
    jpg: collegeJpg,
    avif: collegeAvif,
    placeholder: collegeLqip,
    alt: "Isometric aerial view of the ARLE City college campus",
  },
  fastFood: {
    jpg: fastFoodJpg,
    avif: fastFoodAvif,
    placeholder: fastFoodLqip,
    alt: "Isometric cut-away view of an ARLE City fast food outlet",
  },
  hospital: {
    jpg: hospitalPng,
    avif: hospitalAvif,
    webp: hospitalWebp,
    placeholder: hospitalLqip,
    alt: "Isometric cut-away view of the ARLE City hospital with patient rooms, operating rooms, nursing station and reception, surrounded by palm trees and a park",
  },
} satisfies Record<string, ImageAsset>;
