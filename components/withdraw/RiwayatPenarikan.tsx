import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

import { Image } from 'react-native'

export function RiwayatPenarikan() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Riwayat Penarikan</ThemedText>
      <ThemedView style={styles.boxContainer}>
        <ThemedView style={styles.box}>
          <ThemedView style={styles.bankLogoContainer}>
            <Image source={require('@/assets/paydisini/bca.png')} style={styles.bankLogo} />
          </ThemedView>
          <ThemedText style={styles.from}>Rizaludin</ThemedText>
          <ThemedText style={styles.bank}>BCA - 70707099</ThemedText>
        </ThemedView>
        <ThemedView style={styles.box}>
          <ThemedView style={styles.bankLogoContainer}>
            <Image source={require('@/assets/paydisini/bci.png')} style={styles.bankLogo} />
          </ThemedView>
          <ThemedText style={styles.from}>Rizaludin</ThemedText>
          <ThemedText style={styles.bank}>BCA - 70707099</ThemedText>
        </ThemedView>
        <ThemedView style={styles.box}>
          <ThemedView style={styles.bankLogoContainer}>
            <Image source={require('@/assets/paydisini/dana.png')} style={styles.bankLogo} />
          </ThemedView>
          <ThemedText style={styles.from} numberOfLines={1}>
            Rizaludin
          </ThemedText>
          <ThemedText style={styles.bank}>BCA - 70707099</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const base = '#212121'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  title: {
    fontWeight: 700,
    fontSize: 10,
    color: base,
  },
  boxContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  box: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E6E8EF',
    flex: 1,
  },
  from: {
    color: base,
    fontSize: 8,
    fontWeight: '700',
    width: '100%',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  bank: {
    color: base,
    fontSize: 7,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 10.5,
  },
  bankLogo: {},
  bankLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    flex: 1,
  },
})
