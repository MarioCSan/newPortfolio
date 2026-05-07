import { certificates } from '../data/certificates'
import styles from './CertificatesSection.module.css'

export function CertificatesSection() {
  return (
    <section id="certificates" className={`section ${styles.certs}`}>
      <div className="container">
        <h2>Certifications</h2>
        <p className={styles.description}>
          Industry-recognized certifications validating technical expertise across cloud platforms and DevOps.
        </p>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <article key={cert.id} className={styles.card}>
              {cert.image && (
                <div className={styles.imageWrapper}>
                  <img src={cert.image} alt={cert.name} className={styles.image} />
                </div>
              )}

              <div className={styles.content}>
                <h4>{cert.name}</h4>
                <p className={styles.issuer}>{cert.issuer}</p>

                <div className={styles.dates}>
                  <span className={styles.date}>
                    Issued: <strong>{cert.issueDate}</strong>
                  </span>
                  {cert.expiryDate && (
                    <span className={styles.date}>
                      Expires: <strong>{cert.expiryDate}</strong>
                    </span>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
