import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const dummyCycleData = [
  {
    id: '1',
    cycle: 'April 2025',
    entries: [
      { time: '08 Apr 08:00', bbt: '36.41°C' },
      { time: '08 Apr 20:00', bbt: '36.43°C' },
      { time: '09 Apr 08:00', bbt: '36.45°C' },
      { time: '09 Apr 20:00', bbt: '36.67°C' },
    ],
    ovulation: '15 Apr',
  },
  {
    id: '2',
    cycle: 'March 2025',
    entries: [
      { time: '15 Mar 08:00', bbt: '36.35°C' },
      { time: '15 Mar 20:00', bbt: '36.40°C' },
      { time: '16 Mar 08:00', bbt: '36.55°C' },
    ],
    ovulation: '14 Mar',
  },
  {
    id: '3',
    cycle: 'February 2025',
    entries: [
      { time: '14 Feb 08:00', bbt: '36.31°C' },
      { time: '14 Feb 20:00', bbt: '36.33°C' },
      { time: '15 Feb 08:00', bbt: '36.60°C' },
    ],
    ovulation: '13 Feb',
  },
];

// Algorithm to analyze BBT fluctuations
function analyzeBBTData(entries) {
  if (!entries || entries.length < 3) return { phase: 'Insufficient Data', ovulation: null };

  const temps = entries.map(e => parseFloat(e.bbt.replace('°C', '')));
  const avg = temps.reduce((sum, t) => sum + t, 0) / temps.length;

  const recent = temps[temps.length - 1];
  const prev = temps[temps.length - 2];

  if (recent > avg + 0.2) {
    return { phase: 'Luteal Phase', ovulation: estimateOvulationDate(entries, temps) };
  } else if (recent < avg - 0.1) {
    return { phase: 'Follicular Phase', ovulation: null };
  } else if (prev < recent && recent - prev >= 0.2) {
    return { phase: 'Ovulation Window', ovulation: entries[entries.length - 1].time };
  } else {
    return { phase: 'Cycle Transition', ovulation: null };
  }
}

function estimateOvulationDate(entries, temps) {
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] - temps[i - 1] >= 0.2) {
      return entries[i].time;
    }
  }
  return null;
}

export default function CycleHistoryScreen() {
  const handlePairing = () => {
    Alert.alert('BLE Pairing', 'Starting Bluetooth advertisement...');
    // Placeholder for actual BLE advertisement
  };

  const renderEntry = ({ item }) => (
    <View style={styles.entryCard}>
      <Text style={styles.entryTime}>{item.time}</Text>
      <Text style={styles.entryBBT}>BBT: {item.bbt}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Cycle History</Text>

        <TouchableOpacity style={styles.pairButton} onPress={handlePairing}>
          <Icon name="bluetooth" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.pairButtonText}>Pair with LifeCycle Ring</Text>
        </TouchableOpacity>

        <FlatList
          data={dummyCycleData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => {
            const { phase, ovulation } = analyzeBBTData(item.entries);
            return (
              <View style={styles.card}>
                <Text style={styles.cycleTitle}>{item.cycle}</Text>
                <Text style={styles.ovulationText}>Ovulation: {item.ovulation}</Text>
                <Text style={styles.phaseLabel}>Current Phase: {phase}</Text>
                {ovulation && (
                  <Text style={styles.phaseOvulation}>Likely Ovulation: {ovulation}</Text>
                )}
                <FlatList
                  data={item.entries}
                  keyExtractor={(entry, index) => index.toString()}
                  renderItem={renderEntry}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F8FE',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6E4B8E',
    marginBottom: 20,
    textAlign: 'center',
  },
  pairButton: {
    flexDirection: 'row',
    backgroundColor: '#7A50C1',
    padding: 14,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  pairButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  cycleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E4E9C',
    marginBottom: 6,
  },
  ovulationText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#6E4B8E',
    marginBottom: 8,
  },
  phaseLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7A50C1',
    marginBottom: 2,
  },
  phaseOvulation: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#1E4E9C',
    marginBottom: 10,
  },
  entryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0EEFA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  entryTime: {
    fontSize: 14,
    color: '#333',
  },
  entryBBT: {
    fontSize: 14,
    color: '#1E4E9C',
    fontWeight: 'bold',
  },
});
