export const Input = ({ type, name, onChange,placeholder }) => {
  return (
    <div className="input-container">
      <input type={type} name={name} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};
