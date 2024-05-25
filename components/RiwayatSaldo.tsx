import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from './ThemedText'
import { TouchableOpacity } from 'react-native'
import { Svg, Path } from 'react-native-svg'

export function RiwayatSaldo() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Riwayat Saldo</ThemedText>
      <ThemedView style={styles.containerBox}>
        <TouchableOpacity style={styles.box}>
          <Svg width='18' height='18' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <Path
              d='M1.95455 0C1.55455 0 1.21212 0.142424 0.927273 0.427272C0.642424 0.71212 0.5 1.05455 0.5 1.45455V9.45455C0.5 9.85455 0.642424 10.197 0.927273 10.4818C1.21212 10.7667 1.55455 10.9091 1.95455 10.9091H4.13636V9.45455H1.95455V1.45455H10.6818V9.45455H8.5V10.9091H10.6818C11.0818 10.9091 11.4242 10.7667 11.7091 10.4818C11.9939 10.197 12.1364 9.85455 12.1364 9.45455V1.45455C12.1364 1.05455 11.9939 0.71212 11.7091 0.427272C11.4242 0.142424 11.0818 0 10.6818 0H1.95455ZM5.59091 5.09091V13.2182L4.42727 12.0545L3.40909 13.0909L6.31818 16L9.22727 13.0909L8.20909 12.0545L7.04545 13.2182V5.09091H5.59091Z'
              fill='#4CAF50'
            />
          </Svg>
          <ThemedView style={styles.ammountContainer}>
            <ThemedView>
              <ThemedText style={styles.status}>Saldo Masuk</ThemedText>
              <ThemedText style={styles.bank}>BNI - 90909090</ThemedText>
            </ThemedView>
            <ThemedView>
              <ThemedText style={styles.ammuont}>Rp. 100.000</ThemedText>
              <ThemedText style={styles.date}>10 Mei 2024, 20:54</ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 12,
    color: '#212121',
    fontWeight: '500',
    marginBottom: 6,
  },
  containerBox: {
    gap: 5,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8FC',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 15,
  },
  ammountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    color: '#35ACFD',
    fontSize: 10,
    fontWeight: '700',
  },
  bank: {
    color: '#212121',
    fontSize: 8,
  },
  ammuont: {
    color: '#212121',
    fontSize: 10,
    fontWeight: '500',
  },
  date: {
    color: '#212121',
    fontSize: 7,
  },
})
