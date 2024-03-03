import title from "../img/title.svg";

const Bubble = () => {
    return (
        <div className="bubble">
          <div className="bubble__img">
            <div className="bubble__blur">
            </div>
          </div>
          <img className="bubble__title" src={title} alt="title" />
        </div>
    );
  };
  
export default Bubble;