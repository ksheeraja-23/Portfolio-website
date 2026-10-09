# Ksheeraja Alegaonkar — Portfolio (React + Vite)

## Run
```
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Customise
- All content lives in `src/data.js` (profile, projects, Synapse events, education).
- **Synapse events:** the 8 real events from your reports are in `synapseEvents`; edit or add more.
- **Photos:** the Moments gallery is built automatically from every event's `photos` list in `src/data.js` (shared photos appear once).
  Your portrait is `public/me/portrait.jpg`.
- **IRIS events** (`irisEvents`): Student Felicitation, Shubharambh and Ideas to Innovation (shared with Synapse). Edit text and photos in `src/data.js`.
- Colours and fonts are CSS variables at the top of `src/styles.css`.
- Hosting: `dist/` is static, so it deploys to Netlify, Vercel or GitHub Pages.
