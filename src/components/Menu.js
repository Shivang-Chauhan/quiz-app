import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );

  const startQuiz = (event) => {
    event.preventDefault(); // Prevents the form from submitting
    setGameState("playing");
  };

  return (
    <div className="Menu">
      <h2>Please Enter Your Name:</h2>
      <form onSubmit={startQuiz}>
        <input
          type="text"
          // placeholder="Ex. Shivang Chauhan"
          required
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button>Start Quiz</button>
      </form>
    </div>
  );
}

export default Menu;



// import "../App.css";
// import { useContext } from "react";
// import { GameStateContext } from "../helpers/Contexts";

// function Menu() {
//   const { gameState, setGameState, userName, setUserName } = useContext(
//     GameStateContext
//   );
//   return (
//     <div className="Menu">
//       <h2>Please Enter Your Name:</h2>
//       <p></p>
//       <input
//         type="text"
//         // placeholder="Ex. Shivang Chauhan"
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setGameState("playing");
//         }}
//       >
//         Start Quiz
//       </button>
//     </div>
//   );
// }

// export default Menu;
