import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import background from "../../media/background.svg";

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    svg {
      path {
        fill: ${theme.lightpink};
      }
    }

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    .icon1 {
      display: none !important;
    }
    #icon2 {
    }
    .icon6 {
      top: 550px !important;
    }
  }
  &:before {
    content: "";
    position: absolute;
  }
  &:after {
    content: "";
    width: 60%;
    height: 60%;
  }
  svg:not(:first-child) {
    position: absolute;

    z-index: 99999;
    //  animation: bounce 2.5s ease infinite;

    &:hover {
      transform: scale(1.3);
    }
  }
  //javascript

  .icon1 {
    position: absolute;
    top: 300px;
    width: 20rem;
    height: 10rem;
    right: -90px;
    transition: all 1s;
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  //React
  #icon2 {
    position: absolute;
    width: 15rem;
    height: 15rem;
    top: 550px;
    left: 600px;
    transition: all 1s;
    @media (max-width: 768px) {
      position: absolute;
      top: 100px !important;
      width: 150px !important;
      height: 150px !important;
      g {
        stroke: ${theme.lightpink};
      }
      left: 90px !important;
      transition: all 1s;
    }
  }
  //CSS
  .icon3 {
    position: absolute;
    top: 3rem;
    right: -20px;
    width: 5rem;
    height: 7rem;
    transition: all 1s;
    @media (max-width: 768px) {
      path:not(:first-child) {
        fill: white;
      }
      .trans {
        fill: transparent !important;
      }
    }
  }
  //Figma
  .icon4 {
    position: absolute;
    top: 19rem;
    left: 30rem;
    width: 7rem;
    height: 7rem;
    transition: all 1s;
  }
  //Laravel
  .icon5 {
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 450px;
    right: 200px;
    transition: all 1s;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  //SASS
  .icon6 {
    position: absolute;
    top: 800px;
    left: 15rem;
    width: 10rem;
    height: 7rem;
    transition: all 1s;
  }
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    right: -100px;
    z-index: -1;
  }
