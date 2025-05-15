import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../components/BottomNavBar';
import { Image as RNImage } from 'react-native';

const PharmacyFinderScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleUploadPress = (option) => {
    setSelectedOption(option);
    // Handle actual upload logic here
  };

  const handleContinue = () => {
    // Handle continue logic
    console.log('Continue pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <RNImage source={require('../../assets/location.gif')} style={{ width: 22, height: 22, resizeMode: 'contain', marginRight: 4, alignSelf: 'center' }} />
          <Text style={styles.locationText}>Mohali</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Pharmacy Nearby</Text>

        {/* Pharmacy Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.pharmacyCardsContainer}
        >
          {/* Path lab pharmacy */}
          <View style={styles.pharmacyCard}>
            <Image
              source={require('../../assets/pharmacist1.jpg')}
              style={styles.pharmacyImage}
              //defaultSource={require('./assets/pharmacy-placeholder.jpg')}
            />
            <Text style={styles.pharmacyName}>Path lab pharmacy</Text>
            <Text style={styles.pharmacyDistance}>5km Away</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.5 (120 review)</Text>
            </View>
          </View>

          {/* 24 pharmacy */}
          <View style={styles.pharmacyCard}>
            <Image
              source={require('../../assets/pharmacist2.jpg')}
              style={styles.pharmacyImage}
             // defaultSource={require('./assets/pharmacy-placeholder.jpg')}
            />
            <Text style={styles.pharmacyName}>24 pharmacy</Text>
            <Text style={styles.pharmacyDistance}>7km Away</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.5 (120 review)</Text>
            </View>
          </View>

          <View style={styles.pharmacyCard}>
                      <Image
                        source={require('../../assets/pharmacist1.jpg')}
                        style={styles.pharmacyImage}
                        //defaultSource={require('./assets/pharmacy-placeholder.jpg')}
                      />
                      <Text style={styles.pharmacyName}>Path lab pharmacy</Text>
                      <Text style={styles.pharmacyDistance}>5km Away</Text>
                      <View style={styles.ratingContainer}>
                        <Icon name="star" size={14} color="#FFD700" />
                        <Text style={styles.ratingText}>4.5 (120 review)</Text>
                      </View>
                    </View>

                    <View style={styles.pharmacyCard}>
                                <Image
                                  source={require('../../assets/pharmacist2.jpg')}
                                  style={styles.pharmacyImage}
                                  //defaultSource={require('./assets/pharmacy-placeholder.jpg')}
                                />
                                <Text style={styles.pharmacyName}>Path lab pharmacy</Text>
                                <Text style={styles.pharmacyDistance}>5km Away</Text>
                                <View style={styles.ratingContainer}>
                                  <Icon name="star" size={14} color="#FFD700" />
                                  <Text style={styles.ratingText}>4.5 (120 review)</Text>
                                </View>
                              </View>
        </ScrollView>

        {/* Upload Prescription Section */}
        <View style={styles.uploadSection}>
          <Text style={styles.uploadTitle}>Upload Prescription</Text>
          <Text style={styles.uploadDescription}>
            We will show the pharmacy that fits as per your prescription.
          </Text>

          {/* Upload Options */}
          <View style={styles.uploadOptionsContainer}>
            <TouchableOpacity
              style={[
                styles.uploadOption,
                selectedOption === 'link' && styles.selectedOption
              ]}
              onPress={() => handleUploadPress('link')}
            >
              <View style={styles.uploadIconContainer}>
                <RNImage source={require('../../assets/file.gif')} style={{ width: 36, height: 36, resizeMode: 'contain', marginBottom: 8 }} />
              </View>
              <Text style={styles.uploadOptionText}>Upload Link</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.uploadOption,
                selectedOption === 'file' && styles.selectedOption
              ]}
              onPress={() => handleUploadPress('file')}
            >
              <View style={styles.uploadIconContainer}>
                <RNImage source={require('../../assets/upload.gif')} style={{ width: 36, height: 36, resizeMode: 'contain', marginBottom: 8 }} />
              </View>
              <Text style={styles.uploadOptionText}>Upload File</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar */}
      <BottomNavBar navigation={navigation} activeTab="PharmacyFinder" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 4,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  pharmacyCardsContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  pharmacyCard: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  pharmacyImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  pharmacyName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginHorizontal: 12,
  },
  pharmacyDistance: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
    marginHorizontal: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 12,
    marginHorizontal: 12,
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 4,
  },
  uploadSection: {
    paddingHorizontal: 16,
  },
  uploadTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  uploadDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
  },
  uploadOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 20,
  },
  uploadOption: {
    alignItems: 'center',
    width: '45%',
    padding: 12,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#ffff',
  },
  uploadIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  uploadOptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  continueButtonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: '#3CAEA3',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PharmacyFinderScreen;