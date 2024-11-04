function getUserGeoLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (location) => {
              console.log(location.coords.latitude);
              console.log(location.coords.longitude);
          },
          (error) => {
              console.log(error);
          }
      );
  } else {
      alert("Browser location not supported.");
  }
}

async function getUserMedia() {
  try {
      const videoRef = document.querySelector("video"); // Select the video element
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: { width: 500, height: 300 }
          });

          videoRef.srcObject = stream;
          videoRef.onloadedmetadata = () => {
              videoRef.play(); // Start video playback
          };
          console.log("Video stream started");
      } else {
          alert("Media devices not supported in this browser.");
      }
  } catch (error) {
      console.log("Error accessing media devices:", error);
  }
}

getUserMedia();