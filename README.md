# YC Directories

A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other
pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

## Technologies

1. Next.js (v15)
2. React.js (v19)
3. [Sanity](https://sanity.io) (CMS)
4. Shadcn
5. Tailwind

## Features

1. Live Content API: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

2. GitHub Authentication: Allows users to log in easily using their GitHub account.

3. Pitch Submission: Users can submit startup ideas, including title, description, category, and multimedia links ( image or video).

4. View Pitches: Browse through submitted ideas with filtering options by category.

5. Pitch Details Page: Click on any pitch to view its details, with multimedia and description displayed.

6. Profile Page: Users can view the list of pitches they've submitted.

7. Editor Picks: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

8. Views Counter: Tracks the number of views for each pitch instead of an upvote system.

9. Search: Search functionality to load and view pitches efficiently.

10. Minimalistic Design: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

## Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Ahlyab/yc_directory.git
cd yc_directory
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Tutorial

An amazing tutorial done by [@adrianhajdin](https://github.com/adrianhajdin) with implementation of latest and greatest features of Next.JS 15

<a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>
