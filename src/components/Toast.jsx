import { useEffect } from 'react';
import Icon from './Icon.jsx';

function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const timeout = window.setTimeout(onClose, 4200);
    return () => window.clearTimeout(timeout);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <p>{message}</p>
      <button type="button" onClick={onClose} aria-label="Cerrar notificación">
        <Icon name="close" />
      </button>
    </div>
  );
}

export default Toast;
