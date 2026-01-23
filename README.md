# Matrix Visualization

A React-based interactive matrix visualization with scroll-through 3D effects, inspired by Dark Matter Labs' matrix section.

## Features

- **3D Matrix Visualization**: Interactive 3D stacked layers showing ARCs × Labs grid
- **Scroll-Through States**: Three distinct views that transition as you scroll:
  - Matrix Overview (3D stacked visualization)
  - Intersections Grid (2D flat grid showing project intersections)
  - Capabilities Grid (Studio-organized ARC capabilities)
- **Clickable Tiles**: All tiles (ARCs, Labs, Studios, Intersections) are clickable and open detailed modals
- **Side Panel**: Contextual text that updates based on scroll position
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
src/
├── components/
│   ├── MatrixSection.jsx      # Main container component
│   ├── Matrix3D.jsx           # 3D stacked matrix visualization
│   ├── IntersectionsGrid.jsx  # ARCs × Labs intersection grid
│   ├── CapabilitiesGrid.jsx   # Studio columns with ARC capabilities
│   ├── SidePanel.jsx          # Text explanation panel
│   └── TileModal.jsx          # Modal popup for tile details
├── hooks/
│   └── useScrollProgress.js   # Scroll progress tracking hook
├── data/
│   └── matrixData.js          # All matrix data (Studios, ARCs, Labs, Projects)
└── App.jsx                    # Main app entry point
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Data Structure

The matrix uses the following structure:

- **2 Studios**: Human Flourishing (HF), Entrepreneurship (ENT)
- **6 ARCs**: 3 under Human Flourishing, 3 under Entrepreneurship
- **5 Labs**: 2 in Creation category, 3 in Execution category
- **3 Projects**: Mapped to Labs/ARCs/Studios

All data is stored in `src/data/matrixData.js` and can be easily modified.

## How It Works

1. **Scroll Progress**: The `useScrollProgress` hook tracks scroll position within a 300vh container
2. **State Transitions**: Scroll is divided into 3 equal segments, each representing a different view
3. **3D Transforms**: CSS 3D transforms create the stacked layer effect
4. **Opacity Crossfades**: Views fade in/out based on scroll position
5. **Click Interactions**: All tiles trigger the modal with detailed information

## Customization

- Modify data in `src/data/matrixData.js`
- Adjust colors in component CSS files
- Change scroll behavior in `useScrollProgress.js`
- Update 3D transform values in `Matrix3D.jsx`

## Browser Support

Works in all modern browsers that support:
- CSS 3D Transforms
- ES6+ JavaScript
- React 18+

## License

MIT
