import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "my-real-customer-app",
    name: "My Real Customer App",
    description:
      "A multi-tenant SaaS business management platform for Nigerian SMEs. Admins invite sub-users with scoped roles — inventory, finance, messaging — and every action rolls up into one dashboard in real time.",
    features: [
      "Role-based access enforced across 4 tiers",
      "Paystack subscription billing, live",
      "WhatsApp Cloud API messaging, live",
      "Brevo transactional email, live",
    ],
    tags: ["Multi-tenancy", "RBAC", "Paystack", "WhatsApp Cloud API", "React · Node · MongoDB"],
    status: "build",
    image: "/images/my-real-customer-app.png",
    size: "large",
    featured: true,
    demoUrl: "https://myreal-customer-app.vercel.app/",
    // githubUrl: "https://github.com/your-username/your-repo",
  },
  {
    id: "fony",
    name: "Fony",
    description:
      "A full-stack task management app with dual authentication — Google OAuth or email/password with OTP verification — and progress-based task tracking instead of a simple done/not-done toggle.",
    features: [
      "Google OAuth + email/password with OTP verification",
      "Progress-based tracking (0–100%), not just done/not-done",
      "Cloudinary image uploads for tasks and profiles",
      "Admin dashboard: user management, stats, completion tracking",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Google OAuth", "Cloudinary"],
    status: "live",
    image: "/images/fony.png",
    size: "small",
    demoUrl: "https://fony-frontend-767q.vercel.app/",
    githubUrl: "https://github.com/Tbrainyz/FONY-FRONTEND",
  },
  {
    id: "eventra",
    name: "Eventra",
    description:
      "A responsive event discovery and ticketing platform for the Nigerian market. Attendees browse events, RSVP to free ones, and buy tickets in Naira through Paystack, while organisers sell tickets and get paid out with a 5% platform commission. Built as a Tech Studio Academy internship project with a team of 10, which I led.",
    features: [
      "Free RSVPs and paid tickets via Paystack checkout, refunds and payouts",
      "Signature-verified, idempotent webhooks with overbooking guards",
      "Session-based auth, OTP email verification via Brevo, three user roles",
      "Explore page with multi-category, date, price and sort filters",
    ],
    tags: ["React 19", "TypeScript", "Node · Express", "MongoDB", "Paystack", "Tailwind", "TanStack Query"],
    status: "live",
    image: "/images/eventra.png",
    size: "large",
    demoUrl: "https://eventra-front-delta.vercel.app/",
  },
];
