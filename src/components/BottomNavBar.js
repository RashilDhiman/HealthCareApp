import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const tabs = [
  { name: 'Home', icon: 'home', screen: 'Home' },
  { name: 'Calendar', icon: 'calendar', screen: 'PharmacyFinder' },
  { name: 'Documents', icon: 'file', screen: 'Documents' },
  { name: 'Chat', icon: 'comment', screen: 'Chat' },
];

const BottomNavBar = ({ navigation, activeTab }) => {
  return (
    <View style={styles.bottomNav}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.name}
          style={styles.navItem}
          onPress={() => {
            if (tab.screen && tab.screen !== activeTab) {
              navigation.navigate(tab.screen);
            }
          }}
        >
          <Icon
            name={tab.icon}
            size={activeTab === tab.screen ? 28 : 26}
            color={activeTab === tab.screen ? '#2196F3' : '#333'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    elevation: 8,
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomNavBar; 