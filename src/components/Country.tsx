import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Display from "./Display";

const Country: React.FC<{}> = ({ route, navigation }: any) => {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    setState(route.params.paramKey);
  }, []);

  return (
    <View>
      {state?.map((item: any) => {
        return <Display props={item} navigation={navigation} />;
      })}
    </View>
  );
};

export default Country;
