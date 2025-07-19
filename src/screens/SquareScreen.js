import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const STEP = 15;

const reducer = (state, action) => {
  // state === { red: number, gree: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: number }

  switch (action.type) {
    case "change_red":
      let sumRed = state.red + action.payload;
      return sumRed > 255 || sumRed < 0 ? state : { ...state, red: sumRed };
    case "change_blue":
      let sumBlue = state.blue + action.payload;
      return sumBlue > 255 || sumBlue < 0 ? state : { ...state, blue: sumBlue };
    case "change_green":
      let sumGreen = state.green + action.payload;
      return sumGreen > 255 || sumGreen < 0
        ? state
        : { ...state, green: sumGreen };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: STEP })}
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1.0 * STEP })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: STEP })}
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1.0 * STEP })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: STEP })}
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1.0 * STEP })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
