// src/screens/WorkoutListScreen.js — Antrenman Kütüphanesi
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import { workouts } from '../data/workouts';
import { colors, radius, spacing } from '../theme';

const filters = ['Tümü', 'Kardiyo', 'Güç', 'Yoga'];

export default function WorkoutListScreen({ navigation }) {
  const [active, setActive] = useState('Tümü');

  const renderCard = ({ item }) => (
    <TouchableOpacity style={s.card} onPress={() => navigation.navigate('WorkoutDetail', { workout: item })}>
      <View style={[s.iconBox, { backgroundColor: item.color + '2E' }]}>
        <Icon name={item.icon} size={30} color={item.color} sw={2.4} />
      </View>
      <View style={{ flex: 1, marginLeft: 14 }}>
        <Text style={s.cardTitle}>{item.title}</Text>
        <Text style={s.cardMeta}>{item.meta}</Text>
        <View style={[s.levelPill, { backgroundColor: item.color + '33' }]}>
          <Text style={[s.levelTxt, { color: item.color }]}>{item.level}</Text>
        </View>
      </View>
      <View style={s.playBtn}><Icon name="play" size={14} color={colors.dark} /></View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={s.safe}>
      <View style={{ paddingHorizontal: spacing.lg }}>
        <Text style={s.h1}>Antrenmanlar</Text>
        <View style={s.search}>
          <Icon name="search" size={16} color={colors.muted} sw={2} />
          <TextInput placeholder="Antrenman ara…" placeholderTextColor={colors.muted} style={s.searchInput} />
        </View>
        <View style={s.chipRow}>
          {filters.map((f) => (
            <TouchableOpacity key={f} onPress={() => setActive(f)}
              style={[s.chip, { backgroundColor: active === f ? colors.lime : colors.surface2 }]}>
              <Text style={[s.chipTxt, { color: active === f ? colors.dark : colors.muted }]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        data={workouts}
        keyExtractor={(i) => i.id}
        renderItem={renderCard}
        contentContainerStyle={{ padding: spacing.lg, paddingTop: 4 }}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  h1: { color: colors.white, fontSize: 24, fontWeight: '800', marginTop: 8 },
  search: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.sm, paddingHorizontal: 16, height: 44, marginTop: 14, gap: 10 },
  searchInput: { flex: 1, color: colors.white, fontSize: 14 },
  chipRow: { flexDirection: 'row', gap: 10, marginTop: 16, marginBottom: 8 },
  chip: { paddingHorizontal: 16, height: 32, borderRadius: 16, justifyContent: 'center' },
  chipTxt: { fontSize: 12, fontWeight: '700' },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.lg, padding: 16, marginBottom: 12 },
  iconBox: { width: 64, height: 64, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  cardTitle: { color: colors.white, fontSize: 15, fontWeight: '800' },
  cardMeta: { color: colors.muted, fontSize: 12, marginTop: 4 },
  levelPill: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, marginTop: 6 },
  levelTxt: { fontSize: 10, fontWeight: '700' },
  playBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' },
});
