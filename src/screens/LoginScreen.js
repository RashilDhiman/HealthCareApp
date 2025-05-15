import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();
  const [showError, setShowError] = useState(false);

  const isDark = colorScheme === 'dark';
  const theme = {
    background: isDark ? '#181A20' : '#fff',
    text: isDark ? '#fff' : '#222',
    inputBg: isDark ? '#23262F' : '#f5f5f5',
    border: isDark ? '#444' : '#aaa',
    icon: isDark ? '#fff' : '#333',
    button: isDark ? '#2196F3' : '#4D91B8',
    buttonText: '#fff',
    link: isDark ? '#90caf9' : '#1e3a8a',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.loginTitle, { color: theme.text }]}>LOGIN</Text>
      <Text style={[styles.appTitle, { color: theme.text }]}>Healthcare</Text>

      <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.inputBg }]}>
        <Icon name="envelope" size={20} style={[styles.icon, { color: theme.icon }]} />
        <TextInput
          placeholder="Email Id"
          placeholderTextColor={isDark ? '#aaa' : '#888'}
          style={[styles.input, { color: theme.text }]}
          value={email}
          onChangeText={text => { setEmail(text); if (showError) setShowError(false); }}
          keyboardType="email-address"
        />
      </View>
      {showError && !email && (
        <Text style={{ color: 'red', marginBottom: 8, marginLeft: 4 }}>Fill all the fields</Text>
      )}

      <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.inputBg }]}>
        <Icon name="lock" size={20} style={[styles.icon, { color: theme.icon }]} />
        <TextInput
          placeholder="Password"
          placeholderTextColor={isDark ? '#aaa' : '#888'}
          style={[styles.input, { color: theme.text }]}
          secureTextEntry
          value={password}
          onChangeText={text => { setPassword(text); if (showError) setShowError(false); }}
        />
      </View>
      {showError && !password && (
        <Text style={{ color: 'red', marginBottom: 8, marginLeft: 4 }}>Fill all the fields</Text>
      )}

      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={[styles.forgotText, { color: theme.link }]}>Forgot Password !</Text>
      </TouchableOpacity>

      <Text style={[styles.registerText, { color: theme.text }]}>
        Don't Have an Account :
        <Text
          style={[styles.registerLink, { color: theme.link }]}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Click here to register
        </Text>
      </Text>

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: theme.button }]}
        onPress={() => {
          if (email && password) {
            navigation.navigate('Loading');
          } else {
            setShowError(true);
          }
        }}
      >
        <Text style={[styles.loginButtonText, { color: theme.buttonText }]}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  forgotBtn: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    fontWeight: '600',
  },
  registerText: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 14,
  },
  registerLink: {
    fontWeight: '600',
  },
  loginButton: {
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default LoginScreen;
