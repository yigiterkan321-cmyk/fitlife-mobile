// src/screens/ProgressScreen.js — İlerleme
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Icon from '../components/Icon';
import { colors, radius, spacing } from '../theme';

const W = Dimensions.get('window').width - spacing.lg * 2 - 32;
const HH = 130;
const data = [0.4, 0.55, 0.45, 0.7, 0.6, 0.85, 0.95];

function LineChart() {
  const step = W / (data.length - 1);
  const pts = data.map((v, i) => [i * step, HH - HH * v]);
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(0) + ',' + p[1].toFixed(0)).join(' ');
  const area = path + ` L${W.toFixed(0)},${HH} L0,${HH} Z`;
  return (
    <Svg width={W} height={HH}>
      <Defs>
        <LinearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={colors.lime} stopOpacity="0.35" />
          <Stop offset="1" stopColor={colors.lime} stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Path d={area} fill="url(#ar)" />
      <Path d={path} stroke={colors.lime} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <Circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill={colors.bg} stroke={colors.lime} strokeWidth={2.5} />
      ))}
    </Svg>
  );
}

const stats = [{ v: '28', l: 'Antrenman' }, { v: '12.4k', l: 'Kalori' }, { v: '9', l: 'Seri' }];
const ach = [
  { ic: 'fire', t: 'İlk 5K', c: colors.lime },
  { ic: 'play', t: '7 Gün Seri', c: colors.coral },
  { ic: 'chart', t: 'Hedef x10', c: colors.blue },
  { ic: 'user', t: 'Pro Üye', c: colors.purple },
];

export default function ProgressScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 40 }}>
        <Text style={s.h1}>İlerleme</Text>
        <View style={s.statRow}>
          {stats.map((x, i) => (
            <View key={i} style={s.statCard}>
              <Text style={s.statVal}>{x.v}</Text>
              <Text style={s.statLbl}>{x.l}</Text>
            </View>
          ))}
        </View>

        <Text style={s.section}>Aylık Aktivite</Text>
        <View style={s.chartCard}><LineChart /></View>

        <Text style={s.section}>Başarımlar</Text>
        <View style={s.achRow}>
          {ach.map((a, i) => (
            <View key={i} style={s.achCard}>
              <View style={[s.achIcon, { backgroundColor: a.c + '2E' }]}>
                <Icon name={a.ic} size={17} color={a.c} sw={2} />
              </View>
              <Text style={s.achTxt}>{a.t}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  h1: { color: colors.white, fontSize: 24, fontWeight: '800', marginTop: 8 },
  statRow: { flexDirection: 'row', gap: 10, marginTop: 16 },
  statCard: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: 16, alignItems: 'center' },
  statVal: { color: colors.lime, fontSize: 20, fontWeight: '800' },
  statLbl: { color: colors.muted, fontSize: 10.5, marginTop: 4 },
  section: { color: colors.white, fontSize: 16, fontWeight: '800', marginTop: 24, marginBottom: 12 },
  chartCard: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: 16 },
  achRow: { flexDirection: 'row', gap: 8 },
  achCard: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: 14, alignItems: 'center' },
  achIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  achTxt: { color: colors.white, fontSize: 9, fontWeight: '600', textAlign: 'center' },
});
