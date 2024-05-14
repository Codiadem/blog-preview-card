import image from "./images/card-image.svg";
import owner from "./images/image-avatar.png";

function App() {
  return (
    <>
      <div className="card w-2/6 bg-white rounded-lg mx-auto shadow-current sm:h-4/5 w-3/4 m-auto xxl:h-5/6">
        <img
          src={image}
          alt="image"
          className="w-11/12 px-0.5 rounded-lg pt-2 my-7 mx-auto"
        />
        <span className="learn text-sm font-bold p-1 ml-3 my-1 text-center">
          Learning
        </span>
        <p className=" pub my-3 ml-3 text-sm sm:text-xs">
          Published 21 December,2021
        </p>
        <h1 className="ml-3 font-bold sm:text-xs">HTML & CSS Foundations</h1>
        <p className="page ml-3 text-gray-400">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="owner ml-3 mt-3 mb-5 flex items-center gap-x-4 sm: gap-x-2">
          <img src={owner} alt="Image of Greg" className="sm:w-12" />
          <span className="text-xs">
            <b>Greg Hooper</b>
          </span>
        </div>
        <footer className="text-xs mx-3">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/?ref=challenge"
            className="text-gray-400"
          >
            Frontend Mentors
          </a>
          Coded by{" "}
          <a
            href="https://github.com/codiadem"
            className="text-gray-400 hover:text-blue-600"
          >
            Chioma Ekpemerechi
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
