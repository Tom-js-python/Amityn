# Amityn MVP – Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to define the software requirements for **Amityn**, an MVP social platform designed to foster **authentic friendships** and **community connection** through shared passions, interests, and values. This SRS specifies the functional and non-functional requirements, constraints, and design principles guiding development.

### 1.2 Scope

Amityn MVP will provide:

- Public user profiles with core information
- Interest-based discovery and search
- Geolocation-based browsing (city / postal code prefix)
- A clean, welcoming interface for browsing and reading profiles

Amityn does **not** (in the MVP) include in-app messaging or events. These features may be introduced in post-MVP iterations.

### 1.3 Definitions

- **User**: A registered account holder on Amityn.
- **Profile**: The public-facing set of information about a user.
- **Interest**: A tagged passion, hobby, or value associated with a user's profile.
- **Discovery**: The browsing/searching process for finding others on Amityn.
- **Community (post-MVP)**: A user-created group centered around location, interests, or causes.

### 1.4 References

- Brand Guidelines (colors, typography, tone)
- Creative Brief (Amityn MVP)
- Technical Stack Decision: Vue 3, Tailwind 3, Pinia, FastAPI, PostgreSQL

## 2. Overall Description

### 2.1 Product Perspective

Amityn is a standalone web application (desktop + responsive mobile web). It integrates a **frontend (Vue 3 + Tailwind + Pinia)** with a **backend API (FastAPI)** and a **PostgreSQL database**. MVP emphasizes **read-only discovery** with basic profile creation.

### 2.2 Product Functions

- Register and log in with email/password
- Create, view, and edit a personal profile
- Select and suggest interests
- Discover nearby users via search/filter
- Browse profiles in list or map view

### 2.3 User Classes and Characteristics

- **Explorers**: Users browsing profiles to find new people nearby.
- **Connectors**: Users who actively want to showcase their profile and interests.
- **Community Builders (future)**: Users who create and manage communities.

### 2.4 Operating Environment

- Web browsers: Chrome, Firefox, Safari, Edge (latest two versions)
- Responsive design for desktop and mobile
- Backend hosted on a cloud platform (Cloudflare Linode)

### 2.5 Constraints

- Apache 2.0 licensed open-source repo
- MVP excludes: messaging, notifications, events, communities
- Minimal moderation features (manual intervention only)

### 2.6 Assumptions and Dependencies

- Users provide accurate location data (city/postal code prefix)
- Email-based authentication is sufficient for MVP
- Interest moderation will initially be manual

## 3. Functional Requirements

### 3.1 User Authentication

- **FR-1.1**: Users can create accounts with email + password.
- **FR-1.2**: Users can log in and log out.
- **FR-1.3**: Users can reset their password via email link.

### 3.2 User Profiles

- **FR-2.1**: A profile contains:
  - Display Name (required)
  - Location (city or postal code prefix, required)
  - Profile Photo (optional)
  - About Me (freeform text, optional)
  - Interests (at least one required)
- **FR-2.2**: Users can edit or delete their own profile.
- **FR-2.3**: Profiles are public by default (some fields may later be made private).

### 3.3 Interests

- **FR-3.1**: Users select interests via autocomplete.
- **FR-3.2**: Users can suggest new interests.
- **FR-3.3**: New interests are stored with `approved: false` until reviewed.
- **FR-3.4**: Interests are stored in a normalized table to avoid duplicates.

### 3.4 Discovery

- **FR-4.1**: Users can browse profiles nearby.
- **FR-4.2**: Filters:
  - Location
  - Shared interests
  - Keywords in "About Me"
- **FR-4.3**: Results viewable in list or map format.
- **FR-4.4**: Clicking a profile opens full profile details.

## 4. Non-Functional Requirements

### 4.1 Performance

- Discovery search must return results within 2 seconds for 1,000 users.

### 4.2 Scalability

- Database must support 10,000 users in MVP testing.

### 4.3 Security

- Passwords stored securely (bcrypt/argon2).
- HTTPS required for all communication.

### 4.4 Usability

- Responsive, accessible design (WCAG 2.1 AA compliant).
- Clear, friendly UI with inviting color palette.

### 4.5 Reliability

- Uptime target: 99% during MVP.
- Graceful error handling with human-friendly error messages.

## 5. Post-MVP Features (Roadmap)

- In-app messaging
- Communities (public/private, moderated, voting features)
- Events and meetups
- Optional profile prompts for deeper expression
- Trust-building tools (e.g., verified profiles, endorsements)
- Notifications and engagement loops

## 6. Appendices

- **A. Branding**: Warm pastel palette, rounded shapes, human-first typography (e.g., Inter, Nunito).
- **B. Privacy Philosophy**: Transparency-first design, with clear privacy controls coming post-MVP.
- **C. Open Source Note**: Contributions welcome under Apache 2.0 license.
