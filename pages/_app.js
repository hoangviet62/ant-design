import React from "react";
import AntLayout from './layouts';

export default ({ Component, pageProps }) => (
  <AntLayout>
    <style jsx global>{`
      #__next {
        height: 100%;
      }
      .ant-layout {
        height: 100%;
      }
      .ant-layout-footer {
        padding: 24px 0px;
      }
    `}</style>
    <title>Demo Ant Design</title>
    <Component {...pageProps} />
  </AntLayout>
)