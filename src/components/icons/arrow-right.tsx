interface ArrowRightProps {
  className?: string;
}

const ArrowRight = ({ className }: ArrowRightProps) => {
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 11.0824L4.30196 6.67606L0 2.2601L1.3244 0.903564L6.96016 6.67606L1.3244 12.4486L0 11.0824Z" />
    </svg>
  );
};

export default ArrowRight;
