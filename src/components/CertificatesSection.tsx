import { certificates } from '../data/certificates'
import { Carousel } from './Carousel'
import { CertificateCard } from './CertificateCard'
import { useTranslation } from '../hooks/useTranslation'
import styles from './CertificatesSection.module.css'

export function CertificatesSection() {
  const t = useTranslation()
  const certificateItems = certificates.map((cert) => (
    <CertificateCard key={cert.id} certificate={cert} />
  ))

  return (
    <section id="certificates" className={`section ${styles.certs}`}>
      <div className="container">
        <h2>{t.certs.title}</h2>
        <p className={styles.description}>
          {t.certs.subtitle}
        </p>

        <Carousel items={certificateItems} itemsPerView={3} autoScroll={true} />
      </div>
    </section>
  )
}
