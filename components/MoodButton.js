const MoodButton = ({ name, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-4 py-1 mr-2 text-black uppercase focus:outline-none ${
        isSelected ? 'bg-primary' : 'bg-grey-light'
      }`}
    >
      {name}
    </button>
  );
};

export default MoodButton;
