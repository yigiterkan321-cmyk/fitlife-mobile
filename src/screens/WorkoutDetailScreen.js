// src/screens/WorkoutDetailScreen.js — Antrenman Detay
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import { colors, radius, spacing } from '../theme';

export default function WorkoutDetailScreen({ route, navigation }) {
  const { workout } = route.params;
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={[s.hero, { backgroundColor: workout.color + '22' }]}>
          <View style={s.heroTop}>
            <TouchableOpacity style={s.circleBtn} onPress={() => navigation.goBack()}>
              <Icon name="back" size={14} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={s.circleBtn}>
              <Icon name="heart" size={15} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <Icon name={workout.icon} size={48} color={workout.color} sw={2.6} />
          </View>
          <Text style={s.title}>{workout.title}</Text>
          <Text style={s.desc}>{workout.desc}</Text>
        </View>

        <View style={s.pillRow}>
          {[
            { ic: 'clock', v: workout.duration, l: 'Süre' },
            { ic: 'fire', v: workout.calories, l: 'kcal' },
            { ic: 'chart', v: workout.level, l: 'Seviye' },
          ].map((p, i) => (
            <View key={i} style={s.statPill}>
              <Icon name={p.ic} size={15} color={colors.lime} sw={1.9} />
              <Text style={s.statVal}>{p.v}</Text>
              <Text style={s.statLbl}>{p.l}</Text>
            </View>
          ))}
        </View>

        <Text style={s.section}>Hareketler ({workout.exercises.length})</Text>
        <View style={{ paddingHorizontal: spacing.lg }}>
          {workout.exercises.map((e, i) => (
            <View key={i} style={s.exRow}>
              <View style={s.exNum}><Text style={s.exNumTxt}>{i + 1}</Text></View>
              <Text style={s.exName}>{e.name}</Text>
              <Text style={s.exReps}>{e.reps}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={s.startBtn}>
        <Icon name="play" size={14} color={colors.dark} />
        <Text style={s.startTxt}>Antrenmanı Başlat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  hero: { paddingHorizontal: spacing.lg, paddingTop: 8, paddingBottom: 20 },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between' },
  circleBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  title: { color: colors.white, fontSize: 26, fontWeight: '800' },
  desc: { color: colors.muted, fontSize: 13, marginTop: 6 },
  pillRow: { flexDirection: 'row', gap: 10, paddingHorizontal: spacing.lg, marginTop: -6 },
  statPill: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: 12, alignItems: 'center', gap: 4 },
  statVal: { color: colors.white, fontSize: 14, fontWeight: '800' },
  statLbl: { color: colors.muted, fontSize: 10 },
  section: { color: colors.white, fontSize: 16, fontWeight: '800', marginTop: 24, marginBottom: 12, paddingHorizontal: spacing.lg },
  exRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.sm, padding: 12, marginBottom: 8 },
  exNum: { width: 26, height: 26, borderRadius: 13, backgroundColor: 'rgba(200,255,61,0.18)', alignItems: 'center', justifyContent: 'center' },
  exNumTxt: { color: colors.lime, fontWeight: '800', fontSize: 12 },
  exName: { color: colors.white, fontSize: 13, fontWeight: '600', marginLeft: 12, flex: 1 },
  exReps: { color: colors.muted, fontSize: 12 },
  startBtn: { position: 'absolute', left: spacing.lg, right: spacing.lg, bottom: 24, backgroundColor: colors.lime, height: 54, borderRadius: radius.pill, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  startTxt: { color: colors.dark, fontWeight: '800', fontSize: 16 },
});
