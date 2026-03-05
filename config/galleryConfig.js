// config/galleryConfig.js
// Gallery page — replace with API: GET /api/gallery

export const galleryHero = {
  badge: "Gallery",
  title: "Moments of Seva",
  subtitle: "Every image here represents a family supported, a soul honored, a promise kept.",
}

export const photoGallery = [
  { id: 1, src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=75", alt: "Volunteers performing seva", category: "Volunteers", caption: "Our volunteers in Varanasi, 2023" },
  { id: 2, src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=75", alt: "Community support", category: "Community", caption: "Community gathering, Lucknow" },
  { id: 3, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75", alt: "Spiritual ceremony", category: "Ceremonies", caption: "Dawn ceremony at Ganga Ghat" },
  { id: 4, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=75", alt: "Nature backdrop", category: "Nature", caption: "Peaceful cremation ground, Prayagraj" },
  { id: 5, src: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=75", alt: "Candlelight vigil", category: "Ceremonies", caption: "Annual memorial vigil, 2023" },
  { id: 6, src: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=75", alt: "Volunteer team", category: "Volunteers", caption: "Volunteer training, Kanpur" },
  { id: 7, src: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=800&q=75", alt: "Community event", category: "Community", caption: "Annual donor meet, 2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=75", alt: "Sunrise seva", category: "Nature", caption: "Morning seva at sunrise" },
  { id: 9, src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=75", alt: "Trees and peace", category: "Nature", caption: "Eco-cremation forest site" },
  { id: 10, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=75", alt: "Hands of service", category: "Volunteers", caption: "Hands united in service" },
  { id: 11, src: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=800&q=75", alt: "Women volunteers", category: "Community", caption: "Women volunteers, Varanasi chapter" },
  { id: 12, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=75", alt: "Group photo", category: "Community", caption: "Team Moksha Seva, Agra 2024" },
]

export const videoGallery = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75", title: "Our Mission — Moksha Seva Story", duration: "5:42", url: "https://youtube.com/watch?v=example1", category: "Documentary" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=75", title: "Volunteer Day at Varanasi", duration: "8:15", url: "https://youtube.com/watch?v=example2", category: "Volunteer Stories" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=75", title: "10,000 Families Milestone", duration: "3:20", url: "https://youtube.com/watch?v=example3", category: "Milestones" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=75", title: "Annual Memorial Vigil 2023", duration: "12:05", url: "https://youtube.com/watch?v=example4", category: "Events" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=800&q=75", title: "Founder Anand Mishra Interview", duration: "18:30", url: "https://youtube.com/watch?v=example5", category: "Documentary" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=75", title: "COVID-19 Emergency Response", duration: "6:50", url: "https://youtube.com/watch?v=example6", category: "Volunteer Stories" },
]

export const galleryCategories = {
  photos: ["All", "Volunteers", "Ceremonies", "Community", "Nature"],
  videos: ["All", "Documentary", "Volunteer Stories", "Milestones", "Events"],
}
