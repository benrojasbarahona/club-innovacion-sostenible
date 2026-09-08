import MentorsNetwork from '../components/MentorsNetwork.jsx';
import { withBase } from '../lib/paths.js';

function MentorsPage({ onSchedule }) {
  return (
    <main id="main-content" className="min-h-screen bg-[#06030f]">
      <div className="section-shell pt-10">
        <a
          href={withBase('#proyectos')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/45 transition-colors hover:text-orange-400"
        >
          <span aria-hidden="true">←</span>
          Volver al sitio principal
        </a>
      </div>
      <MentorsNetwork onSchedule={onSchedule} />
    </main>
  );
}

export default MentorsPage;
