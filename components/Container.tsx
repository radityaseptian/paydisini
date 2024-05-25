import { PropsWithChildren } from 'react'

import { StyleSheet, Dimensions } from 'react-native'
import { ThemedView } from '@/components/ThemedView'

export function Container({ children }: PropsWithChildren) {
  const minHeight = Dimensions.get('window').height
  return <ThemedView style={[styles.container, { minHeight }]}>{children}</ThemedView>
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
})
