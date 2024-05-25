import { Header } from '@/components/withdraw/Header'
import { RiwayatPenarikan } from '@/components/withdraw/RiwayatPenarikan'
import { ButtonTarikSaldo } from '@/components/withdraw/ButtonTarikSaldo'
import { RiwayatSaldo } from '@/components/RiwayatSaldo'
import { InformasiSaldo } from '@/components/InformasiSaldo'
import { Container } from '@/components/Container'

export default function TabTwoScreen() {
  return (
    <Container>
      <Header />

      <InformasiSaldo />
      <RiwayatPenarikan />
      <ButtonTarikSaldo />

      <RiwayatSaldo />
    </Container>
  )
}
