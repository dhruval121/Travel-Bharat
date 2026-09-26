/**
 * Utility functions for handling URL-friendly slugs
 * Converts state names to URL-safe format and back
 */

/**
 * Converts a state/territory name into a URL-friendly slug
 * Rules:
 * - Convert to lowercase
 * - Replace spaces with hyphens
 * - Replace & with 'and'
 * - Remove all special characters
 * - Remove leading/trailing hyphens
 *
 * @param {string} name - The state name (e.g., "Andhra Pradesh", "Jammu & Kashmir")
 * @returns {string} URL-friendly slug (e.g., "andhra-pradesh", "jammu-and-kashmir")
 */
export const createSlug = (name) => {
  if (!name) return '';
  
  return name
    .toLowerCase()
    .replace(/&/g, 'and')           // Replace & with 'and'
    .replace(/\s+/g, '-')            // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '')      // Remove all non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')             // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '');        // Remove leading/trailing hyphens
};

/**
 * Normalizes a slug for comparison
 * Useful for matching URL params with data
 *
 * @param {string} slug - The slug to normalize
 * @returns {string} Normalized slug
 */
export const normalizeSlug = (slug) => {
  if (!slug) return '';
  return slug.toLowerCase().trim();
};
