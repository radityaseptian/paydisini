import { StyleSheet, Image } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { Svg, Path } from 'react-native-svg'

export function Header() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/paydisini/logo.png')} style={styles.image} />
      <Svg width='20' height='20' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M11.9383 17C11.9385 17.5046 11.7479 17.9906 11.4048 18.3605C11.0617 18.7305 10.5915 18.9572 10.0883 18.995L9.93832 19H7.93832C7.43375 19.0002 6.94776 18.8096 6.57778 18.4665C6.2078 18.1234 5.98117 17.6532 5.94333 17.15L5.93832 17H11.9383ZM8.93832 9.54067e-10C10.7533 -2.9945e-05 12.4973 0.704894 13.8026 1.96607C15.1078 3.22726 15.8721 4.94609 15.9343 6.76L15.9383 7V10.764L17.7603 14.408C17.8398 14.567 17.8796 14.7429 17.8763 14.9206C17.873 15.0984 17.8266 15.2727 17.7412 15.4286C17.6558 15.5845 17.5338 15.7174 17.3858 15.8158C17.2378 15.9143 17.0681 15.9754 16.8913 15.994L16.7763 16H1.10033C0.922489 16.0001 0.747292 15.957 0.589746 15.8745C0.4322 15.792 0.297004 15.6725 0.195742 15.5264C0.0944803 15.3802 0.0301725 15.2116 0.00832937 15.0351C-0.0135138 14.8586 0.00775918 14.6795 0.0703251 14.513L0.116325 14.408L1.93833 10.764V7C1.93833 5.14348 2.67582 3.36301 3.98858 2.05025C5.30133 0.737498 7.08181 9.54069e-10 8.93832 9.54067e-10Z'
          fill='#35ACFD'
        />
      </Svg>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  image: {
    width: 130,
    height: 31,
  },
})
