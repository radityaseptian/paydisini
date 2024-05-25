import { PropsWithChildren } from 'react'

import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'

export function Select({ children }: PropsWithChildren) {
  return <ThemedView style={styles.containerStyle}>{children}</ThemedView>
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
  },
})
