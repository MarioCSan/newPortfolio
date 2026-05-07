import { certificates } from '../data/certificates'
import { Carousel } from './Carousel'
import { CertificateCard } from './CertificateCard'
import styles from './CertificatesSection.module.css'

export function CertificatesSection() {
  const certificateItems = certificates.map((cert) => (
    <CertificateCard key={cert.id} certificate={cert} />
  ))

  return (
    <section id="certificates" className={`section ${styles.certs}`}>
      <div className="container">
        <h2>Certifications</h2>
        <p className={styles.description}>
          Industry-recognized certifications validating technical expertise across cloud platforms and DevOps.
        </p>

        <Carousel items={certificateItems} itemsPerView={3} autoScroll={true} />
      </div>
    </section>
  )
}
