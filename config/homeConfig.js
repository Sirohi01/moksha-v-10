// config/homeConfig.js
// Home page content — replace with API: GET /api/home

export const hero = {
  badge: "Serving Humanity Since 2010",
  title: "A Dignified Farewell\nfor Every Soul",
  subtitle:
    "Moksha Seva provides free cremation services to families who cannot afford last rites. Because every life deserves a respectful departure.",
  cta: { label: "Request Emergency Help", href: "/help" },
  ctaSecondary: { label: "Support Our Mission", href: "/donation" },
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  stats: [
    { value: "12,400+", label: "Families Served" },
    { value: "28", label: "Cities Covered" },
    { value: "Free", label: "All Services" },
  ],
}

export const about = {
  badge: "Who We Are",
  title: "Born from Compassion,\nDriven by Service",
  body: "In 2010, a group of volunteers witnessed families unable to perform last rites for their loved ones. From that moment, Moksha Seva was founded — a promise that no family would face this struggle alone. We operate with complete transparency, zero cost to families, and unwavering respect for every tradition.",
  image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&q=80",
  cta: { label: "Our Full Story", href: "/about" },
  highlights: [
    { icon: "🕯️", text: "100% Free Services" },
    { icon: "🙏", text: "All Faiths Respected" },
    { icon: "⚡", text: "24/7 Emergency Response" },
  ],
}

export const stats = [
  { value: "12,400", suffix: "+", label: "Cremations Performed", icon: "🕯️" },
  { value: "28", suffix: "", label: "Cities Served", icon: "🗺️" },
  { value: "4,200", suffix: "+", label: "Volunteers", icon: "🤝" },
  { value: "14", suffix: "", label: "Years of Service", icon: "📅" },
  { value: "100", suffix: "%", label: "Free for Families", icon: "💛" },
  { value: "24/7", suffix: "", label: "Emergency Support", icon: "📞" },
]

export const services = {
  badge: "Our Seva",
  title: "Services We Provide",
  subtitle: "Every service is offered free of charge with dignity and compassion.",
  items: [
    {
      id: 1,
      icon: "🔥",
      title: "Cremation Services",
      description:
        "Complete cremation arrangements handled with full respect for religious customs and family wishes.",
    },
    {
      id: 2,
      icon: "🚑",
      title: "Body Transportation",
      description:
        "Safe and respectful transportation of the deceased from home or hospital to the cremation ground.",
    },
    {
      id: 3,
      icon: "📋",
      title: "Documentation Support",
      description:
        "Assistance with death certificates, forms, and official paperwork during your time of grief.",
    },
    {
      id: 4,
      icon: "🪔",
      title: "Ritual Assistance",
      description:
        "Guidance and support for last rites, prayers, and rituals across Hindu, Muslim, Sikh, and Christian traditions.",
    },
    {
      id: 5,
      icon: "🏠",
      title: "Grief Counseling",
      description:
        "Compassionate counselors available to support bereaved families through their loss.",
    },
    {
      id: 6,
      icon: "🌿",
      title: "Eco-Friendly Options",
      description:
        "Environmentally conscious cremation alternatives for families who choose a greener farewell.",
    },
  ],
}

export const emergencyCta = {
  title: "Need Immediate Assistance?",
  subtitle:
    "Our emergency response team is available around the clock. Call us now and we will be there within hours.",
  phone: "+91-9000-111-222",
  cta: { label: "Fill Emergency Form", href: "/help" },
}

export const galleryPreview = {
  badge: "Gallery",
  title: "Moments of Seva",
  subtitle: "Glimpses of our work across India.",
  images: [
    { src: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&q=75", alt: "Seva volunteers at work", category: "Volunteers" },
    { src: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=75", alt: "Community gathering", category: "Community" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75", alt: "Spiritual ceremony", category: "Ceremony" },
    { src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=75", alt: "Team at seva", category: "Team" },
    { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=75", alt: "Nature and peace", category: "Nature" },
    { src: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=600&q=75", alt: "Candles ceremony", category: "Ceremony" },
  ],
  cta: { label: "View Full Gallery", href: "/gallery" },
}

export const blogs = {
  badge: "Blog & Stories",
  title: "Stories of Compassion",
  subtitle: "Read about the lives we've touched and the mission that drives us.",
  cta: { label: "Read All Articles", href: "/blog" },
}

export const testimonials = {
  badge: "Testimonials",
  title: "Words from Families We've Served",
  items: [
    {
      id: 1,
      name: "Sunita Devi",
      location: "Varanasi, UP",
      text: "When my husband passed, I had nothing. Moksha Seva arrived within hours, handled everything, and treated him with so much respect. I will be forever grateful.",
      avatar: "SD",
    },
    {
      id: 2,
      name: "Ramesh Gupta",
      location: "Lucknow, UP",
      text: "We were a family of six with no money for last rites. Moksha Seva not only performed the cremation but also helped us with all the paperwork. Angels in disguise.",
      avatar: "RG",
    },
    {
      id: 3,
      name: "Fatima Begum",
      location: "Kanpur, UP",
      text: "They respected our Islamic traditions completely and ensured my father's burial was conducted with full dignity. May Allah bless this organization.",
      avatar: "FB",
    },
    {
      id: 4,
      name: "Priya Sharma",
      location: "Prayagraj, UP",
      text: "The volunteers came at 2am without hesitation. The compassion and efficiency they showed during our darkest moment was extraordinary.",
      avatar: "PS",
    },
  ],
}

export const donationCta = {
  title: "Every Rupee Brings Dignity",
  subtitle:
    "Your donation ensures that no family has to struggle during their most vulnerable moment. Join thousands of donors who make this mission possible.",
  amounts: [500, 1000, 2500, 5000],
  cta: { label: "Donate Now", href: "/donation" },
  ctaSecondary: { label: "Learn How We Use Funds", href: "/about" },
  note: "80G Tax Exemption Available · All donations are used for family services",
}
