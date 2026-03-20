# Asset Replacement Guide
## Step-by-Step Instructions for Replacing Placeholder Content

This guide will walk you through replacing all placeholder content in your template with your own personal content.

---

## Overview: What Needs to Be Replaced?

**11 Placeholder Images** (in `images/` folder)  
**1 Sample PDF Resume** (in `assets/` folder)  
**ALL Text in Brackets** `[LIKE THIS]` in HTML files  
**Team Video** (on discover-umd.html)  

**Estimated Time:** 2-4 hours (depending on how much content you have ready)

---

## STEP 1: Replace Images (11 Total)

### Image Inventory

| Current Placeholder | What to Replace It With | Used On Page(s) |
|---------------------|-------------------------|-----------------|
| `placeholder-headshot.png` | YOUR professional photo | Home |
| `placeholder-hobby1-a.jpg` | YOUR hobby #1 image A | Home, About |
| `placeholder-hobby1-b.jpg` | YOUR hobby #1 image B | Home |
| `placeholder-hobby2-a.jpg` | YOUR hobby #2image A | About |
| `placeholder-hobby2-b.jpg` | YOUR hobby #2 image B | About |
| `placeholder-company1-logo.png` | Company #1 logo | About |
| `placeholder-company2-logo.png` | Company #2 logo | About |
| `placeholder-campus1.jpg` | UMD campus photo #1 | Discover UMD |
| `placeholder-campus2.jpg` | UMD campus photo #2 | Discover UMD |
| `placeholder-campus3.jpg` | UMD campus photo #3 | Discover UMD |
| `placeholder-duluth.jpg` | Duluth scenic photo | Discover UMD |

### How to Replace Images

**Method 1: Keep Same Filenames (EASIEST)**
1. Prepare your images (see file format guide for specs)
2. Rename your images to match placeholder names exactly
   - Example: Rename your headshot to `placeholder-headshot.png`
3. Copy your renamed images into the `images/` folder
4. When prompted, choose "Replace" to overwrite placeholder

**PROS:** No HTML editing needed, everything just works  
**CONS:** Your files have generic names

**Method 2: Use Your Own Filenames (More Professional)**
1. Save your images with descriptive names
   - Example: `sarah-johnson-headshot.jpg`, `photography-gear.jpg`
2. Copy your images into `images/` folder
3. Open each HTML file and find the `<img>` tags
4. Update the `src` attribute to match your filename
   - Change: `src="images/placeholder-headshot.png"`
   - To: `src="images/sarah-johnson-headshot.jpg"`
5. Update the `alt` attribute with accurate description
   - Change: `alt="[YOUR NAME] professional photo"`
   - To: `alt="Sarah Johnson professional headshot"`

**PROS:** Professional, descriptive filenames  
**CONS:** Requires editing HTML files

---

### Image Preparation Checklist

Before adding images, make sure they are:

**Headshot:**
- [ ] Professional appearance (good lighting, clean background)
- [ ] Size: 400x400px to 800x800px
- [ ] Format: JPG or PNG
- [ ] File size: Under 500KB
- [ ] Filename: Descriptive (e.g., `yourname-headshot.jpg`)

**Hobby Images (4 total):**
- [ ] Show your actual hobbies/interests
- [ ] Good quality, well-lit
- [ ] Size: 800x600px or larger
- [ ] Format: JPG
- [ ] File size: Under 500KB each
- [ ] Filenames: Descriptive (e.g., `hiking-mountain-trail.jpg`)

**Company Logos (2):**
- [ ] Downloaded from company websites (usually in Press/About section)
- [ ] Format: PNG (preferred) or JPG
- [ ] Size: 200x200px to 400x400px
- [ ] File size: Under 200KB each
- [ ] Filenames: `company-name-logo.png`

**Campus/Duluth Images (4 total):**
- [ ] Your own photos OR royalty-free images
- [ ] Showcase UMD campus and/or Duluth attractions
- [ ] Good quality
- [ ] Format: JPG
- [ ] File size: Under 500KB each

---

## STEP 2: Replace Resume PDF

### Current File
- `assets/sample-resume.pdf` (placeholder)

### What You Need
- YOUR actual resume as a PDF file

