import { Container } from '@/components/Container'
import { Header } from '@/components/home/Header'
import { InformasiSaldo } from '@/components/InformasiSaldo'
import { Aktivitas } from '@/components/home/Aktivitas'
import { RiwayatSaldo } from '@/components/RiwayatSaldo'
import { PusatBantuan } from '@/components/home/PusatBantuan'

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <InformasiSaldo />
      <Aktivitas />
      <RiwayatSaldo />
      <PusatBantuan />
    </Container>
  )
}
