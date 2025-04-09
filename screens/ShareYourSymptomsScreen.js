import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const symptomOptions = [
  'Cramps',
  'Headache',
  'Mood Swings',
  'Nausea',
  'Back Pain',
  'Food Cravings',
  'Fatigue',
  'Breast Tenderness',
];

const ShareYourSymptomsScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [notes, setNotes] = useState('');

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Symptoms Submitted', `You selected: ${selectedSymptoms.join(', ')}\nNotes: ${notes}`);
    // In real app: store this in Firebase / local DB for ML use
    setSelectedSymptoms([]);
    setNotes('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <Text style={styles.subtitle}>Select any symptoms you are experiencing:</Text>

      <View style={styles.symptomGrid}>
        {symptomOptions.map((symptom, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.symptomButton,
              selectedSymptoms.includes(symptom) && styles.selected
            ]}
            onPress={() => toggleSymptom(symptom)}
          >
            <Icon
              name={selectedSymptoms.includes(symptom) ? 'checkbox' : 'square-outline'}
              size={20}
              color={selectedSymptoms.includes(symptom) ? '#fff' : '#1E4E9C'}
              style={{ marginRight: 6 }}
            />
            <Text style={[
              styles.symptomText,
              selectedSymptoms.includes(symptom) && styles.selectedText
            ]}>
              {symptom}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>Anything else you'd like to add?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type any additional symptoms or notes here..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ShareYourSymptomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FE',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E4E9C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
  },
  symptomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  symptomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#fff',
    borderColor: '#1E4E9C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  selected: {
    backgroundColor: '#7A50C1',
    borderColor: '#7A50C1',
  },
  symptomText: {
    fontSize: 14,
    color: '#1E4E9C',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    fontSize: 14,
    textAlignVertical: 'top',
    height: 100,
  },
  submitButton: {
    backgroundColor: '#7A50C1',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
