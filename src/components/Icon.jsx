const paths = {
  formation: (
    <>
      <path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z" />
      <path d="M7 10v4.5c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5V10" />
    </>
  ),
  projects: (
    <>
      <path d="M6 6h12v12H6z" />
      <path d="M9 9h6v6H9z" />
      <path d="M4 10H2M4 14H2M22 10h-2M22 14h-2M10 4V2M14 4V2M10 22v-2M14 22v-2" />
    </>
  ),
  network: (
    <>
      <path d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
      <path d="M4.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
  sustainable: (
    <>
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
      <path d="M5 19c2-5 6-9 14-14" />
    </>
  ),
  venture: (
    <>
      <path d="M12 3c3 2 5 5 5 8 0 4-2 7-5 10-3-3-5-6-5-10 0-3 2-6 5-8Z" />
      <path d="M12 10h.01" />
      <path d="M8 19 5 22M16 19l3 3" />
    </>
  ),
  workshop: (
    <>
      <path d="M7 3v3M17 3v3M4 8h16M5 6h14v14H5z" />
      <path d="M8 12h3v3H8zM14 12h2M14 16h2" />
    </>
  ),
  arrowLeft: <path d="m15 18-6-6 6-6" />,
  arrowRight: <path d="m9 18 6-6-6-6" />,
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
};

function Icon({ name, className = '', title }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

export default Icon;
