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
      .visibleMobileView {
        display: none !important;
      }
      .video-responsive {
        position: relative;
        padding-bottom: 56.2%;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: none;
      }
      .displayInline {
        display: inline-block;
      }
      .video-responsive iframe {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .diffNewLine {
        color: #22863a;
        background-color: #f0fff4;
      }

      .diffRemoveLine {
        color: red;
        background-color: #ffcccc;
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
      .githubIcon {
        width: 15px;
        margin-right: 5px;
      }

      .githubSection {
        display: flex;
        align-items: center;
        color: #000;
        opacity: 0.7;
      }

      .githubSection:hover {
        text-decoration: none;
        opacity: 1;
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

      /* Header section starts here */
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
      /* Header section ends here */
      .sideBarShow {
        display: none;
      }

      .greenCircle {
        width: 8px;
        height: 8px;
        background-color: #1cd3c6;
        border-radius: 50%;
        margin: 0 12px;
      }

      .headerNav {
        font-family: "Roboto";
        padding: 0px 24px;
        color: #001933;
        font-size: 16px;
        font-weight: 500;
        line-height: 1em;
      }

      .headerNav a {
        color: #001933;
        text-decoration: none;
      }

      .headerNav a:hover {
        text-decoration: none;
      }

      .logoWrapper img {
        width: 40px;
      }

      .sideBarUL {
        margin-top: 50px;
      }

      .sideBarUL li {
        list-style-type: none;
        width: auto;
      }

      .sideBarUL li a,
      .sideBarUL li span {
        /* color: #fff; */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        padding: 7px 24px 7px 16px;
        padding-left: 10px;
        padding-right: 25px;
        border-style: solid none solid solid;
        border-width: 1px 0px 1px 1px;
        border-color: transparent currentcolor transparent transparent;
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
        .responsive {
          margin-top: 15px;
          position: relative;
          padding-bottom: 20px;
          border-top: 1px solid #fff;
        }
        .topnav .navBarUL {
          display: none;
        }
        .topnav.responsive .navBarUL {
          display: block;
          text-align: left;
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
