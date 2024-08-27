const Title = ({ titleFirstHalf, titleSecondHalf }) => {
  return (
    <div className="section-title">
      <h2>
        {titleFirstHalf} <span>{titleSecondHalf}</span>
      </h2>
    </div>
  );
};
export default Title;
