import React from 'react';

const ThemeExample: React.FC = () => {
  return (
    <div className="bg-default-light p-8">
      <div className="space-y-8">
        {/* Using CSS utility classes */}
        <div>
          <p className="text-overline text-content-medium mb-2">COHERENT DESIGN SYSTEM</p>
          <h1 className="text-h1 text-content-default">H Hyper</h1>
          <h2 className="text-h2 text-content-default">H Big</h2>
          <h3 className="text-h3 text-content-default">H1 Page heading</h3>
          <h4 className="text-h4 text-content-default">h2 Banner</h4>
        </div>

        <div>
          <p className="text-body1 text-content-default">
            Fonts (Typography) is an important part of a design system that defines the typographic style of the text, by making it consist and readable.
          </p>
          <p className="text-body2 text-content-medium mt-4">
            This is body2 text with medium color for secondary information.
          </p>
          <p className="text-subtitle text-content-default mt-4">
            This is a subtitle with medium font weight.
          </p>
          <p className="text-button text-accent mt-4">
            This is button text with accent color.
          </p>
          <p className="text-caption text-content-medium mt-4">
            This is caption text for small annotations.
          </p>
        </div>

        <div className="bg-outline-neutral p-4 rounded">
          <h3 className="text-h4 text-content-default mb-2">Contrast Variations</h3>
          <p className="text-body1 text-content-default">
            If necessary, the text color changes to white when used on dark or colored blocks.
          </p>
          <p className="text-body1 text-accent mt-2">
            Accent variations use the brand color. For example in numbers: 1 500 000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeExample;
