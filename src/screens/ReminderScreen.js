// src/screens/ReminderScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReminderScreen = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: '1',
      type: 'pdf',
      uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      doctor: 'Dr. Anuj Sharma',
      notes: 'Take before bedtime. 5-day course.',
      uploadedAt: '2025-05-08',
    },
    {
      id: '2',
      type: 'pdf',
      uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      doctor: 'Dr. Meera Kapoor',
      notes: 'Vitamin D3 prescription.',
      uploadedAt: '2025-05-07',
    },
  ]);

  const renderPrescription = ({ item }) => (
    <TouchableOpacity
      style={styles.prescriptionCard}
      onPress={() => Linking.openURL(item.uri)}
    >
      <View style={styles.pdfIconContainer}>
        <Icon name="file-pdf-o" size={50} color="#d9534f" />
      </View>
      <View style={styles.prescriptionInfo}>
        <Text style={styles.doctorName}>{item.doctor}</Text>
        <Text style={styles.notes}>{item.notes}</Text>
        <Text style={styles.date}>Uploaded on: {item.uploadedAt}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Prescriptions & Reminders</Text>

      <FlatList
        data={prescriptions}
        renderItem={renderPrescription}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.prescriptionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 25,
    textAlign: 'center',
  },
  prescriptionList: {
    paddingBottom: 20,
  },
  prescriptionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 8, // Shadow effect for elevation
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  pdfIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f8d7da',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  prescriptionInfo: {
    marginLeft: 15,
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a4c70',
  },
  notes: {
    fontSize: 15,
    color: '#495057',
    marginVertical: 5,
  },
  date: {
    fontSize: 13,
    color: '#868e96',
  },
});

export default ReminderScreen;
