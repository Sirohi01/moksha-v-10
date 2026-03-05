// config/donationConfig.js
// Donation page — replace with API: GET /api/donation

export const donationHero = {
  badge: "Support Our Mission",
  title: "Your Gift Brings\nDignity to Grief",
  subtitle: "Every donation ensures a family never has to face the burden of last rites alone.",
  image: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=75",
}

export const donationAmounts = [
  { value: 500, label: "₹500", description: "Covers transport costs for one family" },
  { value: 1000, label: "₹1,000", description: "Supports ritual materials for one cremation" },
  { value: 2500, label: "₹2,500", description: "Fully supports one complete seva" },
  { value: 5000, label: "₹5,000", description: "Serves two families completely" },
  { value: 10000, label: "₹10,000", description: "Sponsors 4 families — a month of impact" },
]

export const donationPurposes = [
  "General Fund",
  "Emergency Response",
  "Volunteer Support",
  "Transport Services",
  "Eco-Cremation Program",
  "Grief Counseling",
  "Documentation Support",
]

export const impactStats = [
  { amount: "₹500", impact: "Pays for transport" },
  { amount: "₹1,000", impact: "Covers ritual items" },
  { amount: "₹2,500", impact: "One full cremation" },
  { amount: "₹10,000", impact: "4 complete families" },
]

export const donationTrustBadges = [
  "80G Tax Exemption",
  "FCRA Registered",
  "Audited Annually",
  "100% Transparency",
]

export const receiptConfig = {
  orgName: "Moksha Seva Foundation",
  orgAddress: "12, Seva Marg, Varanasi, UP – 221001",
  orgPhone: "+91-9800-000-000",
  orgEmail: "help@mokshaseva.org",
  orgPan: "AAACM0000A",
  orgRegNo: "U85300UP2010NPL040001",
  section80G: "Under Section 80G of Income Tax Act",
  thankYouMessage: "Your generosity restores dignity to those in their most vulnerable hour. On behalf of every family we serve, thank you.",
  logoText: "Moksha Seva",
}
