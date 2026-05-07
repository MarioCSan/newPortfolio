import { Certificate } from '../data/certificates'
import styles from './CertificateCard.module.css'

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
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
            Issued: <strong>{certificate.issueDate}</strong>
          </span>
          {certificate.expiryDate && (
            <span className={styles.date}>
              Expires: <strong>{certificate.expiryDate}</strong>
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
            View Credential →
          </a>
        )}
      </div>
    </article>
  )
}
