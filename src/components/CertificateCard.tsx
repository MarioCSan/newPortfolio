import { Certificate } from '../data/certificates'
import { useTranslation } from '../hooks/useTranslation'
import styles from './CertificateCard.module.css'

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const t = useTranslation()

  return (
    <article className={styles.card}>
      {certificate.image && (
        <div className={styles.imageWrapper}>
          <img src={certificate.image} alt={certificate.name} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        <h4>{certificate.name}</h4>
        <p className={styles.issuer}>{certificate.issuer}</p>

        <div className={styles.dates}>
          <span className={styles.date}>
            {t.certs.issued}: <strong>{certificate.issueDate}</strong>
          </span>
          {certificate.expiryDate && (
            <span className={styles.date}>
              {t.experience.expires}: <strong>{certificate.expiryDate}</strong>
            </span>
          )}
        </div>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.certs.viewCred}
          </a>
        )}
      </div>
    </article>
  )
}
