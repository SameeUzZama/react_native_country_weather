import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, TextInput, View, Button } from "react-native";

const Home = ({ navigation }: any) => {
  const [input, setInput] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
  };

  const handleSubmit = async () => {
    const result: any = await axios.get(
      `https://restcountries.com/v2/name/${input}`
    );

    await navigation.navigate("Country", {
      paramKey: result?.data,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.Input}
          placeholder="Enter Country"
          value={input}
          onChange={(e: any) => handleChange(e)}
        />
        <Button
          title="Submit"
          disabled={!input}
          onPress={handleSubmit}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    height: 40,
    width: 300,
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Home;
