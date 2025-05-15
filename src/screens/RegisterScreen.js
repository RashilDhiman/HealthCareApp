import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flexContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.appTitle}>Register</Text>

          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} style={styles.icon} />
            <TextInput
              placeholder="Email Id"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.icon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.icon} />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <Text style={styles.registerText}>
            Already have an account?
            <Text
              style={styles.registerLink}
              onPress={() => navigation.goBack()}
            >
              {' '}Login here
            </Text>
          </Text>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 8,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  registerText: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 14,
  },
  registerLink: {
    color: '#1e3a8a',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#4D91B8',
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default RegisterScreen;
