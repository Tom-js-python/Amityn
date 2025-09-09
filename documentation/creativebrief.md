# Amityn MVP – Creative Brief

## 🎯 Project Title

**Amityn**  
_A place to build real friendships through shared passions._

## 📌 MVP Purpose

To build a lean, interest-based platform that allows users to:

- Create meaningful public profiles
- Discover others nearby with shared interests
- Begin platonic connections through discovery and simple ways to reach out

Unlike typical social media or dating apps, Amityn focuses on fostering authentic connection, meaningful conversation, and vibrant community—both online and offline. It’s part profile site, part meetup tool, part community builder.

## 🧭 Vision

A platform that prioritizes authentic friendship and community, designed to help people meet in real life through shared interests, passions, and values — across cultures, backgrounds, and perspectives.

## Mission

To create a space where people can build real-world friendships and communities through shared passions, open dialogue, and mutual respect—across personal, cultural, and ideological divides.

## Core Values

- **Transparency**: Profiles are public by default to encourage discovery with optional private fields
- **Community First**: Profiles are designed to foster discovery and trust, with clear options for privacy where needed.
- **Grassroots**: Communities shape themselves rather than being dictated top-down.
- **Real Connection**: Designed to get people off the screen and into the world.
- **Bridge Divides**: Encourages respectful cross-worldview conversations and shared understanding.

## Visual Tone / Branding

- Friendly, clean, and human-centered
- Soft edges, inviting colors, low noise
- Focus on faces, stories, and shared interests — not likes, status, or ads

## 🛠️ Tech Stack

- **Frontend**: Vue 3 + Tailwind CSS
- **Backend**: Python (FastAPI)
- **Database**: PostgreSQL

## 🧱 Core Features (MVP Scope)

### 1. User Registration & Login

- Email + password authentication
- Basic account settings (edit profile, delete account)

### 2. Public User Profiles

- Display Name
- Location (city or postal code prefix)
- Profile Photo (optional)
- About Me (freeform text)
- Interests (tag-based system)

### 3. Interest Selection (Hybrid System)

- Autocomplete input with existing interest list
- Option to suggest a new interest
  - Suggested interests go to a moderated queue
  - Prevents duplicate/spelling variations
- Interests stored in a separate table (normalized)

### 4. Discovery/Search

- Browse users near you
- Filter by:
  - Location
  - Shared interests
  - Keywords in About Me
- Click profiles to read full information
- Map and list views

## ❌ Excluded from MVP

- In-app messaging (Initial release focuses on discovery. Messaging and richer interaction tools are planned for later.)
- Events or communities
- Mobile app
- Moderation/admin panel (basic tools only)
- Notifications
- Trust scores or gamified systems

### 🧭 Post-MVP Roadmap: Communities

- Anyone can create a community
- Types: Local, Identity-based, Interest-based, Cause-driven
- Settings:
  - Public (anyone can view/join)
  - Private (members only content)
  - Approval-based joining (with optional custom questions)
- Features:
  - Posts (announcements, discussions, etc.)
  - Events
  - Optional moderators (assigned by creator or voted by members)
  - Voting available for posts/events if enabled by community

#### Optional

Community creators can initiate votes on decisions (e.g., “Should we have weekly meetups?”).
Registered members can request a vote (e.g., to promote an event or idea).

#### 🛣️ Roadmap Idea: Optional Profile Prompts

- Users can optionally respond to writing prompts, e.g.
  - A book that changed my life...
  - Something I care deeply about is...
  - My favourite way to spend a Sunday is...
  - If I could master any skill...
- Prompts are curated and designed to promote thoughtful, constructive self-expression
- This feature may require moderation or flagging tools before public launch

## 🧪 Validation Goals

- Will users create rich enough profiles to be meaningful?
- Is the interest system working for discovery and filtering?
- Do users engage with others when discovery is easy and authentic?
- Does Amityn foster a sense of safety, openness, and belonging?

## 🔐 Privacy Philosophy

- Profiles are public by default (selected fields can be marked private later)
- Interest tags are shared and searchable
- No scoring, follower counts, or popularity metrics

## 🎨 Design Philosophy

- Clean, warm, and welcoming
- Minimalist layout focused on people and text
- Tailwind CSS used for consistent, responsive design

## 📎 Notes

- Suggested interests can be stored with `approved: false` until reviewed
- Backend should normalize interest names for consistent search
- A later admin tool can allow merging or deleting redundant tags

## 💬 Summary

Amityn MVP is a focused, human-centered platform to meet potential friends through searchable, interest-based public profiles—designed for authenticity and simplicity from day one.
