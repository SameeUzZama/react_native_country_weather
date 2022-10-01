import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import axios from "axios";
import { Card, Title, Paragraph } from "react-native-paper";

const Display = ({ props, navigation }: any) => {
  const [countryWeather, setCountryWeather] = useState<any>({});
  const [toggle, setToggle] = useState(true);

  const handleChangeBack = () => {
    navigation.navigate("Home", {
      paramKey: "",
    });
  };

  const getCountryWeather = async (capital: string) => {
    const Weather: any = await axios.get(
      `http://api.weatherstack.com/current?access_key=291924041ffefeef4537f00c694eded7&query=${capital}`
    );
    setCountryWeather(Weather?.data?.current);
    setToggle(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <Card>
          <Card.Actions>
            <Card>
              <Card.Cover source={props?.flag} />
              <Card.Content>
                <Title>Capital : {props?.capital}</Title>
                <Paragraph>Latitute : {props?.latlng[0]}</Paragraph>
                <Paragraph>population : {props?.population}</Paragraph>
              </Card.Content>
            </Card>
          </Card.Actions>
          <Card.Actions>
            {toggle ? (
              <Button
                title="Weather"
                onPress={() => getCountryWeather(props?.capital)}
              ></Button>
            ) : (
              <View>
                <Card>
                  <Card.Cover source={countryWeather?.weather_icons} />
                  <Card.Content>
                    <Title>temperature : {countryWeather?.temperature}</Title>
                    <Paragraph>
                      wind_speed: {countryWeather?.wind_speed}
                    </Paragraph>
                    <Paragraph>precip: {countryWeather?.precip}</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            )}
          </Card.Actions>
        </Card>
      </View>
      <Button title="Back" onPress={handleChangeBack}></Button>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
