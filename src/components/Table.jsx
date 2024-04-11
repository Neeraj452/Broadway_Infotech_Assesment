import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=10"
    );
    const data = await response.json();
    setData(data.blogs);
  };

  useEffect(() => {
    fetchData();
  }, []);
  function formatTimestamp(timestamp) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
  }
  const AllSelected = () => {
    if (selected.length === data.length) {
      setSelected([]);
      return;
    } else {
      const newData = data.map((item) => item.id);
      setSelected(newData);
    }
  };
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      const newData = selected.filter((item) => item !== id);
      setSelected(newData);
      return;
    }
    setSelected([...selected, id]);
  };
  return (
    <div className="parent  pt-4">
      <div>
        <h1 className="fw-bolder fs-3">Recent Creation</h1>
      </div>

      <div className="d-flex justify-content-between w-100 mb-2">
        <div className="w-20"></div>
        <div className="filter d-flex justify-content-between align-items-center">
          <label for="exampleDataList" className="w-50">
            SORT BY
          </label>
          <select
            className="form-select w-60"
            aria-label=".form-select-sm example"
          >
            <option selected>This week</option>
          </select>
        </div>
      </div>
      <table class="table">
        <thead className="custom-bg">
          <tr>
            <th className="col-1">
              <input
                type="checkbox"
                onChange={() => AllSelected()}
                className="form-check-input"
              />
            </th>
            <th className="col-3">Cotegory</th>
            <th className="col-5">Title</th>
            <th className="col-2">Date</th>
            <th className="col-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selected.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </th>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{formatTimestamp(item.updated_at)}</td>
                <td className="text-center">
                  <i class="ri-more-2-fill"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
