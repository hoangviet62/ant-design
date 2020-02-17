import React from "react";
import { Layout } from 'antd';
import AntSidebar from "./Sidebar";
import AntBreadcrumb from "./Breakcrumb";
import AntHeader from "./Header";
import AntFooter from "./Footer";
import AntSetting from "./Settings";

const { Content } = Layout;

const AntLayout = ({ children }) => (<Layout>
  <AntHeader />
  <Layout>
    <AntSidebar />
    <Layout style={{ padding: '0 24px 0 24px' }}>
      <AntBreadcrumb />
      <Content>
        {children}
      </Content>
      <AntSetting />
      <AntFooter />
    </Layout>
  </Layout>
</Layout>);

export default AntLayout;