import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from './ThemedText'
import { Image, TouchableOpacity } from 'react-native'

export function InformasiSaldo() {
  return (
    <ThemedView style={styles.container}>
      {/** relative*/}
      <ThemedView>{/* bg */}</ThemedView>
      <ThemedView style={styles.kontak}>
        <ThemedText>paydisini@gmail.com</ThemedText>
        <Image source={require('@/assets/paydisini/profile.png')} />
      </ThemedView>
      <ThemedView style={styles.saldoContainer}>
        <ThemedView style={styles.saldoTitle}>
          <Image />
          <ThemedText>Saldo Tersedia</ThemedText>
        </ThemedView>
        <ThemedText style={styles.saldoAmmount}>Rp. 100.000</ThemedText>
      </ThemedView>
      <TouchableOpacity style={styles.buttonContainer}>
        <ThemedText style={styles.buttonText1}>Tertahan:</ThemedText>
        <ThemedText style={styles.buttonText2}>Rp. 60.000</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#35ACFD',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  kontak: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'space-between',
  },
  saldoContainer: {
    gap: 10,
  },
  saldoTitle: {
    // fontWeight: 'semibold',
  },
  saldoAmmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 2,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#E8F6FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText1: {
    color: '#616161',
  },
  buttonText2: {
    color: 'black',
    fontWeight: '600',
  },
})
