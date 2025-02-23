import styles from './Card.module.css';
import Image from 'next/image';
interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
  imageSrc?: string;
}

export const Card = ({
  title,
  description,
  onClick,
  imageSrc,
}: CardProps) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.imageContainer}>
        {imageSrc && (
          <Image
            className={styles.image}
            src={imageSrc}
            alt={title}
            fill
            objectFit="contain"
            priority
          />
        )}
      </div>
    </div>
  );
};
