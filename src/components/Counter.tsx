import { observer } from "mobx-react-lite";
import counter from "../store/counter";
const Counter = observer(() => {
  return (
    <div className="Counter">
      <h2>Counter: {counter.count}</h2>
      <div className="btn-group">
        <button className="btn" onClick={() => counter.increment()}>
          Plus
        </button>
        <button className="btn" onClick={() => counter.decrement()}>
          Minus
        </button>
      </div>
    </div>
  );
});

export default Counter;
