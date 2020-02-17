import React, { useState } from "react";
import {Button, Drawer, Row, Col, Typography} from 'antd';

const { Text } = Typography;

const settings = {
  position: 'absolute',
  top: '50%',
  right: '5px',
};

const AntSetting = () => {
  const [visible, setVisible] = useState(false);

  function onClose() {
    setVisible(false);
  }

  function onOpen() {
    setVisible(true);
  }

  return (
    <div>
      <Button type="primary"
              shape="round"
              icon="setting"
              style={settings}
              onClick={onOpen}
      />
      <Drawer
        title="Layout Settings"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={512}
      >
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Text strong>Theme color</Text>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{height: 16, width: 16, backgroundColor: 'red'}} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={16}>
            <Text strong></Text>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default AntSetting;