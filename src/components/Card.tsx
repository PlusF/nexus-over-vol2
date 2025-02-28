import Image from 'next/image';

import styles from './Card.module.css';
interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
  imageSrc?: string;
}

export const Card = ({ title, description, onClick, imageSrc }: CardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.imageContainer}>
        {imageSrc && (
          <Image
            fill
            priority
            alt={title}
            className={styles.image}
            objectFit="contain"
            src={imageSrc}
          />
        )}
      </div>
    </div>
  );
};
