var opts = {
  angle: -0.2, // The span of the gauge arc
  lineWidth: 0.1, // The line thickness
  radiusScale: 1.0, // Relative radius
  pointer: {
    length: 0.5, // // Relative to gauge radius
    strokeWidth: 0.02, // The thickness
    color: "#000000", // Fill color
  },
  limitMax: false, // If false, max value increases automatically if value > maxValue
  limitMin: false, // If true, the min value of the gauge will be fixed
  colorStart: "#0D6EFD", // Colors
  colorStop: "#0D6EFD", // just experiment with them
  strokeColor: "#E0E0E0", // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true, // High resolution support
  // renderTicks is Optional
  renderTicks: {
    divisions: 10,
    divWidth: 1.2,
    divLength: 0.5,
    divColor: "#333333",
    subDivisions: 5,
    subLength: 0.25,
    subWidth: 0.6,
    subColor: "#666666",
  },
  staticLabels: {
    font: "10px sans-serif", // Specifies font
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Print labels at these values
    color: "#000000", // Optional: Label text color
    fractionDigits: 0, // Optional: Numerical precision. 0=round off.
  },
};
var target = document.getElementById("guage"); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 18; // set animation speed (32 is default value)
gauge.set(0); // set actual value

function reset(){
  var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.1, // The line thickness
    radiusScale: 1.0, // Relative radius
    pointer: {
      length: 0.5, // // Relative to gauge radius
      strokeWidth: 0.02, // The thickness
      color: "#000000", // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: "#0D6EFD", // Colors
    colorStop: "#0D6EFD", // just experiment with them
    strokeColor: "#E0E0E0", // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: 10,
      divWidth: 1.2,
      divLength: 0.5,
      divColor: "#333333",
      subDivisions: 5,
      subLength: 0.25,
      subWidth: 0.6,
      subColor: "#666666",
    },
    staticLabels: {
      font: "10px sans-serif", // Specifies font
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Print labels at these values
      color: "#000000", // Optional: Label text color
      fractionDigits: 0, // Optional: Numerical precision. 0=round off.
    },
  };
  var target = document.getElementById("guage"); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 18; // set animation speed (32 is default value)
  gauge.set(0); // set actual value
  document.getElementById("d").innerHTML = "--";
  document.getElementById("u").innerHTML = "--";

} 

async function download() {
  document.getElementById("Msg").innerHTML = "Performing Download SpeedTest";
  var speed = await fetch("http://localhost:4321/download").then((response) => {
    return response.json();
  });
  console.log("download", speed);

  var target = document.getElementById("guage"); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 18; // set animation speed (32 is default value)
  gauge.set(speed["DWS"]); // set actual value

  document.getElementById("d").innerHTML = speed["DWS"] + "Mbps";
  var msg_dw = "Download Test Done";
  
  return msg_dw;
}
async function upload() {
  document.getElementById("Msg").innerHTML = "Performing Upload SpeedTest";
  var speed = await fetch("http://localhost:4321/upload").then((response) => {
    return response.json();
  });
  console.log("upload", speed);

  var target = document.getElementById("guage"); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 18; // set animation speed (32 is default value)
  gauge.set(speed["UPS"]); // set actual value

  document.getElementById("u").innerHTML = speed["UPS"] + "Mbps";
  var msg_up = "Upload Test Done";
  document.getElementById("Msg").innerHTML = "";
  
  return msg_up;
}

async function main() {
  var m_dw = await download();
  console.log(m_dw);

  var m_up = await upload();
  console.log(m_up);
}
