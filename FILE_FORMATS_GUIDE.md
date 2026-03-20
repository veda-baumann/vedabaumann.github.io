# Media File Formats Guide
## MIS 2201 Phase 1 - Student Reference

This guide explains which file formats to use for your website media (images, videos, audio) and how to optimize them.

---

## Image Formats

### JPG / JPEG (.jpg, .jpeg)
**Best for:** Photographs, complex images with many colors

**Pros:**
- Small file sizes
- Widely supported everywhere
- Good for photos

**Cons:**
- Lossy compression (quality degrades each time you save)
- No transparency support

**When to use:**
- Headshot photos
- Hobby images
- Campus/Duluth photos
- Company logos (if no transparency needed)

**Recommended settings:**
- Quality: 80-90% (balances quality and file size)
- Size: 800x600px to 1920x1080px
- File size target: Under 500KB per image

---

### PNG (.png)
**Best for:** Logos, graphics with transparency, simple illustrations

**Pros:**
- Lossless compression (no quality loss)
- Supports transparency (alpha channel)
- Sharp edges on text/logos

**Cons:**
- Larger file sizes than JPG
- Not ideal for photos

**When to use:**
- Company logos
- Icons
- Graphics with text
- Images needing transparent backgrounds

**Recommended settings:**
- Use 24-bit PNG for photos with transparency
- Use 8-bit PNG for simple graphics/logos
- File size target: Under 200KB if possible

---

### WebP (.webp)
**Best for:** Modern web optimization (photos and graphics)

**Pros:**
- 25-35% smaller than JPG/PNG
- Supports both lossy and lossless compression
- Supports transparency
- Excellent quality

**Cons:**
- Not supported in very old browsers (but 95%+ support now)
- Less familiar to students

**When to use:**
- If you want optimal performance
- As a supplement to JPG/PNG (use both)

**Note:** Optional for this project, but good to know for future web development

---

### SVG (.svg)
**Best for:** Vector graphics, icons, simple illustrations

**Pros:**
- Infinitely scalable (no quality loss at any size)
- Tiny file sizes for simple graphics
- Can be edited with code

**Cons:**
- Not suitable for photos
- Can be complex for detailed images

**When to use:**
- Icons
- Logos (if available in SVG format)
- Simple graphics

---

### Image Format Decision Tree

```
Is it a photograph?
├── YES → Use JPG
│   └── Need transparency? → Use PNG instead
└── NO → Is it a logo or graphic?
    ├── Simple shapes/text → Use SVG or PNG
    └── Complex graphic → Use PNG
```

---

## Video Formats

### MP4 (.mp4)
**Best for:** All web videos (universal standard)

**Codec:** H.264 (most compatible)

**Pros:**
- Supported by all browsers and devices
- Good compression (small files, good quality)
- Industry standard

**Cons:**
- Requires encoding with H.264 codec
- Some compression quality loss

**When to use:**
- Welcome video on Home page
- Team UMD video on Discover UMD page
- **ALWAYS include MP4** if self-hosting video

**Recommended settings:**
- Codec: H.264
- Resolution: 1920x1080 (1080p) or 1280x720 (720p)
- Frame rate: 30fps
- Bitrate: 5-8 Mbps for 1080p, 2.5-4 Mbps for 720p
- Target file size: Under 25MB for 30-second video

---

### WebM (.webm)
**Best for:** Web optimization (smaller files)

**Codec:** VP8 or VP9

**Pros:**
- Smaller file sizes than MP4
- Open-source format
- Good quality
- Supported by modern browsers

**Cons:**
- Not supported by Safari/iOS (use MP4 fallback)
- Less commonly used

**When to use:**
- As a supplement to MP4 (HTML5 video supports multiple sources)
- When file size is a concern

**Recommended settings:**
- Codec: VP9
- Resolution: Same as MP4
- Bitrate: 20-30% less than MP4 for similar quality

---

### MOV (.mov)
**Apple QuickTime format**

**When to use:**
- DON'T use for web directly
- Convert to MP4 before uploading

**Note:** iPhones record in MOV - you'll need to convert this to MP4

---

### AVI (.avi)
**Older Windows format**

**When to use:**
- DON'T use for web directly
- Convert to MP4 before uploading

---

### Video Hosting Options

**Option 1: YouTube/Vimeo (RECOMMENDED)**
- No file format worries - they handle conversions
- Accept: MP4, MOV, AVI, WMV, FLV, and many others
- Automatic optimization for all devices
- Free hosting

**Option 2: Self-Hosted (Advanced)**
- Must use MP4 (H.264) for compatibility
- Recommended: Also provide WebM for smaller file size
- Example HTML:
  ```html
  <video controls>
      <source src="videos/myvideo.mp4" type="video/mp4">
      <source src="videos/myvideo.webm" type="video/webm">
  </video>
  ```

---

## Audio Formats

### MP3 (.mp3)
**Best for:** All web audio (universal standard)

**Pros:**
- Supported everywhere
- Small file sizes
- Good quality

**Cons:**
- Lossy compression

**When to use:**
- Background music (if adding)
- Audio narration
- **Primary audio format for web**

