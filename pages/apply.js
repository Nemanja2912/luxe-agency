import Heading1 from "@/components/headings/heading1";
import Link from "next/link";
import { useRef } from "react";

const Apply = () => {
  return (
    <div className="apply">
      <div className="apply-hero">
        <div className="apply-content container">
          <Heading1>
            Discover the Path to Launching or Expanding Your Highly Lucrative OF
            Career Now!
          </Heading1>
          <p>
            PLEASE WATCH THIS FREE INFO VIDEO IN FULL BELOW THEN SEND A TELEGRAM
            MESSAGE
          </p>
        </div>
      </div>

      <div className="video-wrapper">
        <YouTubePlayer />
      </div>
      <Link
        href="
https://t.me/olivialuxeagencyco"
      >
        <div className="telegram-btn">
          <div className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7219 0.218812C19.6112 0.111782 19.4765 0.0406006 19.3324 0.0129354C19.1883 -0.0147298 19.0402 0.00217046 18.904 0.0618153L0.809497 7.99267C0.553057 8.10435 0.33595 8.30631 0.190863 8.56815C0.0457751 8.82998 -0.0194404 9.13752 0.00503419 9.44446C0.0295088 9.75139 0.142349 10.0411 0.326566 10.27C0.510784 10.4989 0.756408 10.6546 1.02646 10.7136L5.71482 11.7446V17.5995C5.7139 17.9184 5.79852 18.2303 5.95771 18.4947C6.11691 18.7591 6.34334 18.9639 6.60767 19.0825C6.87159 19.2032 7.16183 19.2321 7.44065 19.1656C7.71947 19.0991 7.97397 18.9402 8.17105 18.7095L10.4317 16.0835L14.0183 19.5995C14.2771 19.8565 14.6108 19.9988 14.9567 19.9994C15.1083 19.9993 15.2589 19.9727 15.4031 19.9204C15.6388 19.8367 15.8508 19.6853 16.0179 19.4812C16.1851 19.2772 16.3016 19.0276 16.3558 18.7575L19.9799 1.0998C20.0123 0.940548 20.0054 0.774422 19.96 0.619225C19.9145 0.464028 19.8322 0.325612 19.7219 0.218812ZM14.263 3.81875L6.26392 10.2346L1.83538 9.26164L14.263 3.81875ZM7.14338 17.5995V12.8516L9.35676 15.0255L7.14338 17.5995ZM14.9585 18.3995L7.57641 11.1496L18.2013 2.62077L14.9585 18.3995Z"
                fill="white"
              />
            </svg>
          </div>
          Contact us via Telegram NOW
        </div>
      </Link>
    </div>
  );
};

export default Apply;

const YouTubePlayer = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src="https://www.youtube.com/embed/bIwlvYx8sqw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