`;
function RightContainer({ mobile }) {
  return (
    <Container>
      {!mobile && <img className="background" src={background} alt="back" />}
      <svg
        className="icon1"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 32 32"
      >
        <path
          fill="#fff"
          d="M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566L27.301 3.42H4.697zm8.528 5.975l-.409 4.441 9.671.001-.069.76-.665 7.45-.042.478-5.804 1.609-5.796-1.609-.396-4.443h2.84l.202 2.257 3.154.85 3.156-.852.328-3.67-9.671-.001.069-.76.665-7.45.209-2.086h11.287l.131 1.598.403 4.453h-2.841l-.262-2.922-2.889-.174h-.515V9.32l-2.755.074z"
        />
      </svg>
      <svg
        id="icon2"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 16.933 16.933"
      >
        <g transform="translate(264.405 -1282.338) scale(.26458)">
          <ellipse
            cx="-4878.631"
            cy="-967.325"
            fill="none"
            rx="10.999"
            ry="26.999"
            transform="rotate(-90)"
          />
          <ellipse
            cx="1603.615"
            cy="-4709.371"
            fill="none"
            rx="10.96"
            ry="28.17"
            transform="matrix(.86624 .49963 .50037 -.86581 0 0)"
          />
          <ellipse
            cx="3278.654"
            cy="-3742.767"
            fill="none"
            rx="10.96"
            ry="28.17"
            transform="rotate(150.025) skewX(.049)"
          />
          <path
            fill="#fff"
            d="m -967.32422,4873.6317 a 4.9986753,4.9986753 0 0 0 -4.99805,5 4.9986753,4.9986753 0 0 0 4.99805,4.9981 4.9986753,4.9986753 0 0 0 4.99805,-4.9981 4.9986753,4.9986753 0 0 0 -4.99805,-5 z"
          />
          <g stroke="#fff">
            <ellipse
              cx="-4878.631"
              cy="-967.325"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.003"
              rx="10.999"
              ry="26.999"
              transform="rotate(-90)"
            />
            <ellipse
              cx="3278.654"
              cy="-3742.767"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.003"
              rx="10.96"
              ry="28.17"
              transform="rotate(150.025) skewX(.049)"
            />
            <ellipse
              cx="1603.615"
              cy="-4709.371"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.003"
              rx="10.96"
              ry="28.17"
              transform="matrix(.86624 .49963 .50037 -.86581 0 0)"
            />
          </g>
        </g>
      </svg>

      <svg
        className="icon3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
      >
        <path
          fill="#fff"
          d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        />
        <path
          className="trans"
          fill="transparent"
          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
        />
        <path
          fill={theme.pink}
          d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"
        />
        <path
          fill={theme.pink}
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        />
        <path
          fill={theme.pink}
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"
        />
        <path
          fill={theme.pink}
          d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        />
      </svg>
      <svg
        className="icon4"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
      >
        <path d="M15.75,16.331c-2.342,0-4.248-1.943-4.248-4.332s1.906-4.332,4.248-4.332s4.248,1.943,4.248,4.332S18.092,16.331,15.75,16.331z M15.75,8.667c-1.791,0-3.248,1.495-3.248,3.332s1.457,3.332,3.248,3.332s3.248-1.495,3.248-3.332S17.541,8.667,15.75,8.667z" />
        <path d="M8.249,24C5.906,24,4,22.057,4,19.668c0-1.662,0.921-3.109,2.269-3.836C4.921,15.105,4,13.66,4,12c0-1.66,0.922-3.106,2.271-3.834C4.922,7.439,4,5.993,4,4.332C4,1.943,5.906,0,8.249,0h7.503C18.094,0,20,1.945,20,4.336c0,2.389-1.906,4.332-4.249,4.332l-3.254-0.001v11.001C12.497,22.057,10.591,24,8.249,24z M8.249,16.332C6.458,16.332,5,17.829,5,19.668C5,21.505,6.458,23,8.249,23s3.249-1.495,3.249-3.332V8.167c0-0.276,0.224-0.5,0.5-0.5h3.753c0,0,0.001,0,0.001,0c0.866,0,1.68-0.345,2.292-0.972C18.661,6.066,19,5.228,19,4.336C19,2.497,17.542,1,15.751,1H8.249C6.458,1,5,2.495,5,4.332c0,1.837,1.458,3.332,3.249,3.332c0.276,0,0.5,0.224,0.5,0.5s-0.223,0.5-0.499,0.5C6.458,8.668,5,10.165,5,12c0,1.837,1.458,3.332,3.249,3.332c0.276,0,0.5,0.224,0.5,0.5S8.525,16.332,8.249,16.332z" />
      </svg>
      <svg
        className="icon5"
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="2500"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 256 256"
      >
        <g fill="#fff">
          <path d="M160.445 208c2 2.889 3.222 2.667 4.777 2 1.555-.667 81.556-27.667 84-28.555 2.444-.889 1.667-1.667.89-2.89-.778-1.222-27.445-37.444-28.779-39.555-1.333-2.111-2-1.667-4.111-1l-84.805 22.067S158.445 205.11 160.445 208zM256 171.115v-42.398c-9.541 2.542-21.609 5.756-26.373 7.023 7.187 9.616 18.423 24.665 26.373 35.375zM229.545 83.521c-1.307.297-30.247 5.527-32.03 5.764-1.782.238-1.188 1.248-.475 2.258l25.467 34.943s31.139-7.725 33.041-8.141c.154-.034.305-.07.452-.107v-4.627c-5.66-7.177-21.08-26.718-22.413-28.544-1.604-2.199-2.734-1.842-4.042-1.546z" />
          <path d="M47.456 28.634c6.267-.285 6.839 1.141 9.592 5.224l69.17 115.642 86.974-20.835c-4.819-6.831-26.695-37.846-28.81-40.806-2.376-3.328.06-4.873 3.923-5.526 3.862-.654 37.14-6.24 39.992-6.656 2.853-.416 5.112-1.426 9.746 4.16 2.372 2.858 10.412 12.87 17.957 22.255V48c0-13.222-4.695-24.528-14.083-33.917C232.528 4.695 221.222 0 208 0H48C34.778 0 23.472 4.695 14.083 14.083 8.698 19.47 4.865 25.487 2.57 32.134c15.678-1.288 40.501-3.3 44.887-3.5z" />
          <path d="M168.289 223.564c-7.334 2.222-10.623 3.325-15.4-3.342-3.578-4.993-22.927-39.843-32.414-57.023-17.955 4.702-50.814 13.278-60.29 15.555-9.248 2.222-13.198-3.323-14.717-6.74C44.403 169.616 17.289 111.158 0 73.65V208c0 13.223 4.695 24.527 14.083 33.917C23.472 251.305 34.778 256 48 256h160c13.222 0 24.528-4.695 33.917-14.083C251.305 232.527 256 221.223 256 208v-15.781c-19.64 7.184-82.77 29.848-87.711 31.345z" />
          <path d="M60.412 165.288c2.6-.595 51.313-12.253 52.353-12.476 1.04-.223 1.708-.817.594-2.747-1.114-1.93-64.934-112.09-64.934-112.09-.589-1.011-.421-1.348-2.022-1.264-1.427.076-37.538 3.298-45.898 3.996a51.038 51.038 0 0 0-.461 5.331c8.487 17.375 57.199 117.837 57.472 118.655.297.892.297 1.189 2.896.595z" />
        </g>
      </svg>
      <svg
        className="icon6"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 32 24"
      >
        <path d="m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z" />
      </svg>
    </Container>
  );
}

export default RightContainer;
