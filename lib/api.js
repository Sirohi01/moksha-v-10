// lib/api.js
// Future backend API integration layer
// When backend is ready, replace config imports with these fetch calls

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mokshaseva.org'

async function fetchAPI(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

// Home
export const getHomeData = () => fetchAPI('/api/home')

// About
export const getAboutData = () => fetchAPI('/api/about')

// Gallery
export const getGallery = (type = 'photos') => fetchAPI(`/api/gallery?type=${type}`)

// Blog
export const getBlogs = (params = {}) => {
  const query = new URLSearchParams(params).toString()
  return fetchAPI(`/api/blog?${query}`)
}
export const getBlogPost = (slug) => fetchAPI(`/api/blog/${slug}`)

// Donation
export const submitDonation = (data) =>
  fetchAPI('/api/donation', { method: 'POST', body: JSON.stringify(data) })

// Emergency Help
export const submitHelpRequest = (data) =>
  fetchAPI('/api/help', { method: 'POST', body: JSON.stringify(data) })

// Contact
export const submitContact = (data) =>
  fetchAPI('/api/contact', { method: 'POST', body: JSON.stringify(data) })

// Stats
export const getImpactStats = () => fetchAPI('/api/stats')
