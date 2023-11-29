import React from "react";

import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

import styles from "./RegisterPage.module.css";

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.RegisterPage}>
      <div className={styles.formWrapper}>
        <h1>Register</h1>

        <Form layout="vertical">
          <Form.Item
            label="First Name"
            name="firstName"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Second Name"
            name="secondName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Birthdate"
            name="birthdate"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <nav className={styles.formNav}>
          <span>Already have an account?</span>
          <Link
            to="/login"
            className={styles.signinLink}
          >
            Sign in
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default RegisterPage;
