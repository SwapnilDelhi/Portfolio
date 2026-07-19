import './ImagePlaceholder.css';

/**
 * Drop-in placeholder for photos that haven't been supplied yet.
 * Replace usage with a real <img src="/images/your-photo.jpg" /> once available.
 */
export default function ImagePlaceholder({ label = 'Image', ratio = '4 / 3', className = '' }) {
  return (
    <div className={`img-placeholder ${className}`} style={{ aspectRatio: ratio }}>
      <span>{label}</span>
    </div>
  );
}
