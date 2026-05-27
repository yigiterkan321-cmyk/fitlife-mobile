// src/screens/HomeScreen.js — Ana Sayfa / Dashboard
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import Icon from '../components/Icon';
import { colors, radius, spacing } from '../theme';

function Ring({ pct = 0.7, size = 96, sw = 11 }) {
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  return (
    <Svg width={size} height={size}>
      <Circle cx={size/2} cy={size/2} r={r} stroke={colors.line} strokeWidth={sw} fill="none" />
      <Circle cx={size/2} cy={size/2} r={r} stroke={colors.lime} strokeWidth={sw} fill="none"
        strokeLinecap="round" strokeDasharray={`${c*pct} ${c}`}
        transform={`rotate(-90 ${size/2} ${size/2})`} />
    </Svg>
  );
}

const weekly = [0.45, 0.7, 0.55, 0.9, 0.6, 0.8, 0.35];
const days = ['P', 'S', 'Ç', 'P', 'C', 'Ct', 'P'];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 40 }}>
        <View style={s.headerRow}>
          <View>
            <Text style={s.greetSmall}>Tekrar hoş geldin,</Text>
            <Text style={s.greetBig}>Yiğit</Text>
          </View>
          <View style={s.avatar}><Text style={s.avatarTxt}>Y</Text></View>
        </View>

        <View style={s.goalCard}>
          <View style={{ flex: 1 }}>
            <Text style={s.muted}>Bugünkü Hedef</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 6 }}>
              <Text style={s.bigNum}>420</Text>
              <Text style={[s.muted, { marginBottom: 6, marginLeft: 6 }]}>/ 600 kcal</Text>
            </View>
            <Text style={{ color: colors.lime, fontSize: 12, marginTop: 8 }}>● 38 dk aktif   ● 6.2 km</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ring pct={0.7} />
            <Text style={s.ringTxt}>70%</Text>
          </View>
        </View>

        <View style={s.quickRow}>
          <TouchableOpacity style={s.quickCard} onPress={() => navigation.navigate('Antrenman')}>
            <View style={[s.quickIcon, { backgroundColor: 'rgba(200,255,61,0.18)' }]}>
              <Icon name="dumbbell" size={18} color={colors.lime} />
            </View>
            <Text style={s.quickTxt}>Antrenman{'\n'}Başlat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.quickCard}>
            <View style={[s.quickIcon, { backgroundColor: 'rgba(255,107,92,0.18)' }]}>
              <Icon name="plus" size={18} color={colors.coral} />
            </View>
            <Text style={s.quickTxt}>Aktivite{'\n'}Kaydet</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.section}>Bu Hafta</Text>
        <View style={s.chartCard}>
          {weekly.map((v, i) => (
            <View key={i} style={{ alignItems: 'center' }}>
              <View style={[s.bar, { height: 110 * v, backgroundColor: i === 3 ? colors.lime : colors.surface2 }]} />
              <Text style={s.dayLbl}>{days[i]}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greetSmall: { color: colors.muted, fontSize: 13 },
  greetBig: { color: colors.white, fontSize: 24, fontWeight: '800', marginTop: 2 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center' },
  avatarTxt: { color: colors.lime, fontWeight: '800', fontSize: 16 },
  goalCard: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: radius.lg, padding: 20, marginTop: 18, alignItems: 'center' },
  muted: { color: colors.muted, fontSize: 13 },
  bigNum: { color: colors.white, fontSize: 30, fontWeight: '800' },
  ringTxt: { position: 'absolute', color: colors.white, fontSize: 17, fontWeight: '800' },
  quickRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
  quickCard: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, padding: 14, height: 84 },
  quickIcon: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  quickTxt: { color: colors.white, fontWeight: '700', fontSize: 13 },
  section: { color: colors.white, fontSize: 16, fontWeight: '800', marginTop: 24, marginBottom: 12 },
  chartCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: colors.surface, borderRadius: radius.lg, padding: 18, height: 170 },
  bar: { width: 22, borderRadius: 8 },
  dayLbl: { color: colors.muted, fontSize: 11, marginTop: 8 },
});
