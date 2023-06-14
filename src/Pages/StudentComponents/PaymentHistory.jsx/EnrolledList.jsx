const EnrolledList = ({ payment }) => {
  return (
    <div className="flex gap-3">
      {payment.itemName.map((item) => (
        <p className="btn btn-outline" key={payment}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default EnrolledList;
