export default function Header({ toggleTheme }: { toggleTheme: Function }) {
  return (
    <div className="h-10 bg-blue-400 w-full flex justify-center items-center">
      <button
        className="border-2 border-gray-200 rounded"
        onClick={() => {
          toggleTheme();
        }}
      >
        Toogle Theme
      </button>
    </div>
  );
}
