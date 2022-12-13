// we use a snips
//use  react conponents
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppTheme";
//  create parameter
interface Props {
  text: string;
  onPress: () => void;
}
// i side
export const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={style.roundBotton} onPress={() => onPress()}>
      <Text style={style.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
// create a new stysheet
const style = StyleSheet.create({
  roundBotton: {
    width: "100%",
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
