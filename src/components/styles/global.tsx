import React from "react";
import { Global, css } from "@emotion/core";

export default () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
      @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-display: swap;
      }
      ::placeholder {
        color: #c2c2c2;
      }
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Roboto Light",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        font-size: 16px;
        scroll-behavior: smooth;
      }

      a {
        transition: color 0.15s;
        /* color: #663399; */
      }

      body {
        font-family: "Roboto";
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: none;
      }

      .navBarParent {
        width: 100%;
        float: left;
        display: flex;
        align-items: center;
      }
      .navBarULRight {
        /* position: absolute;
      right: 30px; */
      }
      .navbar-default .navbar-toggle .icon-bar {
        background-color: #fff !important;
      }

      .navbar-default .navbar-toggle:focus,
      .navbar-default .navbar-toggle:hover {
        background-color: #001933;
      }

      .headerWrapper {
        border-bottom: 1px solid rgb(212, 218, 223);
        box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
        display: flex;
        align-items: center;
      }

      .navBarUL li {
        list-style-type: none;
      }
      .navBarNav {
        display: flex;
        align-items: center;
      }
      pre {
        border: 0 !important;
        background-color: rgb(245, 247, 249); /* !important; */
      }

      blockquote {
        color: rgb(116, 129, 141);
        margin: 0px 0px 24px;
        padding: 0px 0px 0px 12px;
        border-left: 4px solid rgb(230, 236, 241);
        border-color: rgb(230, 236, 241);
      }

      .titleWrapper {
        display: flex;
        align-items: center;
        padding-bottom: 40px;
        border-bottom: 1px solid rgb(230, 236, 241);
        margin-bottom: 32px;
      }

      .addPaddTopBottom {
        padding: 50px 0;
      }

      .preRightWrapper {
        display: block;
        margin: 0px;
        flex: 1 1 0%;
        padding: 16px;
        text-align: right;
      }

      .smallContent {
        display: block;
        margin: 0px;
        padding: 0px;
        color: #6e6e6e;
      }

      .smallContent span {
        font-size: 12px;
        line-height: 1.625;
        font-weight: 400;
      }

      /* **************************** */

      .nextRightWrapper {
        display: block;
        margin: 0px;
        padding: 16px;
        flex: 1 1 0%;
      }

      /* tables.css */
      table {
        padding: 0;
      }

      table tr {
        border-top: 1px solid #cccccc;
        margin: 0;
        padding: 0;
      }

      table tr:nth-of-type(2n) {
        background-color: #f8f8f8;
      }

      table tr th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      table tr td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      table tr th :first-of-type,
      table tr td :first-of-type {
        margin-top: 0;
      }

      table tr th :last-child,
      table tr td :last-child {
        margin-bottom: 0;
      }
      /* end - tables.css */

      /* Image styling */
      img {
        max-width: 100%;
      }
      /* end image */
      .heading1 {
        font-size: 26px;
        font-weight: 800;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .heading2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .heading3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .heading4 {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .heading5 {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .heading6 {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 16px;
        margin-top: 32px;
      }

      .paragraph {
        margin: 16px 0px 32px;
        line-height: 1.625;
      }

      .pre {
        font-size: 14px;
        margin: 0px;
        padding: 16px;
        overflow: auto;
      }
      .topnav {
        -webkit-transition: top 0.5s, bottom 0.5s;
      }

      @media (max-width: 767px) {
        .visibleMobileView {
          display: block !important;
        }
        .topnav .navBarUL {
          display: none;
        }
        .hiddenMobile {
          display: none !important;
        }
        hr {
          margin-top: 0;
          margin-bottom: 0;
        }
        .navBarParent {
          display: block;
        }
        .separator {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .navBarULRight {
          position: static;
        }
        .navBarUL {
          display: flex;
          align-items: center;
          margin: 7.5px 0px;
        }
        .navBarUL li {
          height: 37px;
        }
        .navBarUL li a {
          font-size: 14px;
          padding: 10px 15px;
        }

        .titleWrapper {
          padding: 0 15px;
          display: block;
        }

        .mobileView {
          text-align: left !important;
          padding-left: 0 !important;
        }
      }

      @media (min-width: 768px) and (max-width: 991px) {
        .navBarUL li a {
          padding: 10px 5px;
        }
      }
    `}
  />
);
