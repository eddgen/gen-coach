const SimpleIcon = ({ icon, size = 18, className }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

export default SimpleIcon;