**Recommended settings:**
- Bitrate: 128-192 kbps (good quality, reasonable size)
- Sample rate: 44.1 kHz

---

### OGG (.ogg)
**Best for:** Web optimization

**Pros:**
- Open-source
- Smaller than MP3
- Good quality

**Cons:**
- Not supported by Safari/iOS

**When to use:**
- As supplement to MP3 (like WebM for video)

---

### WAV (.wav)
**Uncompressed audio**

**When to use:**
- DON'T use for web (huge files)
- Convert to MP3 first

---

## Document Formats

### PDF (.pdf)
**For your resume download**

**Pros:**
- Universal standard
- Preserves formatting
- Professional

**When to use:**
- Resume download (REQUIRED)
- Any downloadable documents

**How to create:**
- Microsoft Word: File → Save As → PDF
- Google Docs: File → Download → PDF
- Mac Pages: File → Export To → PDF

**File naming:**
- Good: `FirstName-LastName-Resume.pdf`
- Bad: `resume.pdf`, `MyResume.pdf`

---

## Compression and Conversion Tools

### For Images

**Online (Free):**
- TinyPNG: tinypng.com - Excellent JPG/PNG compression
- Squoosh: squoosh.app - Google's image optimizer
- CompressJPEG: compressjpeg.com

**Desktop (Free):**
- Mac: Preview (built-in) - Export with lower quality
- Windows: Paint - Save and adjust quality
- GIMP (free Photoshop alternative): gimp.org

**Tips:**
- Resize images to actual display size (don't upload 4000px images for 800px display)
- Compress to 80-90% quality (barely noticeable difference)
- Target: Under 500KB per image

---

### For Videos

**Desktop (Free):**
- **HandBrake (Recommended):** handbrake.fr
  - Open video → Choose "Fast 1080p30" preset → Start
  - Output: MP4 H.264
  - For 30-sec video, should be under 20MB

**Online (Free):**
- CloudConvert: cloudconvert.com
- FreeConvert: freeconvert.com
- Online-Convert: online-convert.com

**Tips:**
- Don't upload raw phone video (huge files)
- Compress to H.264 MP4 first
- Target bitrate: 5-8 Mbps for 1080p
- 30-second video should be 10-25MB

---

### For Audio

**Desktop (Free):**
- Audacity: audacityteam.org
  - Import audio → File → Export → Export as MP3
  - Bitrate: 128-192 kbps

**Online (Free):**
- Online Audio Converter: online-audio-converter.com
- CloudConvert: cloudconvert.com

---

## Quick Reference Table

| Media Type | Best Format | Alternative | Max File Size | Tools |
|------------|-------------|-------------|---------------|-------|
| **Photos** | JPG | PNG, WebP | 500KB | TinyPNG, Squoosh |
| **Logos** | PNG | SVG | 200KB | TinyPNG |
| **Videos** | MP4 (H.264) | WebM | 25MB | HandBrake, CloudConvert |
| **Audio** | MP3 | OGG | 5MB | Audacity |
| **Documents** | PDF | - | 2MB | Export from Word/Docs |

---

## Common Mistakes to Avoid

### Images
- Using raw camera photos (huge files, slow website)
- Wrong format (PNG for photos, JPG for logos with transparency)
- Uploading 4000x3000px images when displaying at 800x600px

### Videos
- Uploading raw phone video without compression
- Using AVI or MOV directly on web
- Not testing video playback on different devices
- Video longer than 30 seconds for team project

### General
- Not testing file sizes before upload
- Using spaces in filenames (use hyphens: `my-image.jpg` not `my image.jpg`)
- Non-descriptive filenames (`IMG_1234.jpg` vs `sarah-headshot.jpg`)

---

## Optimization Checklist

Before uploading any media to your website:

**Images:**
- [ ] Resized to appropriate dimensions (not larger than display size)
- [ ] Compressed (under 500KB)
- [ ] Correct format (JPG for photos, PNG for logos)
- [ ] Descriptive filename (`your-name-headshot.jpg`)
- [ ] Added alt text in HTML

**Videos:**
- [ ] Converted to MP4 (H.264 codec)
- [ ] Compressed (under 25MB for 30-sec video)
- [ ] Correct length (30 seconds for team video)
- [ ] Tested playback on different browsers
- [ ] Uploaded to YouTube/Vimeo OR properly hosted

**Documents:**
- [ ] Saved as PDF
- [ ] Professional filename (`FirstName-LastName-Resume.pdf`)
- [ ] Under 2MB
- [ ] Saved in assets/ folder

---

## Additional Resources

**Learning:**
- MDN Web Docs - HTML Media: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
- W3Schools - HTML Video: https://www.w3schools.com/html/html5_video.asp
- Web.dev - Image Optimization: https://web.dev/fast/#optimize-your-images

**Tools:**
- HandBrake (video): https://handbrake.fr/
- TinyPNG (images): https://tinypng.com/
- Squoosh (images): https://squoosh.app/
- Audacity (audio): https://www.audacityteam.org/

---

**Questions?** Ask your instructor or project coordinator!

**Need help?** Post on Canvas discussion board or use office hours.
