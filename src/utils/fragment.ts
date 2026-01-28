/**
 * Fragment utility functions for parsing and transforming fragment data
 */

/**
 * Parse fragment data from API, ensuring all fields exist with proper defaults
 * 
 * @param fragment - Raw fragment data from API
 * @returns Parsed ContentType with all required fields
 * 
 * Requirements: 3.8, 3.9, 3.10, 3.11, 3.12
 */
export function parseFragment(fragment: any): ContentType {
  return {
    ...fragment,
    // Handle both 'type' and 'fragment_type' field names from API
    type: fragment.type || fragment.fragment_type || 'code',
    format: fragment.format || 'plain',
    metadata: parseMetadata(fragment.metadata),
    tags: parseTags(fragment.tags),
    // Ensure category_id is always a valid number or null (never undefined)
    category_id: fragment.category_id !== undefined && fragment.category_id !== null 
      ? (typeof fragment.category_id === 'string' ? parseInt(fragment.category_id, 10) : fragment.category_id)
      : null,
  };
}

/**
 * Parse metadata field from string or object
 * 
 * @param metadata - Metadata as string (JSON) or object
 * @returns Parsed FragmentMetadata object or null
 * 
 * Requirements: 3.11
 */
export function parseMetadata(metadata: any): FragmentMetadata | null {
  if (!metadata) return null;
  
  // If already an object, return as-is
  if (typeof metadata === 'object' && !Array.isArray(metadata)) {
    return metadata;
  }
  
  // If string, try to parse as JSON
  if (typeof metadata === 'string') {
    try {
      return JSON.parse(metadata);
    } catch (error) {
      return null;
    }
  }
  
  return null;
}

/**
 * Parse tags field from string or array
 * 
 * @param tags - Tags as comma-separated string or array
 * @returns Array of tag strings or null
 * 
 * Requirements: 3.12
 */
export function parseTags(tags: any): string[] | null {
  if (!tags) return null;
  
  // If already an array, return as-is (filter empty strings)
  if (Array.isArray(tags)) {
    return tags.filter(t => t && t.trim().length > 0);
  }
  
  // If string, split by comma and trim
  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);
  }
  
  return null;
}

/**
 * Convert code content to note format by wrapping in code block
 * 
 * @param content - Code content to convert
 * @param language - Optional language identifier for syntax highlighting
 * @returns Markdown formatted content with code block
 * 
 * Requirements: 9.5
 */
export function convertCodeToNote(content: string, language?: string): string {
  const lang = language || '';
  return `\`\`\`${lang}\n${content}\n\`\`\``;
}

/**
 * Convert note content (HTML) to plain text code format
 * Extracts text content from HTML, removing all markup
 * 
 * @param htmlContent - HTML content from TipTap editor
 * @returns Plain text content
 * 
 * Requirements: 9.6
 */
export function convertNoteToCode(htmlContent: string): string {
  // Create temporary DOM element to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = htmlContent;
  
  // Extract plain text (textContent is preferred, innerText as fallback)
  const plainText = temp.textContent || temp.innerText || '';
  
  // Return trimmed text
  return plainText.trim();
}
