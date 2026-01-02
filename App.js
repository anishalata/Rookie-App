import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// Note: If these icons cause an error, we will fix that next.
import { ChevronRight, RefreshCcw, Bell } from 'lucide-react-native';

export default function App() {
  // This "state" tells the app which screen to show
  const [screen, setScreen] = useState('home');

  // --- SCREEN: HOME ---
  if (screen === 'home') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.appName}>Rookie</Text>
          <Text style={styles.tagline}>Football, explained as you watch</Text>

          {/* Primary Button */}
          <TouchableOpacity 
            style={styles.mainButton} 
            onPress={() => setScreen('learning')}
          >
            <Text style={styles.mainButtonText}>Get me ready</Text>
          </TouchableOpacity>

          {/* Secondary Card */}
          <View style={styles.cardSecondary}>
            <Text style={styles.cardTitle}>Quick refresh</Text>
            <Text style={styles.cardSub}>Nothing to revisit right now</Text>
          </View>

          {/* Progress Section */}
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Watching without panic</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressSub}>Just getting started</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // --- SCREEN: LEARNING ---
  if (screen === 'learning') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconCircle}>
            <RefreshCcw size={40} color="#63D471" />
          </View>
          <Text style={styles.title}>The "Reset" Button</Text>
          <View style={styles.learningCard}>
            <Text style={styles.bodyText}>
              Think of a <Text style={{fontWeight: '700'}}>First Down</Text> as a reset button.
              {"\n\n"}
              If the ball crosses the <Text style={{color: '#D4AF37', fontWeight: '700'}}>yellow line</Text> on TV, the team gets 4 brand new tries.
            </Text>
          </View>
          <TouchableOpacity style={styles.mainButton} onPress={() => setScreen('home')}>
            <Text style={styles.mainButtonText}>I see the line</Text>
            <ChevronRight color="#2D3436" size={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAF9' },
  content: { flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center' },
  appName: { fontSize: 32, fontWeight: '800', color: '#2D3436', marginBottom: 5, letterSpacing: 1 },
  tagline: { fontSize: 16, color: '#636E72', marginBottom: 40 },
  mainButton: { backgroundColor: '#A8E6CF', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 30, width: '100%', alignItems: 'center', marginBottom: 20, flexDirection: 'row', justifyContent: 'center', gap: 10, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  mainButtonText: { color: '#2D3436', fontSize: 20, fontWeight: '700' },
  cardSecondary: { backgroundColor: '#D1E8E2', padding: 20, borderRadius: 20, width: '100%', marginBottom: 40 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#2D3436' },
  cardSub: { fontSize: 14, color: '#636E72' },
  progressSection: { width: '100%', alignItems: 'center' },
  progressLabel: { fontSize: 14, color: '#636E72', marginBottom: 8 },
  progressBar: { width: '100%', height: 10, backgroundColor: '#E0E0E0', borderRadius: 5 },
  progressFill: { width: '20%', height: '100%', backgroundColor: '#A8E6CF', borderRadius: 5 },
  progressSub: { fontSize: 12, color: '#B2BEC3', marginTop: 8 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#EFFFF4', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#2D3436', marginBottom: 20 },
  learningCard: { backgroundColor: 'white', padding: 25, borderRadius: 25, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2, marginBottom: 30, width: '100%' },
  bodyText: { fontSize: 18, lineHeight: 26, color: '#4A4A4A', textAlign: 'center' },
});