import React from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
export const HomeScreen = () => {
  return (
    // view es una columna que creamos
    <View style={styles.container}>
      {/* <Text>hola mundo</Text>
          <StatusBar style="auto" /> */}
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.imageBackGround}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoimage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      {/* son columnas  */}
      <View style={styles.form}>
        <Text style={styles.forText}>INGRESAR</Text>
        <View style={styles.forInput}>
          <Image
            style={styles.forIcon}
            source={require("../../../assets/email.png")}
          />
          <TextInput
            placeholder="corero electronico"
            style={styles.stileTextInpurstyle}
            // TYPE OK KEYBOARD shows aroba
            keyboardType="email-address"
          ></TextInput>
        </View>
        <View style={styles.forInput}>
          <Image
            style={styles.forIcon}
            source={require("../../../assets/password.png")}
          />
          <TextInput
            placeholder="password"
            style={styles.stileTextInpurstyle}
            // TYPE OK KEYBOARD shows aroba
            keyboardType="default"
            // hide password
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View style={{ marginTop: 30 }}>
          {/* we can not call styles on Button */}
          {/* <Button
                title="ENTRAR"
                // action perform
                onPress={() => ToastAndroid.show("CLICK", ToastAndroid.LONG)}
                color="orange"
              /> */}
          {/* parameter  */}
          <RoundedButton
            text="entrart"
            onPress={() => ToastAndroid.show("HOLA!", ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>no tiene una cuenta</Text>
          <Text style={styles.formRegisterText}>registrate</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // fex 1 expande todos los elementos
    flex: 1,
    backgroundColor: "black",
    // position: "relative",
  },
  imageBackGround: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
    // position: "relative",
  },
  form: {
    position: "absolute",
    width: "100%",
    heigth: "50%",
    backgroundColor: "white",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  forText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  logoContainer: {
    position: "absolute",
    textAlign: "center",
    color: "beige",
    //aliniar al centro los elementos
    alignSelf: "center",
    // naje un poco
    top: "15%",
  },
  logoimage: {
    height: 100,
    width: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fintSize: 20,
    marginTop: 10,
    // letra en negrita
    fontWeight: "bold",
  },
  stileTextInpurstyle: {
    // each for an equal space and does not care (inportar) about its content
    flex: 1,
    //line oh the box
    borderBottomWidth: 1,
    borderBottomColor: "#C2D1D1",
    // padding: 20,
    marginLeft: 15,
  },
  forInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  forIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "oreange",
    // weight pesio
    fontWeight: "bold",
    marginLeft: 10,
  },
});
