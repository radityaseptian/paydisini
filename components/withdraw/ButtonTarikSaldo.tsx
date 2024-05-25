import { StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { Svg, Path } from 'react-native-svg'
import { TouchableOpacity } from 'react-native'

export function ButtonTarikSaldo() {
  return (
    <TouchableOpacity style={styles.button}>
      <Svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M8.8 8C8.32533 8 7.86131 8.14076 7.46663 8.40447C7.07195 8.66819 6.76434 9.04302 6.58269 9.48156C6.40104 9.9201 6.35351 10.4027 6.44612 10.8682C6.53872 11.3338 6.7673 11.7614 7.10294 12.0971C7.43859 12.4327 7.86623 12.6613 8.33178 12.7539C8.79734 12.8465 9.2799 12.799 9.71844 12.6173C10.157 12.4357 10.5318 12.128 10.7955 11.7334C11.0592 11.3387 11.2 10.8747 11.2 10.4C11.2 9.76348 10.9471 9.15303 10.4971 8.70294C10.047 8.25286 9.43652 8 8.8 8ZM8.8 11.2C8.64178 11.2 8.4871 11.1531 8.35554 11.0652C8.22398 10.9773 8.12145 10.8523 8.0609 10.7061C8.00035 10.56 7.9845 10.3991 8.01537 10.2439C8.04624 10.0887 8.12243 9.9462 8.23431 9.83432C8.3462 9.72243 8.48874 9.64624 8.64393 9.61537C8.79911 9.5845 8.95997 9.60035 9.10615 9.6609C9.25233 9.72145 9.37727 9.82398 9.46518 9.95554C9.55308 10.0871 9.6 10.2418 9.6 10.4C9.6 10.6122 9.51571 10.8157 9.36569 10.9657C9.21566 11.1157 9.01217 11.2 8.8 11.2ZM8.232 6.168C8.30808 6.24083 8.3978 6.29792 8.496 6.336C8.59176 6.37832 8.6953 6.40019 8.8 6.40019C8.9047 6.40019 9.00824 6.37832 9.104 6.336C9.2022 6.29792 9.29192 6.24083 9.368 6.168L11.2 4.368C11.3549 4.21311 11.4419 4.00304 11.4419 3.784C11.4419 3.56496 11.3549 3.35489 11.2 3.2C11.0451 3.04511 10.835 2.9581 10.616 2.9581C10.397 2.9581 10.1869 3.04511 10.032 3.2L9.6 3.672V0.8C9.6 0.587827 9.51571 0.384344 9.36569 0.234315C9.21566 0.0842854 9.01217 0 8.8 0C8.58783 0 8.38434 0.0842854 8.23431 0.234315C8.08429 0.384344 8 0.587827 8 0.8V3.672L7.568 3.2C7.41311 3.04511 7.20304 2.9581 6.984 2.9581C6.76496 2.9581 6.55489 3.04511 6.4 3.2C6.24511 3.35489 6.1581 3.56496 6.1581 3.784C6.1581 4.00304 6.24511 4.21311 6.4 4.368L8.232 6.168ZM14.4 10.4C14.4 10.2418 14.3531 10.0871 14.2652 9.95554C14.1773 9.82398 14.0523 9.72145 13.9061 9.6609C13.76 9.60035 13.5991 9.5845 13.4439 9.61537C13.2887 9.64624 13.1462 9.72243 13.0343 9.83432C12.9224 9.9462 12.8462 10.0887 12.8154 10.2439C12.7845 10.3991 12.8003 10.56 12.8609 10.7061C12.9214 10.8523 13.024 10.9773 13.1555 11.0652C13.2871 11.1531 13.4418 11.2 13.6 11.2C13.8122 11.2 14.0157 11.1157 14.1657 10.9657C14.3157 10.8157 14.4 10.6122 14.4 10.4ZM15.2 4.8H12.8C12.5878 4.8 12.3843 4.88429 12.2343 5.03431C12.0843 5.18434 12 5.38783 12 5.6C12 5.81217 12.0843 6.01566 12.2343 6.16569C12.3843 6.31571 12.5878 6.4 12.8 6.4H15.2C15.4122 6.4 15.6157 6.48429 15.7657 6.63432C15.9157 6.78434 16 6.98783 16 7.2V13.6C16 13.8122 15.9157 14.0157 15.7657 14.1657C15.6157 14.3157 15.4122 14.4 15.2 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V7.2C1.6 6.98783 1.68429 6.78434 1.83431 6.63432C1.98434 6.48429 2.18783 6.4 2.4 6.4H4.8C5.01217 6.4 5.21566 6.31571 5.36569 6.16569C5.51571 6.01566 5.6 5.81217 5.6 5.6C5.6 5.38783 5.51571 5.18434 5.36569 5.03431C5.21566 4.88429 5.01217 4.8 4.8 4.8H2.4C1.76348 4.8 1.15303 5.05286 0.702944 5.50294C0.252856 5.95303 0 6.56348 0 7.2V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H15.2C15.8365 16 16.447 15.7471 16.8971 15.2971C17.3471 14.847 17.6 14.2365 17.6 13.6V7.2C17.6 6.56348 17.3471 5.95303 16.8971 5.50294C16.447 5.05286 15.8365 4.8 15.2 4.8ZM3.2 10.4C3.2 10.5582 3.24692 10.7129 3.33482 10.8445C3.42273 10.976 3.54767 11.0786 3.69385 11.1391C3.84003 11.1997 4.00089 11.2155 4.15607 11.1846C4.31126 11.1538 4.4538 11.0776 4.56569 10.9657C4.67757 10.8538 4.75376 10.7113 4.78463 10.5561C4.8155 10.4009 4.79965 10.24 4.7391 10.0939C4.67855 9.94767 4.57602 9.82273 4.44446 9.73482C4.3129 9.64692 4.15823 9.6 4 9.6C3.78783 9.6 3.58434 9.68429 3.43431 9.83432C3.28429 9.98434 3.2 10.1878 3.2 10.4Z'
          fill='#35ACFD'
        />
      </Svg>

      <ThemedText style={styles.text}>Tarik Saldo</ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#35ACFD',
    borderRadius: 100,
    marginTop: 10,
  },
  text: {
    color: '#35ACFD',
    fontWeight: '500',
    fontSize: 10,
  },
})
