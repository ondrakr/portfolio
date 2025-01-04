interface ButtonProps {
  content?: string;
  icon?: React.ReactNode;
  color: boolean;
  onClick?: () => void; // Přidání prop pro onClick
}

export default function Button({ content, icon, color, onClick }: ButtonProps) {
  return (
    <div
      className="flex items-center justify-center border border-10 rounded-2xl px-8 md:px-12 py-4 md:py-5 gap-2 cursor-pointer w-fit button-style"
      onClick={onClick} // Použití onClick při kliknutí na tlačítko
    >
      <p
        className={`text-center text-md sm:text-xl font-semibold ${
          color ? 'text-white' : 'text-fialova'
        } tracking-wide mr-2`}
      >
        {content}
      </p>
      {icon}
    </div>
  );
}
