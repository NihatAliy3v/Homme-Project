export const Input = ({ type, name, onChange }) => {
  return (
    <div className="input-container">
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
};
