type Props = {
  title: string;
  children: React.ReactNode;
};

export default function RegularMenu({ title, children }: Props) {
  return (
    <>
      <div className="" style={{ width: "190px" }}>
        <h2 className="text-lg">
          <span className="text-left">{title}</span>
        </h2>
        {/* expander */}

        <div className={`lg:display-none overflow-hidden `}>{children}</div>
      </div>
    </>
  );
}
