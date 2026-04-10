import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Counter = () => {

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    console.log("Count Updated:", state.count);
  }, [state.count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-10 text-center">

        <h1 className="text-3xl font-bold mb-6">
          Count: {state.count}
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add
          </button>

          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
};

export default Counter;