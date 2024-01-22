import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Timeline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_EP, {
          headers: {
            code: import.meta.env.VITE_APP_PASS,
          },
        });
        setData(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 && (
        <ul className="timeline timeline-vertical">
          {data.map((item, i) => (
            <li key={i}>
              <div
                className={`timeline-${
                  item.type === "💚 IN" ? "start" : "end"
                } timeline-box`}
              >
                {`${item.date} ${item.type === "💚 IN" ? "💚" : "❤️"}`}
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
      {data.length <= 0 && (
        <div className="w-full grow flex justify-center items-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Timeline;
