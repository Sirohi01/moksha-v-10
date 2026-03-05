// config/blogConfig.js
// Blog content — replace with API: GET /api/blog

export const blogHero = {
  badge: "Stories & Insights",
  title: "The Moksha Seva Journal",
  subtitle: "Stories of compassion, community, and the human spirit.",
}

export const blogCategories = [
  "All", "Stories", "Volunteer Life", "Policy & Rights", "Our Impact", "Events"
]

export const blogPosts = [
  {
    id: "the-woman-who-waited",
    title: "The Woman Who Waited Three Days",
    slug: "the-woman-who-waited",
    category: "Stories",
    date: "March 1, 2024",
    author: { name: "Meera Joshi", avatar: "MJ" },
    readTime: "5 min read",
    excerpt: "Sunita had been sitting next to her husband's body for three days when our team arrived. This is her story — and why Moksha Seva exists.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75",
    tags: ["Family Stories", "Varanasi"],
    featured: true,
    content: `
      <p>It was the coldest night of January when our volunteer, Ramesh, received the call. A woman in a small alley off the Assi Ghat had been sitting beside her husband's body for three days.</p>
      <p>She had no money. Her children were young. She had knocked on every door on her street. Nothing.</p>
      <p>Ramesh arrived at midnight with two other volunteers. What they found broke their hearts — and also filled them with purpose.</p>
      <h2>The Wait</h2>
      <p>Sunita Devi, 42, had married her husband Ramkumar at 17. They had three children and a small vegetable stall. When Ramkumar collapsed from a heart attack, Sunita had exactly ₹320 in her possession.</p>
      <p>She needed ₹8,000 for the cremation. She had nothing.</p>
      <p>For three days, she sat. Neighbors gave her water. But no one could help with the costs.</p>
      <h2>The Arrival</h2>
      <p>When our team arrived, Sunita didn't speak. She just folded her hands. Our volunteers did what they always do — they got to work. Within three hours, Ramkumar received the cremation he deserved. With flowers. With prayers. With dignity.</p>
      <p>Sunita later told us: "I was ashamed that I could not give him this. You gave me back my dignity too."</p>
      <h2>Why This Matters</h2>
      <p>There are thousands of Sunitas across India. Poverty should never determine whether a human soul is honored at departure. This is why Moksha Seva exists.</p>
    `,
  },
  {
    id: "volunteer-perspective",
    title: "What Volunteering at 2am Teaches You",
    slug: "volunteer-perspective",
    category: "Volunteer Life",
    date: "February 18, 2024",
    author: { name: "Suresh Tiwari", avatar: "ST" },
    readTime: "4 min read",
    excerpt: "Three years of midnight calls, cold winters, and tearful families have taught me more about life than anything else ever could.",
    coverImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=75",
    tags: ["Volunteer Stories", "Reflection"],
    featured: false,
    content: `<p>I joined Moksha Seva in 2021 thinking I was going to "give back." I didn't realize how much I would receive.</p><p>Three years later, I've attended over 200 families in their darkest hours. And each time, something in me changes.</p><h2>The Silence</h2><p>There's a particular silence in a home where someone has just passed. You learn to move quietly in it. To work without disturbing it.</p><p>That silence has taught me to slow down in my own life — to appreciate noise, laughter, the ordinary.</p>`,
  },
  {
    id: "right-to-dignified-cremation",
    title: "The Right to a Dignified Farewell: A Policy Perspective",
    slug: "right-to-dignified-cremation",
    category: "Policy & Rights",
    date: "February 5, 2024",
    author: { name: "Dr. Kavita Rao", avatar: "KR" },
    readTime: "7 min read",
    excerpt: "India has no formal legal framework guaranteeing dignified last rites for the poor. Here's why that needs to change — and what we're doing about it.",
    coverImage: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=75",
    tags: ["Policy", "Rights", "Advocacy"],
    featured: false,
    content: `<p>While the Constitution guarantees rights in life, there is no explicit protection for the rights of the deceased's family to conduct dignified last rites.</p><p>For millions of India's poorest families, this gap has devastating consequences.</p>`,
  },
  {
    id: "covid-response",
    title: "How We Served 800 Families During COVID-19",
    slug: "covid-response",
    category: "Our Impact",
    date: "January 22, 2024",
    author: { name: "Anand Mishra", avatar: "AM" },
    readTime: "6 min read",
    excerpt: "When crematoria were overwhelmed and families were turned away, Moksha Seva stepped in. Here's what those 90 days looked like.",
    coverImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=75",
    tags: ["COVID-19", "Emergency Response"],
    featured: false,
    content: `<p>April 2021. The second wave was at its peak. Crematoria across UP were overwhelmed. Bodies were being turned away.</p><p>We activated every volunteer we had. Within 48 hours, we had 200 volunteers operational across 8 cities.</p>`,
  },
  {
    id: "eco-cremation-launch",
    title: "Launching Eco-Friendly Cremations Across UP",
    slug: "eco-cremation-launch",
    category: "Events",
    date: "January 10, 2024",
    author: { name: "Priti Sharma", avatar: "PS" },
    readTime: "3 min read",
    excerpt: "We've launched an eco-friendly cremation program that uses 70% less wood — a greener farewell for those who choose it.",
    coverImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=75",
    tags: ["Environment", "Innovation"],
    featured: false,
    content: `<p>Traditional open-air cremations consume significant amounts of wood. Our new program reduces this by 70% using CNG-based infrastructure, available free of charge.</p>`,
  },
  {
    id: "10000-milestone",
    title: "We Served Our 10,000th Family",
    slug: "10000-milestone",
    category: "Our Impact",
    date: "December 15, 2023",
    author: { name: "Meera Joshi", avatar: "MJ" },
    readTime: "4 min read",
    excerpt: "A milestone we never imagined when we started in 2010. The story of Family #10,000 and what this number means to us.",
    coverImage: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=75",
    tags: ["Milestone", "Impact"],
    featured: false,
    content: `<p>On December 10th, 2023, we served our 10,000th family. Her name was Lakshmi. She was 71 years old, and her son had passed away suddenly.</p>`,
  },
]
