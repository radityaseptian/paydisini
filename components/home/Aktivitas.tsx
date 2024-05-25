import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Image } from 'react-native'
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg'

export function Aktivitas() {
  return (
    <ThemedView style={styles.container}>
      <Svg width='20' height='20' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <G clip-path='url(#clip0_11_459)'>
          <Path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7.70581 0.29C7.48381 0.362 7.35581 0.49 7.29381 0.699C7.25881 0.816 7.25281 1.088 7.25281 2.508C7.25281 4.389 7.25081 4.365 7.44281 4.557C7.69981 4.813 8.29981 4.813 8.55681 4.557C8.74881 4.365 8.74681 4.389 8.74681 2.508C8.74681 0.688 8.74381 0.656 8.59581 0.48C8.47181 0.333 8.33881 0.284 8.03981 0.276C7.92829 0.269714 7.81642 0.274404 7.70581 0.29ZM2.75281 2.266C2.59481 2.338 2.36181 2.566 2.28081 2.728C2.23949 2.80898 2.21696 2.89824 2.21488 2.98913C2.2128 3.08002 2.23124 3.17021 2.26881 3.253C2.34281 3.418 4.66681 5.75 4.84981 5.843C5.10881 5.976 5.37481 5.911 5.64281 5.649C5.90681 5.391 5.97681 5.111 5.84281 4.85C5.74981 4.667 3.41781 2.343 3.25281 2.269C3.17397 2.23486 3.08904 2.21699 3.00312 2.21648C2.9172 2.21596 2.83206 2.23281 2.75281 2.266ZM12.8528 2.282C12.7298 2.339 12.5198 2.536 11.5178 3.541C10.5968 4.464 10.3158 4.762 10.2708 4.86C10.2334 4.94125 10.2141 5.02967 10.2143 5.11911C10.2145 5.20855 10.2341 5.29689 10.2718 5.378C10.3418 5.528 10.5718 5.764 10.7268 5.845C10.8838 5.927 11.1168 5.926 11.2798 5.843C11.4468 5.757 13.7568 3.447 13.8428 3.28C13.8838 3.19402 13.9053 3.10007 13.9058 3.00483C13.9063 2.9096 13.8858 2.81542 13.8458 2.729C13.7351 2.54393 13.5788 2.39037 13.3918 2.283C13.3091 2.23829 13.2165 2.2148 13.1224 2.21463C13.0284 2.21445 12.9357 2.2376 12.8528 2.282ZM0.698813 7.292C0.403813 7.385 0.257812 7.62 0.257812 7.999C0.258813 8.386 0.402813 8.618 0.697813 8.706C0.815813 8.741 1.07881 8.747 2.50781 8.747C3.99681 8.747 4.19581 8.742 4.31781 8.702C4.40743 8.67255 4.48887 8.62246 4.55557 8.55576C4.62227 8.48906 4.67237 8.40762 4.70181 8.318C4.78781 8.053 4.74481 7.677 4.60781 7.491C4.5529 7.4313 4.48833 7.38127 4.41681 7.343L4.27981 7.267L2.54681 7.261C1.15181 7.257 0.790812 7.263 0.698813 7.292ZM11.7448 7.278C11.6096 7.31525 11.4874 7.38934 11.3918 7.492C11.2548 7.677 11.2118 8.053 11.2978 8.318C11.3558 8.498 11.5018 8.644 11.6818 8.702C11.8038 8.742 12.0028 8.747 13.4918 8.747C14.9208 8.747 15.1838 8.741 15.3018 8.706C15.5968 8.618 15.7408 8.386 15.7418 7.999C15.7418 7.614 15.5948 7.383 15.2898 7.291C15.1868 7.26 14.8638 7.254 13.4958 7.256C12.5778 7.258 11.7898 7.268 11.7448 7.278ZM4.85281 10.282C4.72981 10.339 4.51981 10.536 3.51781 11.541C2.59681 12.464 2.31581 12.762 2.27081 12.86C2.23342 12.9413 2.21415 13.0297 2.21432 13.1191C2.21449 13.2086 2.23411 13.2969 2.27181 13.378C2.34181 13.528 2.57181 13.764 2.72681 13.845C2.88381 13.927 3.11681 13.926 3.27981 13.843C3.44681 13.757 5.75681 11.447 5.84281 11.28C5.88377 11.194 5.90528 11.1001 5.9058 11.0048C5.90631 10.9096 5.88583 10.8154 5.84581 10.729C5.73514 10.5439 5.57882 10.3904 5.39181 10.283C5.30905 10.2383 5.2165 10.2148 5.12244 10.2146C5.02838 10.2145 4.93574 10.2376 4.85281 10.282ZM10.7528 10.266C10.5948 10.338 10.3618 10.566 10.2808 10.728C10.2395 10.809 10.217 10.8982 10.2149 10.9891C10.2128 11.08 10.2312 11.1702 10.2688 11.253C10.3428 11.418 12.6668 13.75 12.8498 13.843C13.1088 13.976 13.3748 13.911 13.6428 13.649C13.9068 13.391 13.9768 13.111 13.8428 12.85C13.7498 12.667 11.4178 10.343 11.2528 10.269C11.174 10.2349 11.089 10.217 11.0031 10.2165C10.9172 10.216 10.8321 10.2328 10.7528 10.266ZM7.74481 11.277C7.60971 11.3151 7.48762 11.3894 7.39181 11.492C7.25381 11.678 7.25281 11.691 7.25281 13.489C7.25281 14.921 7.25881 15.184 7.29381 15.302C7.38181 15.597 7.61481 15.741 7.99981 15.741C8.38481 15.741 8.61781 15.597 8.70581 15.302C8.76781 15.09 8.76681 11.875 8.70381 11.69C8.68445 11.6154 8.64899 11.546 8.59993 11.4865C8.55086 11.4271 8.48939 11.3791 8.41981 11.346C8.30981 11.286 8.24581 11.271 8.05681 11.264C7.95264 11.2577 7.8481 11.2621 7.74481 11.277Z'
            fill='#35ACFD'
          />
        </G>
        <Defs>
          <ClipPath id='clip0_11_459'>
            <Rect width='16' height='16' fill='white' />
          </ClipPath>
        </Defs>
      </Svg>
      <ThemedView>
        <ThemedText style={styles.title}>Aktivasi Merchant dalam Proses</ThemedText>
        <ThemedText style={styles.desc}>Permintaan aktivasi merchant anda sedang kami proses, mohon tunggu.</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E8F6FF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderColor: '#35ACFD',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    color: 'black',
    fontSize: 8,
  },
  desc: {
    color: '#616161',
    fontSize: 7,
  },
})
