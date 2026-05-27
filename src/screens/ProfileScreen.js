// src/screens/ProfileScreen.js — Profil
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import { colors, radius, spacing } from '../theme';

const ms = [{ v: '172', l: 'cm' }, { v: '68', l: 'kg' }, { v: '24', l: 'yaş' }];
const items = [
  { ic: 'chart', t: 'Hedeflerim', c: colors.lime },
  { ic: 'heart', t: 'Bildirimler', c: colors.coral },
  { ic: 'home', t: 'Ayarlar', c: colors.blue },
  { ic: 'user', t: 'Gizlilik', c: colors.purple },
  { ic: 'search', t: 'Yardım & Destek', c: colors.muted },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 40 }}>
        <Text style={s.h1}>Profil</Text>
        <View style={s.userCard}>
          <View style={s.avatar}><Text style={s.avatarTxt}>Y</Text></View>
          <View style={{ marginLeft: 16, flex: 1 }}>
            <Text style={s.name}>Yiğit Erkan</Text>
            <Text style={s.email}>yigiterkan321@gmail.com</Text>
            <View style={s.proBadge}><Text style={s.proTxt}>PRO ÜYE</Text></View>
          </View>
        </View>

        <View style={s.msRow}>
          {ms.map((x, i) => (
            <View key={i} style={s.msCard}>
              <Text style={s.msVal}>{x.v}</Text>
              <Text style={s.msLbl}>{x.l}</Text>
            </View>
          ))}
        </View>

        {items.map((it, i) => (
          <TouchableOpacity key={i} style={s.row}>
            <View style={[s.rowIcon, { backgroundColor: it.c + '2E' }]}>
              <Icon name={it.ic} size={15} color={it.c} sw={1.9} />
            </View>
            <Text style={s.rowTxt}>{it.t}</Text>
            <Text style={s.chevron}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  h1: { color: colors.white, fontSize: 24, fontWeight: '800', marginTop: 8 },
  userCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.lg, padding: 18, marginTop: 16 },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' },
  avatarTxt: { color: colors.dark, fontSize: 30, fontWeight: '800' },
  name: { color: colors.white, fontSize: 18, fontWeight: '800' },
  email: { color: colors.muted, fontSize: 12, marginTop: 4 },
  proBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(200,255,61,0.18)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 11, marginTop: 8 },
  proTxt: { color: colors.lime, fontSize: 10, fontWeight: '700' },
  msRow: { flexDirection: 'row', gap: 10, marginTop: 16, marginBottom: 8 },
  msCard: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: 14, alignItems: 'center' },
  msVal: { color: colors.white, fontSize: 18, fontWeight: '800' },
  msLbl: { color: colors.muted, fontSize: 10, marginTop: 2 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.md, padding: 14, marginTop: 12 },
  rowIcon: { width: 30, height: 30, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  rowTxt: { color: colors.white, fontSize: 14, fontWeight: '600', marginLeft: 14, flex: 1 },
  chevron: { color: colors.muted, fontSize: 20 },
});