### Steps

1. **Create your resume:**
   - Use Microsoft Word, Google Docs, or Canva
   - Follow professional resume format
   - Include: Contact info, Education, Experience, Skills
   - Proofread carefully!

2 **Export as PDF:**
   - **Word:** File → Save As → PDF
   - **Google Docs:** File → Download → PDF
   - **Pages (Mac):** File → Export To → PDF

3. **Name your PDF professionally:**
   - Format: `FirstName-LastName-Resume.pdf`
   - Example: `Sarah-Johnson-Resume.pdf`
   - Bad: `resume.pdf`, `MyResume.pdf`, `Resume2026.pdf`

4. **Save in correct folder:**
   - Save your PDF in the `assets/` folder
   - Replace or delete `sample-resume.pdf`

5. **Update HTML (if you used different filename):**
   - Open `resume.html`
   - Find: `<a href="assets/sample-resume.pdf"`
   - Change to: `<a href="assets/Sarah-Johnson-Resume.pdf"`
   - Update in TWO places if present

---

## STEP 3: Replace ALL Text in Brackets

### What to Look For

Throughout all HTML files, you'll see text like this:
- `[YOUR NAME]`
- `[Your major]`
- `[Write your introduction here...]`
- `[Company Name #1]`

**These ALL need to be replaced with your actual content!**

### Systematic Approach

**File by File:**

#### 1. index.html (Home Page)
- [ ] Replace `[YOUR NAME]` in navigation (2 places)
- [ ] Replace `[YOUR NAME]` in meta description
- [ ] Replace `[YOUR NAME]` in page title
- [ ] Replace headshot alt text
- [ ] Write introduction paragraph (3 main places)
- [ ] Replace hobby #1 name and description
- [ ] Replace hobby #2 name and description
- [ ] Replace video embed code
- [ ] Replace footer name

#### 2. about.html (About Me Page)
- [ ] Replace `[YOUR NAME]` everywhere (navigation, title, footer)
- [ ] Write detailed hobby #1 story (3-5 paragraphs)
- [ ] Write detailed hobby #2 story (3-5 paragraphs)
- [ ] Replace `[Company Name #1]` and all company #1 details
- [ ] Replace `[Company Name #2]` and all company #2 details
- [ ] Write why you want to work at each company
- [ ] Write your qualifications for each company

#### 3. resume.html (Resume Page)
- [ ] Replace `[YOUR NAME]` everywhere
- [ ] Replace ALL contact information (email, phone, location, LinkedIn)
- [ ] Replace educational details (degree, graduation date, GPA)
- [ ] Replace job #1 details (title, company, dates, responsibilities)
- [ ] Replace job #2 details (if applicable)
- [ ] Replace skills lists
- [ ] Customize projects section
- [ ] Add/remove optional sections as needed

#### 4. discover-umd.html (Discover UMD Page)
- [ ] Replace `[YOUR NAME]` everywhere
- [ ] Embed TEAM video (critical!)
- [ ] Replace 4 reasons why you chose UMD
- [ ] Write paragraph about what you love about Duluth
- [ ] Replace 4 campus/Duluth highlight descriptions
- [ ] Optional: Write student experience narrative

---

### Tips for Writing Content

**Be Specific:**
- Bad: "I like UMD because it's a good school"
- Good: "UMD's MIS program offers hands-on projects like this website, preparing me for real-world tech careers"

**Be Genuine:**
- Write in your own voice
- Share real experiences
- Don't copy from other students

**Be Professional:**
- Proofread everything
- Use complete sentences
- No slang or inappropriate content
- Represent yourself well

**Use Action Verbs (Resume):**
- Managed, Developed, Created, Analyzed, Led, Improved, Increased

---

## STEP 4: Add Your Team Video

### Critical Requirements
- Must be 30 seconds long
- Created by your 5-person team
- Promotes UMD
- Embedded on discover-umd.html page

### Recommended Method: YouTube

**Steps:**
1. **Create the video with your team** (30 seconds)
2. **One person uploads to YouTube:**
   - Go to youtube.com
   - Click "Create" → "Upload Video"
   - Select your video file
   - Title: "Team [Number] UMD Promotional Video - MIS 2201"
   - Description: Brief description
   - Visibility: "Unlisted" (only people with link can view)
   - Click "Publish"
