import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.signUpTitle}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.signUpContainer}>
        <View style={styles.leftInfosContainer}>
          <Text style={styles.emailText}>Email:</Text>
          <Text style={styles.firstNameText}>First Name:</Text>
          <Text style={styles.lastNameText}>Last Name:</Text>
          <Text style={styles.passwordText}>Password:</Text>
          <Text style={styles.confirmPasswordText}>Confirm Password:</Text>
        </View>
        <View style={styles.rightInputContainer}>
          <TextInput
            style={
              styles.emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput
            }
          />
          <TextInput
            style={
              styles.emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput
            }
          />
          <TextInput
            style={
              styles.emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput
            }
          />
          <TextInput
            style={
              styles.emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput
            }
          />
          <TextInput
            style={
              styles.emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput
            }
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
    /* <View style={styles.headerContainer}>
        <Image
          style={styles.logoImage}
          source={require("./assets/images/logo.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Book Store</Text>
          <Text style={styles.subTitle}>Reading is sexy</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.searchBtn}>
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginAndPasswordContainer}>
            <Text style={styles.emailAndPasswordText}>Email:</Text>
            <TextInput style={styles.emailAndPasswordInput} />
            <Text style={styles.emailAndPasswordText}>Password:</Text>
            <TextInput style={styles.emailAndPasswordInput} />
            <TouchableOpacity>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signupBtnText}>New Member? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  signUpTitle: {
    backgroundColor: "green",
    alignItems: "center",
    margin: 80,
  },
  signUpContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    marginLeft: 500,
    marginRight: 500,
  },
  emailAndFirstNameAndLastNameAndPasswordAndConfirmPasswordInput: {
    borderColor: "#f5c833",
    borderWidth: 2,
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#7d8044",
    borderRadius: 4,
    height: "75%",
    outlineColor: "#f5c833",
  },
  submitBtn: {
    paddingHorizontal: 50,
    paddingVertical: 80,
  },
  submitBtnText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  // headerContainer: {
  //   width: "100%",
  //   flexDirection: "row",
  //   padding: 10,
  //   alignItems: "center",
  //   backgroundColor: "white",
  // },

  // logoImage: {
  //   width: 90,
  //   height: 90,
  // },
  // title: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  // },
  // subTitle: {
  //   fontSize: 20,
  // },
  // titleContainer: {
  //   marginHorizontal: 20,
  // },
  // rightContainer: {
  //   height: "100%",
  //   flex: 1,
  //   justifyContent: "center",
  // },
  // input: {
  //   borderColor: "#f5c833",
  //   borderWidth: 2,
  //   padding: 5,
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   color: "#7d8044",
  //   borderRadius: 4,
  //   flex: 1,
  //   height: "75%",
  //   outlineColor: "#f5c833",
  // },
  // searchBtn: {
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   marginLeft: 5,
  // },
  // searchContainer: {
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // searchText: {
  //   fontWeight: "bold",
  //   fontSize: 15,
  // },
  // loginAndPasswordContainer: {
  //   flexDirection: "row",
  //   margin: 5,
  //   alignItems: "center",
  // },
  // emailAndPasswordText: {
  //   fontWeight: "bold",
  //   fontSize: 12,
  // },
  // emailAndPasswordInput: {
  //   borderColor: "#f5c833",
  //   borderWidth: 2,
  //   padding: 5,
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   color: "#7d8044",
  //   borderRadius: 4,
  //   flex: 1,
  //   height: "75%",
  //   marginHorizontal: 5,
  //   outlineColor: "#f5c833",
  // },
  // loginBtnText: {
  //   fontWeight: "bold",
  //   fontSize: 12,
  // },
  // signupBtnText: {
  //   fontWeight: "bold",
  //   fontSize: 12,
  //   color: "#4f5226",
  //   marginLeft: 10,
  //   marginRight: 5,
  // },
});
