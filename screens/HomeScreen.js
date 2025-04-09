import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {

  const [daysUntilPeriod, setDaysUntilPeriod] = useState(null);
  const todayIndex = new Date().getDay(); // 0=Sunday, 1=Monday...

  useEffect(() => {
    const mockPeriodStart = new Date();
    mockPeriodStart.setDate(mockPeriodStart.getDate() + 12);
    calculateDaysUntil(mockPeriodStart);
  }, []);

  const calculateDaysUntil = (targetDate) => {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysUntilPeriod(days);
  };

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 7 }, (_, i) => 6 + i); // mock dates

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Week Strip with Today Highlight */}
        <View style={styles.dayStrip}>
          {weekDays.map((day, i) => (
            <View key={i} style={styles.dayItem}>
              <Text style={styles.dayText}>{day}</Text>
              <View style={[
                styles.dayCircle,
                i === ((todayIndex + 6) % 7) && styles.todayHighlight
              ]}>
                <Text style={[
                  styles.dayNumber,
                  i === ((todayIndex + 6) % 7) && styles.todayText
                ]}>
                  {dates[i]}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Cycle Tracking Bubble */}
        <TouchableOpacity style={styles.cycleContainer}>
          <Text style={styles.cycleLabel}>Period in</Text>
          <Text style={styles.cycleDays}>
            {daysUntilPeriod !== null ? `${daysUntilPeriod} days` : '...'}
          </Text>
          <Text style={styles.cycleSubText}>Low chance of getting pregnant</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit period dates</Text>
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {
              width: `${(1 - daysUntilPeriod / 28) * 100}%`
            }]} />
          </View>
        </TouchableOpacity>

        {/* Symptom + Insight Cards */}
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ShareYourSymptoms')}>
            <Icon name="chatbubble-ellipses-outline" size={22} color="#1E4E9C" />
            <Text style={styles.cardText}>Share your symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="bar-chart-outline" size={22} color="#1E4E9C" />
            <Text style={styles.cardText}>Daily insights</Text>
          </TouchableOpacity>
        </View>

        {/* Articles */}
        <Text style={styles.sectionHeader}>Menstrual health</Text>
        <View style={styles.articleRow}>
          <TouchableOpacity style={styles.articleCard}>
            <Text style={styles.articleText}>
              Craving sweets on your period? Here's why & what to do about it
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleCard}>
            <Text style={styles.articleText}>
              Is birth control right for your menstrual health?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Your Info */}
        <Text style={styles.sectionHeader}>Your Info</Text>
        <TouchableOpacity style={styles.infoCard}>
          <Text style={styles.infoText}>Blood: O+</Text>
          <Text style={styles.infoText}>Height: 175cm</Text>
          <Text style={styles.infoText}>Weight: 90kg</Text>
          <Text style={styles.infoText}>Age: 50</Text>
        </TouchableOpacity>

        {/* Future Feature */}
        <TouchableOpacity style={styles.futureCard}>
          <Text style={styles.futureTitle}>💡 AI Fertility Tips (coming soon)</Text>
          <Text style={styles.futureText}>
            Get personalized ovulation suggestions based on your tracked data.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F8FE',
  },
  container: {
    padding: 20,
  },
  dayStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dayItem: {
    alignItems: 'center',
    width: 40,
  },
  dayText: {
    fontSize: 14,
    color: '#555',
  },
  dayCircle: {
    backgroundColor: '#E4E4F7',
    padding: 6,
    borderRadius: 100,
    marginTop: 4,
  },
  todayHighlight: {
    backgroundColor: '#7A50C1',
  },
  todayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E4E9C',
  },
  cycleContainer: {
    backgroundColor: '#BCA4E5',
    padding: 30,
    borderRadius: 120,
    alignItems: 'center',
    marginBottom: 25,
  },
  cycleLabel: {
    fontSize: 16,
    color: '#fff',
  },
  cycleDays: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  cycleSubText: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#7A50C1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#D6CDEB',
    borderRadius: 10,
    overflow: 'hidden',
    width: '50%',
    marginTop: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7A50C1',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#1E4E9C',
    marginTop: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E4E9C',
    marginBottom: 10,
  },
  articleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  articleCard: {
    flex: 1,
    backgroundColor: '#FFD1F3',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    elevation: 2,
  },
  articleText: {
    fontSize: 13,
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1E4E9C',
  },
  futureCard: {
    backgroundColor: '#fff9e5',
    borderLeftWidth: 5,
    borderLeftColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
  },
  futureTitle: {
    fontWeight: 'bold',
    color: '#C28A00',
    marginBottom: 5,
  },
  futureText: {
    fontSize: 13,
    color: '#333',
  },
});
