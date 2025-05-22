function Grass({ grassArr }) {
  return (
    <div>
      {grassArr.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
}

export default Grass;
