import { IconStopwatch } from "@tabler/icons-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <IconStopwatch size={36} />
        </button>
      </Heading>
      <p>Não contavam com minha astúcia!</p>
      <img
        src="https://static.wikia.nocookie.net/liberproeliis/images/1/1a/JdFcRwL.png/revision/latest?cb=20181210214019&path-prefix=pt-br"
        alt="chapolin"
        width={400}
      />
    </>
  );
}

export default App;