3. **Get embed code:**
   - On video page, click "Share"
   - Click "Embed"
   - Copy the entire `<iframe>` code
4. **Share with team:**
   - Send iframe code to all team members (email, group chat)
5. **Each person embeds on their site:**
   - Open `discover-umd.html`
   - Find the YouTube iframe section
   - Replace the placeholder iframe with YOUR team's iframe code
   - OR just replace `YOUR_TEAM_VIDEO_ID` with your actual video ID

**All 5 team members should use the SAME video!**

---

## Verification Checklist

Before you consider yourself "done", verify:

### Images
- [ ] All 11 placeholder images replaced with YOUR images
- [ ] Images are proper file formats (JPG for photos, PNG for logos)
- [ ] Images are compressed (under 500KB each)
- [ ] Images have descriptive filenames
- [ ] All images load when you view pages in browser
- [ ] Alt text is accurate for each image

### Resume PDF
- [ ] Resume PDF created and saved in `assets/` folder
- [ ] Professional filename (`FirstName-LastName-Resume.pdf`)
- [ ] PDF is under 2MB
- [ ] Download button on resume.html works
- [ ] PDF download link updated in HTML if filename changed

### Text Content
- [ ] NO brackets `[LIKE THIS]` remain anywhere
- [ ] Your name is correct everywhere
- [ ] Email, phone, LinkedIn are YOUR contact info
- [ ] All placeholder text replaced with YOUR content
- [ ] Content is proofread (no typos/grammar errors)
- [ ] Content is appropriate and professional

### Team Video
- [ ] 30+ second team video embedded on discover-umd.html
- [ ] Video plays when you load the page
- [ ] Same video as your 4 teammates

### Testing
- [ ] Opened EVERY page in browser
- [ ] All navigation links work
- [ ] All images load (no broken image icons)
- [ ] Video plays
- [ ] PDF download works
- [ ] Tested on mobile/different screen sizes
- [ ] No "localhost" URLs remain (when deployed)

---

## Troubleshooting Common Issues

### "My image isn't showing up (broken image icon)"

**Possible causes:**
1. Image filename doesn't match HTML
   - **Fix:** Check spelling in both filename and `src=` attribute
2. Image isn't in `images/` folder
   - **Fix:** Move image to correct folder
3. Wrong file extension
   - **Fix:** If image is `photo.png`, HTML must say `.png` not `.jpg`

### "My PDF won't download"

**Possible causes:**
1. PDF isn't in `assets/` folder
   - **Fix:** Move PDF to correct folder
2. Filename doesn't match HTML
   - **Fix:** Update `href` in resume.html to match PDF filename
3. File isn't actually PDF format
   - **Fix:** Re-export as PDF from Word/Docs

### "My video won't play"

**Possible causes:**
1. Wrong video ID in YouTube embed
   - **Fix:** Double-check the video ID from YouTube URL
2. Video is set to "Private" on YouTube
   - **Fix:** Change to "Unlisted" or "Public"
3. Syntax error in embed code
   - **Fix:** Copy fresh embed code from YouTube

### "I changed something and now the page looks broken"

**Possible causes:**
1. Accidentally deleted HTML closing tag
   - **Fix:** Check for matching `<tag>` and `</tag>` pairs
2. Deleted too much when replacing placeholder text
   - **Fix:** Use "Find and Replace" to be more precise
3. Nested tags incorrectly
   - **Fix:** Use HTML validator to check

---

## Additional Resources

- **Image Compression:** tinypng.com, squoosh.app
- **Video Compression:** handbrake.fr
- **Free Photos (if needed):** unsplash.com, pexels.com
- **Company Logos:** Usually in company website footer or "Press Kit" page
- **HTML Validator:** validator.w3.org

---

## Need Help?

- **Canvas Discussion Board:** Post questions for peers/instructor
- **Office Hours:** Get one-on-one help
- **Project Coordinator:** Your student coordinator can answer questions

---

**Good luck! Take your time, follow these steps carefully, and you'll have a great website!**
