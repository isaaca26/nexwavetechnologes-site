export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  logo: string;
  fullLogo: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    slug: "nexstream",
    name: "NexStream for NATS",
    tagline: "NATS Messaging for Ignition",
    description:
      "Native NATS and JetStream messaging for Ignition Event Streams. Publish, subscribe, and stream industrial data seamlessly.",
    icon: '<svg class="h-6 w-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    logo: "/logos/nexstream-icon-dark.svg",
    fullLogo: "/logos/nexstream-full-dark.svg",
    metaDescription:
      "NexStream brings native NATS and JetStream messaging to Ignition Event Streams. Publish, subscribe, and stream industrial data seamlessly.",
  },
];
