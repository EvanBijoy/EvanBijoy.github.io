# Personal Developer Portfolio

This is a customized portfolio website built using the [Backend Developer Portfolio Template](https://www.devportfoliotemplates.com/portfolio-templates/backend-developer). It has been tailored to highlight my interests in backend development, reinforcement learning, CTFs, and web infrastructure projects.

## 🚀 Getting Started

You can get started with this project by cloning and running it locally:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## 🧠 About Me

I am currently working at CSTAR Lab (IIIT-H) where I’m learning reinforcement learning and exploring the in-house MARL-JAX framework. I've also given a lecture on Markov Decision Processes (MDPs) as part of internal sessions.

Additional Highlights:

* Regularly participate in CTFs (Capture the Flag) with a focus on binary exploitation and web challenges.
* Developed CQST Lab's official website using WordPress.
* Built a courier portal for campus logistics using Next.js + MongoDB.
* Made the institute's CAS login and VPN pages fully responsive.
* Created UML diagrams for our clubs page structure and services.

---

## ✨ Customization

You can customize this portfolio by editing the following files:

* `app/layout.tsx`: Update the site metadata.
* `app/page.tsx`: Modify hero section, about, projects, and contact.
* `public/`: Replace your personal images and icons.

Styling is managed via TailwindCSS:

* Update colors, fonts, and spacing in `tailwind.config.js` and `app/globals.css`.

---

## 🌐 Deployment on GitHub Pages

To deploy this Next.js portfolio on GitHub Pages (your free `username.github.io` domain):

### 1. Install `next-export`

This portfolio is based on `next export`, which creates a static version of the site suitable for GitHub Pages.

```bash
npm install --save next-export
```

### 2. Update `next.config.js`

Add or edit the following:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
};

module.exports = nextConfig;
```

### 3. Export Static Files

```bash
npm run build
npx next export
```

This generates an `out/` folder with the static site.

### 4. Deploy to GitHub Pages

* Push your code to a GitHub repo named `your-username.github.io`
* In the repo settings, go to "Pages" and set the source to the `/out` folder on the `main` branch (or manually upload it to `gh-pages` branch).

You can automate this with the `gh-pages` npm package if needed.

---

## 📬 Contact

For questions, collaboration, or feedback, feel free to reach out:

* [GitHub](https://github.com/<your-username>)
* [LinkedIn](https://linkedin.com/in/<your-handle>)

---

## 🙌 Credits

Original template by [devportfoliotemplates](https://github.com/devportfoliotemplates/devportfoliotemplates).

If you found this helpful, please consider giving their repo a ⭐!
