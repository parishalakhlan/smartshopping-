export default function ColorDemo() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950">
      {/* Using semantic colors */}
      <h1 className="text-text-primary">Welcome</h1>
      <p className="text-text-secondary">This uses semantic color variables</p>

      {/* Using specific color shades */}
      <div className="bg-primary-500 text-white p-4 rounded">Primary 500</div>
      <div className="bg-primary-100 text-primary-900 p-4 rounded">
        Primary 100 background with Primary 900 text
      </div>

      {/* Using color utilities */}
      <button className="bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded">
        Click me
      </button>

      {/* Status colors */}
      <div className="flex gap-2">
        <span className="bg-success text-white px-3 py-1 rounded">Success</span>
        <span className="bg-warning text-white px-3 py-1 rounded">Warning</span>
        <span className="bg-danger text-white px-3 py-1 rounded">Danger</span>
        <span className="bg-info text-white px-3 py-1 rounded">Info</span>
      </div>

      {/* Gradients */}
      <div className="bg-gradient-primary text-white p-6 rounded-lg">
        Primary Gradient
      </div>
      <div className="bg-gradient-primary-to-secondary text-white p-6 rounded-lg">
        Primary to Secondary Gradient
      </div>

      {/* Using CSS variables directly */}
      <div
        style={{
          backgroundColor: "var(--color-secondary-200)",
          color: "var(--color-secondary-800)",
          border: "2px solid var(--color-secondary)",
        }}
        className="p-4 rounded"
      >
        Direct CSS variable usage
      </div>

      {/* Dark mode aware */}
      <div className="bg-background-primary text-text-primary border border-border-primary p-4">
        This adapts to dark mode
      </div>
    </div>
  );
}
