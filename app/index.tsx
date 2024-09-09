import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top + 30 }]}>
      <Image
        source={require("@/assets/images/login/trello.png")}
        style={styles.image}
      />
      <Text style={styles.introText}>Make teamwork better</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#fff" }]}>
          <Text style={[styles.btnText, { color: Colors.primary }]}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn]}>
          <Text style={[styles.btnText, { color: "#fff" }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  image: {
    height: 450,
    paddingHorizontal: 40,
    resizeMode: "contain",
  },
  introText: {
    fontWeight: "600",
    color: "white",
    fontSize: 17,
    padding: 30,
  },
  bottomContainer: {
    gap: 10,
    width: "100%",
    paddingHorizontal: 40,
  },
  btn: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
  },
});
