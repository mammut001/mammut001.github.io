import { BASE_PATH } from "@/lib/site";

const script = `(function(){var b=${JSON.stringify(BASE_PATH)};var l=(navigator.language||"en").toLowerCase();location.replace(b+(l.indexOf("zh")===0?"/zh/":"/en/")+location.hash);})();`;

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${BASE_PATH}/en/`} />
        <noscript>
          <meta httpEquiv="refresh" content={`0; url=${BASE_PATH}/en/`} />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body>
        <a href={`${BASE_PATH}/en/`}>Dogether</a>
      </body>
    </html>
  );
}
