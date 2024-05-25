import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '../ThemedText'

import { Svg, Path } from 'react-native-svg'

export function PusatBantuan() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Pusat Bantuan</ThemedText>
      <ThemedView style={styles.boxContainer}>
        <ThemedView style={styles.box}>
          <ThemedView style={styles.boxTitleContainer}>
            <ThemedText style={styles.boxTitle}>Admin Paydisini</ThemedText>
            <Svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <Path
                d='M11.1975 12C9.9335 12 8.6375 11.6835 7.3095 11.0505C5.9815 10.4175 4.7455 9.52875 3.6015 8.38425C2.4665 7.24025 1.5825 6.0065 0.9495 4.683C0.3165 3.3595 0 2.066 0 0.8025C0 0.5775 0.0750001 0.3875 0.225 0.2325C0.375 0.0775 0.5625 0 0.7875 0H2.64225C2.84625 0 3.02425 0.06425 3.17625 0.19275C3.32825 0.32125 3.431 0.486 3.4845 0.687L3.8565 2.475C3.8915 2.685 3.88525 2.86825 3.83775 3.02475C3.79025 3.18125 3.707 3.3095 3.588 3.4095L1.9425 4.944C2.2505 5.5025 2.59075 6.0215 2.96325 6.501C3.33575 6.9805 3.73325 7.43475 4.15575 7.86375C4.59075 8.29875 5.05925 8.70375 5.56125 9.07875C6.06325 9.45325 6.61425 9.80675 7.21425 10.1392L8.8185 8.5065C8.9405 8.375 9.07775 8.28825 9.23025 8.24625C9.38225 8.20475 9.55075 8.1965 9.73575 8.2215L11.313 8.544C11.517 8.594 11.6825 8.69675 11.8095 8.85225C11.9365 9.00775 12 9.18575 12 9.38625V11.2125C12 11.4375 11.9225 11.625 11.7675 11.775C11.6125 11.925 11.4225 12 11.1975 12Z'
                fill='#1A1A1A'
              />
            </Svg>
          </ThemedView>
          <ThemedText style={styles.boxDesc}>Ketuk jika anda mengalami masalah admin akan membantu anda.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.box}>
          <ThemedView style={styles.boxTitleContainer}>
            <ThemedText style={styles.boxTitle}>FAQ</ThemedText>
            <Svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <Path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.33333 0.75C5.778 0.75 6.222 0.918667 6.66667 1.25667C7.11133 0.918667 7.55533 0.75 8 0.75H12C12.3536 0.75 12.6928 0.890476 12.9428 1.14052C13.1929 1.39057 13.3333 1.72971 13.3333 2.08333V10.75C13.3333 11.1036 13.1929 11.4428 12.9428 11.6928C12.6928 11.9429 12.3536 12.0833 12 12.0833H7.33333C7.33333 12.4513 7.03333 12.75 6.66667 12.75C6.3 12.75 6 12.45 6 12.0833H1.33333C0.979711 12.0833 0.640573 11.9429 0.390524 11.6928C0.140476 11.4428 0 11.1036 0 10.75V2.08333C0 1.72971 0.140476 1.39057 0.390524 1.14052C0.640573 0.890476 0.979711 0.75 1.33333 0.75H5.33333ZM5.33333 2.08333H1.33333V10.75H6V2.75C6 2.38333 5.7 2.08333 5.33333 2.08333ZM12 2.08333H8C7.63333 2.08333 7.33333 2.38333 7.33333 2.75V10.75H12V2.08333Z'
                fill='#1A1A1A'
              />
            </Svg>
          </ThemedView>
          <ThemedText style={styles.boxDesc}>
            Lihat jawaban untuk pertanyaan yang sering ditanyakan pengguna.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    color: '#212121',
    marginBottom: 16,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  box: {
    flex: 1,
    borderColor: '#E6E8EF',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  boxTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 8,
    color: '#212121',
    fontWeight: 500,
  },
  boxTitle: {
    fontSize: 8,
    color: '#212121',
  },
  boxDesc: {
    fontSize: 7,
    color: '#212121',
    flexWrap: 'wrap',
    width: '100%',
    lineHeight: 10.5,
  },
})
