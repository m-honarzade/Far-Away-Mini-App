const PackItems = ({ item }) => {
  return (
    <li>
      <span>
        {item.description} {item.quantity}
      </span>
    </li>
  );
};

export default PackItems;
