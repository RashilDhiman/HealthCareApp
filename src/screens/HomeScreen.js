// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sidebar from '../components/Sidebar';
import BottomNavBar from '../components/BottomNavBar';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {

  const navigateToPharmacy = () => {
    navigation.navigate('PharmacyFinder');
  };

  const navigateToReminder = () => {
    navigation.navigate('Reminder');
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
        <Image
          source={require('../../assets/home_logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.micButton}>
          <View style={styles.micIconCircle}>
            <Image
              source={require('../../assets/mic.png')}
              style={styles.micIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>


      <ScrollView style={styles.content}>

        <View style={styles.quickAccess}>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Questions</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/questions.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessButton} onPress={navigateToReminder}>
            <Text style={styles.quickAccessText}>Reminders</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/reminders.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Messages</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/messages.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Calendar</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/calender.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>

        /* Upload Prescription Section */
        <View style={styles.uploadSection}>
          <Text style={styles.uploadTitle}>UPLOAD PRESCRIPTION</Text>
          <Text style={styles.uploadDesc}>
            Upload a Prescription and Tell Us what you Need. We do the Rest !
          </Text>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>Flat 25% OFF ON MEDICINES</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={navigateToPharmacy} // Navigation handler
            >
              <Text style={styles.orderButtonText}>ORDER NOW</Text>
            </TouchableOpacity>
          </View>
        </View>

        /* Medical Service Banner */
        <Animatable.View
          style={styles.serviceBanner}
          animation="slideInRight" // Animation for medical service banner
          duration={3000}
        >
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>Get the Best{'\n'}Medical Service</Text>
            <Text style={styles.serviceDesc}>Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore nam molestias omnis qui earum voluptatem!</Text>
          </View>
          <Image
            source={require('../../assets/doctor.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />
        </Animatable.View>

        {/* Health Products Offer */}
        <Animatable.View
          style={styles.offerBanner}
          animation="slideInLeft" // Animation for health products offer
          duration={3000}
        >
          <View style={styles.offerTextContainer}>
            <Text style={styles.offerLabel}>upto</Text>
            <Text style={styles.offerPercentage}>80 %</Text>
            <Text style={styles.offerText}>offer</Text>
            <Text style={styles.offerDesc}>On Health Products</Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/vitamins.png')}
            style={styles.vitaminsImage}
            resizeMode="contain"
          />
        </Animatable.View>
      </ScrollView>

      /* Bottom Navigation */
      <BottomNavBar navigation={navigation} activeTab="Home" />

      /* Sidebar Overlay */
      {showSidebar && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleSidebar}
        />
      )}

      /* Sidebar */
      <Sidebar visible={showSidebar} onClose={toggleSidebar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  menuIcon: {
    padding: 5,
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: '#333',
    marginVertical: 3,
    borderRadius: 1,
  },
  logo: {
    width: 120,
    height: 30,
  },
  micButton: {
    padding: 5,
  },
  micIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  micIcon: {
    width: 20,
    height: 20,
  },
  content: {
    flex: 1,
  },
  quickAccess: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  quickAccessButton: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  quickAccessText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  iconContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  uploadSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  uploadDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    width: '50%',
  },
  orderButton: {
    backgroundColor: '#0e86d4',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  serviceBanner: {
    backgroundColor: '#e3f8e7',
    flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 15,
        elevation: 2,
      },
      serviceTextContainer: {
        flex: 2,
      },
      serviceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
      },
      serviceDesc: {
        fontSize: 12,
        color: '#666',
      },
      doctorImage: {
        flex: 1,
        height: 100,
      },
      offerBanner: {
        backgroundColor: '#e5dbff',
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 15,
        elevation: 2,
      },
      offerTextContainer: {
        flex: 1,
      },
      offerLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#555',
      },
      offerPercentage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
      offerText: {
        fontSize: 16,
        color: '#444',
      },
      offerDesc: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
        marginBottom: 10,
      },
      shopButton: {
        backgroundColor: '#0e86d4',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
      },
      shopButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
      },
      vitaminsImage: {
        flex: 1,
        height: 120,
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
      },
    });

    export default HomeScreen;

