import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../redux/milk/milkActions";

function MilkContainer() {
  const [value, setValue] = useState(0);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes : {state.milk.numOfMilks}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={()=>dispatch(buyMilk(value))}>Buy Milk</button>
    </div>
  );
}

export default MilkContainer;
