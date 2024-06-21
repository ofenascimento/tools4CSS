export const buttons = [
  {
    id: 1,
    text: "The Shadow",
    className: "btn1",
    css: `.btn1 {
  background-color: #ffb84c;
  position: relative;
  padding: 6px 20px;
  width: 100%;
}
.btn1::after {
  content: "";
  display: block;
  position: absolute;
  top: calc(100%);
  left: calc(0% - 2px);
  width: calc(99%);
  border-top: 4px solid #060606;
  border-left: 8px solid rgba(0, 0, 0, 0);
  border-right: 8px solid rgba(0, 0, 0, 0);
  height: 0;
}
`,
  },
  {
    id: 2,
    text: "Border and Shadow",
    className: "btn2",
    css: `.btn2 {
	 background-color: transparent;
	 border: 2px solid #615efc;
	 position: relative;
	 padding: 6px 20px;
	 width: 100%;
	 color: #fff;
}
 .btn2::after {
	 content: "";
	 display: block;
	 position: absolute;
	 top: calc(100% + 2px);
	 left: calc(0% - 2px);
	 width: calc(99%);
	 border-top: 4px solid #615efc;
	 border-left: 8px solid rgba(0, 0, 0, 0);
	 border-right: 8px solid rgba(0, 0, 0, 0);
	 height: 0;
}
 `,
  },
  {
    id: 3,
    text: "Tropical Sunrise",
    className: "btn3",
    css: `.btn3 {
  border-radius: 8px;
  background: linear-gradient(92.83deg, #ff7556 0%, #fb4bff 100%);
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  font-weight: 700;
  line-height: normal;
}`,
  },
  {
    id: 4,
    text: "Cyclone Gradient",
    className: "btn4",
    css: `.btn4 {
	 position: relative;
	 padding: 10px 20px;
	 background-color: #836fff;
	 color: #fff;
	 font-size: 16px;
	 text-align: center;
	 width: 100%;
	 border: 2px solid transparent;
	 cursor: pointer;
	 overflow: hidden;
	 z-index: 1;
}
 .btn4::before {
	 content: "";
	 position: absolute;
	 top: -4px;
	 left: -4px;
	 right: -4px;
	 bottom: -4px;
	 background: linear-gradient(92.83deg, #ff7556 0%, #fb4bff 100%);
	 z-index: -1;
	 filter: blur(4px);
	 transform: rotate(0deg);
	 transform-origin: center;
	 transition: transform 0.4s;
	 animation: rotateGradient 4s linear infinite;
}
 @keyframes rotateGradient {
	 0% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(360deg);
	}
}
 `,
  },
  {
    id: 5,
    text: "Gradient Border",
    className: "btn5",
    css: `.btn5 {
	 padding: 10px 20px;
	 width: 100%;
	 border: none;
	 outline: none;
	 position: relative;
	 color: #fff;
	 z-index: 1;
	 border-radius: 5px;
	 background: linear-gradient(to right, #00ffa3, #dc1fff);
	 cursor: pointer;
}
 .btn5::before {
	 content: "";
	 position: absolute;
	 left: 3px;
	 right: 3px;
	 top: 3px;
	 bottom: 3px;
	 border-radius: 4px;
	 background-color: #000;
	 z-index: -1;
	 transition: 200ms;
}
 .btn5::after {
	 content: attr(data);
	 font-size: 16px;
	 background: linear-gradient(to left, #00ffa3, #dc1fff);
	 -webkit-background-clip: text;
	 color: transparent;
	 transition: 200ms;
}
 `,
  },
  {
    id: 6,
    text: "Sky Animation",
    className: "btn6",
    css: `.btn6 {
  padding: 10px 20px;
  width: 100%;
  color: #fff;
  border-radius: 20px;
  background-image: linear-gradient(80deg, #000000, #1a4fd8);
  background-size: 400% 400%;
  animation: gradientButton 10s ease infinite;
}

@keyframes gradientButton {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
  },
];
