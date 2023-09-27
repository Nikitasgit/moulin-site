import videoBg from "../assets/video/moulin-casta-video.mp4";

const Main = () => {
  return (
    <div className="main skeleton">
      <video src={videoBg} loop autoPlay muted />

      <div className="content">
        <h1>Venez vivre une expérience unique en Haute-Corse</h1>
        <p>En pleine nature et à seulement 20 minutes de Saint-Florent</p>
      </div>
    </div>
  );
};

export default Main;
