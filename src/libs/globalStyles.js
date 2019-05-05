import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


  .box-middle-title {
    text-align:left;
    font-size:15px;
  }
  .box-middle-text{
    text-align:left;
    font-size:15px;
  }
  .how-it-work-title {
    font-weight:bold;
    color:#37405E;
    margin-bottom:5%;
  }

  .how-it-works-box {
    box-shadow:1px 1px 4px 1px #2ec3ab
  }
  .chair-tablet-image{
    margin-top:20%;
    margin-left: 34%;
  }

  .footer-description-title {
    font-size:18px;
    font-weight:bold;
    margin-bottom:5px;
    }
    .searchpost::-webkit-input-placeholder { color: #145252; } /* WebKit, Blink, Edge */
    .searchpost:-moz-placeholder { color: #145252; } /* Mozilla Firefox 4 to 18 */
    .searchpost::-moz-placeholder { color: #145252; } /* Mozilla Firefox 19+ */
    .searchpost:-ms-input-placeholder { color: #145252; } /* Internet Explorer 10-11 */
    .searchpost::-ms-input-placeholder { color:#145252; } /* Microsoft Edge */

    .footer-list {
      background-color:transparent;
      color:#FFF;
      font-size:12px;
      line-height:2
    }

    .footer-list a  {
      color:#FFF;
    }

    .copyright {
      font-size:10px;
    }

    .vbr-button {
      background-color: rgb(46, 195, 171);
      border-color: rgb(46, 195, 171);
    }
    .middle-description-text {
      font-size:13px;
      text-align:justify;
    }

    .middle-description-text p {
      margin-bottom: 0.5rem;
    }
    
    .play-icon-color {
        color:rgb(46, 195, 171);
    }

    .small-icon-button {
      display: inline;
      position: absolute;
      left: 17px;
      top: 5px;
    }

    #login-dp{
      min-width: 250px;
      padding: 14px 14px 0;
      overflow:hidden;
      background-color:rgba(255,255,255,.8);
  }
  #login-dp .help-block{
      font-size:12px    
  }
  #login-dp .bottom{
      background-color:rgba(255,255,255,.8);
      border-top:1px solid #ddd;
      clear:both;
      padding:14px;
  }
  #login-dp .social-buttons{
      margin:12px 0    
  }
  #login-dp .social-buttons a{
      width: 49%;
  }
  #login-dp .form-group {
      margin-bottom: 10px;
  }
  .btn-fb{
      color: #fff;
      background-color:#3b5998;
  }
  .btn-fb:hover{
      color: #fff;
      background-color:#496ebc 
  }
  .btn-tw{
      color: #fff;
      background-color:#55acee;
  }
  .btn-tw:hover{
      color: #fff;
      background-color:#59b5fa;
  }
  @media(max-width:768px){
      #login-dp{
          background-color: inherit;
          color: #fff;
      }
      #login-dp .bottom{
          background-color: inherit;
          border-top:0 none;
      }
      
  }
  
`;

export default GlobalStyle;
