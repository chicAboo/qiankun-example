import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Descriptions, Avatar, message, Modal } from "antd";

import actions from "../../shared/actions";

const Status = () => {
  const history = useHistory();

  const [token, setToken] = useState();
  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        message.error("未检测到登录信息！");
        Modal.warning({
          title: '用户已过期，请重新登录！',
          onOk() {
            window.location.href = '/login'
          }
        });
        return;
      }
      setToken(token);
    }, true);
  }, [history]);

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    if (!token) return;

    (async () => {
      setUserInfo({
        avatarUrl: 'https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto',
        nickname: 'Monchic',
        gender: false,
        country: 'China',
        province: 'SiChuan',
        city: 'ChengDu'
      });
    })();
  }, [token]);

  if (!userInfo) return null;

  return (
    <section>
      <Descriptions title={`欢迎你，${userInfo.nickname}`} bordered column={1} labelStyle={{ width: 50}}>
        <Descriptions.Item label="Avatar">
          <Avatar src={userInfo.avatarUrl} size={80} />
        </Descriptions.Item>
        <Descriptions.Item label="UserName">
          {userInfo.nickname}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {userInfo.gender ? "Boy" : "Girl"}
        </Descriptions.Item>
        <Descriptions.Item label="Live">{`${userInfo.country} ${userInfo.province} ${userInfo.city}`}</Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default Status;
