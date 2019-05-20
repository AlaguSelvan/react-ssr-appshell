// html template for server side rendering
export default function template(sheetsRegistry, helmet, state = {}, content = '', bundles) {
  const css = sheetsRegistry.toString()
  const scripts = `
   <script>
                   window.__STATE__ = ${JSON.stringify(state)}
                </script>
  <script src="/public/client.js"></script>`
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                <link rel="manifest" href="/manifest.json">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- Server Side Rendering -->  ${content}
                   </div>
                   ${bundles.map(bundle => `<script src='/${bundle.file}'></script>`).join('\n')}
                </div>
                <style id="jss-server-side">${css}</style>
                ${scripts}
              </body>`
  return page
}