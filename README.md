# TheDeclarativeHumanClock

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

**Declarative time.** The arbitrary but precise math we as humans have declared as time. Tied to radioactive decay and institutional precision. This is where we are as people who have accepted time is relative, but this is the standard we can all reference.

## Philosophy

This isn't just a clock - it's a dashboard for the engine of time itself.

- **UTC**: The bridge between local reality and the declarative standard
- **POSIX**: The absolute truth. Not "Unix time" (folklore) but POSIX (IEEE 1003.1 statute) - the specific rules that declare what time IS for the machine
- **Binary**: The silent system heartbeat showing UTC in raw form
- **Local**: The "big dumb clock" for the biological mammal - your meatspace interface

It's as arbitrary as fuck, but it's the math we share.

## Features

- ⚛️ **POSIX Time** - The statute, not the folklore. Millisecond-precision float showing time as continuous
- 🌍 **UTC Time** - ISO 8601 date format (`2026-02-12`) with milliseconds
- 🔢 **Binary Display** - Unlabeled. If you know, you know. UTC in pure binary.
- 📡 **NIST Citation** - Ultra-tiny sync indicator citing the atomic source
- 🕰️ **Local Time** - The big analog clock because humans are local first
- 📱 **Progressive Web App** - Install on any device, works offline
- 🌙 **Stark Electromechanical Design** - Looks like rack-mounted hardware

## Screenshots

**Desktop:**
![Desktop View](https://github.com/user-attachments/assets/becb058c-b052-42b9-9499-baa4b1c4543f)

**Mobile:**
![Mobile View](https://github.com/user-attachments/assets/5b48460c-adb7-42f0-85f5-8181750011dd)

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/lmichaelwar/AllTime.git
   cd AllTime
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Build for Production

Build the app for production deployment:

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Push to the `main` branch and the workflow will automatically build and deploy

The site will be available at: `https://<username>.github.io/AllTime/`

## The Declarative Hierarchy

This clock respects a specific hierarchy of time displays:

1. **Local Time (Analog + 24h)** - Biological/social reality. Takes up the most real estate because this is where you physically exist. The "big dumb clock" for scheduling dentist appointments and meeting mammals at a specific time.

2. **UTC** - The bridge time. Declarative standard with ISO 8601 date (`2026-02-12`) and millisecond precision. This is the frame we all reference.

3. **POSIX** - The absolute declarative truth. Not "Unix time" (folklore) - POSIX is the IEEE 1003.1 statute that defines how time is calculated. Shows as continuous float with milliseconds (`1770866635.290`) because time doesn't click, it flows.

4. **Binary** - The silent heartbeat. No label. Just raw UTC in binary. If you know, you know. Reinforces that UTC is the base signal.

### Why POSIX, not UNIX?

"Unix time" is cultural shorthand. **POSIX** is the actual standard (IEEE 1003.1) that declares the rules. Crucially, it defines how the system ignores leap seconds to keep the timeline linear. It's the statute, not the folklore.

Labeling it "Unix Time" is like labeling a precise caliper "Ruler."

## PWA Features

TheDeclarativeHumanClock is a Progressive Web App with:

- 📲 **Installable** - Add to home screen on any device
- 🔌 **Offline Support** - Works without internet connection via service worker
- ⚡ **Fast Loading** - Cached resources for instant load times
- 🎯 **Standalone Mode** - Runs like a native app

### Installing as PWA

**On Desktop (Chrome/Edge):**
1. Visit the site
2. Click the install icon in the address bar
3. Click "Install"

**On Mobile (iOS Safari):**
1. Visit the site
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"

**On Mobile (Android Chrome):**
1. Visit the site
2. Tap the menu (⋮)
3. Tap "Install app" or "Add to Home Screen"

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Service Workers** - Offline support

## Project Structure

```
AllTime/
├── components/          # React components
│   ├── AnalogClock.tsx # Analog clock face
│   ├── BinaryClock.tsx # Binary time display
│   └── InfoPanel.tsx   # Digital time displays
├── hooks/              # Custom React hooks
│   └── usePreciseTime.ts # High-precision time updates
├── public/             # Static assets
│   ├── manifest.json   # PWA manifest
│   ├── service-worker.js # Service worker for offline support
│   └── *.png          # App icons
├── App.tsx            # Main app component
├── index.tsx          # App entry point
└── index.css          # Global styles

```

## Keyboard Shortcuts

- **Space** - Toggle minimal mode
- **Escape** - Reset view
- **Ctrl+M** - Toggle fullscreen

## Design Philosophy

This is a dashboard for the engine of time, not just a display of the current schedule. 

**Visual Execution:**
- **NIST Citation**: Ultra-tiny green dot (1px) with dim "NIST" text (10px, opacity 0.4). Looks silk-screened onto rack-mounted hardware. This isn't "I have internet" - this is a signal lock to the atomic standard.
- **ISO 8601 Date**: `2026-02-12` looks like a stamped serial number or log entry. Fits the electromechanical aesthetic.
- **Milliseconds**: Rapid flickering makes it feel like an instrument that's running, not just updating. The continuous float on POSIX reinforces that time doesn't click - it flows.
- **Silent Binary**: No label. Just let the raw LEDs exist as the system heartbeat.

A clock with seconds updates. A clock with milliseconds **runs**.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [AI Studio](https://ai.studio/apps/drive/1O2aiU9dmeRpDSmnRDHdMQto8zX3z59ol)
- Time synchronization concept inspired by NIST time servers
