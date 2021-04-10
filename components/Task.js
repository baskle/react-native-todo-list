import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.6,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#111",
    borderRadius: 8,
    opacity: 0.25,
    marginRight: 12,
  },
  itemText: {
    maxWidth: "90%",
  },
  circular: {
    width: 16,
    height: 16,
    borderColor: "#111",
    borderWidth: 1.5,
    borderRadius: 8,
  },
});

export default Task;
