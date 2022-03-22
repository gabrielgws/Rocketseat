import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/Logo.svg" type="image/svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ignite-template-reactjs-criando-um-projeto-do-zero-gabrielgws"></script>
        </body>
      </Html>
    );
  }
}
