// The Dogether site moved to https://cv.paytonpei.top/dogether, which picks the visitor's language itself.
const TARGET = "https://cv.paytonpei.top/dogether";

const script = `location.replace(${JSON.stringify(TARGET)}+location.hash);`;

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={TARGET} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
        <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      </head>
      <body>
        <a href={TARGET}>Dogether</a>
      </body>
    </html>
  );
}
