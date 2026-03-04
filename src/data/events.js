export const events = [
  {
    slug: "midnight-synth-wave",
    eventName: "Midnight Synth Wave",
    artists: "Nova Echo, Laser Harbor",
    dateTime: "Fri, Mar 20, 2026 - 8:30 PM",
    venue: "The Mercury Hall",
    genre: "Synthwave",
    ticketPrice: "$22",
    image:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80",
    description:
      "A neon-soaked set headlined by Nova Echo with layered analog synths and visual projections mapped across the stage.",
    ageRequirement: "18+",
    campusDistance: "1.4 miles"
  },
  {
    slug: "vinyl-rooftop-sessions",
    eventName: "Vinyl Rooftop Sessions",
    artists: "DJ Cloverlane, Miles Avery",
    dateTime: "Sat, Mar 28, 2026 - 6:00 PM",
    venue: "Skyline Commons Roof Deck",
    genre: "House",
    ticketPrice: "$15",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sunset house grooves with a rooftop city view, rotating vinyl-only DJ sets, and local food pop-ups.",
    ageRequirement: "All Ages",
    campusDistance: "0.8 miles"
  },
  {
    slug: "acoustic-stories-open-mic",
    eventName: "Acoustic Stories Open Mic",
    artists: "Student & local performers",
    dateTime: "Thu, Mar 12, 2026 - 7:00 PM",
    venue: "Cedar Lantern Cafe",
    genre: "Acoustic",
    ticketPrice: "Free",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A laid-back weekly open mic where singer-songwriters share original tracks, covers, and short storytelling sets.",
    ageRequirement: "All Ages",
    campusDistance: "0.5 miles"
  },
  {
    slug: "pulse-n-bass-festival-night",
    eventName: "Pulse N Bass Festival Night",
    artists: "Kite Runner, Arc Bloom, DJ RISE",
    dateTime: "Fri, Apr 03, 2026 - 9:30 PM",
    venue: "Union Yard Warehouse",
    genre: "EDM",
    ticketPrice: "$35",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    description:
      "A high-energy lineup with immersive lighting and bass-driven sets from regional electronic artists.",
    ageRequirement: "21+",
    campusDistance: "2.7 miles"
  },
  {
    slug: "backyard-jazz-social",
    eventName: "Backyard Jazz Social",
    artists: "The Alder Quartet",
    dateTime: "Sun, Mar 22, 2026 - 5:00 PM",
    venue: "Rosemont Courtyard",
    genre: "Jazz",
    ticketPrice: "$12",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    description:
      "An intimate jazz social with classic standards, modern improvisations, and plenty of room to relax outdoors.",
    ageRequirement: "All Ages",
    campusDistance: "1.1 miles"
  },
  {
    slug: "alt-ink-garage-show",
    eventName: "Alt Ink Garage Show",
    artists: "Flicker Room, The Sidewalk Keys",
    dateTime: "Wed, Mar 18, 2026 - 8:00 PM",
    venue: "Broken Meter Garage",
    genre: "Indie Rock",
    ticketPrice: "$10",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    description:
      "A gritty indie showcase in a converted garage space known for loud amps, mural walls, and packed crowds.",
    ageRequirement: "18+",
    campusDistance: "2.0 miles"
  },
  {
    slug: "global-rhythm-night-market",
    eventName: "Global Rhythm Night Market",
    artists: "Luna Tides, Ayana K, Campfire Brass",
    dateTime: "Sat, Apr 11, 2026 - 7:30 PM",
    venue: "East Gate Market Plaza",
    genre: "World",
    ticketPrice: "$18",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    description:
      "A live music market pairing global sounds with local makers, snacks, and rotating pop-up performance corners.",
    ageRequirement: "All Ages",
    campusDistance: "1.9 miles"
  },
  {
    slug: "late-night-hip-hop-cypher",
    eventName: "Late Night Hip-Hop Cypher",
    artists: "Cipherline Collective",
    dateTime: "Fri, Apr 17, 2026 - 10:00 PM",
    venue: "South Block Studio",
    genre: "Hip-Hop",
    ticketPrice: "$16",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
    description:
      "Freestyle rounds, live beat sets, and feature verses from local campus talent in a small studio format.",
    ageRequirement: "18+",
    campusDistance: "1.6 miles"
  }
];

export const eventMap = new Map(events.map((event) => [event.slug, event]));
