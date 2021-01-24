import "./Preloader.scss";

export default function Preloader() {
  return (
    <div className="preloader-wrapper">
      <div className="container">
        <div className="preloader">
          <div className="bar-wrapper">
            <div className="bar">
              <div className="circle"></div>
              <p>Loading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
